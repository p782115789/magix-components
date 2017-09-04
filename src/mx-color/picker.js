/*
    generate by magix-combine@3.5.6: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-color/picker',["magix","$","../mx-monitor/index","./index"],function(require,exports,module){
/*Magix,$,Monitor*/

/*
ver:1.0.0
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let $ = require('$');
let Monitor = require('../mx-monitor/index');
let Wrapper = "<div style=\"position:absolute;display:none;z-index:10\" mx-change=\"\u001f\u001epickColor()\"></div>";
require('./index');
module.exports = Magix.View.extend({
    init(extra) {
        let me = this;
        me.$color = extra.color;
        me.$placement = extra.placement;
        me.$align = extra.align;
        Monitor.setup();
        let ownerNode = $('#' + me.id);
        let click = () => {
            me.show();
        };
        me.on('destroy', () => {
            Monitor.teardown();
            $('#cpcnt_' + me.id).remove();
            ownerNode.off('click', click);
        });
        ownerNode.on('click', click);
        me.$ownerNode = ownerNode;
        ownerNode.prop('autocomplete', 'off');
    },
    inside(node) {
        let me = this;
        return Magix.inside(node, me.id) || Magix.inside(node, 'cpcnt_' + me.id);
    },
    render() {
        let me = this;
        let id = 'cpcnt_' + me.id;
        me.$color = me.$color || me.$ownerNode.val();
        $(me.wrapEvent(Wrapper)).attr('id', id).insertAfter(me.$ownerNode);
    },
    show() {
        let me = this;
        if (!me.$shown) {
            let node = $('#cpcnt_' + me.id),
                ref = me.$ownerNode;
            me.$shown = true;
            if (!me.$rendered) {
                me.$rendered = true;
                me.owner.mountVframe('cpcnt_' + me.id, 'mx-color/index', {
                    color: me.$color
                });
            }
            Monitor.add(me);
            node.show();
            let offset = ref.offset();
            let left, top;
            switch (me.$placement) {
                case 'top':
                    top = offset.top - node.outerHeight() - 5;
                    break;
                default:
                    top = offset.top + ref.outerHeight() + 5;
                    break;
            }
            switch (me.$align) {
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
            let node = $('#cpcnt_' + me.id);
            me.$shown = false;
            node.hide();
            Monitor.remove(me);
        }
    },
    'pickColor<change>' (e) {
        let me = this;
        e.stopPropagation();
        me.$ownerNode.val(e.color).trigger({
            type: 'change',
            color: e.color
        });
        me.hide();
    }
});
});