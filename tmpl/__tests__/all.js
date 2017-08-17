/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
Magix.applyStyle('@scoped.style');
Magix.applyStyle('@all.css');
module.exports = Magix.View.extend({
    tmpl: '@all.html',
    init() {
        this.observeLocation({
            path: true
        });
    },
    render() {
        let me = this;
        let loc = Magix.Router.parse();
        let view = loc.path;
        me.updater.digest({
            view: '__tests__' + view
        });
    }
});