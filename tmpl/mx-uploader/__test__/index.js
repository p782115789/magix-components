/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
module.exports = Magix.View.extend({
    tmpl: '@index.html',
    render() {
        let me = this;
        me.updater.digest();
    },
    'showError<error>' (e) {
        console.log(e.error);
    },
    'showProgress<progress>' (e) {
        console.log(e.percent);
    }
});