/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let $ = require('$');
Magix.applyStyle('@index.less');
let Monitor = require('../mx-monitor/index');
module.exports = Magix.View.extend({
    tmpl: '@index.html',
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
            me.$oNode.after('<div class="@index.less:popover" id="' + id + '" />');
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