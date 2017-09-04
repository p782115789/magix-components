/*
    generate by magix-combine@3.5.6: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-tree/index',["magix","./branch"],function(require,exports,module){
/*Magix*/
require("./branch");
/*
ver:1.0.0
*/
/*
    author:xinglie.lkf@taobao.com
 */
let Magix = require('magix');
let ListToTree = (list, id, pId) => {
    id = id || 'id';
    pId = pId || 'pId';
    let map = {},
        listMap = {},
        rootList = [];
    for (let i = 0, max = list.length; i < max; i++) {
        let one = Magix.mix({}, list[i]);
        map[one[id]] = one;
        if (listMap[one[id]]) {
            one.children = listMap[one[id]];
        }
        if (Magix.has(one, pId) && one[pId] !== '') {
            if (map[one[pId]]) {
                let c = map[one[pId]].children || (map[one[pId]].children = []);
                c.push(one);
            } else {
                if (!listMap[one[pId]]) listMap[one[pId]] = [one];
                else listMap[one[pId]].push(one);
            }
        } else {
            rootList.push(one);
        }
    }
    return { list: rootList, map };
};
Magix.applyStyle("mx3e3_mx-tree_index_",".mx3e3_mx-tree_index_-indent {\n  padding-left: 15px;\n}\n.mx3e3_mx-tree_index_-li {\n  line-height: 22px;\n  padding: 0 4px;\n  position: relative;\n  border-left: solid 1px #e6e6e6;\n}\n.mx3e3_mx-tree_index_-li:before {\n  content: '';\n  position: absolute;\n  border-top: solid 1px #e6e6e6;\n  width: 12px;\n  left: 0;\n  top: 10px;\n}\n.mx3e3_mx-tree_index_-icon {\n  width: 14px;\n  height: 14px;\n  float: left;\n  text-align: center;\n  font-weight: 800;\n  margin-left: -11px;\n  margin-top: -2px;\n  position: relative;\n  z-index: 2;\n}\n.mx3e3_mx-tree_index_-ricon {\n  display: inline-block;\n  background-color: #fff;\n  width: 10px;\n  height: 10px;\n  line-height: 6px;\n  border: solid 1px #e6e6e6;\n  font-size: 11px;\n}\n.mx3e3_mx-tree_index_-name {\n  margin-left: 10px;\n}\n.mx3e3_mx-tree_index_-p0 {\n  padding: 0;\n}\n.mx3e3_mx-tree_index_-li-last {\n  border-left-color: transparent;\n}\n.mx3e3_mx-tree_index_-li-last:after {\n  content: '';\n  border-left: solid 1px #e6e6e6;\n  position: absolute;\n  left: -1px;\n  top: -2px;\n  width: 1px;\n  height: 13px;\n}\n.mx3e3_mx-tree_index_-top-li-first:after {\n  position: absolute;\n  content: '';\n  height: 13px;\n  width: 1px;\n  border-left: solid 1px #fff;\n  top: -3px;\n  left: -1px;\n}\n");
module.exports = Magix.View.extend({
    tmpl: {"html":"<div mx-guid=\"g0\u001f\" id=\"tree_<%=$$.id%>\" mx-view=\"mx-tree/branch?valueKey=<%!$eu($$.valueKey)%>&textKey=<%!$eu($$.textKey)%>&parentKey=<%!$eu($$.parentKey)%>&fromTop=<%@true%>&list=<%@$$.list%>\" view-value-key view-text-key view-parent-key view-from-top view-list></div>","subs":[{"keys":["id","valueKey","textKey","parentKey","list"],"path":"div[mx-guid=\"g0\u001f\"]","attr":"id=\"tree_<%=$$.id%>\" mx-view=\"mx-tree/branch?valueKey=<%!$eu($$.valueKey)%>&textKey=<%!$eu($$.textKey)%>&parentKey=<%!$eu($$.parentKey)%>&fromTop=<%@true%>&list=<%@$$.list%>\"","attrs":[{"n":"id","p":1},{"n":"mx-view","v":1}]}],"file":"mx-tree/index.html"},
    init(extra) {
        this.$extra = extra;
    },
    render: function () {
        let me = this;
        let ops = me.$extra;
        let info = ListToTree(ops.list, ops.valueKey, ops.parentKey);
        me.updater.digest({
            id: me.id,
            valueKey: ops.valueKey || 'id',
            parentKey: ops.parentKey || 'pId',
            textKey: ops.textKey || 'text',
            list: info.list
        });
    }
});
});