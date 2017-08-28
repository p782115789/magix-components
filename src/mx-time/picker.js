/*
    generate by magix-combine@3.5.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-time/picker',["magix","$","../mx-monitor/index","./index"],function(require,exports,module){
/*Magix,$,Monitor*/
require("./index");
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let $ = require('$');
let Monitor = require('../mx-monitor/index');
Magix.applyStyle("mx3e3-_mx-time_picker_",".mx3e3-_mx-time_picker_-wrapper {\n  position: absolute;\n  display: none;\n  border: 1px solid #e6e6e6;\n  padding: 10px 0;\n  border-radius: 4px;\n  background-color: #fff;\n  z-index: 1;\n  width: 258px;\n}\n.mx3e3-_mx-time_picker_-time {\n  margin: 0 10px;\n}\n.mx3e3-_mx-time_picker_-footer {\n  border-top: 1px solid #e6e6e6;\n  margin: 10px 10px 0;\n  padding: 10px 0 0 0;\n}\n");
module.exports = Magix.View.extend({
    tmpl: {"html":"<div mx-guid=\"g0\u001f\" class=\"mx3e3-_mx-time_picker_-wrapper\" id=\"wrapper_<%=$$.viewId%>\"><div mx-guid=\"g1\u001f\" mx-view=\"mx-time/index?time=<%@$$.time%>&types=<%@$$.types%>\" view-time view-types id=\"time_<%=$$.viewId%>\" class=\"mx3e3-_mx-time_picker_-time mx3e3-_mx-style_index_-clearfix\" mx-change=\"\u001f\u001etake()\"></div><div class=\"mx3e3-_mx-time_picker_-footer\"><button class=\"mx3e3-_mx-style_index_-btn mx3e3-_mx-style_index_-btn-brand\" mx-click=\"\u001f\u001ehide({enter:true})\">确定</button><button class=\"mx3e3-_mx-style_index_-btn mx3e3-_mx-style_index_-ml5\" mx-click=\"\u001f\u001ehide()\">取消</button></div></div>","subs":[{"keys":["viewId"],"path":"div[mx-guid=\"g0\u001f\"]","attr":"id=\"wrapper_<%=$$.viewId%>\"","attrs":[{"n":"id","p":1}]},{"keys":["time","types","viewId"],"path":"div[mx-guid=\"g1\u001f\"]","attr":"mx-view=\"mx-time/index?time=<%@$$.time%>&types=<%@$$.types%>\" view-time view-types id=\"time_<%=$$.viewId%>\"","attrs":[{"n":"mx-view","v":1},{"n":"view-time"},{"n":"view-types"},{"n":"id","p":1}]}],"file":"mx-time/picker.html"},
    init(extra) {
        let me = this;
        Monitor.setup();
        let oNode = $('#' + me.id);
        let click = () => {
            me.show();
        };
        me.on('destroy', () => {
            Monitor.teardown();
            $('#tcnt_' + me.id).remove();
            oNode.off('click', click);
        });
        oNode.on('click', click);
        me.$oNode = oNode;
        oNode.prop('autocomplete', 'off');
        let time = oNode.val();
        if (!time) {
            let d = new Date();
            time = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
        }
        extra.time = time;
        me.$time = time;
        me.$bakTime = time;
        me.updater.set(extra);
    },
    inside(node) {
        let me = this;
        return Magix.inside(node, me.id) || Magix.inside(node, 'tcnt_' + me.id);
    },
    render() {
        let me = this;
        $(`<div id="tcnt_${me.id}"/>`).insertAfter(me.$oNode);
        let updater = me.updater;
        updater.to('tcnt_' + me.id);
        updater.digest({
            viewId: me.id
        });
    },
    show() {
        let me = this;
        if (!me.$shown) {
            let node = $('#wrapper_' + me.id),
                ref = me.$oNode;
            me.$shown = true;
            Monitor.add(me);
            node.show();
            let offset = ref.offset();
            let left, top;
            let data = me.updater.get();
            switch (data.placement) {
                case 'top':
                    top = offset.top - node.outerHeight() - 5;
                    break;
                default:
                    top = offset.top + ref.outerHeight() + 5;
                    break;
            }
            switch (data.align) {
                case 'right':
                    left = offset.left + ref.outerWidth() - node.outerWidth();
                    break;
                default:
                    left = offset.left;
                    break;
            }
            node.offset({
                left: left,
                top: top
            });
        }
    },
    hide() {
        let me = this;
        if (me.$shown) {
            let node = $('#wrapper_' + me.id);
            me.$shown = false;
            node.hide();
            Monitor.remove(me);
            if (me.$time != me.$bakTime) {
                me.$time = me.$bakTime;
                $('#time_' + me.id).invokeView('val', [me.$time]);
            }
        }
    },
    'take<change>' (e) {
        this.$time = e.time;
    },
    'hide<click>' (e) {
        let me = this;
        if (e.params.enter) {
            me.$bakTime = me.$time;
            me.$oNode.val(me.$time).trigger('change');
        }
        me.hide();
    }
});
});