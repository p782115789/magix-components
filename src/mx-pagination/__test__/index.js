/*
    generate by magix-combine@3.5.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-pagination/__test__/index',["magix","../index"],function(require,exports,module){
/*Magix*/
require("../index");
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-pagination</h2><h3>完整模式</h3><div class=\"mx3e3-_mx-style_index_-pt20 mx3e3-_mx-style_index_-clearfix\"><div mx-view=\"mx-pagination/index?total=2000&step=5&page=15\" view-total view-step view-page class=\"mx3e3-_mx-style_index_-fl\" style=\"width:1200px\"></div></div><div class=\"mx3e3-_mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;div mx-view=\"app/gallery/mx-pagination/index\"\n    view-total=\"2000\"\n    view-step=\"5\"\n    view-page=\"15\" class=\"fl\"&gt;\n&lt;/div&gt;</pre></div><h3 class=\"mx3e3-_mx-style_index_-mt30\">简单模式</h3><div class=\"mx3e3-_mx-style_index_-pt20 mx3e3-_mx-style_index_-clearfix\"><div mx-view=\"mx-pagination/index?total=2000&step=5&simplify=<%@true%>&page=15\" view-total view-step view-simplify view-page class=\"mx3e3-_mx-style_index_-fl\"></div></div><div class=\"mx3e3-_mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;div mx-view=\"app/gallery/mx-pagination/index\"\n    view-total=\"2000\"\n    view-step=\"5\"\n    view-simplify=\"&lt;%@ true %&gt;\"\n    view-page=\"15\" class=\"fl\"&gt;\n&lt;/div&gt;</pre></div><h3 class=\"mx3e3-_mx-style_index_-mt30\">迷你模式</h3><div class=\"mx3e3-_mx-style_index_-pt20 mx3e3-_mx-style_index_-clearfix\"><div mx-view=\"mx-pagination/index?total=2000&step=5&mini=<%@true%>&page=15\" view-total view-step view-mini view-page class=\"mx3e3-_mx-style_index_-fl\"></div></div><div class=\"mx3e3-_mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;div mx-view=\"app/gallery/mx-pagination/index\"\n    view-total=\"2000\"\n    view-step=\"5\"\n    view-mini=\"&lt;%@ true %&gt;\"\n    view-page=\"15\" class=\"fl\"&gt;\n&lt;/div&gt;</pre></div><h3 class=\"mx3e3-_mx-style_index_-mt30\">监听change事件</h3><div class=\"mx3e3-_mx-style_index_-pt20 mx3e3-_mx-style_index_-clearfix\"><div mx-view=\"mx-pagination/index?total=2000&step=5&page=15\" view-total view-step view-page mx-change=\"\u001f\u001eshow()\" class=\"mx3e3-_mx-style_index_-fl\"></div></div><div class=\"mx3e3-_mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;div mx-view=\"app/gallery/mx-pagination/index\"\n    view-total=\"2000\"\n    view-step=\"5\"\n    view-page=\"15\" mx-change=\"show()\" class=\"fl\"&gt;\n&lt;/div&gt;</pre><div class=\"mx3e3-_mx-style_index_-pt10\">Javascript Code:</div><pre>let Magix = require('magix');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    'show&lt;change&gt;' (e) {\n        console.log(e.page, e.size);\n    }\n});</pre></div>","subs":[],"file":"mx-pagination/__test__/index.html"},
    render() {
        let me = this;
        me.updater.digest();
    },
    'show<change>' (e) {
        console.log(e.page, e.size);
    }
});
});