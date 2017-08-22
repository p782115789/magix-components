/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let $ = require('$');
Magix.applyStyle('@scoped.style');
Magix.applyStyle('@all.css');
module.exports = Magix.View.extend({
    tmpl: '@all.html',
    init() {
        this.observeLocation({
            path: true
        });
        this.owner.on('created', () => {
            $('pre').each((i, it) => {
                hljs.highlightBlock(it);
            });
        });
    },
    render() {
        let me = this;
        let loc = Magix.Router.parse();
        let view = loc.path;
        view = view.slice(1);
        let i = view.indexOf('/');
        view = view.slice(0, i) + '/__test__' + view.slice(i);
        me.updater.digest({
            view: view
        });
    }
});
'@../mx-calendar/__test__/index.js';
'@../mx-taginput/__test__/index.js';