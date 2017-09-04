/*
ver:1.0.0
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let $ = require('$');
let Monitor = require('../mx-monitor/index');
Magix.applyStyle('@index.less');
module.exports = Magix.View.extend({
    tmpl: '@index.html',
    init(extra) {
        let me = this;
        Monitor.setup();
        me.on('destroy', Monitor.teardown);
        extra.viewId = me.id;
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
        node.addClass('@index.less:dropdown');
        if (!data.list) {
            let list = [];
            let group;
            node.children().each((idx, item) => {
                item = $(item);
                group = item.attr('group') == 'true';
                list.push({
                    group: group,
                    text: item.text(),
                    value: group ? Magix.guid() : item.attr('value')
                });
            });
            me.updater.set({
                textKey: 'text',
                valueKey: 'value',
                list: list
            });
        }
        if (data.disabled) {
            node.addClass('@index.less:notallowed');
        }
        me.updateList(data.list, data.selected, true);
    },
    hide() {
        let me = this;
        if (me.$oNode.hasClass('@index.less:open')) {
            me.$oNode.removeClass('@index.less:open').trigger('focusout');
            Monitor.remove(me);
        }
    },
    show() {
        let me = this;
        if (!me.$oNode.hasClass('@index.less:open')) {
            let data = me.updater.get();
            if (!data.rList) {
                me.updater.digest({
                    rList: true
                });
            }
            me.$oNode.addClass('@index.less:open').trigger('focusin');
            let listNode = $('#list_' + me.id);
            let active = listNode.find('.@index.less:active');
            let pos = active.position();
            let height = listNode.height();
            let stop = listNode.prop('scrollTop');
            if (pos.top < 0 || pos.top > height) {
                let top = pos.top - height + stop + height / 2;
                listNode.prop('scrollTop', top);
            }
            Monitor.add(me);
        }
    },
    updateList(list, selected, ignoreFireEvent) {
        let me = this;
        selected += '';
        let updater = me.updater;
        let data = updater.get();
        list = (list || []).slice();
        let textKey = data.textKey || '';
        let valueKey = data.valueKey || '';
        if (data.emptyText) {
            if (textKey && valueKey) {
                let temp = {};
                temp[textKey] = data.emptyText;
                temp[valueKey] = '';
                list.unshift(temp);
            } else {
                list.unshift(data.emptyText);
            }
        }
        let map = Magix.toMap(list, valueKey);
        me.$list = list;
        if (!selected && data.emptyText && !(textKey || valueKey)) {
            selected = data.emptyText;
        }
        if (!selected || !map[selected]) { //未提供选项，或提供的选项不在列表里，则默认第一个
            selected = map[selected] || list[0];
            if (textKey && valueKey) {
                selected = selected[valueKey];
            }
        }
        updater.digest({
            selected,
            selectedText: textKey && valueKey ? map[selected][textKey] : selected,
            list
        });
        me.$oNode.val(selected);
        if (!ignoreFireEvent) {
            me.fireEvent(selected);
        }
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
    fireEvent(item, compare) {
        let me = this;
        let updater = me.updater;
        let data = updater.get();
        let valueKey = data.valueKey;
        let textKey = data.textKey;
        let lastSelected = data.selected;
        let selected = item;
        let selectedText = item;
        if (textKey && valueKey) {
            selectedText = item[textKey];
            selected = item[valueKey];
        }
        if (!compare || lastSelected !== selected) {
            updater.set({
                selected: selected
            });
            let event = $.Event('change', {
                item: item,
                keys: {
                    text: textKey,
                    value: valueKey
                },
                value: valueKey ? item[valueKey] : item,
                text: textKey ? item[textKey] : item
            });
            me.$oNode.val(valueKey ? item[valueKey] : item).trigger(event);
            if (!event.isDefaultPrevented()) {
                updater.digest({
                    selected: selected,
                    selectedText: selectedText
                });
            } else {
                updater.set({
                    selected: lastSelected
                });
            }
        }
    },
    'toggle<click>' () {
        let me = this;
        let node = me.$oNode;
        if (node.hasClass('@index.less:open')) {
            me.hide();
        } else if (!node.hasClass('@index.less:notallowed')) {
            me.show();
        }
    },
    'search<keyup,paste>' (e) {
        let me = this;
        e.stopPropagation();
        clearTimeout(me.$sTimer);
        let val = $.trim(e.eventTarget.value);
        me.$sTimer = setTimeout(me.wrapAsync(() => {
            if (val != me.$lVal) {
                me.search(me.$lVal = val, (list) => {
                    me.updater.digest({
                        list: list
                    });
                });
            }
        }), 300);
    },
    'select<click>' (e) {
        e.preventDefault();
        e.stopPropagation();
        let me = this;
        me.fireEvent(e.params.item, true);
        me.hide();
    },
    'stop<change,focusin,focusout>' (e) {
        e.stopPropagation();
    }
});