/*
    generate by magix-combine@3.5.6: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-time/index',["magix","$"],function(require,exports,module){
/*Magix,$*/

/*
ver:1.0.0
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let $ = require('$');
Magix.applyStyle("mx3e3_mx-time_index_",".mx3e3_mx-time_index_-group {\n  width: 63px;\n  float: left;\n}\n.mx3e3_mx-time_index_-ipt {\n  font-size: 30px;\n  height: 50px;\n  text-align: center;\n  margin-bottom: 10px;\n}\n.mx3e3_mx-time_index_-o-btn {\n  width: 28px;\n  height: 28px;\n  padding: 0;\n}\n.mx3e3_mx-time_index_-spliter {\n  font-size: 27px;\n  float: left;\n  line-height: 32px;\n  margin-top: 8px;\n  font-weight: bolder;\n  display: inline-block;\n  width: 30px;\n  text-align: center;\n}\n");
let parseTime = time => {
    if (!time) {
        let d = new Date();
        time = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
    }
    let ts = time.split(':');
    if (ts.length != 3) {
        throw new Error('bad time:' + time);
    }
    return {
        hour: parseInt(ts[0], 10) || 0,
        minute: parseInt(ts[1], 10) || 0,
        second: parseInt(ts[2], 10) || 0
    };
};
let parseType = type => {
    if (!type) {
        type = 'all';
    }
    let enables = {
        hour: true,
        minute: true,
        second: true
    };
    if (type != 'all') {
        for (let p in enables) {
            if (type.indexOf(p) === -1) {
                delete enables[p];
            }
        }
    }
    return enables;
};
let format = t => {
    if (t < 10) return '0' + t;
    return t;
};
module.exports = Magix.View.extend({
    tmpl: {"html":"<div class=\"mx3e3_mx-time_index_-group\"><input mx-guid=\"g0\u001f\" class=\"mx3e3_mx-style_index_-input mx3e3_mx-time_index_-ipt\" mx-change=\"\u001f\u001estop()\" value=\"<%=$$.format($$.time.hour)%>\" <%if($$.types.hour){%> mx-focusout=\"\u001f\u001eset({type:'hour'})\" <%}else{%> disabled=\"disabled\" <%}%> maxlength=\"2\"><button mx-guid=\"g1\u001f\" type=\"button\" class=\"mx3e3_mx-style_index_-btn mx3e3_mx-time_index_-o-btn mx3e3_mx-style_index_-fl\" <%if($$.types.hour){%> mx-click=\"\u001f\u001echange({type:'hour'})\" <%}else{%> disabled=\"disabled\" <%}%> tabindex=\"-1\"><i class=\"mx3e3_mx-style_index_-iconfont\">&#xe6df;</i></button><button mx-guid=\"g2\u001f\" type=\"button\" class=\"mx3e3_mx-style_index_-btn mx3e3_mx-time_index_-o-btn mx3e3_mx-style_index_-fr\" <%if($$.types.hour){%> mx-click=\"\u001f\u001echange({type:'hour',inc:true})\" <%}else{%> disabled=\"disabled\" <%}%> tabindex=\"-1\"><i class=\"mx3e3_mx-style_index_-iconfont\">&#xe661;</i></button></div><span class=\"mx3e3_mx-time_index_-spliter\">:</span><div class=\"mx3e3_mx-time_index_-group\"><input mx-guid=\"g3\u001f\" class=\"mx3e3_mx-style_index_-input mx3e3_mx-time_index_-ipt\" mx-change=\"\u001f\u001estop()\" value=\"<%=$$.format($$.time.minute)%>\" <%if($$.types.minute){%> mx-focusout=\"\u001f\u001eset({type:'minute'})\" <%}else{%> disabled=\"disabled\" <%}%> maxlength=\"2\"><button mx-guid=\"g4\u001f\" type=\"button\" class=\"mx3e3_mx-style_index_-btn mx3e3_mx-time_index_-o-btn mx3e3_mx-style_index_-fl\" <%if($$.types.minute){%> mx-click=\"\u001f\u001echange({type:'minute'})\" <%}else{%> disabled=\"disabled\" <%}%> tabindex=\"-1\"><i class=\"mx3e3_mx-style_index_-iconfont\">&#xe6df;</i></button><button mx-guid=\"g5\u001f\" type=\"button\" class=\"mx3e3_mx-style_index_-btn mx3e3_mx-time_index_-o-btn mx3e3_mx-style_index_-fr\" <%if($$.types.minute){%> mx-click=\"\u001f\u001echange({type:'minute',inc:true})\" <%}else{%> disabled=\"disabled\" <%}%> tabindex=\"-1\"><i class=\"mx3e3_mx-style_index_-iconfont\">&#xe661;</i></button></div><span class=\"mx3e3_mx-time_index_-spliter\">:</span><div class=\"mx3e3_mx-time_index_-group\"><input mx-guid=\"g6\u001f\" class=\"mx3e3_mx-style_index_-input mx3e3_mx-time_index_-ipt\" mx-change=\"\u001f\u001estop()\" value=\"<%=$$.format($$.time.second)%>\" <%if($$.types.second){%> mx-focusout=\"\u001f\u001eset({type:'second'})\" <%}else{%> disabled=\"disabled\" <%}%> maxlength=\"2\"><button mx-guid=\"g7\u001f\" type=\"button\" class=\"mx3e3_mx-style_index_-btn mx3e3_mx-time_index_-o-btn mx3e3_mx-style_index_-fl\" <%if($$.types.second){%> mx-click=\"\u001f\u001echange({type:'second'})\" <%}else{%> disabled=\"disabled\" <%}%> tabindex=\"-1\"><i class=\"mx3e3_mx-style_index_-iconfont\">&#xe6df;</i></button><button mx-guid=\"g8\u001f\" type=\"button\" class=\"mx3e3_mx-style_index_-btn mx3e3_mx-time_index_-o-btn mx3e3_mx-style_index_-fr\" <%if($$.types.second){%> mx-click=\"\u001f\u001echange({type:'second',inc:true})\" <%}else{%> disabled=\"disabled\" <%}%> tabindex=\"-1\"><i class=\"mx3e3_mx-style_index_-iconfont\">&#xe661;</i></button></div>","subs":[{"keys":["time","types"],"path":"input[mx-guid=\"g0\u001f\"]","attr":"value=\"<%=$$.format($$.time.hour)%>\" <%if($$.types.hour){%> mx-focusout=\"\u001f\u001eset({type:'hour'})\" <%}else{%> disabled=\"disabled\" <%}%>","attrs":[{"n":"value","q":1,"p":1},{"n":"mx-focusout"},{"n":"disabled","b":1,"p":1}]},{"keys":["types"],"path":"button[mx-guid=\"g1\u001f\"]","attr":"<%if($$.types.hour){%> mx-click=\"\u001f\u001echange({type:'hour'})\" <%}else{%> disabled=\"disabled\" <%}%>","attrs":[{"n":"mx-click"},{"n":"disabled","b":1,"p":1}]},{"keys":["types"],"path":"button[mx-guid=\"g2\u001f\"]","attr":"<%if($$.types.hour){%> mx-click=\"\u001f\u001echange({type:'hour',inc:true})\" <%}else{%> disabled=\"disabled\" <%}%>","attrs":[{"n":"mx-click"},{"n":"disabled","b":1,"p":1}]},{"keys":["time","types"],"path":"input[mx-guid=\"g3\u001f\"]","attr":"value=\"<%=$$.format($$.time.minute)%>\" <%if($$.types.minute){%> mx-focusout=\"\u001f\u001eset({type:'minute'})\" <%}else{%> disabled=\"disabled\" <%}%>","attrs":[{"n":"value","q":1,"p":1},{"n":"mx-focusout"},{"n":"disabled","b":1,"p":1}]},{"keys":["types"],"path":"button[mx-guid=\"g4\u001f\"]","attr":"<%if($$.types.minute){%> mx-click=\"\u001f\u001echange({type:'minute'})\" <%}else{%> disabled=\"disabled\" <%}%>","attrs":[{"n":"mx-click"},{"n":"disabled","b":1,"p":1}]},{"keys":["types"],"path":"button[mx-guid=\"g5\u001f\"]","attr":"<%if($$.types.minute){%> mx-click=\"\u001f\u001echange({type:'minute',inc:true})\" <%}else{%> disabled=\"disabled\" <%}%>","attrs":[{"n":"mx-click"},{"n":"disabled","b":1,"p":1}]},{"keys":["time","types"],"path":"input[mx-guid=\"g6\u001f\"]","attr":"value=\"<%=$$.format($$.time.second)%>\" <%if($$.types.second){%> mx-focusout=\"\u001f\u001eset({type:'second'})\" <%}else{%> disabled=\"disabled\" <%}%>","attrs":[{"n":"value","q":1,"p":1},{"n":"mx-focusout"},{"n":"disabled","b":1,"p":1}]},{"keys":["types"],"path":"button[mx-guid=\"g7\u001f\"]","attr":"<%if($$.types.second){%> mx-click=\"\u001f\u001echange({type:'second'})\" <%}else{%> disabled=\"disabled\" <%}%>","attrs":[{"n":"mx-click"},{"n":"disabled","b":1,"p":1}]},{"keys":["types"],"path":"button[mx-guid=\"g8\u001f\"]","attr":"<%if($$.types.second){%> mx-click=\"\u001f\u001echange({type:'second',inc:true})\" <%}else{%> disabled=\"disabled\" <%}%>","attrs":[{"n":"mx-click"},{"n":"disabled","b":1,"p":1}]}],"file":"mx-time/index.html"},
    init(extra) {
        let me = this;
        let time = parseTime(extra.time);
        let types = parseType(extra.types);
        me.updater.set({
            format,
            time,
            types
        });
    },
    render() {
        let me = this;
        me.updater.digest();
    },
    fireEvent() {
        let node = $('#' + this.id);
        let time = this.updater.get('time');
        node.trigger({
            type: 'change',
            time: format(time.hour) + ':' + format(time.minute) + ':' + format(time.second)
        });
    },
    val(v) {
        let updater = this.updater;
        if (v) {
            let time = parseTime(v);
            updater.digest({
                time
            });
        }
        return updater.get('time');
    },
    'change<click>' (e) {
        let type = e.params.type;
        let increase = e.params.inc;
        let time = this.updater.get('time');
        let max = type == 'hour' ? 23 : 59;
        if (increase) {
            time[type]++;
        } else {
            time[type]--;
        }
        if (time[type] > max) {
            time[type] = 0;
        } else if (time[type] < 0) {
            time[type] = max;
        }
        this.updater.digest({
            time
        });
        this.fireEvent();
    },
    'set<focusout>' (e) {
        let type = e.params.type;
        let max = type == 'hour' ? 23 : 59;
        let value = e.eventTarget.value;
        let v = parseInt(value, 10);
        let time = this.updater.get('time');
        if (v || v === 0) {
            if (v < 0) v = 0;
            else if (v > max) v = max;
            if (v !== time[type]) {
                time[type] = v;
                this.updater.digest({
                    time
                });
                this.fireEvent();
            } else {
                e.eventTarget.value = format(v);
            }
        } else {
            e.eventTarget.value = time[type];
        }
    },
    'stop<change>' (e) {
        e.stopPropagation();
    }
});
});