/*
    generate by magix-combine@3.5.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-calendar/index',["magix","$","mx-time/index"],function(require,exports,module){
/*Magix,$*/
require("mx-time/index");
/*
    author:xinglie.lkf@taobao.com
 */
let Magix = require('magix');
Magix.applyStyle("mx3e3-_mx-calendar_index_",".mx3e3-_mx-calendar_index_-wrapper {\n  background-color: #fff;\n  display: inline-block;\n  border: 1px solid #e6e6e6;\n  padding: 0;\n  border-radius: 4px;\n  overflow-y: hidden;\n  z-index: 10;\n  color: #333;\n  text-align: center;\n  position: relative;\n}\n.mx3e3-_mx-calendar_index_-gray {\n  color: #777;\n}\n.mx3e3-_mx-calendar_index_-header {\n  height: 32px;\n  line-height: 32px;\n  padding: 1px;\n}\n.mx3e3-_mx-calendar_index_-minus,\n.mx3e3-_mx-calendar_index_-plus {\n  color: #CCC;\n  display: inline-block;\n  padding: 6px 7px;\n  line-height: 100%;\n  vertical-align: top;\n  cursor: pointer;\n}\n.mx3e3-_mx-calendar_index_-minus:hover,\n.mx3e3-_mx-calendar_index_-minus:focus,\n.mx3e3-_mx-calendar_index_-plus:hover,\n.mx3e3-_mx-calendar_index_-plus:focus {\n  color: #6363e6;\n}\n.mx3e3-_mx-calendar_index_-title {\n  display: inline-block;\n  cursor: pointer;\n  padding: 5px 10px;\n  border-radius: 4px;\n  line-height: 1;\n}\n.mx3e3-_mx-calendar_index_-title:hover {\n  background-color: #EEE;\n}\n.mx3e3-_mx-calendar_index_-body {\n  width: 245px;\n}\n.mx3e3-_mx-calendar_index_-weeks {\n  color: #333;\n  background-color: #FAFAFA;\n  padding: 0 10px;\n}\n.mx3e3-_mx-calendar_index_-days {\n  padding: 10px;\n}\n.mx3e3-_mx-calendar_index_-y-panel,\n.mx3e3-_mx-calendar_index_-m-panel {\n  padding: 1px 0;\n  position: absolute;\n  top: -100%;\n  left: 0;\n  right: 0;\n  transition: top 0.15s;\n  background-color: #fff;\n}\n.mx3e3-_mx-calendar_index_-ym-show {\n  top: 0;\n}\n.mx3e3-_mx-calendar_index_-ym {\n  height: 60px;\n  margin: 2px;\n  display: inline-block;\n  width: 76px;\n  cursor: pointer;\n  line-height: 60px;\n  border-radius: 4px;\n  font-size: 16px;\n}\n.mx3e3-_mx-calendar_index_-ym:hover,\n.mx3e3-_mx-calendar_index_-day:hover {\n  background: #f0f0f0;\n}\n.mx3e3-_mx-calendar_index_-week,\n.mx3e3-_mx-calendar_index_-day {\n  width: 28px;\n  height: 28px;\n  line-height: 28px;\n  margin: 3px 2px;\n  float: left;\n  border-radius: 4px;\n  cursor: pointer;\n}\n.mx3e3-_mx-calendar_index_-selected,\n.mx3e3-_mx-calendar_index_-selected:hover {\n  color: #fff;\n  background-color: #6363e6;\n}\n.mx3e3-_mx-calendar_index_-notallowed,\n.mx3e3-_mx-calendar_index_-notallowed:hover {\n  color: #eee;\n  cursor: not-allowed;\n  background: #fff;\n}\n.mx3e3-_mx-calendar_index_-time {\n  padding: 5px;\n  border-top: 1px solid #e6e6e6;\n}\n.mx3e3-_mx-calendar_index_-footer {\n  border-top: 1px solid #e6e6e6;\n  margin: 10px;\n  padding: 10px 0 0 0;\n  text-align: left;\n}\n.mx3e3-_mx-calendar_index_-rotate180 {\n  transform: rotate(180deg);\n}\n");
let $ = require('$');
let GetNumOfDays = (year, month) => {
    return 32 - new Date(year, month - 1, 32).getDate();
};
let Days = ['日', '一', '二', '三', '四', '五', '六'];
let PadZero = (str) => {
    return ('0' + str).slice(-2);
};
let GetWeekText = (weekStart) => {
    let a = [];
    for (let i = 0; i < 7; i++) {
        a[i] = Days[(i + weekStart) % 7];
    }
    return a;
};
let DateDisabled = (current, start, end) => {
    let ts = current.getTime(),
        flag;
    if (start) {
        flag = ts < start.getTime();
    }
    if (!flag) {
        if (end) {
            flag = ts > end.getTime();
        } else {
            flag = false;
        }
    }
    return flag;
};
let MonthDisabled = (year, month, start, end) => {
    let flag, current = parseInt(year + PadZero(month), 10);
    if (start) {
        start = parseInt(start.getFullYear() + PadZero(start.getMonth()), 10);
        flag = current < start;
    }
    if (!flag && end) {
        end = parseInt(end.getFullYear() + PadZero(end.getMonth()), 10);
        flag = current > end;
    }
    return flag;
};
let YearDisabled = (year, start, end) => {
    let flag;
    if (start) {
        flag = year < start.getFullYear();
    }
    if (!flag && end) {
        flag = year > end.getFullYear();
    }
    return flag;
};
let DateReg = {
    y: {
        reg: /y+/gi,
        fn(m, d) {
            return String(d.getFullYear()).slice(-m.length);
        }
    },
    M: {
        reg: /M+/g,
        fn(m, d, t) {
            t = d.getMonth() + 1;
            return PadZero(t).slice(-m.length);
        }
    },
    d: {
        reg: /d+/gi,
        fn(m, d, t) {
            t = d.getDate();
            return PadZero(t).slice(-m.length);
        }
    },
    h: {
        reg: /h+/gi,
        fn(m, d, t) {
            t = d.getHours();
            return PadZero(t).slice(-m.length);
        }
    },
    m: {
        reg: /m+/g,
        fn(m, d, t) {
            t = d.getMinutes();
            return PadZero(t).slice(-m.length);
        }
    },
    s: {
        reg: /s+/g,
        fn(m, d, t) {
            t = d.getSeconds();
            return PadZero(t).slice(-m.length);
        }
    },
    S: {
        reg: /S+/g,
        fn(m, d, t) {
            t = d.getMilliseconds();
            return String(t).substring(0, m.length);
        }
    }
};
let DateParse = (date) => {
    if (date instanceof Date) {
        return date;
    } else {
        date = new Date(Date.parse(String(date).replace(/-/g, '/')));
    }
    if (date instanceof Date && (date != 'Invalid Date') && !isNaN(date)) {
        return date;
    }
    return null;
};
let DateFormat = (date, format) => {
    date = DateParse(date);
    format = format || 'YYYY/MM/dd hh:mm:ss';
    let key;
    let replacement = (match) => {
        return DateReg[key].fn(match, date);
    };
    for (key in DateReg) {
        format = format.replace(DateReg[key].reg, replacement);
    }
    return format;
};
let DefaultFormatter = 'YYYY-MM-dd';
module.exports = Magix.View.extend({
    tmpl: {"html":"<div class=\"mx3e3-_mx-calendar_index_-wrapper mx3e3-_mx-style_index_-unselectable\"><div mx-guid=\"g0\u001f\" id=\"days_<%=$$.id%>\" class=\"mx3e3-_mx-style_index_-clearfix\">1\u001d</div><div mx-guid=\"g5\u001f\" id=\"months_<%=$$.id%>\" class=\"mx3e3-_mx-style_index_-clearfix mx3e3-_mx-calendar_index_-m-panel\"><div class=\"mx3e3-_mx-calendar_index_-header\"><span class=\"mx3e3-_mx-style_index_-iconfont mx3e3-_mx-calendar_index_-minus mx3e3-_mx-style_index_-fl\" mx-click=\"\u001f\u001echangeYear()\">&#xe61e;</span><h4 mx-guid=\"g6\u001f\" mx-click=\"\u001f\u001eshowYears()\" class=\"mx3e3-_mx-calendar_index_-title\">7\u001d</h4><span class=\"mx3e3-_mx-style_index_-iconfont mx3e3-_mx-calendar_index_-plus mx3e3-_mx-style_index_-fr mx3e3-_mx-calendar_index_-rotate180\" mx-click=\"\u001f\u001echangeYear({next:true})\">&#xe61e;</span></div><div mx-guid=\"g7\u001f\" class=\"mx3e3-_mx-calendar_index_-body\">8\u001d</div></div><div mx-guid=\"g8\u001f\" id=\"years_<%=$$.id%>\" class=\"mx3e3-_mx-style_index_-clearfix mx3e3-_mx-calendar_index_-y-panel\"><div class=\"mx3e3-_mx-calendar_index_-header\"><span class=\"mx3e3-_mx-style_index_-iconfont mx3e3-_mx-calendar_index_-minus mx3e3-_mx-style_index_-fl\" mx-click=\"\u001f\u001echangeYear({range:true})\">&#xe61e;</span><h4 mx-guid=\"g9\u001f\" class=\"mx3e3-_mx-calendar_index_-title\">10\u001d</h4><span class=\"mx3e3-_mx-style_index_-iconfont mx3e3-_mx-calendar_index_-plus mx3e3-_mx-style_index_-fr mx3e3-_mx-calendar_index_-rotate180\" mx-click=\"\u001f\u001echangeYear({range:true,next:true})\">&#xe61e;</span></div><div mx-guid=\"ga\u001f\" class=\"mx3e3-_mx-calendar_index_-body\">11\u001d</div></div></div>","subs":[{"keys":["id","timeTypes","btns"],"path":"div[mx-guid=\"g0\u001f\"]","tmpl":"<div class=\"mx3e3-_mx-calendar_index_-header\"><span class=\"mx3e3-_mx-style_index_-iconfont mx3e3-_mx-calendar_index_-minus mx3e3-_mx-style_index_-fl\" mx-click=\"\u001f\u001echangeMonth()\">&#xe61e;</span><h4 mx-guid=\"g1\u001f\" mx-click=\"\u001f\u001eshowMonths()\" class=\"mx3e3-_mx-calendar_index_-title\">2\u001d</h4><span class=\"mx3e3-_mx-style_index_-iconfont mx3e3-_mx-calendar_index_-plus mx3e3-_mx-calendar_index_-rotate180 mx3e3-_mx-style_index_-fr\" mx-click=\"\u001f\u001echangeMonth({next:true})\">&#xe61e;</span></div><div class=\"mx3e3-_mx-calendar_index_-body\"><div mx-guid=\"g2\u001f\" class=\"mx3e3-_mx-calendar_index_-weeks mx3e3-_mx-style_index_-clearfix\">3\u001d</div><div mx-guid=\"g3\u001f\" class=\"mx3e3-_mx-calendar_index_-days mx3e3-_mx-style_index_-clearfix\">4\u001d</div></div><%if($$.timeTypes){%><div mx-guid=\"g4\u001f\" mx-view=\"mx-time/index?time=<%@$$.timeValue%>&types=<%@$$.timeTypes%>\" view-time view-types class=\"mx3e3-_mx-style_index_-clearfix mx3e3-_mx-calendar_index_-time\" mx-change=\"\u001f\u001esetTime()\"></div><%}%><%if($$.btns){%><div class=\"mx3e3-_mx-calendar_index_-footer\"><button class=\"mx3e3-_mx-style_index_-btn mx3e3-_mx-style_index_-btn-brand\" mx-click=\"\u001f\u001ehide({enter:true})\">确定</button><button class=\"mx3e3-_mx-style_index_-btn mx3e3-_mx-style_index_-ml5\" mx-click=\"\u001f\u001ehide()\">取消</button></div><%}%>","s":"1\u001d","attr":"id=\"days_<%=$$.id%>\"","attrs":[{"n":"id","p":1}],"mask":"211"},{"keys":["year","month"],"path":"h4[mx-guid=\"g1\u001f\"]","tmpl":"<%=$$.year%>-<%=$$.month<10?'0'+$$.month:$$.month%>","s":"2\u001d"},{"keys":["weekText"],"path":"div[mx-guid=\"g2\u001f\"]","tmpl":"<%for(var a=0;a<$$.weekText.length;a++){%><span class=\"mx3e3-_mx-calendar_index_-week\"><%=$$.weekText[a]%></span><%}%>","s":"3\u001d"},{"keys":["days"],"path":"div[mx-guid=\"g3\u001f\"]","tmpl":"<%for(var b=0;b<$$.days.length;b++){%><%var c=$$.days[b]%><%for(var d=0;d<c.length;d++){%><span class=\"mx3e3-_mx-calendar_index_-day<%if(c[d].otherMonth){%> mx3e3-_mx-calendar_index_-gray<%}%><%if(c[d].disabled){%> mx3e3-_mx-calendar_index_-notallowed<%}%><%if(c[d].selected){%> mx3e3-_mx-calendar_index_-selected<%}%>\" <%if(!c[d].disabled){%> mx-click=\"\u001f\u001echoose({toMonth:<%=c[d].month%>,date:'<%=$eq(c[d].full)%>'})\" <%}%> title=\"<%=c[d].full%>\"><%=c[d].day%></span><%}%><%}%>","s":"4\u001d"},{"keys":["timeValue"],"path":"div[mx-guid=\"g4\u001f\"]","pKeys":["timeTypes","btns"],"attr":"mx-view=\"mx-time/index?time=<%@$$.timeValue%>&types=<%@$$.timeTypes%>\"","attrs":[{"n":"mx-view","v":1}]},{"keys":["id"],"path":"div[mx-guid=\"g5\u001f\"]","attr":"id=\"months_<%=$$.id%>\"","attrs":[{"n":"id","p":1}]},{"keys":["year"],"path":"h4[mx-guid=\"g6\u001f\"]","tmpl":"<%=$$.year%>","s":"7\u001d"},{"keys":["months"],"path":"div[mx-guid=\"g7\u001f\"]","tmpl":"<%for(var e=0,f;e<$$.months.length;e++){%><%f=$$.months[e]%><span class=\"mx3e3-_mx-calendar_index_-ym<%if(f.disabled){%> mx3e3-_mx-calendar_index_-notallowed<%}%><%if(f.selected){%> mx3e3-_mx-calendar_index_-selected<%}%>\" <%if(!f.disabled){%> mx-click=\"\u001f\u001epickMonth({month:'<%=$eq(f.month)%>'})\" <%}%>><%=f.month%></span><%}%>","s":"8\u001d"},{"keys":["id"],"path":"div[mx-guid=\"g8\u001f\"]","attr":"id=\"years_<%=$$.id%>\"","attrs":[{"n":"id","p":1}]},{"keys":["startYear","endYear"],"path":"h4[mx-guid=\"g9\u001f\"]","tmpl":"<%=$$.startYear%>-<%=$$.endYear%>","s":"10\u001d"},{"keys":["years"],"path":"div[mx-guid=\"ga\u001f\"]","tmpl":"<%for(var g=0,h;g<$$.years.length;g++){%><%h=$$.years[g]%><span class=\"mx3e3-_mx-calendar_index_-ym<%if(h.selected){%> mx3e3-_mx-calendar_index_-selected<%}%><%if(h.disabled){%> mx3e3-_mx-calendar_index_-notallowed<%}%><%if(!g||g==$$.years.length-1){%> mx3e3-_mx-calendar_index_-gray<%}%>\" <%if(!h.disabled){%> mx-click=\"\u001f\u001epickYear({year:'<%=$eq(h.year)%>'})\" <%}%>><%=h.year%></span><%}%>","s":"11\u001d"}],"file":"mx-calendar/index.html"},
    init(extra) {
        let me = this;
        me.$extra = extra;
    },
    update(ops) {
        ops = ops || {};
        if (!ops.selected) {
            ops.selected = new Date();
        }
        let weekStart = ops.weekStart || 0;
        let selected = DateParse(ops.selected);
        let me = this;
        let data = me.updater;
        let max = DateParse(ops.max);
        let min = DateParse(ops.min);
        let timeTypes = ops.timeTypes;
        let timeValue = selected.getHours() + ':' + selected.getMinutes() + ':' + selected.getSeconds();
        let btns = ops.btns;
        data.set({
            timeTypes,
            timeValue,
            dateValue: DateFormat(selected, 'YYYY-MM-dd'),
            btns,
            max,
            min,
            id: me.id,
            weekStart,
            weekText: GetWeekText(weekStart)
        });
        me.updateSelected(selected);
        me.updateYears();
        me.updateMonths();
        me.updateDays(true);
    },
    updateSelected(selected) {
        let me = this,
            data = me.updater;
        selected = DateParse(selected);
        if (selected) {
            data.set({
                year: selected.getFullYear(),
                month: selected.getMonth() + 1,
                selectedYear: selected.getFullYear(),
                selectedMonth: selected.getMonth() + 1,
                selected: DateFormat(selected, DefaultFormatter)
            });
        }
    },
    updateYears(render) {
        let me = this;
        let data = me.updater;
        let json = data.get();
        let year = json.year;
        let min = json.min;
        let max = json.max;
        let startYear = year - year % 10 - 1;
        let endYear = startYear + 11;
        let rows = [];
        for (let i = startYear; i <= endYear; i++) {
            rows.push({
                year: i,
                selected: i == json.selectedYear,
                disabled: YearDisabled(i, min, max)
            });
        }
        data.set({
            startYear: startYear,
            endYear: endYear,
            years: rows
        });
        if (render) {
            data.digest();
        }
    },
    updateMonths(render) {
        let rows = [],
            data = this.updater,
            json = data.get(),
            year = json.year,
            min = json.min,
            max = json.max;
        for (let i = 1; i <= 12; i++) {
            rows.push({
                month: i,
                selected: year == json.selectedYear && i == json.selectedMonth,
                disabled: MonthDisabled(year, i - 1, min, max)
            });
        }
        data.set({
            months: rows
        });
        if (render) {
            data.digest();
        }
    },
    updateDays(render) {
        let me = this;
        let trs = [];
        let data = me.updater;
        let weekStart = data.get('weekStart');
        let year = data.get('year');
        let month = data.get('month');
        let startOffset = (7 - weekStart + new Date(year, month - 1, 1).getDay()) % 7;
        let tds = [];
        let days = GetNumOfDays(year, month),
            i;
        let preDays = GetNumOfDays(year, month - 1);
        let max = data.get('max');
        let min = data.get('min');
        let selected = data.get('selected');
        let day, date, formatDay;
        for (i = 1; i <= startOffset; i++) {
            day = preDays - (startOffset - i);
            date = new Date(year, month - 2, day);
            tds.push({
                month: month - 1,
                full: DateFormat(date, DefaultFormatter),
                day: day,
                otherMonth: true,
                disabled: DateDisabled(date, min, max)
            });
        }
        for (i = 1; i <= days; i++) {
            date = new Date(year, month - 1, i);
            formatDay = DateFormat(date, DefaultFormatter);
            tds.push({
                selected: formatDay == selected,
                day: i,
                month: month,
                full: formatDay,
                disabled: DateDisabled(date, min, max)
            });
            if (((i + startOffset) % 7) === 0) {
                trs.push(tds);
                tds = [];
            }
        }
        let fillStart = tds.length; //补充
        let fillEnd = 14; //2周
        for (i = fillStart; i < fillEnd; i++) {
            day = i - fillStart + 1;
            date = new Date(year, month, day);
            tds.push({
                month: month + 1,
                day: day,
                otherMonth: true,
                full: DateFormat(date, DefaultFormatter),
                disabled: DateDisabled(date, min, max)
            });
            if ((i + 1) % 7 === 0) {
                trs.push(tds);
                tds = [];
                if (trs.length == 6) break;
            }
        }
        data.set({
            days: trs
        });
        if (render) {
            data.digest();
        }
    },
    render() {
        let me = this;
        me.update(me.$extra);
    },
    changeMonth(toNext) {
        let me = this,
            data = me.updater,
            month = data.get('month'),
            year = data.get('year');
        if (toNext) {
            month += 1;
            if (month > 12) {
                month = 1;
                year++;
            }
        } else {
            month -= 1;
            if (month < 1) {
                month = 12;
                year--;
            }
        }
        data.set({
            year: year,
            month: month
        });
        me.updateDays(true);
    },
    toDaysPannel() {
        let me = this;
        $('#years_' + me.id).removeClass('mx3e3-_mx-calendar_index_-ym-show');
        $('#months_' + me.id).removeClass('mx3e3-_mx-calendar_index_-ym-show');
        let updater = me.updater;
        let data = updater.get();
        if (data.btns) {
            let digest = false;
            if (me.$bakDateValue) {
                me.updateSelected(me.$bakDateValue);
                me.updateYears();
                me.updateMonths();
                me.updateDays();
                digest = true;
                delete me.$bakDateValue;
            }
            if (me.$bakTimeValue) {
                updater.set({
                    timeValue: me.$bakTimeValue
                });
                digest = true;
                delete me.$bakTimeValue;
            }
            if (digest) {
                updater.digest();
            }
        }
    },
    fireEvent(fromBtn) {
        let me = this;
        let data = me.updater.get();
        if (data.btns) {
            if (fromBtn) {
                $('#' + me.id).trigger({
                    type: 'change',
                    date: data.dateValue,
                    time: data.timeTypes ? data.timeValue : null
                });
            }
        } else {
            $('#' + me.id).trigger({
                type: 'change',
                date: data.dateValue,
                time: data.timeTypes ? data.timeValue : null
            });
        }
    },
    'changeMonth<click>' (e) {
        this.changeMonth(e.params.next);
    },
    'changeYear<click>' (e) {
        let me = this;
        let params = e.params;
        let data = me.updater,
            year = data.get('year');
        if (params.range) {
            year = year + (params.next ? 10 : -10);
        } else {
            year = year + (params.next ? 1 : -1);
        }
        data.set({
            year: year
        });
        if (params.range) {
            me.updateYears(true);
        } else {
            me.updateMonths(true);
        }
    },
    'showMonths<click>' () {
        let me = this;
        $('#months_' + me.id).addClass('mx3e3-_mx-calendar_index_-ym-show');
        me.updateMonths(true);
    },
    'showYears<click>' () {
        let me = this;
        $('#years_' + me.id).addClass('mx3e3-_mx-calendar_index_-ym-show');
        me.updateYears(true);
    },
    'pickYear<click>' (e) {
        let year = e.params.year;
        let me = this;
        me.updater.set({
            year: +year
        });
        $('#years_' + me.id).removeClass('mx3e3-_mx-calendar_index_-ym-show');
        me.updateMonths(true);
    },
    'pickMonth<click>' (e) {
        let month = e.params.month;
        let me = this;
        me.updater.set({
            month: +month
        });
        $('#months_' + me.id).removeClass('mx3e3-_mx-calendar_index_-ym-show');
        me.updateDays(true);
    },
    'choose<click>' (e) {
        let me = this;
        $('#days_' + me.id + ' span').removeClass('mx3e3-_mx-calendar_index_-selected');
        $(e.eventTarget).addClass('mx3e3-_mx-calendar_index_-selected');
        let data = me.updater;
        let month = data.get('month');
        let turnMonth = e.params.toMonth != month;
        me.updateSelected(e.params.date);
        if (turnMonth) {
            me.updateYears();
            me.updateMonths();
            me.updateDays(true);
        }
        if (!me.$bakDateValue) {
            me.$bakDateValue = data.get('dateValue');
        }
        data.set({
            dateValue: e.params.date
        });
        me.fireEvent();
    },
    'setTime<change>' (e) {
        e.stopPropagation();
        let me = this;
        if (!me.$bakTimeValue) {
            me.$bakTimeValue = me.updater.get('timeValue');
        }
        me.updater.set({
            timeValue: e.time
        });
        me.fireEvent();
    },
    'hide<click>' (e) {
        let me = this;
        if (e.params.enter) {
            delete me.$bakDateValue;
            delete me.$bakTimeValue;
            me.fireEvent(true);
            return;
        }
        $('#' + me.id).trigger('cancel');
    }
}, {
    parse: DateParse,
    format: DateFormat,
    dateDisabled: DateDisabled
});
});