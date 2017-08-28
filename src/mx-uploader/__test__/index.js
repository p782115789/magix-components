/*
    generate by magix-combine@3.5.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-uploader/__test__/index',["magix","../index"],function(require,exports,module){
/*Magix*/
require("../index");
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-uploader</h2><div class=\"mx3e3-_mx-style_index_-pt20 mx3e3-_mx-style_index_-clearfix\"><button class=\"mx3e3-_mx-style_index_-btn mx3e3-_mx-style_index_-btn-brand\" mx-view=\"mx-uploader/index?action=.%2F&name=file1&multiple=true\" view-action view-name view-multiple mx-error=\"\u001f\u001eshowError()\" mx-success=\"\u001f\u001eshowSuccess()\" mx-progress=\"\u001f\u001eshowProgress()\">上传文件</button></div><div class=\"mx3e3-_mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;button\n    class=\"btn btn-brand\"\n    mx-view=\"app/gallery/mx-uploader/index\"\n    view-action=\"./\"\n    view-name=\"file1\"\n    view-multiple=\"true\"\n    mx-error=\"showError()\"\n    mx-success=\"showSuccess()\"\n    mx-progress=\"showProgress()\"\n&gt;上传文件&lt;/button&gt;</pre><div class=\"mx3e3-_mx-style_index_-pt10\">Javascript Code:</div><pre>let Magix = require('magix');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    'showError&lt;error&gt;' (e) {\n        console.log(e.error);\n    },\n    'showSuccess&lt;success&gt;' (e) {\n        console.log(e.response);\n    },\n    'showProgress&lt;progress&gt;' (e) {\n        console.log(e.percent);\n    }\n});</pre></div>","subs":[],"file":"mx-uploader/__test__/index.html"},
    render() {
        let me = this;
        me.updater.digest();
    },
    'showError<error>' (e) {
        console.log(e.error);
    },
    'showSuccess<success>' (e) {
        console.log(e.response);
    },
    'showProgress<progress>' (e) {
        console.log(e.percent);
    }
});
});