/*
    generate by magix-combine@3.5.6: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-dialog/__test__/index',["magix","mx-dialog/index"],function(require,exports,module){
/*Magix,Dialog*/

/*
ver:1.0.0
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let Dialog = require('mx-dialog/index');
module.exports = Magix.View.extend({
    tmpl: {"html":"1\u001d","subs":[{"keys":["inDialog"],"path":"#\u001f","tmpl":"<%if($$.inDialog){%><div class=\"mx3e3_mx-style_index_-dialog-header\">加载view测试</div><div class=\"mx3e3_mx-style_index_-dialog-body\"><%}%><h2>mx-dialog</h2><h3>内置alert与confirm</h3><div class=\"mx3e3_mx-style_index_-pt20 mx3e3_mx-style_index_-clearfix\"><button type=\"button\" class=\"mx3e3_mx-style_index_-btn mx3e3_mx-style_index_-btn-brand mx3e3_mx-style_index_-mr20\" mx-click=\"\u001f\u001ealert()\">alert</button><button type=\"button\" class=\"mx3e3_mx-style_index_-btn mx3e3_mx-style_index_-btn-brand mx3e3_mx-style_index_-mr20\" mx-click=\"\u001f\u001econfirm()\">confirm</button></div><div class=\"mx3e3_mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;button type=\"button\" class=\"btn btn-brand mr20\" mx-click=\"alert()\"&gt;alert&lt;/button&gt;\n&lt;button type=\"button\" class=\"btn btn-brand mr20\" mx-click=\"confirm()\"&gt;confirm&lt;/button&gt;</pre><div class=\"mx3e3_mx-style_index_-pt10\">Javascript Code:</div><pre>let Magix = require('magix');\nlet Dialog = require('app/gallery/mx-dialog/index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [Dialog],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    'alert&lt;click&gt;' () {\n        this.alert('xxx', () => {\n            console.log('确定被点击');\n        });\n    },\n    'confirm&lt;click&gt;' () {\n        this.confirm('xxx', () => {\n            console.log('确定被点击');\n        }, () => {\n            console.log('取消被点击');\n        });\n    }\n});</pre></div><h3 class=\"mx3e3_mx-style_index_-mt30\">加载普通view</h3><div class=\"mx3e3_mx-style_index_-pt20 mx3e3_mx-style_index_-clearfix\"><button type=\"button\" class=\"mx3e3_mx-style_index_-btn mx3e3_mx-style_index_-btn-brand mx3e3_mx-style_index_-mr20\" mx-click=\"\u001f\u001eview()\">view</button></div><div class=\"mx3e3_mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;button type=\"button\" class=\"btn btn-brand mr20\" mx-click=\"view()\"&gt;view&lt;/button&gt;</pre><div class=\"mx3e3_mx-style_index_-pt10\">Javascript Code:</div><pre>let Magix = require('magix');\nlet Dialog = require('app/gallery/mx-dialog/index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [Dialog],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    'view&lt;click&gt;' () {\n        this.mxDialog('path/to/view', {\n            width: 900\n        });\n    }\n});</pre></div><%if($$.inDialog){%></div><div class=\"mx3e3_mx-style_index_-dialog-footer\">dialog footer</div><%}%>","s":"1\u001d"}],"file":"mx-dialog/__test__/index.html"},
    mixins: [Dialog],
    init(extra) {
        this.updater.set(extra);
    },
    render() {
        let me = this;
        me.updater.digest();
    },
    'alert<click>' () {
        this.alert('xxx', () => {
            console.log('确定被点击');
        });
    },
    'confirm<click>' () {
        this.confirm('xxx', () => {
            console.log('确定被点击');
        }, () => {
            console.log('取消被点击');
        });
    },
    'view<click>' () {
        this.mxDialog('mx-dialog/__test__/index', {
            inDialog: true,
            width: 900
        });
    }
});
});