/*
    generate by magix-combine@3.5.6: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-popover/index',["magix","$"],function(require,exports,module){
/*Magix,$*/

/*
ver:1.0.0
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let $ = require('$');
Magix.applyStyle("mx3e3_mx-popover_index_",".mx3e3_mx-popover_index_-popover {\n  border-radius: 4px;\n  padding: 0;\n  box-shadow: 0 6px 8px rgba(51, 51, 51, 0.08);\n  position: absolute;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  display: none;\n  max-width: 276px;\n  background-color: #fff;\n}\n.mx3e3_mx-popover_index_-popover-content {\n  line-height: 22px;\n  padding: 9px 14px;\n}\n");
let Active;
module.exports = Magix.View.extend({
    tmpl: {"html":"<div mx-guid=\"g0\u001f\" class=\"mx3e3_mx-popover_index_-popover-content\">1\u001d</div>","subs":[{"keys":["content"],"path":"div[mx-guid=\"g0\u001f\"]","tmpl":"<%!$$.content%>","s":"1\u001d"}],"file":"mx-popover/index.html"},
    init(extra) {
        let me = this;
        me.$placement = extra.placement || 'right';
        me.$align = extra.align;
        me.$content = extra.content || '';
        me.$width = extra.width | 0;
        me.on('destroy', () => {
            me.$oNode.off('mouseenter mouseleave');
            if (me.$rNode) {
                me.$rNode.off('mouseenter mouseleave').remove();
            }
        });
    },
    render() {
        let me = this;
        me.endUpdate();
        let node = $('#' + me.id);
        me.$oNode = node;
        node.hover(() => {
            me.prepare();
            me.$timer = setTimeout(me.wrapAsync(() => {
                me.show(); //等待内容显示
            }), 100);
        }, () => {
            clearTimeout(me.$timer);
            me.hide();
        });
    },
    prepare() {
        let me = this;
        if (!me.$rNode) {
            let id = 'popover_' + me.id;
            me.$oNode.after('<div class="mx3e3_mx-popover_index_-popover" id="' + id + '" />');
            me.updater.to(id);
            me.updater.digest({
                content: me.$content
            });
            me.$rNode = $('#' + id);
            if (me.$width) {
                me.$rNode.css({
                    'max-width': me.$width,
                    width: me.$width
                });
            }
            me.$rNode.hover(() => {
                clearTimeout(me.$timer);
            }, () => {
                me.hide();
            });
        }
    },
    content(body) {
        let me = this;
        if (!body) {
            return me.$content;
        }
        if (!me.$rNode) {
            me.$content = body;
        } else {
            me.$content = body;
            me.updater.digest({
                content: body
            });
        }
    },
    show() {
        let me = this;
        if (Active && Active != me) { //优化大量提示的显示
            Active.immediatelyHide();
        }
        Active = me;
        clearTimeout(me.$timer);
        let rNode = me.$rNode;
        let oNode = me.$oNode;
        let offset = oNode.offset();
        let width = oNode.outerWidth();
        let height = oNode.outerHeight();
        rNode.css({
            display: 'block'
        });
        let rWidth = rNode.outerWidth();
        let rHeight = rNode.outerHeight();
        let left, top;
        switch (me.$placement) {
            case 'top':
                left = offset.left - (rWidth - width) / 2;
                top = offset.top - rHeight - 10;
                break;
            case 'right':
                left = offset.left + width + 10;
                top = offset.top - (rHeight - height) / 2;
                break;
            case 'bottom':
                left = offset.left - (rWidth - width) / 2;
                top = offset.top + height + 10;
                break;
            case 'left':
                left = offset.left - rWidth - 10;
                top = offset.top - (rHeight - height) / 2;
                break;
        }
        switch (me.$align) {
            case 'top':
                top = offset.top;
                break;
            case 'left':
                left = offset.left;
                break;
            case 'right':
                left = offset.left - rWidth + width;
                break;
            case 'bottom':
                top = offset.top - rHeight + height;
                break;
        }
        rNode.offset({
            left: left,
            top: top
        });
    },
    hide() {
        let me = this;
        clearTimeout(me.$timer);
        me.$timer = setTimeout(me.wrapAsync(() => {
            me.$rNode.css({
                display: 'none'
            });
        }), 50);
    },
    immediatelyHide() {
        let me = this;
        clearTimeout(me.$timer);
        me.$rNode.css({
            display: 'none'
        });
    }
});
});