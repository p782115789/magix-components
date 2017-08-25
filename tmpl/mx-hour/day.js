/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let $ = require('$');
let Core = require('./index');
Magix.applyStyle('@day.less');
module.exports = Magix.View.extend({
    tmpl: '@day.html',
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