/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let $ = require('$');
let DD = require('../mx-dragdrop/index');
Magix.applyStyle('@index.less');
module.exports = Magix.View.extend({
    tmpl: '@range.html',
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
        let value = extra.value;
        if (value) {
            value = (value + '').split(',');
            me.$start = +value[0] || 0;
            me.$end = +value[1] || 0;
        } else {
            me.$start = 0;
            me.$end = 0;
        }
        let click = (e) => {
            if (me.$holdEvent || me.$disabled) return;
            let offset = me.$oNode.offset();
            let vars = me.vars();
            let left = (e.pageX - offset.left);
            let p = (left - vars.half) / vars.max;
            let v = me.getVal(p);
            let start = +me.$start;
            let end = +me.$end;
            let syncLeft = Math.abs(start - v) < Math.abs(end - v);
            if (syncLeft) {
                me.syncLeft(v);
                me.$start = v;
                me.trigger();
            } else {
                me.syncRight(v);
                me.$end = v;
                me.trigger();
            }
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
            max: me.$max,
            viewId: me.id
        });
        me.$oNode.addClass('@index.less:as-input');
        if (me.$disabled) {
            me.$oNode.addClass('@index.less:notallowed');
        }
        me.$oNode.find('.@index.less:rail').width(me.$width);
        me.val([me.$start, me.$end]);
    },
    vars() {
        let me = this;
        let rail = me.$oNode.find('.@index.less:rail');
        let tracker = me.$oNode.find('.@index.less:tracker');
        let iLeft = $('#left_' + me.id);
        let iRight = $('#right_' + me.id);
        let half = iLeft.outerWidth() / 2;
        let max = rail.width() - half * 2;
        return {
            rail,
            iLeftL: iLeft.find('.@index.less:pointer-label'),
            iRightL: iRight.find('.@index.less:pointer-label'),
            tracker,
            iLeft,
            iRight,
            left: parseInt(iLeft.css('left'), 10),
            right: parseInt(iRight.css('left'), 10),
            max,
            half
        };
    },
    syncLeft(v) {
        let me = this;
        v = +v;
        let max = me.$max,
            min = me.$min;
        if (v > max) v = max;
        else if (v < min) v = min;
        let leftPercent = (v - min) / (max - min);
        let vars = me.vars();
        let left = leftPercent * vars.max;
        vars.iLeft.css({
            left
        });

        v = me.getVal(leftPercent);
        let node = vars.iLeftL;
        let oldLen = node.html().length;
        node.html(v);
        if (v.length != oldLen) {
            node.css({
                left: Math.floor(vars.half - vars.iLeftL.width() / 2) - 1
            });
        }
        vars.tracker.css({
            left: left + vars.half
        }).width(vars.right - left);
        return v;
    },
    syncRight(v) {
        let me = this;
        v = +v;
        let max = me.$max,
            min = me.$min;
        if (v > max) v = max;
        else if (v < min) v = min;
        let rightPercent = (v - min) / (max - min);
        let vars = me.vars();
        let right = rightPercent * vars.max;
        vars.iRight.css({
            left: right
        });
        v = me.getVal(rightPercent);
        let node = vars.iRightL;
        let oldLen = node.html().length;
        node.html(v);
        if (v.length != oldLen) {
            node.css({
                left: Math.floor(vars.half - vars.iRightL.width() / 2) - 1
            });
        }
        vars.tracker.width(right - vars.left);
        return v;
    },
    val(v) {
        let me = this;
        if (v) {
            let av = (v + '').split(',');
            let start = +av[0] || 0;
            let end = +av[1] || 0;
            if (start > end) {
                [start, end] = [end, start];
            }
            start = me.syncLeft(start);
            end = me.syncRight(end);
            if (me.$start != start || me.$end != end) {
                me.$start = start;
                me.$end = end;
                me.trigger();
            }
        }
        return [me.$start, me.$end];
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
    trigger() {
        let me = this;
        let value = [me.$start, me.$end];
        this.$oNode.val(value).trigger({
            type: 'change',
            value: value,
            start: me.$start,
            end: me.$end
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
        let dragStartValue = me.$start;
        let dragEndValue = me.$end;
        DD.begin(e.eventTarget, (ex) => {
            DD.clear();
            let newX = currentX + ex.pageX - e.pageX;
            if (newX < min) newX = min;
            else if (newX > max) newX = max;
            let p = newX / max;
            let v = me.getVal(p);
            let nv = +v;
            if (e.params.end) {
                let start = +me.$start;
                if (nv >= start) {
                    if (me.$start != dragStartValue) {
                        dragStartValue = me.syncLeft(start);
                    }
                    dragEndValue = me.syncRight(v);
                } else {
                    if (me.$start != dragEndValue) {
                        dragEndValue = me.syncRight(start);
                    }
                    dragStartValue = me.syncLeft(v);
                }
            } else {
                let end = +me.$end;
                if (nv <= end) {
                    if (me.$end != dragEndValue) {
                        dragEndValue = me.syncRight(end);
                    }
                    dragStartValue = me.syncLeft(v);
                } else {
                    if (me.$end != dragStartValue) {
                        dragStartValue = me.syncLeft(end);
                    }
                    dragEndValue = me.syncRight(v);
                }
            }
        }, () => {
            if (dragStartValue != me.$start || me.$end != dragEndValue) {
                me.$start = dragStartValue;
                me.$end = dragEndValue;
                me.trigger();
            }
            me.$holdEvent = true;
            setTimeout(me.wrapAsync(() => {
                delete me.$holdEvent;
            }), 20);
        });
    }
});