/*
    generate by magix-combine@3.5.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-popconfirm/index',["magix","$","../mx-monitor/index"],function(require,exports,module){
/*Magix,$,Monitor*/

/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let $ = require('$');
Magix.applyStyle("mx3e3-_mx-popconfirm_index_",".mx3e3-_mx-popconfirm_index_-popover {\n  border-radius: 4px;\n  padding: 10px;\n  box-shadow: 0 6px 8px rgba(51, 51, 51, 0.08);\n  position: absolute;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  display: none;\n  max-width: 276px;\n  min-width: 200px;\n  background-color: #fff;\n}\n.mx3e3-_mx-popconfirm_index_-content {\n  line-height: 22px;\n  padding: 9px 14px;\n}\n.mx3e3-_mx-popconfirm_index_-footer {\n  border-top: 1px solid #e6e6e6;\n  margin-left: 10px;\n  padding-top: 10px;\n  width: 92%;\n  text-align: right;\n}\n");
let Monitor = require('../mx-monitor/index');
module.exports = Magix.View.extend({
    tmpl: {"html":"<div mx-guid=\"g0\u001f\" class=\"mx3e3-_mx-popconfirm_index_-content\">1\u001d</div><div class=\"mx3e3-_mx-popconfirm_index_-footer\"><button mx-guid=\"g1\u001f\" type=\"button\" class=\"mx3e3-_mx-style_index_-btn mx3e3-_mx-style_index_-btn-brand\" mx-click=\"\u001f\u001eenter()\">2\u001d</button><button mx-guid=\"g2\u001f\" type=\"button\" class=\"mx3e3-_mx-style_index_-btn mx3e3-_mx-style_index_-ml5\" mx-click=\"\u001f\u001ehide()\">3\u001d</button></div>","subs":[{"keys":["content"],"path":"div[mx-guid=\"g0\u001f\"]","tmpl":"<%!$$.content%>","s":"1\u001d"},{"keys":["enterText"],"path":"button[mx-guid=\"g1\u001f\"]","tmpl":"<%=$$.enterText%>","s":"2\u001d"},{"keys":["cancelText"],"path":"button[mx-guid=\"g2\u001f\"]","tmpl":"<%=$$.cancelText%>","s":"3\u001d"}],"file":"mx-popconfirm/index.html"},
    init(extra) {
        let me = this;
        me.$placement = extra.placement || 'left';
        me.$align = extra.align;
        me.$content = extra.content || '确认执行该操作？';
        me.$enterText = extra.enterText || '确定';
        me.$cancelText = extra.cancelText || '取消';
        Monitor.setup();
        me.on('destroy', () => {
            me.$oNode.off('click');
            Monitor.teardown();
        });
    },
    inside(node) {
        let me = this;
        return Magix.inside(node, me.id) || Magix.inside(node, 'popcfm_' + me.id);
    },
    render() {
        let me = this;
        me.endUpdate();
        let node = $('#' + me.id);
        me.$oNode = node;
        node.on('click', e => {
            e.preventDefault();
            me.prepare();
            me.show();
        });
    },
    prepare() {
        let me = this;
        if (!me.$rNode) {
            let id = 'popcfm_' + me.id;
            me.$oNode.after('<div class="mx3e3-_mx-popconfirm_index_-popover" id="' + id + '" />');
            me.updater.to(id);
            me.updater.digest({
                content: me.$content,
                enterText: me.$enterText,
                cancelText: me.$cancelText
            });
            me.$rNode = $('#' + id);
        }
    },
    show() {
        let me = this;
        if (!me.$shown) {
            me.$shown = true;
            Monitor.add(me);
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
        }
    },
    hide() {
        let me = this;
        if (me.$shown) {
            delete me.$shown;
            Monitor.remove(me);
            me.$rNode.css({
                display: 'none'
            });
        }
    },
    'enter<click>' () {
        let me = this;
        me.hide();
        me.$oNode.trigger('enter');
    },
    'hide<click>' () {
        this.hide();
    }
});
});