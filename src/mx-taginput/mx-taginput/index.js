/*
    generate by magix-combine@3.5.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-taginput/mx-taginput/index',["magix"],function(require,exports,module){
/*Magix*/

/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
Magix.applyStyle("mx3e3-_mx-taginput_mx-taginput_index_","@charset \"UTF-8\";");
module.exports = Magix.View.extend({
    tmpl: {"html":"<div class=\"mx3e3-_mx-style_index_-pt20\"><div mx-guid=\"g0\u001f\" mx-view=\"mx-taginput/index?list=<%@$$.list1%>&placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E5%88%86%E7%B1%BB&selected=<%@['分类1','分类3']%>&disabled=\" class=\"mx3e3-_mx-style_index_-fl\"></div><input type=\"\" class=\"mx3e3-_mx-style_index_-input mx3e3-_mx-style_index_-fl\" name=\"\" placeholder=\"请选择分类\"></div>","subs":[{"keys":["list1"],"path":"div[mx-guid=\"g0\u001f\"]","attr":"mx-view=\"mx-taginput/index?list=<%@$$.list1%>&placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E5%88%86%E7%B1%BB&selected=<%@['分类1','分类3']%>&disabled=\"","attrs":[{"n":"mx-view","v":1}]}],"file":"mx-taginput/mx-taginput/index.html"},
    render() {
        let me = this;
        me.updater.digest({
            list1: ['分类1', '分类2', '分类3', '分类4', '分类5', '分类6', '分类7', '分类8', '分类9', '分类10']
        });
    }
});
});