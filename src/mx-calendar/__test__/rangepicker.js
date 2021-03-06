/*
    generate by magix-combine@3.5.6: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-calendar/__test__/rangepicker',["magix","mx-gtip/index","../rangepicker"],function(require,exports,module){
/*Magix,GTip*/
require("../rangepicker");
/*
ver:1.0.0
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let GTip = require('mx-gtip/index');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-calendar</h2><h3>默认情形</h3><div class=\"mx3e3_mx-style_index_-pt20 mx3e3_mx-style_index_-clearfix\"><input mx-view=\"mx-calendar/rangepicker\" class=\"mx3e3_mx-style_index_-input\" placeholder=\"请选择日期范围\"></div><div class=\"mx3e3_mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;input mx-view=\"app/gallery/mx-calendar/rangepicker\" class=\"input\" placeholder=\"请选择日期范围\"&gt;</pre></div><h3 class=\"mx3e3_mx-style_index_-mt30\">指定开始结束日期</h3><div class=\"mx3e3_mx-style_index_-pt20 mx3e3_mx-style_index_-clearfix\"><input class=\"mx3e3_mx-style_index_-input\" placeholder=\"请选择日期范围\" mx-view=\"mx-calendar/rangepicker?start=2018-01-01&end=2019-01-01\" view-start view-end></div><div class=\"mx3e3_mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;input class=\"input\" placeholder=\"请选择日期范围\"\n    mx-view=\"app/gallery/mx-calendar/rangepicker\"\n    view-start=\"2018-01-01\"\n    view-end=\"2019-01-01\"&gt;</pre></div><h3 class=\"mx3e3_mx-style_index_-mt30\">不显示快捷日期</h3><div class=\"mx3e3_mx-style_index_-pt20 mx3e3_mx-style_index_-clearfix\"><input class=\"mx3e3_mx-style_index_-input\" placeholder=\"请选择日期范围\" mx-view=\"mx-calendar/rangepicker?shortcuts=false\" view-shortcuts></div><div class=\"mx3e3_mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;input class=\"input\" placeholder=\"请选择日期范围\"\n    mx-view=\"app/gallery/mx-calendar/datepicker\"\n    view-shortcuts=\"false\"&gt;</pre></div><h3 class=\"mx3e3_mx-style_index_-mt30\">设置可选择的范围</h3><div class=\"mx3e3_mx-style_index_-pt20 mx3e3_mx-style_index_-clearfix\"><input mx-view=\"mx-calendar/rangepicker?min=2017-08-05&max=2017-08-22&start=2017-08-08&end=2017-08-20&shortcuts=false\" view-min view-max view-start view-end view-shortcuts class=\"mx3e3_mx-style_index_-input\"></div><div class=\"mx3e3_mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;input mx-view=\"app/gallery/mx-calendar/rangepicker\"\n    view-min=\"2017-08-05\"\n    view-max=\"2017-08-22\"\n    view-start=\"2017-08-08\"\n    view-end=\"2017-08-20\"\n    view-shortcuts=\"false\"\n    class=\"input\"\n&gt;</pre></div><h3 class=\"mx3e3_mx-style_index_-mt30\">右上对齐</h3><div class=\"mx3e3_mx-style_index_-pt20 mx3e3_mx-style_index_-clearfix\"><input mx-view=\"mx-calendar/rangepicker?align=right&placement=top\" view-align view-placement class=\"mx3e3_mx-style_index_-input\"></div><div class=\"mx3e3_mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;input mx-view=\"app/gallery/mx-calendar/rangepicker\"\n    view-align=\"right\"\n    view-placement=\"top\"\n    class=\"input\"\n&gt;</pre></div><h3 class=\"mx3e3_mx-style_index_-mt30\">带时分秒</h3><div class=\"mx3e3_mx-style_index_-pt20 mx3e3_mx-style_index_-clearfix\"><input mx-view=\"mx-calendar/rangepicker?timeTypes=all\" view-time-types class=\"mx3e3_mx-style_index_-input\"></div><div class=\"mx3e3_mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;input mx-view=\"app/gallery/mx-calendar/rangepicker\"\n    view-time-types=\"all\"\n    class=\"input\"\n&gt;</pre></div><h3 class=\"mx3e3_mx-style_index_-mt30\">带时分秒的选中</h3><div class=\"mx3e3_mx-style_index_-pt20 mx3e3_mx-style_index_-clearfix\"><input mx-view=\"mx-calendar/rangepicker?timeTypes=all&start=2017-07-07%2018%3A08%3A08&end=2017-12-30%2015%3A15%3A15\" view-time-types view-start view-end class=\"mx3e3_mx-style_index_-input\"></div><div class=\"mx3e3_mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;input mx-view=\"app/gallery/mx-calendar/rangepicker\"\n    view-time-types=\"all\"\n    view-start=\"2017-07-07 18:08:08\"\n    view-end=\"2017-12-30 15:15:15\"\n    class=\"input\"\n&gt;</pre></div><h3 class=\"mx3e3_mx-style_index_-mt30\">change事件</h3><div class=\"mx3e3_mx-style_index_-pt20 mx3e3_mx-style_index_-clearfix\"><input mx-view=\"mx-calendar/rangepicker?timeTypes=all\" view-time-types mx-change=\"\u001f\u001eshowDatetime()\" class=\"mx3e3_mx-style_index_-input\"></div><div class=\"mx3e3_mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;input mx-view=\"app/gallery/mx-calendar/rangepicker\"\n    view-time-types=\"all\"\n    mx-change=\"showDatetime()\"\n    class=\"input\"\n&gt;</pre><div class=\"mx3e3_mx-style_index_-pt10\">Javascript Code:</div><pre>let Magix = require('magix');\nlet GTip = require('mx-gtip/index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@rangepicker.html',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    'showDatetime&lt;change&gt;' (e) {\n        console.log(e.dates);\n        this.gtipRT('日期：' + JSON.stringify(e.dates));\n    }\n});</pre></div>","subs":[],"file":"mx-calendar/__test__/rangepicker.html"},
    mixins: [GTip],
    render() {
        let me = this;
        me.updater.digest();
    },
    'showDatetime<change>' (e) {
        console.log(e.dates);
        this.gtipRT('日期：' + JSON.stringify(e.dates));
    }
});
});