/*
    generate by magix-combine@3.5.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-gtip/__test__/index',["magix","mx-gtip/index"],function(require,exports,module){
/*Magix,GTip*/

/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let GTip = require('mx-gtip/index');
module.exports = Magix.View.extend({
    tmpl: {"html":"<button class=\"mx3e3-_mx-style_index_-btn mx3e3-_mx-style_index_-fl\" mx-click=\"\u001f\u001ert()\">右上角提示</button><button class=\"mx3e3-_mx-style_index_-btn mx3e3-_mx-style_index_-fl mx3e3-_mx-style_index_-ml10\" mx-click=\"\u001f\u001erb()\">右下角提示</button><button class=\"mx3e3-_mx-style_index_-btn mx3e3-_mx-style_index_-fl mx3e3-_mx-style_index_-ml10\" mx-click=\"\u001f\u001elt();\">左上角提示</button><button class=\"mx3e3-_mx-style_index_-btn mx3e3-_mx-style_index_-fl mx3e3-_mx-style_index_-ml10\" mx-click=\"\u001f\u001elb();\">左下角提示</button><input type=\"checkbox\">abc<input type=\"checkbox\">def<input type=\"checkbox\">xx <input type=\"radio\" name=\"abc\">abc<input type=\"radio\" name=\"abc\">def<input type=\"radio\" name=\"abc\">xx","subs":[],"file":"mx-gtip/__test__/index.html"},
    mixins: [GTip],
    render() {
        let me = this;
        me.updater.digest();
    },
    'rt<click>' () {
        this.gtipRT('右上角，消息内容' + Date.now());
    },
    'rb<click>' () {
        this.gtipRB('右下角，消息内容' + Date.now());
    },
    'lt<click>' () {
        this.gtipLT('左上角，消息内容' + Date.now());
    },
    'lb<click>' () {
        this.gtipLB('左下角，消息内容' + Date.now());
    },
    'rtt<click>' (e) {
        this.gtipRT('右上角，消息内容' + Date.now(), e.params.s * 1000);
    }
});
});