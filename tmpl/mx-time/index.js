/*
ver:1.0.0
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let $ = require('$');
Magix.applyStyle('@index.less');
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
    tmpl: '@index.html',
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