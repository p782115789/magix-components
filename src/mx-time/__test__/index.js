/*
    generate by magix-combine@3.5.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-time/__test__/index',["magix"],function(require,exports,module){
/*Magix*/

/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
module.exports = Magix.View.extend({
    tmpl: {"html":"<div mx-view=\"mx-time/index?time=00%3A12%3A13&types=minute\" mx-change=\"\u001f\u001etest()\"></div><input mx-view=\"mx-time/picker?align=right&types=hour%2Cminute\" value=\"18:26:57\">","subs":[],"file":"mx-time/__test__/index.html"},
    render() {
        let me = this;
        me.updater.digest();
    },
    'test<change>' (e) {
        console.log(e, e.time);
    }
});
});