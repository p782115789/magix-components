/*
    generate by magix-combine@3.5.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-hourpicker/__test__/index',["magix"],function(require,exports,module){
/*Magix*/

/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
Magix.applyStyle("mx3e3-_mx-hourpicker___test___index_","@charset \"UTF-8\";");
module.exports = Magix.View.extend({
    tmpl: {"html":"<div mx-view=\"mx-hourpicker/index?range=0011\"></div><div mx-view=\"mx-hourpicker/day?hours=0011\" style=\"width:800px\"></div><div mx-view=\"mx-hourpicker/week?days=<%@['','001111','','','00000000111111001']%>\"></div>","subs":[],"file":"mx-hourpicker/__test__/index.html"},
    render() {
        let me = this;
        me.updater.digest();
    }
});
});