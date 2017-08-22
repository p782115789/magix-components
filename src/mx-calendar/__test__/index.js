/*
    generate by magix-combine@3.5.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-calendar/__test__/index',["magix"],function(require,exports,module){
/*Magix*/

/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
Magix.applyStyle("mx3e3-_mx-calendar___test___index_","@charset \"UTF-8\";");
module.exports = Magix.View.extend({
    tmpl: {"html":"<div class=\"mx3e3-_mx-style_index_-fl\" mx-view=\"mx-calendar/index?weekStart=<%@1%>&timeTypes=hour%2Cminute&selected=2016-3-2%2012%3A12%3A12\" mx-change=\"\u001f\u001eshow();\"></div><div class=\"mx3e3-_mx-style_index_-fl\" mx-view=\"mx-calendar/index?min=2017-03-30\" mx-change=\"\u001f\u001eshow();\"></div><input class=\"mx3e3-_mx-style_index_-input\" mx-view=\"mx-calendar/datepicker?timeTypes=all\" mx-change=\"\u001f\u001eshow()\" value=\"2017-11-22 14:55:10\"> <input class=\"mx3e3-_mx-style_index_-input\" value=\"2018-09-20\" mx-view=\"mx-calendar/datepicker\"> <input class=\"mx3e3-_mx-style_index_-input\" mx-view=\"mx-calendar/rangepicker?placement=bottom&align=left&timeTypes=all&end=2019-3-2%2011%3A9%3A9\"> <input class=\"mx3e3-_mx-style_index_-input\" mx-view=\"mx-calendar/rangepicker?placement=bottom&align=right&end=2019-3-2%2011%3A9%3A9\">","subs":[],"file":"mx-calendar/__test__/index.html"},
    render() {
        let me = this;
        me.updater.digest();
    },
    'show<change>' (e) {
        console.log(e.date, e.time);
    }
});
});