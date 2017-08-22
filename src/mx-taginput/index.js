/*
    generate by magix-combine@3.5.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-taginput/suggest',["magix","$","../mx-monitor/index"],function(require,exports,module){
/*Magix,$,Monitor*/


/*
    author: xinglie.lkf@ alibaba - inc.com
 */
let Magix = require('magix');
let $ = require('$');
let Monitor = require('../mx-monitor/index');
Magix.applyStyle("mx3e3-_mx-taginput_suggest_",".mx3e3-_mx-taginput_suggest_-suggest {\n  position: absolute;\n  border: 1px solid #e6e6e6;\n  font-size: 14px;\n  max-height: 260px;\n  overflow: auto;\n  list-style: none;\n  border-radius: 4px;\n  background-color: #fff;\n  display: none;\n  z-index: 10;\n  padding: 3px 0;\n  line-height: 1.8;\n}\n.mx3e3-_mx-taginput_suggest_-item {\n  padding: 0 4px;\n  cursor: pointer;\n}\n.mx3e3-_mx-taginput_suggest_-item-link {\n  color: #666;\n  display: block;\n  width: 100%;\n  padding: 0 6px;\n  height: 29px;\n  line-height: 29px;\n  border-radius: 4px;\n}\n.mx3e3-_mx-taginput_suggest_-item-link:hover,\n.mx3e3-_mx-taginput_suggest_-item-link:focus,\n.mx3e3-_mx-taginput_suggest_-item-link:active {\n  color: #333;\n  background-color: #f0f0f0;\n}\n.mx3e3-_mx-taginput_suggest_-active {\n  color: #333;\n  background-color: #f0f0f0;\n  border-radius: 4px;\n  text-decoration: none;\n  outline: 0;\n}\n");
module.exports = Magix.View.extend({
    tmpl: {"html":"<ul mx-guid=\"g0\u001f\" class=\"mx3e3-_mx-taginput_suggest_-suggest\" style=\"width:<%=$$.width%>px\" mx-mouseout=\"\u001f\u001eout()\" mx-mousemove=\"\u001f\u001emove()\">1\u001d</ul>","subs":[{"keys":["width","rList","list","viewId","textKey"],"path":"ul[mx-guid=\"g0\u001f\"]","tmpl":"<%if($$.rList){%><%for(var a=0,b;a<$$.list.length;a++){%><%b=$$.list[a]%><li class=\"mx3e3-_mx-taginput_suggest_-item\"><a href=\"#\" class=\"mx3e3-_mx-taginput_suggest_-item-link\" data-idx=\"<%!a%>\" mx-click=\"\u001f\u001epick({item:'<%@b%>'})\" id=\"sg_<%!$$.viewId%>_<%!a%>\"><%=$$.textKey?b[$$.textKey]:b%></a></li><%}%><%}%>","s":"1\u001d","attr":"style=\"width:<%=$$.width%>px\"","attrs":[{"n":"style"}],"mask":"21111","l":1}],"file":"mx-taginput/suggest.html"},
    init(extra) {
        let me = this;
        me.$scrollTop = extra.scrollTop || 0;
        me.$list = extra.list || [];
        me.$offsetLeft = (extra.offsetLeft || 0) | 0;
        Monitor.setup();
        me.on('destroy', function() {
            Monitor.teardown();
            me.$oNode.off('keyup paste input', me.$watch)
                .off('focus', me.$show);
        });
        me.updater.set({
            viewId: me.id,
            width: extra.width || 340,
            textKey: extra.textKey,
            valueKey: extra.valueKey
        });
        me.$idx = -1;
        me.$relateIds = [me.id, 'suggest_' + me.id];
        if (extra.relateIds) {
            me.$relateIds = me.$relateIds.concat(extra.relateIds.split(','));
        }
    },
    inside(node) {
        let me = this;
        let ids = me.$relateIds;
        for (let i = 0; i < ids.length; i++) {
            if (Magix.inside(node, ids[i])) {
                return true;
            }
        }
        return false;
    },
    update(list, ignore) {
        let me = this;
        if (!ignore) {
            me.$list = list;
        }
        me.$idx = -1;
        me.updater.digest({
            list: me.$slist = list
        });
        if (me.$rNode) {
            if (!list || !list.length) {
                me.$rNode.removeClass('mx3e3-_mx-taginput_suggest_-suggest');
            } else {
                me.$rNode.addClass('mx3e3-_mx-taginput_suggest_-suggest');
            }
        }
    },
    render() {
        let me = this;
        let oNode = $('#' + me.id);
        me.$oNode = oNode;
        oNode.on('focus', me.$show = $.proxy(me.show, me))
            .on('keyup paste input', me.$watch = $.proxy(me.filter, me));
        let id = 'suggest_' + me.id;
        $('<div />').attr('id', id).insertAfter(oNode);
        me.updater.to(id);
        me.update(me.$list);
        me.$rNode = $('#' + id + ' ul');
        if (!me.$list || !me.$list.length) {
            me.$rNode.removeClass('mx3e3-_mx-taginput_suggest_-suggest');
        }
        setTimeout(me.wrapAsync(() => {
            me.$rNode.prop('scrollTop', me.$scrollTop);
        }), 0);
    },
    filter(e) {
        let me = this;
        if (!me.$shown) me.show();
        let slist = me.$slist;
        if (e.keyCode == 40) {
            me.normal();
            me.$idx++;
            if (me.$idx >= slist.length) {
                me.$idx = 0;
            }
            me.highlight();
        } else if (e.keyCode == 38) {
            me.normal();
            me.$idx--;
            if (me.$idx < 0) {
                me.$idx = slist.length - 1;
            }
            me.highlight();
        } else if (e.keyCode == 13) {
            if (me.$idx > -1 && me.$idx < me.$slist.length) {
                let item = me.$slist[me.$idx];
                me.$oNode.trigger({
                    type: 'pick',
                    item: item
                });
                me.normal();
                me.$idx = -1;
                me.hide();
            }
        } else {
            let val = $.trim(e.target.value);
            if (val != me.$val) {
                me.$val = val;
                if (val) {
                    let arr = [];
                    let list = me.$list.slice();
                    let key = me.updater.get('textKey');
                    let text;
                    for (let i = 0, one; i < list.length; i++) {
                        one = list[i];
                        text = key ? one[key] : one;
                        if ((text + '').indexOf(val) >= 0) {
                            arr.push(one);
                        }
                    }
                    me.update(arr, true);
                } else {
                    me.update(me.$list, true);
                }
            }
        }
    },
    show() {
        let me = this;
        let updater = me.updater;
        if (!me.$shown) {
            me.$shown = true;
            let rList = updater.get('rList');
            if (!rList) {
                updater.digest({
                    rList: true
                });
            }
            Monitor.add(me);
            let offset = me.$oNode.position();
            me.$rNode.show().css({
                left: offset.left + me.$offsetLeft,
                top: offset.top + me.$oNode.outerHeight() + 10
            });
            me.$oNode.trigger('showlist');
        }
    },
    normal() {
        let me = this;
        let node = $('#sg_' + me.id + '_' + me.$idx);
        node.removeClass('mx3e3-_mx-taginput_suggest_-active');
    },
    highlight(ignore) {
        let me = this;
        let node = $('#sg_' + me.id + '_' + me.$idx);
        node.addClass('mx3e3-_mx-taginput_suggest_-active');
        if (!ignore && node.length) {
            me.$ignore = 1; //如果是上下按键引起的滚动，则在move时忽略
            let height = node.outerHeight();
            let scrolled = (me.$idx + 1) * height;
            let rNode = me.$rNode;
            let vHeight = rNode.height();
            let sTop = rNode.prop('scrollTop');
            let items = Math.ceil(vHeight / height);

            if (scrolled < sTop + height) {
                rNode.prop('scrollTop', scrolled - height);
            } else if (scrolled > sTop + vHeight) {
                rNode.prop('scrollTop', (me.$idx + 2 - items) * height);
            }
        }
    },
    hide() {
        let me = this;
        if (me.$shown) {
            me.$shown = false;
            Monitor.remove(me);
            me.$rNode.hide();
            me.$oNode.trigger('hidelist');
        }
    },
    'pick<click>' (e) {
        e.preventDefault();
        let me = this;
        let item = e.params.item;
        me.$oNode.trigger({
            type: 'pick',
            item: item,
            scrollTop: me.$rNode.prop('scrollTop')
        });
        me.hide();
    },
    'out<mouseout>' (e) {
        let flag = !Magix.inside(e.relatedTarget, e.eventTarget);
        if (flag) {
            let me = this;
            me.normal();
            me.$idx = -1;
        }
    },
    'move<mousemove>' (e) {
        let me = this;
        if (me.$ignore) {
            delete me.$ignore;
            return;
        }
        let target = $(e.target);
        if (target.is('li')) {
            let idx = target.data('idx');
            if (idx != me.$idx) {
                me.normal();
                me.$idx = idx;
                me.highlight(true);
            }
        }
    }
});
});
/*
    generate by magix-combine@3.5.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-taginput/index',["magix","$"],function(require,exports,module){
/*Magix,$*/

;
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
Magix.applyStyle("mx3e3-_mx-taginput_index_",".mx3e3-_mx-taginput_index_-owner {\n  height: auto;\n  min-height: 32px;\n  padding: 1px 7px;\n  position: relative;\n  border: solid 1px #e6e6e6;\n  border-radius: 4px;\n  width: 340px;\n  line-height: 1;\n}\n.mx3e3-_mx-taginput_index_-owner:hover {\n  border-color: #ccc;\n}\n.mx3e3-_mx-taginput_index_-notallowed {\n  cursor: not-allowed;\n  background-color: #fbfbfb;\n}\n.mx3e3-_mx-taginput_index_-notallowed:hover {\n  border-color: #e6e6e6;\n}\n.mx3e3-_mx-taginput_index_-ipt {\n  height: auto;\n  cursor: text;\n}\n.mx3e3-_mx-taginput_index_-placeholder {\n  position: absolute;\n  left: 9px;\n  top: 8px;\n  color: #999;\n  user-select: none;\n}\n.mx3e3-_mx-taginput_index_-item {\n  position: relative;\n  display: inline-block;\n  margin: 1px;\n  cursor: pointer;\n  background-color: #eee;\n  border-radius: 4px;\n}\n.mx3e3-_mx-taginput_index_-ghost {\n  width: 1px;\n  visibility: hidden;\n}\n.mx3e3-_mx-taginput_index_-item-name {\n  float: left;\n  border-right: 1px solid #fff;\n  height: 24px;\n  line-height: 24px;\n  padding: 0 4px;\n  max-width: 200px;\n  overflow: hidden;\n}\n.mx3e3-_mx-taginput_index_-item-delete {\n  width: 20px;\n  font-weight: bolder;\n  text-align: center;\n  color: #999;\n  display: inline-block;\n  height: 24px;\n  line-height: 24px;\n  padding: 0 4px;\n}\n.mx3e3-_mx-taginput_index_-trigger {\n  border: none;\n  outline: none;\n  height: 24px;\n  line-height: 24px;\n  padding: 0;\n  width: 20px;\n  position: relative;\n  z-index: 1;\n  background: transparent;\n}\n.mx3e3-_mx-taginput_index_-notallowed .mx3e3-_mx-taginput_index_-ipt,\n.mx3e3-_mx-taginput_index_-notallowed .mx3e3-_mx-taginput_index_-trigger,\n.mx3e3-_mx-taginput_index_-notallowed .mx3e3-_mx-taginput_index_-item-name,\n.mx3e3-_mx-taginput_index_-notallowed .mx3e3-_mx-taginput_index_-item-delete {\n  cursor: not-allowed;\n}\n");
let $ = require('$');
let INPUT_MIN_WIDTH = 20;

module.exports = Magix.View.extend({
    tmpl: {"html":"<div mx-guid=\"g0\u001f\" class=\"mx3e3-_mx-taginput_index_-ipt\" mx-click=\"\u001f\u001efocus()\" id=\"ipt_<%=$$.viewId%>\">1\u001d</div>","subs":[{"keys":["viewId","items","placeholder","textKey"],"path":"div[mx-guid=\"g0\u001f\"]","tmpl":"<%if(!$$.items.length&&$$.placeholder){%><div class=\"mx3e3-_mx-taginput_index_-placeholder\"><%=$$.placeholder%></div><%}%><%if($$.items.length){%><%for(var a=0;a<$$.items.length;a++){%><%var b=$$.items[a];%><div class=\"mx3e3-_mx-taginput_index_-item\"><div class=\"mx3e3-_mx-taginput_index_-item-name mx3e3-_mx-style_index_-ellipsis\"><%=$$.textKey?b[$$.textKey]:b%></div><div class=\"mx3e3-_mx-taginput_index_-item-delete\" mx-click=\"\u001f\u001edelete({idx:<%!a%>})\">x</div></div><%}%><%}else{%><div class=\"mx3e3-_mx-taginput_index_-item mx3e3-_mx-taginput_index_-ghost\" mx-click=\"\u001f\u001estop()\"><div class=\"mx3e3-_mx-taginput_index_-item-delete\" mx-click=\"\u001f\u001edelete({idx:<%!a%>})\">x</div></div><%}%><input mx-guid=\"g2\u001f\" mx-keydown=\"\u001f\u001echeck()\" mx-keyup=\"\u001f\u001echeck()\" mx-input=\"\u001f\u001echeck()\" mx-paste=\"\u001f\u001echeck()\" mx-pick=\"\u001f\u001eadd()\" mx-change=\"\u001f\u001estop()\" mx-focusin=\"\u001f\u001estop()\" mx-focusout=\"\u001f\u001estop()\" mx-showlist=\"\u001f\u001etoggleList()\" mx-hidelist=\"\u001f\u001etoggleList()\" <%if(!$$.disabled){%> mx-view=\"mx-taginput/suggest?list=<%@$$.list%>&textKey=<%@$$.textKey%>&valueKey=<%@$$.valueKey%>&relateIds=ipt_<%!$eu($$.viewId)%>&offsetLeft=-11&scrollTop=<%@$$.scrollTop%>\" <%}else{%> disabled=\"disabled\" <%}%> class=\"mx3e3-_mx-taginput_index_-trigger\" autocomplete=\"off\">","s":"1\u001d","attr":"id=\"ipt_<%=$$.viewId%>\"","attrs":[{"n":"id","p":1}],"mask":"3111","l":1},{"keys":["disabled","list","valueKey","viewId","scrollTop"],"path":"input[mx-guid=\"g2\u001f\"]","pKeys":["items","placeholder","textKey"],"attr":"<%if(!$$.disabled){%> mx-view=\"mx-taginput/suggest?list=<%@$$.list%>&textKey=<%@$$.textKey%>&valueKey=<%@$$.valueKey%>&relateIds=ipt_<%!$eu($$.viewId)%>&offsetLeft=-11&scrollTop=<%@$$.scrollTop%>\" <%}else{%> disabled=\"disabled\" <%}%>","attrs":[{"n":"mx-view","v":1},{"n":"disabled","b":1,"p":1}]}],"file":"mx-taginput/index.html"},
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
        rNode.addClass('mx3e3-_mx-taginput_index_-owner');
        me.$rNode = rNode;
        me.updateTrigger();
        let data = me.updater.get();
        if (data.disabled) {
            rNode.addClass('mx3e3-_mx-taginput_index_-notallowed');
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
        let textKey = updater.get('textKey');
        let valueKey = updater.get('valueKey');
        let list = me.$list;
        let ssMap = Magix.toMap(selected);
        for (let i = 0, one, key; i < list.length; i++) {
            one = list[i];
            key = valueKey ? one[valueKey] : one;
            if (Magix.has(ssMap, key)) {
                sMap[key] = 1;
                items.push(textKey ? one[textKey] : one);
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
            let holder = me.$rNode.find('.mx3e3-_mx-taginput_index_-placeholder');
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
        if (!me.$oNode.hasClass('mx3e3-_mx-taginput_index_-notallowed')) {
            me.$trigger.focus();
        }
    },
    'delete<click>' (e) {
        let me = this;
        if (me.$oNode.hasClass('mx3e3-_mx-taginput_index_-notallowed')) return;
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
            rNode.addClass('mx3e3-_mx-style_index_-input-focus');
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
                rNode.removeClass('mx3e3-_mx-style_index_-input-focus');
            }
        }
    }
});
});