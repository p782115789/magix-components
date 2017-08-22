/*
    generate by magix-combine@3.5.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('__test__/mx-uploader/index',["magix"],function(require,exports,module){
/*Magix*/

/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
module.exports = Magix.View.extend({
    tmpl: {"html":"<button class=\"mx3e3-_mx-style_index_-btn mx3e3-_mx-style_index_-btn-brand\" mx-view=\"mx-uploader/index?action=.%2F&name=file1&multiple=true\" mx-error=\"\u001f\u001eshowError()\" mx-progress=\"\u001f\u001eshowProgress()\">上传文件</button>","subs":[],"file":"__test__/mx-uploader/index.html"},
    render() {
        let me = this;
        me.updater.digest();
    },
    'showError<error>' (e) {
        console.log(e.error);
    },
    'showProgress<progress>' (e) {
        console.log(e.percent);
    }
});
});