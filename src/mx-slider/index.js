/*
    generate by magix-combine@3.5.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-slider/index',["magix","$","../mx-dragdrop/index"],function(require,exports,module){
/*Magix,$,DD*/

/*
    author:xinglie.lkf@taobao.com
 */
let Magix = require('magix');
let $ = require('$');
Magix.applyStyle("mx3e3-_mx-slider_index_",".mx3e3-_mx-slider_index_-as-input {\n  height: 32px;\n  cursor: default;\n  line-height: normal;\n}\n.mx3e3-_mx-slider_index_-rail {\n  height: 4px;\n  background: #eaeaea;\n  position: relative;\n  display: inline-block;\n  border-radius: 2px;\n}\n.mx3e3-_mx-slider_index_-tracker {\n  height: 4px;\n  background: #6363e6;\n  position: absolute;\n  left: 0;\n  top: 0;\n  border-radius: 2px;\n}\n.mx3e3-_mx-slider_index_-indicator {\n  border-radius: 50%;\n  width: 12px;\n  height: 12px;\n  position: absolute;\n  top: -4px;\n  background: #fff;\n  border: solid 2px #6363e6;\n}\n.mx3e3-_mx-slider_index_-pointer-label,\n.mx3e3-_mx-slider_index_-scale-left,\n.mx3e3-_mx-slider_index_-scale-right {\n  position: absolute;\n  font-size: 9px;\n  pointer-events: none;\n}\n.mx3e3-_mx-slider_index_-pointer-label {\n  top: -15px;\n  left: 2px;\n}\n.mx3e3-_mx-slider_index_-scale-left {\n  left: 0;\n  top: 10px;\n}\n.mx3e3-_mx-slider_index_-scale-right {\n  right: 0;\n  top: 10px;\n}\n.mx3e3-_mx-slider_index_-notallowed {\n  cursor: not-allowed;\n}\n.mx3e3-_mx-slider_index_-notallowed .mx3e3-_mx-slider_index_-rail {\n  background-color: #fbfbfb;\n}\n.mx3e3-_mx-slider_index_-notallowed .mx3e3-_mx-slider_index_-tracker {\n  background-color: #eaeaea;\n}\n.mx3e3-_mx-slider_index_-notallowed .mx3e3-_mx-slider_index_-indicator {\n  border-color: #eaeaea;\n}\n");
let DD = require('../mx-dragdrop/index');
module.exports = Magix.View.extend({
    tmpl: {"html":"<div class=\"mx3e3-_mx-slider_index_-rail\"><div class=\"mx3e3-_mx-slider_index_-tracker\"></div><div class=\"mx3e3-_mx-slider_index_-indicator\" mx-mousedown=\"\u001f\u001edrag()\"><div class=\"mx3e3-_mx-slider_index_-pointer-label\">0</div></div><div mx-guid=\"g0\u001f\" class=\"mx3e3-_mx-slider_index_-scale-left\">1\u001d</div><div mx-guid=\"g1\u001f\" class=\"mx3e3-_mx-slider_index_-scale-right\">2\u001d</div></div>","subs":[{"keys":["min"],"path":"div[mx-guid=\"g0\u001f\"]","tmpl":"<%=$$.min%>","s":"1\u001d"},{"keys":["max"],"path":"div[mx-guid=\"g1\u001f\"]","tmpl":"<%=$$.max%>","s":"2\u001d"}],"file":"mx-slider/index.html"},
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
        me.$oNode.addClass('mx3e3-_mx-slider_index_-as-input');
        if (me.$disabled) {
            me.$oNode.addClass('mx3e3-_mx-slider_index_-notallowed');
        }
        me.$oNode.find('.mx3e3-_mx-slider_index_-rail').width(me.$width);
        me.val(me.$value);
    },
    vars() {
        let me = this;
        let rail = me.$oNode.find('.mx3e3-_mx-slider_index_-rail');
        let tracker = me.$oNode.find('.mx3e3-_mx-slider_index_-tracker');
        let indicator = me.$oNode.find('.mx3e3-_mx-slider_index_-indicator');
        let pLabel = indicator.find('.mx3e3-_mx-slider_index_-pointer-label');
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
        return +me.$value;
    },
    getVal(p) {
        let me = this;
        let max = me.$max,
            min = me.$min,
            step = me.$step,
            v;
        if (p === 0) v = min;
        else if (p === 1) v = max;
        else {
            v = min + (max - min) * p;
            v = Math.round(v / step) * step;
        }
        v = v.toFixed(me.$tl);
        return v;
    },
    trigger(p) {
        this.$oNode.prop('value', +p).trigger({
            type: 'change',
            value: +p
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
});