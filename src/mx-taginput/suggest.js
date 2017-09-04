/*
    generate by magix-combine@3.5.6: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-taginput/suggest',["magix","$","../mx-monitor/index"],function(require,exports,module){
/*Magix,$,Monitor*/

/*
ver:1.0.0
*/
/*
    author: xinglie.lkf@ alibaba - inc.com
 */
let Magix = require('magix');
let $ = require('$');
let Monitor = require('../mx-monitor/index');
Magix.applyStyle("mx3e3_mx-taginput_suggest_",".mx3e3_mx-taginput_suggest_-suggest {\n  position: absolute;\n  border: 1px solid #e6e6e6;\n  font-size: 14px;\n  max-height: 260px;\n  overflow: auto;\n  list-style: none;\n  border-radius: 4px;\n  background-color: #fff;\n  display: none;\n  z-index: 10;\n  padding: 3px 0;\n  line-height: 1.8;\n}\n.mx3e3_mx-taginput_suggest_-item {\n  padding: 0 4px;\n  cursor: pointer;\n  margin: 2px 0;\n}\n.mx3e3_mx-taginput_suggest_-item-link {\n  color: #666;\n  display: block;\n  width: 100%;\n  padding: 0 6px;\n  height: 29px;\n  line-height: 29px;\n  border-radius: 4px;\n}\n.mx3e3_mx-taginput_suggest_-item-link:hover,\n.mx3e3_mx-taginput_suggest_-item-link:focus,\n.mx3e3_mx-taginput_suggest_-item-link:active {\n  color: #333;\n  background-color: #f0f0f0;\n}\n.mx3e3_mx-taginput_suggest_-active {\n  color: #333;\n  background-color: #f0f0f0;\n  border-radius: 4px;\n  text-decoration: none;\n  outline: 0;\n}\n");
module.exports = Magix.View.extend({
    tmpl: {"html":"<ul mx-guid=\"g0\u001f\" class=\"mx3e3_mx-taginput_suggest_-suggest\" style=\"width:<%=$$.width%>px\" mx-mouseout=\"\u001f\u001eout()\" mx-mousemove=\"\u001f\u001emove()\">1\u001d</ul>","subs":[{"keys":["width","rList","list","viewId","textKey"],"path":"ul[mx-guid=\"g0\u001f\"]","tmpl":"<%if($$.rList){%><%for(var a=0,b;a<$$.list.length;a++){%><%b=$$.list[a]%><li class=\"mx3e3_mx-taginput_suggest_-item\"><a href=\"#\" class=\"mx3e3_mx-taginput_suggest_-item-link\" data-idx=\"<%!a%>\" mx-click=\"\u001f\u001epick({item:'<%@b%>'})\" id=\"sg_<%!$$.viewId%>_<%!a%>\"><%=$$.textKey?b[$$.textKey]:b%></a></li><%}%><%}%>","s":"1\u001d","attr":"style=\"width:<%=$$.width%>px\"","attrs":[{"n":"style"}],"mask":"21111"}],"file":"mx-taginput/suggest.html"},
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
                me.$rNode.removeClass('mx3e3_mx-taginput_suggest_-suggest');
            } else {
                me.$rNode.addClass('mx3e3_mx-taginput_suggest_-suggest');
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
            me.$rNode.removeClass('mx3e3_mx-taginput_suggest_-suggest');
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
        node.removeClass('mx3e3_mx-taginput_suggest_-active');
    },
    highlight(ignore) {
        let me = this;
        let node = $('#sg_' + me.id + '_' + me.$idx);
        node.addClass('mx3e3_mx-taginput_suggest_-active');
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