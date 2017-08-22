/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let Dialog = require('mx-dialog/index');
module.exports = Magix.View.extend({
    tmpl: '@index.html',
    mixins: [Dialog],
    render() {
        let me = this;
        me.updater.digest();
    },
    'alert<click>' () {
        this.alert('xxx');
    },
    'confirm<click>' () {
        this.confirm('xxx');
    },
    'view<click>' () {
        this.mxDialog('@../mx-popover/index',{
            width:900
        });
    }
});