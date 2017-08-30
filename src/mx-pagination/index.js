/*
    generate by magix-combine@3.5.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-pagination/index',["magix","$","mx-dropdown/index"],function(require,exports,module){
/*Magix,$*/
require("mx-dropdown/index");
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let $ = require('$');
Magix.applyStyle("mx3e3-_mx-pagination_index_",".mx3e3-_mx-pagination_index_-statistics {\n  color: #999;\n  float: left;\n}\n.mx3e3-_mx-pagination_index_-icon {\n  font-size: 12px;\n  top: -1px;\n}\n.mx3e3-_mx-pagination_index_-num-item {\n  margin: 0 3px;\n  text-decoration: none;\n  border-radius: 4px;\n  text-align: center;\n  width: 28px;\n  height: 28px;\n  line-height: 28px;\n  display: block;\n}\n.mx3e3-_mx-pagination_index_-active .mx3e3-_mx-pagination_index_-num-item {\n  color: #fff;\n  background-color: #6363e6;\n}\n.mx3e3-_mx-pagination_index_-notallowed .mx3e3-_mx-pagination_index_-num-item,\n.mx3e3-_mx-pagination_index_-notallowed .mx3e3-_mx-pagination_index_-num-item:hover {\n  color: #999;\n  background: transparent;\n  cursor: not-allowed;\n}\n.mx3e3-_mx-pagination_index_-rotate180 {\n  transform: scaleX(-1);\n}\n");
module.exports = Magix.View.extend({
    tmpl: {"html":"<div mx-guid=\"g0\u001f\" class=\"mx3e3-_mx-style_index_-clearfix mx3e3-_mx-pagination_index_-statistics\">1\u001d</div>","subs":[{"keys":["simplify","mini"],"path":"div[mx-guid=\"g0\u001f\"]","tmpl":"<%if(!$$.simplify&&!$$.mini){%><span>当前第<b mx-guid=\"g1\u001f\">2\u001d</b>条，共<b mx-guid=\"g2\u001f\">3\u001d</b>条，每页展现</span><div mx-guid=\"g3\u001f\" class=\"mx3e3-_mx-style_index_-ml10 mx3e3-_mx-style_index_-mr10\" style=\"width:70px\" mx-view=\"mx-dropdown/index?list=<%@[10,20,30,40,50,100]%>&selected=<%@$$.size%>\" view-list view-selected mx-change=\"\u001f\u001echangeSize()\"></div><span>条</span><%}%><ul mx-guid=\"g4\u001f\" class=\"mx3e3-_mx-style_index_-clearfix mx3e3-_mx-style_index_-ib\">5\u001d</ul>","s":"1\u001d"},{"keys":["startSpace","offsetStart","offsetEnd","endSpace"],"path":"b[mx-guid=\"g1\u001f\"]","tmpl":"<%for(let a=$$.startSpace;a--;){%>&nbsp;&nbsp;<%}%><%= $$.offsetStart%> - <%= $$.offsetEnd%><%for(let b=$$.endSpace;b--;){%>&nbsp;&nbsp;<%}%>","s":"2\u001d"},{"keys":["total"],"path":"b[mx-guid=\"g2\u001f\"]","tmpl":"<%= $$.total%>","s":"3\u001d"},{"keys":["size"],"path":"div[mx-guid=\"g3\u001f\"]","pKeys":["simplify","mini"],"attr":"mx-view=\"mx-dropdown/index?list=<%@[10,20,30,40,50,100]%>&selected=<%@$$.size%>\"","attrs":[{"n":"mx-view","v":1}]},{"keys":["start","end","page","pages"],"path":"ul[mx-guid=\"g4\u001f\"]","pKeys":["simplify","mini"],"tmpl":"<li class=\"mx3e3-_mx-style_index_-ib<%if($$.page==1){%> mx3e3-_mx-pagination_index_-notallowed<%}%>\"><a class=\"mx3e3-_mx-pagination_index_-num-item mx3e3-_mx-style_index_-iconfont mx3e3-_mx-pagination_index_-icon\" href=\"#\" <%if($$.page>1){%> mx-click=\"\u001f\u001etoPrev()\" <%}else{%> mx-click=\"\u001f\u001eprevent()\" <%}%>>&#xe61e;</a></li><%if($$.mini){%><li mx-guid=\"g7\u001f\" class=\"mx3e3-_mx-style_index_-ib\">8\u001d</li><%}else{%><%if($$.start>1){%><li class=\"mx3e3-_mx-style_index_-ib\"><a class=\"mx3e3-_mx-pagination_index_-num-item\" href=\"#\" mx-click=\"\u001f\u001etoPage({page:1})\">1</a></li><%}%><%if($$.start>2){%><li class=\"mx3e3-_mx-pagination_index_-notallowed mx3e3-_mx-style_index_-ib\"><a class=\"mx3e3-_mx-pagination_index_-num-item\" href=\"#\" mx-click=\"\u001f\u001eprevent()\">...</a></li><%}%><%for(var d=$$.start;d<=$$.end;d++){%><li class=\"mx3e3-_mx-style_index_-ib<%if(d==$$.page){%> mx3e3-_mx-pagination_index_-active<%}%>\"><a class=\"mx3e3-_mx-pagination_index_-num-item\" href=\"#\" mx-click=\"\u001f\u001etoPage({page:<%=d%>})\"><%=d%></a></li><%}%><%if($$.end+2<=$$.pages){%><li class=\"mx3e3-_mx-style_index_-ib mx3e3-_mx-pagination_index_-notallowed\"><a class=\"mx3e3-_mx-pagination_index_-num-item\" href=\"#\" mx-click=\"\u001f\u001eprevent()\">...</a></li><%}%><%if($$.end<$$.pages){%><li class=\"mx3e3-_mx-style_index_-ib\"><a mx-guid=\"g8\u001f\" class=\"mx3e3-_mx-pagination_index_-num-item\" href=\"#\" mx-click=\"\u001f\u001etoPage({page:<%=$$.pages%>})\">9\u001d</a></li><%}%><%}%><li class=\"mx3e3-_mx-style_index_-ib<%if($$.page==$$.pages){%> mx3e3-_mx-pagination_index_-notallowed<%}%>\"><a class=\"mx3e3-_mx-pagination_index_-num-item mx3e3-_mx-style_index_-iconfont mx3e3-_mx-pagination_index_-icon mx3e3-_mx-pagination_index_-rotate180\" href=\"#\" <%if($$.page<$$.pages){%> mx-click=\"\u001f\u001etoNext()\" <%}else{%> mx-click=\"\u001f\u001eprevent()\" <%}%>>&#xe61e;</a></li>","s":"5\u001d"},{"keys":["pageSpace"],"path":"li[mx-guid=\"g7\u001f\"]","pKeys":["simplify","mini","start","end","page","pages"],"tmpl":"<%for(let c=$$.pageSpace;c--;){%>&nbsp;&nbsp;<%}%><%=$$.page%> / <%=$$.pages%>","s":"8\u001d"},{"keys":["pages"],"path":"a[mx-guid=\"g8\u001f\"]","tmpl":"<%=$$.pages%>","s":"9\u001d","attr":"mx-click=\"\u001f\u001etoPage({page:<%=$$.pages%>})\"","attrs":[{"n":"mx-click"}]}],"file":"mx-pagination/index.html"},
    init(extra) {
        let me = this;
        me.$extra = extra;
        let total = (extra.total | 0) || 0;
        let size = extra.size || 20;
        let page = extra.page || 1;
        me.updater.set({
            step: extra.step || 7,
            simplify: extra.simplify,
            mini: extra.mini,
            page: page,
            total: total,
            size: size
        });
    },
    render() {
        let me = this;
        let info = me.cal();
        me.updater.set(info).digest();
    },
    cal() {
        let me = this;
        let data = me.updater.get();
        let page = data.page | 0;
        let pages = Math.ceil((data.total || 1) / data.size);
        if (page > pages) page = pages;
        let step = data.step | 0;
        let middle = step / 2 | 0;
        let start = Math.max(1, page - middle);
        let end = Math.min(pages, start + step - 1);
        start = Math.max(1, end - step + 1);
        let offset;
        if (start <= 2) { //=2 +1  =1  +2
            offset = 3 - start;
            if (end + offset < pages) {
                end += offset;
            }
        }
        if (end + 2 > pages) {
            offset = 2 - (pages - end);
            if ((start - offset) > 1) {
                start -= offset;
            }
        }
        if (start == 3) {
            start -= 1;
        }
        if (end + 2 == pages) {
            end += 1;
        }
        let offsetStart = (page - 1) * data.size + 1;
        let offsetEnd = Math.min(data.total, page * data.size);
        return {
            pages,
            offsetStart: offsetStart,
            offsetEnd: offsetEnd,
            startSpace: (data.total + '').length - (offsetStart + '').length,
            endSpace: (data.total + '').length - (offsetEnd + '').length,
            pageSpace: (pages + '').length - (page + '').length,
            page,
            start,
            end
        };
    },
    fireEvent() {
        let me = this;
        let node = $('#' + me.id);
        let data = me.updater.get();
        node.trigger({
            type: 'change',
            page: data.page,
            size: data.size
        });
    },
    'toPage<click>' (e) {
        e.preventDefault();
        let me = this;
        me.updater.set({
            page: e.params.page
        });
        me.render();
        me.fireEvent();
    },
    'toPrev<click>' (e) {
        e.preventDefault();
        let me = this;
        me.updater.set({
            page: me.updater.get('page') - 1
        });
        me.render();
        me.fireEvent();
    },
    'toNext<click>' (e) {
        //console.log(e);
        e.preventDefault();
        let me = this;
        me.updater.set({
            page: me.updater.get('page') + 1
        });
        me.render();
        me.fireEvent();
    },
    'changeSize<change>' (e) {
        e.stopPropagation();
        let me = this;
        me.updater.set({
            page: 1,
            size: e.item
        });
        me.render();
        me.fireEvent();
    },
    'prevent<click>' (e) {
        e.preventDefault();
    }
});
});