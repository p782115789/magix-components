/*
    generate by magix-combine@3.5.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('__test__/mx-pagination/index',["magix"],function(require,exports,module){
/*Magix*/

/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
module.exports = Magix.View.extend({
    tmpl: {"html":"<div style=\"padding-top: 50px\" class=\"mx3e3-_mx-style_index_-clearfix\"><div mx-view=\"mx-pagination/index?total=2000&step=5&page=15\" class=\"mx3e3-_mx-style_index_-fl\"></div></div><div class=\"mx3e3-_mx-style_index_-clearfix\"><div mx-view=\"mx-pagination/index?total=2000&step=3&page=15&simplify=<%@true%>\" class=\"mx3e3-_mx-style_index_-fl\"></div></div><div class=\"mx3e3-_mx-style_index_-clearfix\"><div mx-view=\"mx-pagination/index?total=2000&step=1&page=15&mini=<%@true%>\" class=\"mx3e3-_mx-style_index_-fl\"></div></div>","subs":[],"file":"__test__/mx-pagination/index.html"},
    render() {
        let me = this;
        me.updater.digest();
    }
});
});