/*
    generate by magix-combine@3.5.6: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-form/__test__/sub1',["magix","../index"],function(require,exports,module){
/*Magix,Form*/

/*
ver:1.0.0
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let Form = require('../index');
module.exports = Magix.View.extend({
    tmpl: {"html":"<div class=\"mx3e3_mx-style_index_-form-item mx3e3_mx-style_index_-clearfix\"><label class=\"mx3e3_mx-style_index_-form-label mx3e3_mx-style_index_-form-required\">活动名称：</label><div class=\"mx3e3_mx-style_index_-form-content\"><input mx-guid=\"g0\u001f\" class=\"mx3e3_mx-style_index_-input\" placeholder=\"请填写活动名称\" value=\"<%=$$.name%>\" mx-beid=\"\u001f\u001e3\" mx-change=\"\u001f\u001esyncValue({c:[{p:'name',f:{required:true,blength:[20,50]}}]})\" mx-focusout=\"\u001f\u001esyncValue()\" mx-focusin=\"\u001f\u001esyncValue()\"></div></div>","subs":[{"keys":["name"],"path":"input[mx-guid=\"g0\u001f\"]","attr":"value=\"<%=$$.name%>\"","attrs":[{"n":"value","q":1,"p":1}]}],"file":"mx-form/__test__/sub1.html"},
    mixins: [Form],
    render() {
        let me = this;
        me.updater.digest();
    }
});
});