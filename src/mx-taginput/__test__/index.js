/*
    generate by magix-combine@3.5.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-taginput/__test__/index',["magix","mx-gtip/index","../index"],function(require,exports,module){
/*Magix,GTip*/
require("../index");
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let GTip = require('mx-gtip/index');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-taginput</h2><h3>默认情形</h3><div class=\"mx3e3-_mx-style_index_-pt20 mx3e3-_mx-style_index_-clearfix\"><div mx-guid=\"g0\u001f\" mx-view=\"mx-taginput/index?list=<%@$$.list%>&placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E5%88%86%E7%B1%BB\" class=\"mx3e3-_mx-style_index_-fl\"></div></div><div class=\"mx3e3-_mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;div mx-view=\"app/gallery/mx-taginput/index\"\n    view-list=\"&lt;%@ list %&gt;\"\n    view-placeholder=\"请选择分类\"\n&gt;&lt;/div&gt;</pre><div class=\"mx3e3-_mx-style_index_-pt10\">Javascript Code:</div><pre>let Magix = require('magix');\nMagix.applyStyle('@index.css');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    render() {\n        let me = this;\n        me.updater.digest({\n            list: ['分类1', '分类2', '分类3', '分类4', '分类5', '分类6', '分类7', '分类8', '分类9', '分类10']\n        });\n    }\n});</pre></div><h3 class=\"mx3e3-_mx-style_index_-mt30\">默认选中</h3><div class=\"mx3e3-_mx-style_index_-pt20 mx3e3-_mx-style_index_-clearfix\"><div mx-guid=\"g1\u001f\" mx-view=\"mx-taginput/index?list=<%@$$.list%>&selected=<%@$$.selected%>&placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E5%88%86%E7%B1%BB\" class=\"mx3e3-_mx-style_index_-fl\"></div></div><div class=\"mx3e3-_mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;div mx-view=\"app/gallery/mx-taginput/index\"\n    view-list=\"&lt;%@ list %&gt;\"\n    view-selected=\"&lt;%@ selected %&gt;\"\n    view-placeholder=\"请选择分类\"\n&gt;&lt;/div&gt;</pre><div class=\"mx3e3-_mx-style_index_-pt10\">Javascript Code:</div><pre>let Magix = require('magix');\nMagix.applyStyle('@index.css');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    render() {\n        let me = this;\n        me.updater.digest({\n            list: ['分类1', '分类2', '分类3', '分类4', '分类5', '分类6', '分类7', '分类8', '分类9', '分类10'],\n            selected: ['分类1', '分类5', '分类10']\n        });\n    }\n});</pre></div><h3 class=\"mx3e3-_mx-style_index_-mt30\">禁用</h3><div class=\"mx3e3-_mx-style_index_-pt20 mx3e3-_mx-style_index_-clearfix\"><div mx-guid=\"g2\u001f\" mx-view=\"mx-taginput/index?list=<%@$$.list%>&selected=<%@$$.selected%>&placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E5%88%86%E7%B1%BB&disabled=true\" class=\"mx3e3-_mx-style_index_-fl\"></div></div><div class=\"mx3e3-_mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;div mx-view=\"app/gallery/mx-taginput/index\"\n    view-list=\"&lt;%@ list %&gt;\"\n    view-selected=\"&lt;%@ selected %&gt;\"\n    view-placeholder=\"请选择分类\"\n    view-disabled=\"true\"\n&gt;&lt;/div&gt;</pre><div class=\"mx3e3-_mx-style_index_-pt10\">Javascript Code:</div><pre>let Magix = require('magix');\nMagix.applyStyle('@index.css');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    render() {\n        let me = this;\n        me.updater.digest({\n            list: ['分类1', '分类2', '分类3', '分类4', '分类5', '分类6', '分类7', '分类8', '分类9', '分类10'],\n            selected: ['分类1', '分类5', '分类10']\n        });\n    }\n});</pre></div><h3 class=\"mx3e3-_mx-style_index_-mt30\">数据列表为对象</h3><div class=\"mx3e3-_mx-style_index_-pt20 mx3e3-_mx-style_index_-clearfix\"><div mx-guid=\"g3\u001f\" mx-view=\"mx-taginput/index?list=<%@ $$.userList%>&selected=<%@ $$.userSelected%>&placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E7%94%A8%E6%88%B7&textKey=name&valueKey=id\" class=\"mx3e3-_mx-style_index_-fl\"></div></div><div class=\"mx3e3-_mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;div mx-view=\"app/gallery/mx-taginput/index\"\n    view-list=\"&lt;%@ userList %&gt;\"\n    view-selected=\"&lt;%@ userSelected %&gt;\"\n    view-placeholder=\"请选择用户\"\n    view-text-key=\"name\"\n    view-value-key=\"id\"\n&gt;&lt;/div&gt;</pre><div class=\"mx3e3-_mx-style_index_-pt10\">Javascript Code:</div><pre>let Magix = require('magix');\nMagix.applyStyle('@index.css');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    render() {\n        let me = this;\n        me.updater.digest({\n            userList: [{\n                name: 'xinglie',\n                id: 58782\n            }, {\n                name: 'xinglie1',\n                id: 587821\n            }, {\n                name: 'xinglie2',\n                id: 587822\n            }, {\n                name: 'xinglie3',\n                id: 587823\n            }, {\n                name: 'xinglie4',\n                id: 587824\n            }, {\n                name: 'xinglie5',\n                id: 587825\n            }, {\n                name: 'xinglie6',\n                id: 587826\n            }, {\n                name: 'xinglie7',\n                id: 587827\n            }, {\n                name: 'xinglie8',\n                id: 587828\n            }, {\n                name: 'xinglie9',\n                id: 587829\n            }],\n            userSelected: [58782]\n        });\n    }\n});</pre></div><h3 class=\"mx3e3-_mx-style_index_-mt30\">change事件</h3><div class=\"mx3e3-_mx-style_index_-pt20 mx3e3-_mx-style_index_-clearfix\"><div mx-guid=\"g4\u001f\" mx-view=\"mx-taginput/index?list=<%@ $$.userList%>&selected=<%@ $$.userSelected%>&placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E7%94%A8%E6%88%B7&textKey=name&valueKey=id\" mx-change=\"\u001f\u001eshowUserIds()\" class=\"mx3e3-_mx-style_index_-fl\"></div></div><div class=\"mx3e3-_mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;div mx-view=\"app/gallery/mx-taginput/index\"\n    view-list=\"&lt;%@ userList %&gt;\"\n    view-selected=\"&lt;%@ userSelected %&gt;\"\n    view-placeholder=\"请选择用户\"\n    view-text-key=\"name\"\n    view-value-key=\"id\"\n    mx-change=\"showUserIds()\"\n&gt;&lt;/div&gt;</pre><div class=\"mx3e3-_mx-style_index_-pt10\">Javascript Code:</div><pre>let Magix = require('magix');\nlet GTip = require('mx-gtip/index');\nMagix.applyStyle('@index.css');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest({\n            list: ['分类1', '分类2', '分类3', '分类4', '分类5', '分类6', '分类7', '分类8', '分类9', '分类10'],\n            selected: ['分类1', '分类5', '分类10'],\n            userList: [{\n                name: 'xinglie',\n                id: 58782\n            }, {\n                name: 'xinglie1',\n                id: 587821\n            }, {\n                name: 'xinglie2',\n                id: 587822\n            }, {\n                name: 'xinglie3',\n                id: 587823\n            }, {\n                name: 'xinglie4',\n                id: 587824\n            }, {\n                name: 'xinglie5',\n                id: 587825\n            }, {\n                name: 'xinglie6',\n                id: 587826\n            }, {\n                name: 'xinglie7',\n                id: 587827\n            }, {\n                name: 'xinglie8',\n                id: 587828\n            }, {\n                name: 'xinglie9',\n                id: 587829\n            }],\n            userSelected: [58782]\n        });\n    },\n    'showUserIds&lt;change&gt;' (e) {\n        this.gtipRT('选中的用户ids:'+e.ids);\n    }\n});</pre></div>","subs":[{"keys":["list"],"path":"div[mx-guid=\"g0\u001f\"]","attr":"mx-view=\"mx-taginput/index?list=<%@$$.list%>&placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E5%88%86%E7%B1%BB\"","attrs":[{"n":"mx-view","v":1}]},{"keys":["list","selected"],"path":"div[mx-guid=\"g1\u001f\"]","attr":"mx-view=\"mx-taginput/index?list=<%@$$.list%>&selected=<%@$$.selected%>&placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E5%88%86%E7%B1%BB\"","attrs":[{"n":"mx-view","v":1}]},{"keys":["list","selected"],"path":"div[mx-guid=\"g2\u001f\"]","attr":"mx-view=\"mx-taginput/index?list=<%@$$.list%>&selected=<%@$$.selected%>&placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E5%88%86%E7%B1%BB&disabled=true\"","attrs":[{"n":"mx-view","v":1}]},{"keys":["userList","userSelected"],"path":"div[mx-guid=\"g3\u001f\"]","attr":"mx-view=\"mx-taginput/index?list=<%@ $$.userList%>&selected=<%@ $$.userSelected%>&placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E7%94%A8%E6%88%B7&textKey=name&valueKey=id\"","attrs":[{"n":"mx-view","v":1}]},{"keys":["userList","userSelected"],"path":"div[mx-guid=\"g4\u001f\"]","attr":"mx-view=\"mx-taginput/index?list=<%@ $$.userList%>&selected=<%@ $$.userSelected%>&placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E7%94%A8%E6%88%B7&textKey=name&valueKey=id\"","attrs":[{"n":"mx-view","v":1}]}],"file":"mx-taginput/__test__/index.html"},
    mixins: [GTip],
    render() {
        let me = this;
        me.updater.digest({
            list: ['分类1', '分类2', '分类3', '分类4', '分类5', '分类6', '分类7', '分类8', '分类9', '分类10'],
            selected: ['分类1', '分类5', '分类10'],
            userList: [{
                name: 'xinglie',
                id: 58782
            }, {
                name: 'xinglie1',
                id: 587821
            }, {
                name: 'xinglie2',
                id: 587822
            }, {
                name: 'xinglie3',
                id: 587823
            }, {
                name: 'xinglie4',
                id: 587824
            }, {
                name: 'xinglie5',
                id: 587825
            }, {
                name: 'xinglie6',
                id: 587826
            }, {
                name: 'xinglie7',
                id: 587827
            }, {
                name: 'xinglie8',
                id: 587828
            }, {
                name: 'xinglie9',
                id: 587829
            }],
            userSelected: [58782]
        });
    },
    'showUserIds<change>' (e) {
        this.gtipRT('选中的用户ids:'+e.ids);
    }
});
});