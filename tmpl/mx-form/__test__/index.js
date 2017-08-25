/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let Form = require('../index');
module.exports = Magix.View.extend({
    tmpl: '@index.html',
    mixins: [Form],
    render() {
        let me = this;
        me.updater.digest({
            checkbox: [],
            range: 0,
            range1: [230, 300],
            list: [111111111111111, 222222222222222, 333333333333, 44444444444444]
        });
    },
    'isValid<click>' () {
        console.log(this.isValid());
    },
    'getData<click>' () {
        let src = this.updater.get();
        let data = this.fromKeys(src, 'name,day,time,tags,checkbox,radio,dateStart,dateEnd,range,range1,mark');
        console.log(data);
    }
});