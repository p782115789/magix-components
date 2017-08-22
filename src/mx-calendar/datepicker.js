/*
    generate by magix-combine@3.5.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-calendar/datepicker',["magix","$","../mx-monitor/index"],function(require,exports,module){
/*Magix,$,Monitor*/

/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let $ = require('$');
let Vframe = Magix.Vframe;
let Monitor = require('../mx-monitor/index');
let Wrapper = "<div style=\"position:absolute;display:none;z-index:10\" mx-change=\"\u001f\u001epickDate()\" mx-cancel=\"\u001f\u001ehide()\"></div>";
module.exports = Magix.View.extend({
    init(extra) {
        let me = this;
        me.$extra = extra;
        Monitor.setup();
        let oNode = $('#' + me.id);
        let click = () => {
            me.show();
        };
        me.on('destroy', () => {
            Monitor.teardown();
            $('#dpcnt_' + me.id).remove();
            oNode.off('click', click);
        });
        oNode.on('click', click);
        me.$oNode = oNode;
        oNode.prop('autocomplete', 'off');
    },
    inside(node) {
        let me = this;
        return Magix.inside(node, me.id) || Magix.inside(node, 'dpcnt_' + me.id);
    },
    update(options) {
        let me = this;
        let vf = Vframe.get('dpcnt_' + me.id);
        if (me.$extra.timeTypes) {
            options.btns = true; //显示按钮
        }
        options.forceRender = true;
        vf.invoke('update', [options]);
    },
    render() {
        let me = this;
        let id = 'dpcnt_' + me.id;
        $(me.wrapEvent(Wrapper)).attr('id', id).insertAfter(me.$oNode);
        if (!me.$extra.selected) {
            me.$extra.selected = me.$oNode.val();
        }
    },
    show() {
        let me = this;
        if (!me.$shown) {
            let node = $('#dpcnt_' + me.id),
                ref = me.$oNode;
            me.$shown = true;
            Monitor.add(me);
            if (!me.$rendered) {
                me.$rendered = true;
                me.owner.mountVframe('dpcnt_' + me.id, 'mx-calendar/index');
                me.update(me.$extra);
            }
            node.show();
            let offset = ref.offset();
            let left, top;
            switch (me.$extra.placement) {
                case 'top':
                    top = offset.top - node.outerHeight() - 5;
                    break;
                default:
                    top = offset.top + ref.outerHeight() + 5;
                    break;
            }
            switch (me.$extra.align) {
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
            let node = $('#dpcnt_' + me.id);
            let vf = node.prop('vframe');
            if (vf) {
                vf.invoke('toDaysPannel');
            }
            me.$shown = false;
            node.hide();
            Monitor.remove(me);
        }
    },
    'pickDate<change>' (e) {
        let me = this;
        e.stopPropagation();
        let val = e.date;
        if (e.time) {
            val += ' ' + e.time;
        }
        me.$oNode.val(val).trigger({
            type: 'change',
            date: e.date,
            time: e.time
        });
        me.hide();
    },
    'hide<cancel>' () {
        this.hide();
    }
});
});