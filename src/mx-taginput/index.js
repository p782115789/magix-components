/*
    generate by magix-combine@3.5.6: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-taginput/index',["magix","$","./suggest"],function(require,exports,module){
/*Magix,$*/
require("./suggest");
/*
ver:1.0.0
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
Magix.applyStyle("mx3e3_mx-taginput_index_",".mx3e3_mx-taginput_index_-owner {\n  height: auto;\n  min-height: 32px;\n  padding: 1px 7px;\n  position: relative;\n  border: solid 1px #e6e6e6;\n  border-radius: 4px;\n  width: 340px;\n  line-height: 1;\n}\n.mx3e3_mx-taginput_index_-owner:hover {\n  border-color: #ccc;\n}\n.mx3e3_mx-taginput_index_-notallowed {\n  cursor: not-allowed;\n  background-color: #fbfbfb;\n}\n.mx3e3_mx-taginput_index_-notallowed:hover {\n  border-color: #e6e6e6;\n}\n.mx3e3_mx-taginput_index_-ipt {\n  height: auto;\n  cursor: text;\n}\n.mx3e3_mx-taginput_index_-placeholder {\n  position: absolute;\n  left: 9px;\n  top: 8px;\n  color: #999;\n  user-select: none;\n}\n.mx3e3_mx-taginput_index_-item {\n  position: relative;\n  display: inline-block;\n  margin: 1px;\n  cursor: pointer;\n  background-color: #eee;\n  border-radius: 4px;\n}\n.mx3e3_mx-taginput_index_-ghost {\n  width: 1px;\n  visibility: hidden;\n}\n.mx3e3_mx-taginput_index_-item-name {\n  float: left;\n  border-right: 1px solid #fff;\n  height: 24px;\n  line-height: 24px;\n  padding: 0 4px;\n  max-width: 200px;\n  overflow: hidden;\n}\n.mx3e3_mx-taginput_index_-item-delete {\n  width: 20px;\n  font-weight: bolder;\n  text-align: center;\n  color: #999;\n  display: inline-block;\n  height: 24px;\n  line-height: 24px;\n  padding: 0 4px;\n}\n.mx3e3_mx-taginput_index_-trigger {\n  border: none;\n  outline: none;\n  height: 24px;\n  line-height: 24px;\n  padding: 0;\n  width: 20px;\n  position: relative;\n  z-index: 1;\n  background: transparent;\n}\n.mx3e3_mx-taginput_index_-notallowed .mx3e3_mx-taginput_index_-ipt,\n.mx3e3_mx-taginput_index_-notallowed .mx3e3_mx-taginput_index_-trigger,\n.mx3e3_mx-taginput_index_-notallowed .mx3e3_mx-taginput_index_-item-name,\n.mx3e3_mx-taginput_index_-notallowed .mx3e3_mx-taginput_index_-item-delete {\n  cursor: not-allowed;\n}\n");
let $ = require('$');
let INPUT_MIN_WIDTH = 20;

module.exports = Magix.View.extend({
    tmpl: {"html":"<div mx-guid=\"g0\u001f\" class=\"mx3e3_mx-taginput_index_-ipt\" mx-click=\"\u001f\u001efocus()\" id=\"ipt_<%=$$.viewId%>\">1\u001d</div>","subs":[{"keys":["viewId","items","placeholder","textKey"],"path":"div[mx-guid=\"g0\u001f\"]","tmpl":"<%if(!$$.items.length&&$$.placeholder){%><div class=\"mx3e3_mx-taginput_index_-placeholder\"><%=$$.placeholder%></div><%}%><%if($$.items.length){%><%for(var a=0;a<$$.items.length;a++){%><%var b=$$.items[a];%><div class=\"mx3e3_mx-taginput_index_-item\"><div class=\"mx3e3_mx-taginput_index_-item-name mx3e3_mx-style_index_-ellipsis\"><%=$$.textKey?b[$$.textKey]:b%></div><div class=\"mx3e3_mx-taginput_index_-item-delete\" mx-click=\"\u001f\u001edelete({idx:<%!a%>})\">x</div></div><%}%><%}else{%><div class=\"mx3e3_mx-taginput_index_-item mx3e3_mx-taginput_index_-ghost\" mx-click=\"\u001f\u001estop()\"><div class=\"mx3e3_mx-taginput_index_-item-delete\" mx-click=\"\u001f\u001edelete({idx:<%!a%>})\">x</div></div><%}%><input mx-guid=\"g2\u001f\" mx-keydown=\"\u001f\u001echeck()\" mx-keyup=\"\u001f\u001echeck()\" mx-input=\"\u001f\u001echeck()\" mx-paste=\"\u001f\u001echeck()\" mx-pick=\"\u001f\u001eadd()\" mx-change=\"\u001f\u001estop()\" mx-focusin=\"\u001f\u001estop()\" mx-focusout=\"\u001f\u001estop()\" mx-showlist=\"\u001f\u001etoggleList()\" mx-hidelist=\"\u001f\u001etoggleList()\" <%if(!$$.disabled){%> mx-view=\"mx-taginput/suggest?list=<%@$$.list%>&textKey=<%@$$.textKey%>&valueKey=<%@$$.valueKey%>&relateIds=ipt_<%!$eu($$.viewId)%>&offsetLeft=-11&scrollTop=<%@$$.scrollTop%>\" view-list view-text-key view-value-key view-relate-ids view-offset-left view-scroll-top <%}else{%> disabled=\"disabled\" <%}%> class=\"mx3e3_mx-taginput_index_-trigger\" autocomplete=\"off\">","s":"1\u001d","attr":"id=\"ipt_<%=$$.viewId%>\"","attrs":[{"n":"id","p":1}],"mask":"3111"},{"keys":["disabled","list","valueKey","viewId","scrollTop"],"path":"input[mx-guid=\"g2\u001f\"]","pKeys":["items","placeholder","textKey"],"attr":"<%if(!$$.disabled){%> mx-view=\"mx-taginput/suggest?list=<%@$$.list%>&textKey=<%@$$.textKey%>&valueKey=<%@$$.valueKey%>&relateIds=ipt_<%!$eu($$.viewId)%>&offsetLeft=-11&scrollTop=<%@$$.scrollTop%>\" view-list view-text-key view-value-key view-relate-ids view-offset-left view-scroll-top <%}else{%> disabled=\"disabled\" <%}%>","attrs":[{"n":"mx-view","v":1},{"n":"view-list"},{"n":"view-text-key"},{"n":"view-value-key"},{"n":"view-relate-ids"},{"n":"view-offset-left"},{"n":"view-scroll-top"},{"n":"disabled","b":1,"p":1}]}],"file":"mx-taginput/index.html"},
    init(extra) {
        let me = this;
        me.$list = extra.list || [];
        me.$oNode = $('#' + me.id);
        me.updater.set({
            disabled: extra.disabled,
            placeholder: extra.placeholder || '',
            textKey: extra.textKey,
            valueKey: extra.valueKey
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
        rNode.addClass('mx3e3_mx-taginput_index_-owner');
        me.$rNode = rNode;
        me.updateTrigger();
        let data = me.updater.get();
        if (data.disabled) {
            rNode.addClass('mx3e3_mx-taginput_index_-notallowed');
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
        let updater = me.updater;
        let valueKey = updater.get('valueKey');
        let list = me.$list;
        let ssMap = Magix.toMap(selected);
        for (let i = 0, one, key; i < list.length; i++) {
            one = list[i];
            key = valueKey ? one[valueKey] : one;
            if (Magix.has(ssMap, key)) {
                sMap[key] = 1;
                items.push(one);
            }
        }
        me.updater.set({
            sMap,
            items
        });
        me.$oNode.val(selected.join(','));
    },
    val(selected) {
        let me = this;
        if (selected) {
            me.updateSelected(selected);
            me.updater.digest({
                list: me.getSuggest()
            });
            me.updateTrigger();
            me.$rNode.removeClass('mx3e3_mx-style_index_-input-focus');
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
            ids,
            items
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
            let holder = me.$rNode.find('.mx3e3_mx-taginput_index_-placeholder');
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
                        idx
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
            items,
            scrollTop: e.scrollTop,
            list: me.getSuggest()
        });
        me.updateTrigger();
        me.focus();
        me.triggerEvent();
    },
    'focus<click>' () {
        let me = this;
        if (!me.$oNode.hasClass('mx3e3_mx-taginput_index_-notallowed')) {
            me.$trigger.focus();
        }
    },
    'delete<click>' (e) {
        let me = this;
        if (me.$oNode.hasClass('mx3e3_mx-taginput_index_-notallowed')) return;
        let updater = me.updater;
        let items = updater.get('items');
        let sMap = updater.get('sMap');
        let valueKey = updater.get('valueKey');
        let idx = e.params.idx;
        let item = items[idx];
        delete sMap[valueKey ? item[valueKey] : item];
        items.splice(e.params.idx, 1);
        updater.digest({
            items,
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
            rNode.addClass('mx3e3_mx-style_index_-input-focus');
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
                rNode.removeClass('mx3e3_mx-style_index_-input-focus');
            }
        }
    }
});
});