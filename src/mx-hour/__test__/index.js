/*
    generate by magix-combine@3.5.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-hour/__test__/index',["magix","../index","../day","../week"],function(require,exports,module){
/*Magix*/
require("../index");
require("../day");
require("../week");
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-hour</h2><h3>小时选取基础组件</h3><div class=\"mx3e3-_mx-style_index_-pt20 mx3e3-_mx-style_index_-clearfix\"><div mx-view=\"mx-hour/index?range=00001111011\"></div></div><div class=\"mx3e3-_mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;div mx-view=\"app/gallery/mx-hour/index\" view-range=\"00001111011\"&lt;/div&gt;</pre></div><h3 class=\"mx3e3-_mx-style_index_-mt30\">天小时选取组件</h3><div class=\"mx3e3-_mx-style_index_-pt20 mx3e3-_mx-style_index_-clearfix\"><div mx-view=\"mx-hour/day?hours=00001111011\"></div></div><div class=\"mx3e3-_mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;div mx-view=\"app/gallery/mx-hour/day\" view-hours=\"00001111011\"&lt;/div&gt;</pre></div><h3 class=\"mx3e3-_mx-style_index_-mt30\">周小时选取组件</h3><div class=\"mx3e3-_mx-style_index_-pt20 mx3e3-_mx-style_index_-clearfix\"><div mx-view=\"mx-hour/week?days=<%@['','001111','','','00000000111111001']%>\"></div></div><div class=\"mx3e3-_mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;div mx-view=\"app/gallery/mx-hour/week\" view-days=\"&lt;%@['','001111','','','00000000111111001']%&gt;\"&gt;&lt;/div&gt;</pre></div>","subs":[],"file":"mx-hour/__test__/index.html"},
    render() {
        let me = this;
        me.updater.digest();
    }
});
});