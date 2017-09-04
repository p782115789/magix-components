/*
ver:1.0.0
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let $ = require('$');
let Monitor = require('../mx-monitor/index');
Magix.applyStyle('@picker.less');
module.exports = Magix.View.extend({
    tmpl: '@picker.html',
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