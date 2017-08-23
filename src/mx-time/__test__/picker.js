/*
    generate by magix-combine@3.5.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-time/__test__/picker',["magix","../picker"],function(require,exports,module){
/*Magix*/
require("../picker");
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-time</h2><div class=\"mx3e3-_mx-style_index_-pt20 mx3e3-_mx-style_index_-clearfix\"><input mx-view=\"mx-time/picker?types=hour%2Cminute\" value=\"18:26:00\" class=\"mx3e3-_mx-style_index_-input\"></div><div class=\"mx3e3-_mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;input mx-view=\"app/gallery/mx-time/picker\"\n    view-align=\"right\"\n    class=\"input\"\n    value=\"18:26:00\"\n    view-types=\"hour,minute\" /&gt;</pre></div>","subs":[],"file":"mx-time/__test__/picker.html"},
    render() {
        let me = this;
        me.updater.digest();
    }
});
});