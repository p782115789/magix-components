/*
    generate by magix-combine@3.5.6: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-color/__test__/index',["magix","../index","../picker"],function(require,exports,module){
/*Magix*/
require("../index");
require("../picker");
/*
ver:1.0.0
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-color</h2><h3>默认情形</h3><div class=\"mx3e3_mx-style_index_-pt20 mx3e3_mx-style_index_-clearfix\"><div mx-view=\"mx-color/index\"></div></div><div class=\"mx3e3_mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;div mx-view=\"mx-color/index\"&gt;&lt;/div&gt;</pre></div><h3 class=\"mx3e3_mx-style_index_-mt30\">颜色选择</h3><div class=\"mx3e3_mx-style_index_-pt20 mx3e3_mx-style_index_-clearfix\"><input mx-view=\"mx-color/picker\" class=\"mx3e3_mx-style_index_-input\"></div><div class=\"mx3e3_mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;input mx-view=\"mx-color/picker\" class=\"input\" /&gt;</pre></div>","subs":[],"file":"mx-color/__test__/index.html"},
    render() {
        let me = this;
        me.updater.digest();
    }
});
});