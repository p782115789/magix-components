/*
    generate by magix-combine@3.5.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-hour/day',["magix","$","./index","./index"],function(require,exports,module){
/*Magix,$,Core*/
require("./index");
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let $ = require('$');
let Core = require('./index');
Magix.applyStyle("mx3e3-_mx-hour_day_",".mx3e3-_mx-hour_day_-days {\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 20px;\n}\n.mx3e3-_mx-hour_day_-hours {\n  height: 50px;\n  background-color: #fafafa;\n  color: #666;\n}\n.mx3e3-_mx-hour_day_-range {\n  position: relative;\n}\n.mx3e3-_mx-hour_day_-item {\n  display: inline-block;\n  position: absolute;\n  margin-top: -15px;\n  width: 32px;\n  height: 18px;\n}\n.mx3e3-_mx-hour_day_-item-0 {\n  left: 8px;\n}\n.mx3e3-_mx-hour_day_-item-6 {\n  left: 24%;\n}\n.mx3e3-_mx-hour_day_-item-12 {\n  left: 47.5%;\n}\n.mx3e3-_mx-hour_day_-item-18 {\n  left: 71%;\n}\n.mx3e3-_mx-hour_day_-item-24 {\n  left: 94%;\n}\n.mx3e3-_mx-hour_day_-day {\n  border-top: 1px solid #e6e6e6;\n}\n.mx3e3-_mx-hour_day_-day:first-child {\n  border-top: none;\n}\n");
module.exports = Magix.View.extend({
    tmpl: {"html":"<table class=\"mx3e3-_mx-hour_day_-days\"><thead><tr class=\"mx3e3-_mx-hour_day_-hours\"><td class=\"mx3e3-_mx-hour_day_-range\"><span class=\"mx3e3-_mx-hour_day_-item mx3e3-_mx-hour_day_-item-0\">0:00</span><span class=\"mx3e3-_mx-hour_day_-item mx3e3-_mx-hour_day_-item-6\">6:00</span><span class=\"mx3e3-_mx-hour_day_-item mx3e3-_mx-hour_day_-item-12\">12:00</span><span class=\"mx3e3-_mx-hour_day_-item mx3e3-_mx-hour_day_-item-18\">18:00</span><span class=\"mx3e3-_mx-hour_day_-item mx3e3-_mx-hour_day_-item-24\">24:00</span></td></tr></thead><tbody><tr class=\"mx3e3-_mx-hour_day_-day\"><td mx-guid=\"g0\u001f\" id=\"range_<%=$$.viewId%>\" mx-view=\"mx-hour/index\" mx-change=\"\u001f\u001ehour()\"></td></tr></tbody></table>","subs":[{"keys":["viewId"],"path":"td[mx-guid=\"g0\u001f\"]","attr":"id=\"range_<%=$$.viewId%>\"","attrs":[{"n":"id","p":1}]}],"file":"mx-hour/day.html"},
    init(extra) {
        let me = this;
        me.$hours = extra.hours;
    },
    render() {
        let me = this;
        me.updater.digest({
            viewId: me.id
        });
        me.val(me.$hours);
    },
    val(hours) {
        let me = this;
        if (hours) {
            me.$hours = Core.improve(hours);
            $('#range_' + me.id).invokeView('val', [hours]);
        }
        return me.$hours;
    },
    'hour<change>' (e) {
        let me = this;
        e.stopPropagation();
        me.$hours = e.hours;
    }
});
});