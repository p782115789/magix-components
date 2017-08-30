/*
    generate by magix-combine@3.5.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-calendar/__test__/index',["magix","mx-gtip/index","../index"],function(require,exports,module){
/*Magix,GTip*/
require("../index");
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let GTip = require('mx-gtip/index');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-calendar</h2><h3>默认情形</h3><div class=\"mx3e3-_mx-style_index_-pt20 mx3e3-_mx-style_index_-clearfix\"><div mx-view=\"mx-calendar/index\"></div></div><div class=\"mx3e3-_mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;div mx-view=\"app/gallery/mx-calendar/index\"&gt;&lt;/div&gt;</pre></div><h3 class=\"mx3e3-_mx-style_index_-mt30\">默认选中某天</h3><div class=\"mx3e3-_mx-style_index_-pt20 mx3e3-_mx-style_index_-clearfix\"><div mx-view=\"mx-calendar/index?selected=2018-01-01\" view-selected></div></div><div class=\"mx3e3-_mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;div mx-view=\"app/gallery/mx-calendar/index\"\n    view-selected=\"2018-01-01\"\n&gt;&lt;/div&gt;</pre></div><h3 class=\"mx3e3-_mx-style_index_-mt30\">设置可选择的范围</h3><div class=\"mx3e3-_mx-style_index_-pt20 mx3e3-_mx-style_index_-clearfix\"><div mx-view=\"mx-calendar/index?min=2017-08-05&max=2017-08-22&selected=2017-08-12\" view-min view-max view-selected></div></div><div class=\"mx3e3-_mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;div mx-view=\"app/gallery/mx-calendar/index\"\n    view-min=\"2017-08-05\"\n    view-max=\"2017-08-22\"\n    view-selected=\"2017-08-12\"\n&gt;&lt;/div&gt;</pre></div><h3 class=\"mx3e3-_mx-style_index_-mt30\">设置周二为一周的开始</h3><div class=\"mx3e3-_mx-style_index_-pt20 mx3e3-_mx-style_index_-clearfix\"><div mx-view=\"mx-calendar/index?weekStart=<%@ 2%>\" view-week-start></div></div><div class=\"mx3e3-_mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;div mx-view=\"app/gallery/mx-calendar/index\"\n    view-week-start=\"&lt;%@ 2 %&gt;\"\n&gt;&lt;/div&gt;</pre></div><h3 class=\"mx3e3-_mx-style_index_-mt30\">带时分秒</h3><div class=\"mx3e3-_mx-style_index_-pt20 mx3e3-_mx-style_index_-clearfix\"><div mx-view=\"mx-calendar/index?timeTypes=all\" view-time-types></div></div><div class=\"mx3e3-_mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;div mx-view=\"app/gallery/mx-calendar/index\"\n    view-time-types=\"all\"\n&gt;&lt;/div&gt;</pre></div><h3 class=\"mx3e3-_mx-style_index_-mt30\">带时分秒的选中</h3><div class=\"mx3e3-_mx-style_index_-pt20 mx3e3-_mx-style_index_-clearfix\"><div mx-view=\"mx-calendar/index?timeTypes=all&selected=2018-08-08%2018%3A08%3A20\" view-time-types view-selected></div></div><div class=\"mx3e3-_mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;div mx-view=\"app/gallery/mx-calendar/index\"\n    view-time-types=\"all\"\n    view-selected=\"2018-08-08 18:08:20\"\n&gt;&lt;/div&gt;</pre></div><h3 class=\"mx3e3-_mx-style_index_-mt30\">带时分秒,只能选择小时和分钟</h3><div class=\"mx3e3-_mx-style_index_-pt20 mx3e3-_mx-style_index_-clearfix\"><div mx-view=\"mx-calendar/index?timeTypes=hour%2Cminute\" view-time-types></div></div><div class=\"mx3e3-_mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;div mx-view=\"app/gallery/mx-calendar/index\"\n    view-time-types=\"hour,minute\"\n&gt;&lt;/div&gt;</pre></div><h3 class=\"mx3e3-_mx-style_index_-mt30\">change事件</h3><div class=\"mx3e3-_mx-style_index_-pt20 mx3e3-_mx-style_index_-clearfix\"><div mx-view=\"mx-calendar/index?timeTypes=all&selected=2018-08-08%2018%3A08%3A20\" view-time-types view-selected mx-change=\"\u001f\u001eshowDatetime()\"></div></div><div class=\"mx3e3-_mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;div mx-view=\"app/gallery/mx-calendar/index\"\n    view-time-types=\"all\"\n    view-selected=\"2018-08-08 18:08:20\"\n    mx-change=\"showDatetime()\"\n&gt;&lt;/div&gt;</pre><div class=\"mx3e3-_mx-style_index_-pt10\">Javascript Code:</div><pre>let Magix = require('magix');\nlet GTip = require('mx-gtip/index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    'showDatetime&lt;change&gt;' (e) {\n        this.gtipRT('日期：' + e.date + '，时间：' + e.time);\n    }\n});</pre></div>","subs":[],"file":"mx-calendar/__test__/index.html"},
    mixins: [GTip],
    render() {
        let me = this;
        me.updater.digest();
    },
    'showDatetime<change>' (e) {
        this.gtipRT('日期：' + e.date + '，时间：' + e.time);
    }
});
});