/*
    generate by magix-combine@3.5.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-hour/week',["magix","$","../mx-monitor/index","./index","./index"],function(require,exports,module){
/*Magix,$,Monitor,Core*/
require("./index");
/*
    author:xinglie.lkf@alibaba-inc.com
*/
let Magix = require('magix');
let $ = require('$');
let Monitor = require('../mx-monitor/index');
Magix.applyStyle("mx3e3-_mx-hour_week_",".mx3e3-_mx-hour_week_-mr50 {\n  margin-right: 50px;\n}\n.mx3e3-_mx-hour_week_-shortcuts {\n  height: 60px;\n  line-height: 60px;\n  vertical-align: middle;\n  color: #333;\n  padding-left: 30px;\n}\n.mx3e3-_mx-hour_week_-days {\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 20px;\n}\n.mx3e3-_mx-hour_week_-hours {\n  background-color: #fafafa;\n  color: #666;\n}\n.mx3e3-_mx-hour_week_-range {\n  position: relative;\n}\n.mx3e3-_mx-hour_week_-item {\n  display: inline-block;\n  position: absolute;\n  margin-top: -15px;\n  width: 32px;\n  height: 18px;\n}\n.mx3e3-_mx-hour_week_-item-0 {\n  left: 8px;\n}\n.mx3e3-_mx-hour_week_-item-6 {\n  left: 24%;\n}\n.mx3e3-_mx-hour_week_-item-12 {\n  left: 47.5%;\n}\n.mx3e3-_mx-hour_week_-item-18 {\n  left: 71%;\n}\n.mx3e3-_mx-hour_week_-item-24 {\n  left: 94%;\n}\n.mx3e3-_mx-hour_week_-day {\n  border-top: 1px solid #e6e6e6;\n}\n.mx3e3-_mx-hour_week_-day:first-child {\n  border-top: none;\n}\n.mx3e3-_mx-hour_week_-label {\n  vertical-align: middle;\n  cursor: default;\n  padding: 0 10px 0 30px;\n}\n.mx3e3-_mx-hour_week_-operation {\n  visibility: hidden;\n}\n.mx3e3-_mx-hour_week_-day:hover .mx3e3-_mx-hour_week_-operation {\n  visibility: visible;\n}\n.mx3e3-_mx-hour_week_-dialog {\n  position: absolute;\n  display: none;\n  background-color: #fff;\n  border: 1px solid #e6e6e6;\n  border-radius: 4px;\n  padding: 10px;\n  margin-top: 10px;\n  z-index: 10;\n}\n.mx3e3-_mx-hour_week_-body {\n  margin-bottom: 10px;\n  width: 300px;\n  border-bottom: 1px solid #e6e6e6;\n}\n.mx3e3-_mx-hour_week_-d-label {\n  margin: 0 25px 10px 0;\n}\n.mx3e3-_mx-hour_week_-opshow {\n  visibility: visible;\n}\n");
let Weeks = '一二三四五六日';
let Core = require('./index');
let All = '111111111111111111111111';
let None = '000000000000000000000000';
let ImproveDays = (days) => {
    let start = 0;
    let end = 7;
    while (start < end) {
        days[start] = Core.improve(days[start]);
        start++;
    }
    return days;
};
module.exports = Magix.View.extend({
    tmpl: {"html":"<div mx-guid=\"g0\u001f\" class=\"mx3e3-_mx-hour_week_-dialog\" id=\"dlg_<%=$$.viewId%>\"><div mx-guid=\"g1\u001f\" class=\"mx3e3-_mx-hour_week_-body\">2\u001d</div><div><button type=\"button\" class=\"mx3e3-_mx-style_index_-btn mx3e3-_mx-style_index_-btn-brand\" mx-click=\"\u001f\u001eapply()\">确认</button><button type=\"button\" mx-click=\"\u001f\u001ecloseDlg()\" class=\"mx3e3-_mx-style_index_-btn mx3e3-_mx-style_index_-ml5\">取消</button></div></div><div class=\"mx3e3-_mx-hour_week_-shortcuts\"><label class=\"mx3e3-_mx-hour_week_-mr50\"><input mx-guid=\"g2\u001f\" class=\"mx3e3-_mx-style_index_-mr5\" type=\"radio\" mx-click=\"\u001f\u001est({type:0})\" name=\"st-<%=$$.viewId%>\" <%if($$.allDays){%> checked<%}%>> 全日程投放</label><label class=\"mx3e3-_mx-hour_week_-mr50\"><input mx-guid=\"g3\u001f\" class=\"mx3e3-_mx-style_index_-mr5\" type=\"radio\" mx-click=\"\u001f\u001est({type:1})\" name=\"st-<%=$$.viewId%>\" <%if($$.weekdays){%> checked<%}%>> 工作日（周一至周五）投放</label><label><input mx-guid=\"g4\u001f\" class=\"mx3e3-_mx-style_index_-mr5\" type=\"radio\" mx-click=\"\u001f\u001est({type:2})\" name=\"st-<%=$$.viewId%>\" <%if($$.weekends){%> checked<%}%>> 休息日（周六、周日）投放</label></div><table class=\"mx3e3-_mx-hour_week_-days\"><thead><tr class=\"mx3e3-_mx-hour_week_-hours\"><td width=\"160\" class=\"mx3e3-_mx-style_index_-pl30\">时间段</td><td class=\"mx3e3-_mx-hour_week_-range\"><span class=\"mx3e3-_mx-hour_week_-item mx3e3-_mx-hour_week_-item-0\">0:00</span><span class=\"mx3e3-_mx-hour_week_-item mx3e3-_mx-hour_week_-item-6\">6:00</span><span class=\"mx3e3-_mx-hour_week_-item mx3e3-_mx-hour_week_-item-12\">12:00</span><span class=\"mx3e3-_mx-hour_week_-item mx3e3-_mx-hour_week_-item-18\">18:00</span><span class=\"mx3e3-_mx-hour_week_-item mx3e3-_mx-hour_week_-item-24\">24:00</span></td><td width=\"160\" align=\"center\">操作</td></tr></thead><tbody mx-guid=\"g5\u001f\">3\u001d</tbody></table>","subs":[{"keys":["viewId"],"path":"div[mx-guid=\"g0\u001f\"]","attr":"id=\"dlg_<%=$$.viewId%>\"","attrs":[{"n":"id","p":1}]},{"keys":["days","currentClone"],"path":"div[mx-guid=\"g1\u001f\"]","tmpl":"<%for(var a=0;a<$$.days.length;a++){%><label class=\"mx3e3-_mx-hour_week_-d-label<%if(a==$$.currentClone){%> mx3e3-_mx-style_index_-disabled<%}%>\"><input class=\"mx3e3-_mx-style_index_-mr10\" type=\"checkbox\" value=\"<%=a%>\" <%if(a==$$.currentClone){%> disabled<%}%>>周<%=$$.days.charAt(a)%></label><%}%>","s":"2\u001d","l":1},{"keys":["viewId","allDays"],"path":"input[mx-guid=\"g2\u001f\"]","attr":"name=\"st-<%=$$.viewId%>\" <%if($$.allDays){%> checked<%}%>","attrs":[{"n":"name","p":1},{"n":"checked","b":1,"p":1}]},{"keys":["viewId","weekdays"],"path":"input[mx-guid=\"g3\u001f\"]","attr":"name=\"st-<%=$$.viewId%>\" <%if($$.weekdays){%> checked<%}%>","attrs":[{"n":"name","p":1},{"n":"checked","b":1,"p":1}]},{"keys":["viewId","weekends"],"path":"input[mx-guid=\"g4\u001f\"]","attr":"name=\"st-<%=$$.viewId%>\" <%if($$.weekends){%> checked<%}%>","attrs":[{"n":"name","p":1},{"n":"checked","b":1,"p":1}]},{"keys":["days","viewId"],"path":"tbody[mx-guid=\"g5\u001f\"]","tmpl":"<%for(var b=0;b<$$.days.length;b++){%><tr class=\"mx3e3-_mx-hour_week_-day\"><td class=\"mx3e3-_mx-hour_week_-label\" mx-click=\"\u001f\u001etoggle({day:<%=b%>})\">周<%=$$.days.charAt(b)%></td><td id=\"hours_<%=$$.viewId%>_<%=b%>\" mx-view=\"mx-hour/index\" mx-change=\"\u001f\u001ehour({day:<%=b%>})\"></td><td align=\"center\"><div class=\"mx3e3-_mx-hour_week_-operation\"><a mx-click=\"\u001f\u001ecopy({day:<%=b%>})\" href=\"#\">复制到</a></div></td></tr><%}%>","s":"3\u001d","l":1}],"file":"mx-hour/week.html"},
    init(extra) {
        let me = this;
        me.$days = extra.days || [None, None, None, None, None, None, None];
        me.$days = ImproveDays(me.$days);
        Monitor.setup();
        me.on('destroy', Monitor.teardown);
    },
    render() {
        let me = this;
        me.updater.digest({
            viewId: me.id,
            days: Weeks
        });
        me.val(me.$days);
    },
    inside(node) {
        let me = this;
        let inView = Magix.inside(node, 'dlg_' + me.id);
        if (!inView && me.$ref) {
            let parent = me.$ref.parent();
            inView = Magix.inside(node, parent[0]);
        }
        return inView;
    },
    syncShortcuts() {
        let me = this;
        let weekdays = me.$days.slice(0, 5).join('');
        let weekends = me.$days.slice(-2).join('');
        let weekdaysHas = weekdays.indexOf('1') > -1;
        let weekendsHas = weekends.indexOf('1') > -1;
        let weekdaysChecked = weekdays.indexOf('0') == -1;
        let weekendsChekced = weekends.indexOf('0') == -1;
        let allDaysChecked = weekdaysChecked && weekendsChekced;
        me.updater.digest({
            allDays: allDaysChecked,
            weekdays: !weekendsHas && weekdaysChecked,
            weekends: weekendsChekced && !weekdaysHas
        });
    },
    syncUI() {
        let me = this;
        let ws = me.$days;
        for (let i = 0, w, vf; i < ws.length; i++) {
            w = ws[i];
            vf = Magix.Vframe.get('hours_' + me.id + '_' + i);
            if (vf) {
                vf.invoke('val', [w]);
            }
        }
    },
    val(days) {
        let me = this;
        if (days) {
            me.$days = ImproveDays(days);
            me.syncUI();
            me.syncShortcuts();
        }
        return me.$days;
    },
    show() {
        let me = this;
        if (!me.$shown) {
            me.$shown = true;
            Monitor.add(me);
            let ref = me.$ref;
            let dlg = $('#dlg_' + me.id);
            dlg.show();
            let offset = ref.offset();
            let left = offset.left + ref.outerWidth() - dlg.outerWidth();
            let top = offset.top + ref.outerHeight() + 10;
            dlg.offset({
                left: left,
                top: top
            });
            ref.parent().addClass('mx3e3-_mx-hour_week_-opshow');
        }
    },
    hide() {
        let me = this;
        if (me.$shown) {
            me.$shown = false;
            Monitor.remove(me);
            $('#dlg_' + me.id).hide();
            let ref = me.$ref;
            if (ref) {
                ref.parent().removeClass('mx3e3-_mx-hour_week_-opshow');
            }
        }
    },
    'st<click>' (e) {
        let me = this;
        switch (e.params.type) {
            case 0:
                me.$days = [All, All, All, All, All, All, All];
                break;
            case 1:
                me.$days = [All, All, All, All, All, None, None];
                break;
            case 2:
                me.$days = [None, None, None, None, None, All, All];
                break;
        }
        me.syncShortcuts();
        me.syncUI();
    },
    'hour<change>' (e) {
        e.stopPropagation();
        let me = this;
        me.$days[e.params.day] = e.range;
        clearTimeout(me.$timer);
        me.$timer = setTimeout(me.wrapAsync(() => {
            me.syncShortcuts();
        }), 100);
    },
    'toggle<click>' (e) {
        let day = e.params.day;
        let me = this;
        let vf = Magix.Vframe.get('hours_' + me.id + '_' + day);
        if (vf) {
            let val = vf.invoke('val');
            if (val.indexOf('0') > -1) {
                vf.invoke('val', [me.$days[day] = All]);
            } else {
                vf.invoke('val', [me.$days[day] = None]);
            }
            me.syncShortcuts();
        }
    },
    'copy<click>' (e) {
        e.preventDefault();
        let me = this;
        let ref = $(e.eventTarget);
        me.$ref = ref;
        me.show();
        me.updater.digest({
            currentClone: e.params.day
        });
    },
    'closeDlg<click>' () {
        this.hide();
    },
    'apply<click>' () {
        let me = this;
        let day = me.updater.get('currentClone');
        let val = me.$days[day];
        $('#dlg_' + me.id + ' input:checked').each((idx, item) => {
            me.$days[item.value] = val;
        });
        me.hide();
        me.syncUI();
        me.syncShortcuts();
    }
});
});