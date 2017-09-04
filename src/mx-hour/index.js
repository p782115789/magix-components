/*
    generate by magix-combine@3.5.6: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-hour/index',["magix","../mx-dragdrop/index","$"],function(require,exports,module){
/*Magix,DD,$*/

/*
ver:1.0.0
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
Magix.applyStyle("mx3e3_mx-hour_index_",".mx3e3_mx-hour_index_-hours {\n  height: 60px;\n  padding: 5px 0;\n}\n.mx3e3_mx-hour_index_-hour {\n  position: relative;\n  width: 4%;\n  display: inline-block;\n  height: 100%;\n}\n.mx3e3_mx-hour_index_-line {\n  display: inline-block;\n  width: 1px;\n  height: 20%;\n  border-left: 1px solid #e6e6e6;\n  position: absolute;\n  left: 0;\n  top: 30%;\n}\n.mx3e3_mx-hour_index_-milestone .mx3e3_mx-hour_index_-line {\n  height: 40%;\n}\n.mx3e3_mx-hour_index_-duration {\n  position: absolute;\n  left: 0;\n  top: 30%;\n  display: inline-block;\n  width: 100%;\n  height: 40%;\n  z-index: 1;\n}\n.mx3e3_mx-hour_index_-active .mx3e3_mx-hour_index_-duration {\n  background-color: #6363e6;\n  opacity: 0.3;\n}\n.mx3e3_mx-hour_index_-start,\n.mx3e3_mx-hour_index_-end {\n  display: none;\n  position: absolute;\n  background-color: #6363e6;\n  font-size: 10px;\n  width: 36px;\n  height: 15px;\n  text-align: center;\n  color: #fff;\n  border-radius: 2px;\n  z-index: 2;\n}\n.mx3e3_mx-hour_index_-start {\n  left: -18px;\n  top: 35px;\n}\n.mx3e3_mx-hour_index_-end {\n  right: -18px;\n  top: 0;\n}\n.mx3e3_mx-hour_index_-arrow {\n  position: absolute;\n  left: 50%;\n  width: 0;\n  height: 0;\n  margin-left: -3px;\n  border-left: 3px solid rgba(0, 0, 0, 0);\n  border-right: 3px solid rgba(0, 0, 0, 0);\n}\n.mx3e3_mx-hour_index_-start .mx3e3_mx-hour_index_-arrow {\n  border-bottom: 3px solid #6363e6;\n  top: -3px;\n}\n.mx3e3_mx-hour_index_-end .mx3e3_mx-hour_index_-arrow {\n  border-top: 3px solid #6363e6;\n  bottom: -3px;\n}\n");
let DD = require('../mx-dragdrop/index');
let $ = require('$');
module.exports = Magix.View.extend({
    tmpl: {"html":"<div class=\"mx3e3_mx-hour_index_-hours\"><%for(var a=0;a<24;a++){%><div class=\"mx3e3_mx-hour_index_-hour <%if(a%6===0){%> mx3e3_mx-hour_index_-milestone <%}%>\" mx-mousedown=\"\u001f\u001estart()\" mx-mouseover=\"\u001f\u001eover()\"><div class=\"mx3e3_mx-hour_index_-line\"></div><div class=\"mx3e3_mx-hour_index_-duration\"></div><div class=\"mx3e3_mx-hour_index_-start\"><div class=\"mx3e3_mx-hour_index_-arrow\"></div><span><%= a%>:00</span></div><div class=\"mx3e3_mx-hour_index_-end\"><div class=\"mx3e3_mx-hour_index_-arrow\"></div><span><%= a+1%>:00</span></div></div><%}%><div class=\"mx3e3_mx-hour_index_-hour mx3e3_mx-hour_index_-milestone\"><div class=\"mx3e3_mx-hour_index_-line\"></div></div></div>","subs":[],"file":"mx-hour/index.html"},
    init(extra) {
        let me = this;
        me.$range = extra.range;
    },
    render() {
        let me = this;
        me.updater.digest();
        me.$hours = $('#' + me.id + ' .mx3e3_mx-hour_index_-hour');
        if (me.$range) {
            me.val(me.$range);
        }
    },
    showRange() {
        let me = this;
        let hours = me.$hours;
        hours.each((idx, item) => {
            item = $(item);
            let start = item.find('.mx3e3_mx-hour_index_-start');
            let end = item.find('.mx3e3_mx-hour_index_-end');
            if (!item.hasClass('mx3e3_mx-hour_index_-active')) {
                start.hide();
                end.hide();
            } else {
                start[item.prev().hasClass('mx3e3_mx-hour_index_-active') ? 'hide' : 'show']();
                end[item.next().hasClass('mx3e3_mx-hour_index_-active') ? 'hide' : 'show']();
            }
        });
    },
    val(str) {
        let me = this;
        let hours = me.$hours;
        if (str || str === '') {
            hours.each((idx, item) => {
                item = $(item);
                if (str.charAt(idx) == '1') {
                    item.addClass('mx3e3_mx-hour_index_-active');
                } else {
                    item.removeClass('mx3e3_mx-hour_index_-active');
                }
            });
            me.showRange();
        } else {
            str = [];
            hours.each((idx, item) => {
                item = $(item);
                if (idx < 24)
                    str.push(item.hasClass('mx3e3_mx-hour_index_-active') ? 1 : 0);
            });
            str = str.join('');
        }
        return str;
    },
    'start<mousedown>' (e) {
        let me = this;
        let current = $(e.eventTarget);
        let active = current.hasClass('mx3e3_mx-hour_index_-active');
        current.toggleClass('mx3e3_mx-hour_index_-active');
        me.showRange();
        $('#' + me.id).trigger({
            type: 'change',
            range: me.val()
        });
        me.$active = active;
        me.$drag = true;
        DD.begin(e.target, () => {
            DD.clear();
        }, () => {
            delete me.$drag;
        });
    },
    'over<mouseover>' (e) {
        let me = this;
        if (me.$drag) {
            let flag = !Magix.inside(e.relatedTarget, e.eventTarget);
            if (flag) {
                let current = $(e.eventTarget);
                current[me.$active ? 'removeClass' : 'addClass']('mx3e3_mx-hour_index_-active');
                me.showRange();
                $('#' + me.id).trigger({
                    type: 'change',
                    range: me.val()
                });
            }
        }
    }
}, {
    improve(str) {
        if (!str) {
            str = '';
        }
        let start = 0;
        let end = 24;
        while (start < end) {
            if (!str.charAt(start)) {
                str += '0';
            }
            start++;
        }
        return str;
    }
});
});