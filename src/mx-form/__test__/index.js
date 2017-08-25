/*
    generate by magix-combine@3.5.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-form/__test__/index',["magix","../index","mx-dropdown/index","mx-taginput/index"],function(require,exports,module){
/*Magix,Form*/
require("mx-dropdown/index");
require("mx-taginput/index");
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let Form = require('../index');
module.exports = Magix.View.extend({
    tmpl: {"html":"<div style=\"width:600px\"><div class=\"mx3e3-_mx-style_index_-form-item mx3e3-_mx-style_index_-clearfix\"><label class=\"mx3e3-_mx-style_index_-form-label\">活动名称：</label><div class=\"mx3e3-_mx-style_index_-form-content\"><input mx-guid=\"g0\u001f\" class=\"mx3e3-_mx-style_index_-input\" placeholder=\"请填写活动名称\" value=\"<%=$$.name%>\" mx-beid=\"\u001f\u001e0\" mx-change=\"\u001f\u001esyncValue({p:'name',f:{required:true,blength:[20,50]}})\" mx-focusin=\"\u001f\u001esyncValue({p:'name',f:{required:true,blength:[20,50]}})\" mx-focusout=\"\u001f\u001esyncValue({p:'name',f:{required:true,blength:[20,50]}})\"></div></div><div class=\"mx3e3-_mx-style_index_-form-item\"><label class=\"mx3e3-_mx-style_index_-form-label\">活动时间：</label><div class=\"mx3e3-_mx-style_index_-form-content\"><div mx-guid=\"g1\u001f\" mx-view=\"mx-dropdown/index?searchbox=true&emptyText=%E8%AF%B7%E9%80%89%E6%8B%A9%E6%97%A5%E6%9C%9F&selected=<%@$$.day%>\" mx-beid=\"\u001f\u001e1\" mx-change=\"\u001f\u001esyncValue({p:'day',m:'showWeek',a:{},f:{required:true}})\" mx-focusin=\"\u001f\u001esyncValue({p:'day',f:{required:true}})\" mx-focusout=\"\u001f\u001esyncValue({p:'day',f:{required:true}})\" style=\"width:180px\"><item value=\"mon\">周一</item><item value=\"wed\">周三</item><item value=\"thu\">周四</item><item value=\"fri\">周五</item><item value=\"sat\">周六</item></div></div></div><div class=\"mx3e3-_mx-style_index_-form-item\"><label class=\"mx3e3-_mx-style_index_-form-label\">活动区域：</label><div class=\"mx3e3-_mx-style_index_-form-content\"><div mx-guid=\"g2\u001f\" mx-view=\"mx-taginput/index?list=<%@$$.list%>&placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E5%88%86%E7%B1%BB&selected=<%@$$.tags%>\" mx-beid=\"\u001f\u001e2\" mx-change=\"\u001f\u001esyncValue({p:'tags',f:{required:true}})\" mx-focusin=\"\u001f\u001esyncValue({p:'tags',f:{required:true}})\" mx-focusout=\"\u001f\u001esyncValue({p:'tags',f:{required:true}})\"></div></div></div><div class=\"mx3e3-_mx-style_index_-form-footer\"><button class=\"mx3e3-_mx-style_index_-btn mx3e3-_mx-style_index_-btn-brand\" mx-click=\"\u001f\u001eisValid()\">isValid</button></div></div>","subs":[{"keys":["name"],"path":"input[mx-guid=\"g0\u001f\"]","attr":"value=\"<%=$$.name%>\"","attrs":[{"n":"value","q":1,"p":1}]},{"keys":["day"],"path":"div[mx-guid=\"g1\u001f\"]","attr":"mx-view=\"mx-dropdown/index?searchbox=true&emptyText=%E8%AF%B7%E9%80%89%E6%8B%A9%E6%97%A5%E6%9C%9F&selected=<%@$$.day%>\"","attrs":[{"n":"mx-view","v":1}]},{"keys":["list","tags"],"path":"div[mx-guid=\"g2\u001f\"]","attr":"mx-view=\"mx-taginput/index?list=<%@$$.list%>&placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E5%88%86%E7%B1%BB&selected=<%@$$.tags%>\"","attrs":[{"n":"mx-view","v":1}]}],"file":"mx-form/__test__/index.html"},
    mixins: [Form],
    render() {
        let me = this;
        me.updater.digest({
            random: 1,
            list: [111111111111111, 222222222222222, 333333333333, 44444444444444]
        });
    },
    'refresh<click>' () {
        this.updater.digest({
            random: Math.random()
        });
    },
    'isValid<click>' () {
        console.log(this.isValid());
    },
    'test<focusout>' (e) {
        console.log(e);
    }
});
});