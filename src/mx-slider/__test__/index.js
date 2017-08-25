/*
    generate by magix-combine@3.5.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-slider/__test__/index',["magix","mx-gtip/index","../index"],function(require,exports,module){
/*Magix,GTip*/
require("../index");
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let GTip = require('mx-gtip/index');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-slider</h2><h3>默认情形</h3><div class=\"mx3e3-_mx-style_index_-pt20 mx3e3-_mx-style_index_-clearfix\"><div mx-view=\"mx-slider/index?max=200&min=100&value=130&step=0.05\" class=\"mx3e3-_mx-style_index_-fl\"></div></div><div class=\"mx3e3-_mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;div mx-view=\"mx-slider/index\"\n    view-max=\"200\"\n    view-min=\"100\"\n    view-value=\"130\"\n    view-step=\"0.05\"\n    class=\"fl\"\n&gt;&lt;/div&gt;</pre></div><h3 class=\"mx3e3-_mx-style_index_-mt30\">禁用</h3><div class=\"mx3e3-_mx-style_index_-pt20 mx3e3-_mx-style_index_-clearfix\"><div mx-view=\"mx-slider/index?max=200&min=100&value=130&step=0.05&disabled=true\" class=\"mx3e3-_mx-style_index_-fl\"></div></div><div class=\"mx3e3-_mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;div mx-view=\"mx-slider/index\"\n    view-max=\"200\"\n    view-min=\"100\"\n    view-value=\"130\"\n    view-step=\"0.05\"\n    view-disabled=\"true\"\n    class=\"fl\"\n&gt;&lt;/div&gt;</pre></div><h3 class=\"mx3e3-_mx-style_index_-mt30\">响应change事件</h3><div class=\"mx3e3-_mx-style_index_-pt20 mx3e3-_mx-style_index_-clearfix\"><div mx-view=\"mx-slider/index?max=200&min=0&value=130&step=5\" mx-change=\"\u001f\u001eshowValue()\" class=\"mx3e3-_mx-style_index_-fl\"></div></div><div class=\"mx3e3-_mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;div mx-view=\"mx-slider/index\"\n    view-max=\"200\"\n    view-min=\"100\"\n    view-value=\"130\"\n    view-step=\"5\"\n    mx-change=\"showValue()\"\n    class=\"fl\"\n&gt;&lt;/div&gt;</pre><div class=\"mx3e3-_mx-style_index_-pt10\">Javascript Code:</div><pre>let Magix = require('magix');\nlet GTip = require('app/gallery/mx-gtip/index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    'showValue&lt;change&gt;' (e) {\n        this.gtipRT('value:' + e.value);\n    }\n});</pre></div>","subs":[],"file":"mx-slider/__test__/index.html"},
    mixins: [GTip],
    render() {
        let me = this;
        me.updater.digest();
    },
    'showValue<change>' (e) {
        this.gtipRT('value:' + e.value);
    }
});
});