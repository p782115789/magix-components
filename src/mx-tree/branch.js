/*
    generate by magix-combine@3.5.6: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-tree/branch',["magix","$","./branch"],function(require,exports,module){
/*Magix,$*/
require("./branch");
/*
ver:1.0.0
*/
/*
    author:xinglie.lkf@taobao.com
 */

let Magix = require('magix');
let $ = require('$');
module.exports = Magix.View.extend({
    tmpl: {"html":"<ul mx-guid=\"g0\u001f\">1\u001d</ul>","subs":[{"keys":["list","fromTop","valueKey","textKey","id"],"path":"ul[mx-guid=\"g0\u001f\"]","tmpl":"<%for(var a=0,b;a<$$.list.length;a++){%><%b=$$.list[a]%><li class=\"mx3e3_mx-tree_index_-li <%if(!a&&$$.fromTop){%> mx3e3_mx-tree_index_-top-li-first <%}%><%if(a==$$.list.length-1){%> mx3e3_mx-tree_index_-li-last <%}%>\"><div class=\"mx3e3_mx-tree_index_-icon <%if(b.children){%> mx3e3_mx-style_index_-cp <%}%>\" <%if(b.children){%> mx-click=\"\u001f\u001etoggle({id:'<%=$eq(b[$$.valueKey])%>'})\" <%}%>><%if(b.children){%><span class=\"mx3e3_mx-tree_index_-ricon\">+</span><%}%></div><div class=\"mx3e3_mx-tree_index_-name\"><label class=\"mx3e3_mx-tree_index_-p0\"><input class=\"mx3e3_mx-style_index_-mr10 mx3e3_mx-style_index_-checkbox\" type=\"checkbox\" mx-change=\"\u001f\u001echeck()\" value=\"<%=b[$$.valueKey]%>\"><%=b[$$.textKey]%></label></div><%if(b.children){%><div mx-view=\"mx-tree/branch?textKey=<%!$eu($$.textKey)%>&list=<%@b.children%>\" view-text-key vuew-value-key=\"<%=$$.valueKey%>\" view-list id=\"<%=$$.id%>_<%=b[$$.valueKey]%>\" class=\"mx3e3_mx-tree_index_-indent mx3e3_mx-style_index_-none\"></div><%}%></li><%}%>","s":"1\u001d"}],"file":"mx-tree/branch.html"},
    init(extra) {
        let me = this;
        me.updater.set(extra);
    },
    render() {
        let me = this;
        me.updater.digest({
            id: me.id
        });
    },
    checkAll(state) {
        $('#' + this.id + ' input[type="checkbox"]').prop('checked', state);
    },
    'toggle<click>' (e) {
        let node = $('#' + this.id + '_' + e.params.id);
        let current = $(e.eventTarget).find('span');
        let val = $.trim(current.html());
        if (val == '+') {
            node.slideDown();
            current.html('-');
        } else {
            node.slideUp();
            current.html('+');
        }
    },
    'check<change>' (e) {
        let me = this;
        let vf = Magix.Vframe.get(me.id + '_' + e.eventTarget.value);
        if (vf) {
            vf.invoke('checkAll', [e.eventTarget.checked]);
        }
    }
});
});