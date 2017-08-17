'top@./suggest.js';
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
Magix.applyStyle('@index.less');
let $ = require('$');
let INPUT_MIN_WIDTH = 20;

module.exports = Magix.View.extend({
    tmpl: '@index.html',
    init(extra) {
        let me = this;
        me.$list = extra.list || [];
        let textKey = extra.textKey;
        let valueKey = extra.valueKey;
        me.$map = Magix.toMap(me.$list, valueKey);
        me.$oNode = $('#' + me.id);
        me.updater.set({
            disabled: extra.disabled,
            placeholder: extra.placeholder || '',
            map: me.$map,
            textKey: textKey,
            valueKey: valueKey
        });
        me.updateSelected(extra.selected);
    },
    getSuggest() {
        let me = this;
        let updater = me.updater;
        let sMap = updater.get('sMap');
        let valueKey = updater.get('valueKey');
        let list = me.$list;
        let s = [];
        for (let i = 0, one, key; i < list.length; i++) {
            one = list[i];
            key = valueKey ? one[valueKey] : one;
            if (!sMap[key]) {
                s.push(one);
            }
        }
        return s;
    },
    render() {
        let me = this;
        me.updater.digest({
            list: me.getSuggest(),
            viewId: me.id
        });
        let rNode = $('#' + me.id);
        rNode.addClass('@index.less:owner');
        me.$rNode = rNode;
        me.updateTrigger();
        let data = me.updater.get();
        if (data.disabled) {
            rNode.addClass('@index.less:notallowed');
        }
    },
    updateTrigger() {
        let me = this;
        let rNode = me.$rNode;
        me.$trigger = rNode.find('input');
        me.$trigger.width(INPUT_MIN_WIDTH);
        let width = $('#ipt_' + me.id).width() - me.$trigger.position().left;
        me.$trigger.width(
            width >= INPUT_MIN_WIDTH ? width : INPUT_MIN_WIDTH
        );
    },
    updateSelected(selected) {
        let me = this;
        selected = selected || '';
        selected = (selected + '').split(',');
        let items = [];
        let sMap = {};
        let map = me.$map;
        let textKey = me.updater.get('textKey');
        for (let i = 0, one; i < selected.length; i++) {
            one = selected[i];
            if (one) {
                sMap[one] = 1;
                items.push(textKey ? map[one] : one);
            }
        }
        me.updater.set({
            sMap: sMap,
            items: items
        });
        me.$oNode.val(selected.join(','));
    },
    val(selected) {
        let me = this;
        if (selected) {
            me.updateSelected(selected);
            me.updater.set({
                list: me.getSuggest()
            }).digest();
            me.updateTrigger();
            me.triggerEvent();
        }
        return me.updater.get('items');
    },
    triggerEvent() {
        let me = this;
        let updater = me.updater;
        let ids = [];
        let items = updater.get('items');
        let valueKey = updater.get('valueKey');
        for (let i = 0, one; i < items.length; i++) {
            one = items[i];
            ids.push(valueKey ? one[valueKey] : one);
        }
        $('#' + me.id).val(ids.join(',')).trigger({
            type: 'change',
            ids: ids,
            items: updater.get('items')
        });
    },
    focus() {
        let me = this;
        clearTimeout(me.$hTimer);
        me.$holdFocusEvent = true;
        me.$trigger.focus();
        me.$hTimer = setTimeout(me.wrapAsync(() => {
            delete me.$holdFocusEvent;
        }), 20);
    },
    'check<keydown,input,paste,keyup>' (e) {
        e.stopPropagation();
        let me = this;
        let val = e.eventTarget.value;
        if (me.$val !== val) {
            me.$val = val;
            let holder = me.$rNode.find('.@index.less:placeholder');
            if (val) {
                holder.hide();
            } else {
                holder.show();
            }
        }
        if (!val && e.type == 'keydown' && e.keyCode == 8) {
            let idx = me.updater.get('items').length - 1;
            if (idx > -1) {
                me['delete<click>']({
                    params: {
                        idx: idx
                    }
                });
                me.focus();
            }
        }
    },
    'add<pick>' (e) {
        e.stopPropagation();
        let me = this;
        let updater = me.updater;
        let items = updater.get('items');
        let sMap = updater.get('sMap');
        let item = e.item;
        let valueKey = updater.get('valueKey');
        let id = valueKey ? item[valueKey] : item;
        if (sMap[id]) return;
        sMap[id] = 1;
        items.push(item);
        updater.digest({
            items: items,
            scrollTop: e.scrollTop,
            list: me.getSuggest()
        });
        me.updateTrigger();
        me.focus();
        me.triggerEvent();
    },
    'focus<click>' () {
        let me = this;
        if (!me.$oNode.hasClass('@index.less:notallowed')) {
            me.$trigger.focus();
        }
    },
    'delete<click>' (e) {
        let me = this;
        if (me.$oNode.hasClass('@index.less:notallowed')) return;
        let updater = me.updater;
        let items = updater.get('items');
        let sMap = updater.get('sMap');
        let valueKey = updater.get('valueKey');
        let idx = e.params.idx;
        let item = items[idx];
        delete sMap[valueKey ? item[valueKey] : item];
        items.splice(e.params.idx, 1);
        updater.digest({
            items: items,
            list: me.getSuggest()
        });
        me.updateTrigger();
        me.triggerEvent();
        me.focus();
    },
    'stop<change,focusin,focusout>' (e) {
        e.stopPropagation();
        let rNode = this.$rNode;
        if (e.type == 'focusin') {
            rNode.addClass('@scoped.style:input-focus');
        }
    },
    'toggleList<showlist,hidelist>' (e) {
        let me = this;
        if (!me.$holdFocusEvent) {
            $('#' + this.id).trigger({
                type: e.type == 'showlist' ? 'focusin' : 'focusout'
            });
            if (e.type == 'hidelist') {
                let rNode = this.$rNode;
                rNode.removeClass('@scoped.style:input-focus');
            }
        }
    }
});