/*
    generate by magix-combine@3.5.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('__test__/mx-dialog/index',["magix","mx-dialog/index"],function(require,exports,module){
/*Magix,Dialog*/

/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let Dialog = require('mx-dialog/index');
module.exports = Magix.View.extend({
    tmpl: {"html":"<button type=\"button\" mx-click=\"\u001f\u001ealert();\" class=\"mx3e3-_mx-style_index_-btn-brand mx3e3-_mx-style_index_-btn\">alert</button><button type=\"button\" mx-click=\"\u001f\u001econfirm();\" class=\"mx3e3-_mx-style_index_-btn-brand mx3e3-_mx-style_index_-btn\">confirm</button><button type=\"button\" mx-click=\"\u001f\u001eview();\" class=\"mx3e3-_mx-style_index_-btn-brand mx3e3-_mx-style_index_-btn\">view</button>","subs":[],"file":"__test__/mx-dialog/index.html"},
    mixins: [Dialog],
    render() {
        let me = this;
        me.updater.digest();
    },
    'alert<click>' () {
        this.alert('xxx');
    },
    'confirm<click>' () {
        this.confirm('xxx');
    },
    'view<click>' () {
        this.mxDialog('__test__/mx-popover/index',{
            width:900
        });
    }
});
});