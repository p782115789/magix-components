/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
Magix.applyStyle('@index.css');
module.exports = Magix.View.extend({
    tmpl: '@index.html',
    render() {
        let me = this;
        me.updater.digest({
            list1: ['分类1', '分类2', '分类3', '分类4', '分类5', '分类6', '分类7', '分类8', '分类9', '分类10']
        });
    }
});