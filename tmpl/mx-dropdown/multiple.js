/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let $ = require('$');
let Monitor = require('../mx-monitor/index');
Magix.applyStyle('@multiple.less');
module.exports = Magix.View.extend({
    tmpl: '@multiple.html',
    init(extra) {
        let me = this;
        Monitor.setup();
        me.on('destroy', Monitor.teardown);
        extra.viewId = me.id;
        extra.inArray = $.inArray;
        me.updater.set(extra);
    },
    inside(node) {
        let me = this;
        return Magix.inside(node, me.id);
    },
    render() {
        let me = this;
        let node = $('#' + me.id);
        me.$oNode = node;
        let updater = me.updater;
        let data = updater.get();
        node.addClass('@multiple.less:dropdown');
        if (!data.list) {
            let list = [];
            let group;
            node.children().each((idx, item) => {
                item = $(item);
                group = item.attr('group') == 'true';
                list.push({
                    group,
                    text: item.text(),
                    value: group ? Magix.guid() : item.attr('value')
                });
            });
            me.updater.set({
                textKey: 'text',
                valueKey: 'value',
                list
            });
        }
        if (data.disabled) {
            node.addClass('@multiple.less:notallowed');
        }
        me.updateList(data.list);
        me.updateSelected(data.selected);
    },
    hide(ignoreBak) {
        let me = this;
        if (me.$oNode.hasClass('@multiple.less:open')) {
            let data = this.updater.get();
            if (Magix.has(data, 'bakSelected')) {
                let fired = ignoreBak && data.selected !== data.bakSelected;
                if (ignoreBak) {
                    me.updateSelected(data.selected);
                } else {
                    me.updateSelected(data.bakSelected);
                }
                if (fired) {
                    me.$oNode.val(data.selected).trigger('change');
                }
                delete data.bakSelected;
            }
            me.$oNode.removeClass('@multiple.less:open').trigger('focusout');
            Monitor.remove(me);
        }
    },
    show() {
        let me = this;
        if (!me.$oNode.hasClass('@multiple.less:open')) {
            let data = me.updater.get();
            if (!data.rList) {
                me.updater.digest({
                    rList: true
                });
            }
            me.$oNode.addClass('@multiple.less:open').trigger('focusin');
            let listNode = $('#list_' + me.id);
            let active = listNode.find('.@multiple.less:active');
            let pos = active.position();
            if (pos) {
                let height = listNode.height();
                let stop = listNode.prop('scrollTop');
                if (pos.top < 0 || pos.top > height) {
                    let top = pos.top - height + stop + height / 2;
                    listNode.prop('scrollTop', top);
                }
            }
            Monitor.add(me);
        }
    },
    getText(keys, textKey) {
        let me = this;
        let map = me.$map;
        let text = [];
        for (let key of keys) {
            let entity = map[key] || {};
            if (textKey) {
                text.push(entity[textKey]);
            } else {
                text.push(entity);
            }
        }
        return text;
    },
    updateSelected(selected) {
        let me = this;
        selected = selected || '';
        selected += '';
        let updater = me.updater;
        let data = updater.get();
        let textKey = data.textKey || '';
        let valueKey = data.valueKey || '';
        let parts = selected.split(',');
        let selectedText = '';
        let list = data.list;
        if (parts.length) {
            selectedText = me.getText(parts, textKey);
        } else {
            selected = list[0];
            selectedText = list[0];
            if (textKey && valueKey) {
                selected = selected[valueKey];
                selectedText = selected[textKey];
            }
        }
        updater.digest({
            selected,
            selectedText: selectedText
        });
        me.$oNode.val(selected);
    },
    updateList(list) {
        let me = this;
        let updater = me.updater;
        let data = updater.get();
        list = (list || []).slice();
        let textKey = data.textKey || '';
        let valueKey = data.valueKey || '';
        if (data.defaultText) {
            if (textKey && valueKey) {
                let temp = {};
                temp[textKey] = data.defaultText;
                temp[valueKey] = '';
                list.unshift(temp);
            } else {
                list.unshift(data.defaultText);
            }
        }
        let map = Magix.toMap(list, valueKey);
        me.$list = list;
        me.$map = map;
        updater.set({
            list
        });
    },
    search(val, callback) {
        let me = this;
        clearTimeout(me.$goTimer);
        let srcList = me.$list;
        let data = me.updater.get();
        let newList = [];
        let index = 0;
        let max = srcList.length;
        let textKey = data.textKey;
        let valueKey = data.valueKey;
        if (!val) {
            callback(srcList);
            return;
        }
        let go = () => {
            if (index < max) {
                let end = Math.min(index + 400, max);
                for (let i = index, li, text, value; i < end; i++) {
                    li = srcList[i];
                    text = li;
                    value = li;
                    if (textKey && valueKey) {
                        text = li[textKey];
                        value = li[valueKey];
                    }
                    if ((text + '').indexOf(val) >= 0 || (value + '').indexOf(val) >= 0) {
                        newList.push(li);
                    }
                }
                index = end;
                me.$goTimer = setTimeout(me.wrapAsync(go), 20);
            } else {
                callback(newList);
            }
        };
        go();
    },
    'toggle<click>' () {
        let me = this;
        let node = me.$oNode;
        if (node.hasClass('@multiple.less:open')) {
            me.hide();
        } else if (!node.hasClass('@multiple.less:notallowed')) {
            me.show();
        }
    },
    'search<keyup,paste>' (e) {
        let me = this;
        clearTimeout(me.$sTimer);
        let val = $.trim(e.eventTarget.value);
        me.$sTimer = setTimeout(me.wrapAsync(() => {
            if (val != me.$lVal) {
                me.search(me.$lVal = val, (list) => {
                    me.updater.digest({
                        list
                    });
                });
            }
        }), 300);
    },
    'select<click>' (e) {
        e.preventDefault();
        let me = this;
        let item = e.params.item;
        let updater = me.updater;
        let data = updater.get();
        if (!Magix.has(data, 'bakSelected')) {
            data.bakSelected = data.selected;
        }
        let valueKey = data.valueKey;
        let textKey = data.textKey;
        let selected = item;
        let selectedText = item;
        if (textKey && valueKey) {
            selectedText = item[textKey];
            selected = item[valueKey];
        }
        let keys = [''];
        if (selectedText != data.defaultText || selected) {
            keys = data.selected.split(',');
        }
        let idx = $.inArray('', keys);
        if (idx > -1) {
            keys.splice(idx, 1);
        }
        idx = $.inArray(selected + '', keys);
        if (idx == -1) {
            keys.push(selected);
        } else {
            keys.splice(idx, 1);
        }
        if (!keys.length) {
            if (data.defaultText) {
                keys = [''];
            }
        }
        selected = keys.join(',');
        updater.digest({
            selected
        });
    },
    'stop<change,focusin,focusout>' (e) {
        e.stopPropagation();
    },
    'hide<click>' (e) {
        this.hide(e.params.enter);
    }
});