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
            random: 1,
            list: [111111111111111, 222222222222222, 333333333333, 44444444444444]
        });
    },
    'refresh<click>' () {
        this.updater.digest({
            random: Math.random()
        });
    },
    'isValid<click>' () {
        console.log(this.isValid());
    },
    'test<focusout>' (e) {
        console.log(e);
    }
});