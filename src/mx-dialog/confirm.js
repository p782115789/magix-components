/*
    generate by magix-combine@3.5.6: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-dialog/confirm',["magix"],function(require,exports,module){
/*Magix*/

/*
ver:1.0.0
*/
/*
    author:xinglie.lkf@taobao.com
 */
var Magix = require('magix');
module.exports = Magix.View.extend({
    tmpl: {"html":"<div class=\"mx3e3_mx-style_index_-dialog-header\"><h4 mx-guid=\"g0\u001f\">1\u001d</h4></div><div mx-guid=\"g1\u001f\" class=\"mx3e3_mx-style_index_-dialog-body\" style=\"word-break:break-all\">2\u001d</div><div class=\"mx3e3_mx-style_index_-dialog-footer\"><a mx-click=\"\u001f\u001eenter()\" class=\"mx3e3_mx-style_index_-btn mx3e3_mx-style_index_-btn-brand mx3e3_mx-style_index_-mr10\">确定</a><a mx-click=\"\u001f\u001ecancel()\" class=\"mx3e3_mx-style_index_-btn\">取消</a></div>","subs":[{"keys":["title"],"path":"h4[mx-guid=\"g0\u001f\"]","tmpl":"<%=$$.title%>","s":"1\u001d"},{"keys":["body"],"path":"div[mx-guid=\"g1\u001f\"]","tmpl":"<%=$$.body%>","s":"2\u001d"}],"file":"mx-dialog/confirm.html"},
    init(extra) {
        var me = this;
        me.$dialog = extra.dialog;
        me.$body = extra.body;
        me.$title = extra.title || '提示';
        me.$enterCallback = extra.enterCallback;
        me.$cancelCallback = extra.cancelCallback;
    },
    render() {
        var me = this;
        me.updater.digest({
            body: me.$body,
            title: me.$title
        });
    },
    'enter<click>' () {
        var me = this;
        me.$dialog.close();
        if (me.$enterCallback) {
            Magix.toTry(me.$enterCallback);
        }
    },
    'cancel<click>' () {
        var me = this;
        me.$dialog.close();
        if (me.$cancelCallback) {
            Magix.toTry(me.$cancelCallback);
        }
    }
});
});