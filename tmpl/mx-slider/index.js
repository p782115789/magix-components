/*
    author:xinglie.lkf@taobao.com
 */
let Magix = require('magix');
let $ = require('$');
Magix.applyStyle('@index.less');
let DD = require('../mx-dragdrop/index');
module.exports = Magix.View.extend({
    tmpl: '@index.html',
    init(extra) {
        let me = this;
        me.$oNode = $('#' + me.id);
        me.$width = +extra.width || 340;
        me.$min = +extra.min || 0;
        me.$max = +extra.max || 100;
        me.$step = +extra.step || 1;
        me.$disabled = extra.disabled && (extra.disabled === true || extra.disabled === 'true');
        let s = me.$step + '';
        let i = s.indexOf('.');
        if (i >= 0) {
            i = s.slice(i + 1).length;
        } else {
            i = 0;
        }
        me.$tl = i;
        me.$value = +extra.value || 0;
        let click = (e) => {
            if (me.$holdEvent || me.$disabled) return;
            let offset = me.$oNode.offset();
            let vars = me.vars();
            let left = (e.pageX - offset.left);
            let p = (left - vars.half) / vars.max;
            let v = me.getVal(p);
            me.val(v);
        };
        me.$oNode.on('click', click);
        me.on('destroy', () => {
            me.$oNode.off('click', click);
        });
    },
    render() {
        let me = this;
        me.updater.digest({
            min: me.$min,
            max: me.$max
        });
        me.$oNode.addClass('@index.less:as-input');
        if (me.$disabled) {
            me.$oNode.addClass('@index.less:notallowed');
        }
        me.$oNode.find('.@index.less:rail').width(me.$width);
        me.val(me.$value);
    },
    vars() {
        let me = this;
        let rail = me.$oNode.find('.@index.less:rail');
        let tracker = me.$oNode.find('.@index.less:tracker');
        let indicator = me.$oNode.find('.@index.less:indicator');
        let pLabel = indicator.find('.@index.less:pointer-label');
        let half = indicator.outerWidth() / 2;
        let max = rail.width() - half * 2;
        return {
            rail,
            pLabel,
            tracker,
            indicator,
            max,
            half
        };
    },
    val(v, ignoreSyncValue) {
        let me = this;
        let nv = +v;
        let max = me.$max,
            min = me.$min;
        if (nv || nv === 0) {
            if (nv > max) nv = max;
            else if (nv < min) nv = min;
            let p = (nv - min) / (max - min);
            let vars = me.vars();
            let left = p * vars.max;
            vars.indicator.css({
                left
            });
            v = me.getVal(p);
            let node = vars.pLabel;
            let oldLen = node.html().length;
            node.html(v);
            if (v.length != oldLen) {
                node.css({
                    left: Math.floor(vars.half - vars.pLabel.width() / 2) - 1
                });
            }
            vars.tracker.width(left + vars.half);
            if (!ignoreSyncValue) {
                if (me.$value != v) {
                    me.trigger(v);
                }
                me.$value = v;
            }
        }
        return me.$value;
    },
    getVal(p) {
        let me = this;
        let max = me.$max,
            min = me.$min,
            step = me.$step;
        let v = min + (max - min) * p;
        v = Math.round(v / step) * step;
        v = v.toFixed(me.$tl);
        return v;
    },
    trigger(p) {
        this.$oNode.val(p).trigger({
            type: 'change',
            value: p
        });
    },
    'drag<mousedown>' (e) {
        e.stopPropagation();
        e.preventDefault();
        let me = this;
        if (me.$disabled) return;
        let current = $(e.eventTarget);
        let width = current.outerWidth();
        let min = 0; //最小
        let pWidth = current.parent().width();
        let max = pWidth - width; //最大
        let currentX = parseInt(current.css('left'), 10);
        let dragValue = me.$value;
        DD.begin(e.eventTarget, (ex) => {
            DD.clear();
            let newX = currentX + ex.pageX - e.pageX;
            if (newX < min) newX = min;
            else if (newX > max) newX = max;
            let p = newX / max;
            me.val(dragValue = me.getVal(p), true);
        }, () => {
            if (me.$value != dragValue) {
                me.$value = dragValue;
                me.trigger(dragValue);
            }
            me.$holdEvent = true;
            setTimeout(me.wrapAsync(() => {
                delete me.$holdEvent;
            }), 20);
        });
    }
});