/*
    generate by magix-combine@3.5.6: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-dropdown/index',["magix","$","../mx-monitor/index"],function(require,exports,module){
/*Magix,$,Monitor*/

/*
ver:1.0.0
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let $ = require('$');
let Monitor = require('../mx-monitor/index');
Magix.applyStyle("mx3e3_mx-dropdown_index_",".mx3e3_mx-dropdown_index_-dropdown {\n  position: relative;\n  width: 340px;\n  background-color: #fff;\n  border: solid 1px #e6e6e6;\n  border-radius: 4px;\n  display: inline-block;\n  vertical-align: middle;\n}\n.mx3e3_mx-dropdown_index_-dropdown:hover {\n  border-color: #ccc;\n}\n.mx3e3_mx-dropdown_index_-dropdown-toggle {\n  color: #333;\n  position: relative;\n  width: 100%;\n  cursor: pointer;\n  user-select: none;\n  padding: 0 30px 0 12px;\n}\n.mx3e3_mx-dropdown_index_-notallowed {\n  cursor: not-allowed;\n  background-color: #fbfbfb;\n}\n.mx3e3_mx-dropdown_index_-notallowed:hover {\n  border-color: #e6e6e6;\n}\n.mx3e3_mx-dropdown_index_-notallowed .mx3e3_mx-dropdown_index_-dropdown-toggle {\n  cursor: not-allowed;\n}\n.mx3e3_mx-dropdown_index_-arrow {\n  position: absolute;\n  right: 0;\n  top: 2px;\n  font-size: 28px;\n  color: #e6e6e6;\n  transition: transform 0.3s,top 0.3s;\n}\n.mx3e3_mx-dropdown_index_-open .mx3e3_mx-dropdown_index_-arrow {\n  transform: rotate(180deg);\n  top: 0;\n}\n.mx3e3_mx-dropdown_index_-open,\n.mx3e3_mx-dropdown_index_-open:hover {\n  border-color: #6363e6;\n}\n.mx3e3_mx-dropdown_index_-dropdown-toggle-label {\n  height: 30px;\n  line-height: 30px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n}\n.mx3e3_mx-dropdown_index_-dropdown-toggle-label-ph {\n  color: #999;\n}\n.mx3e3_mx-dropdown_index_-dropdown-menu-wrapper {\n  position: absolute;\n  top: 100%;\n  left: -1px;\n  right: -1px;\n  margin-top: 5px;\n  border-radius: 4px;\n  z-index: 300;\n  border: 1px solid #e6e6e6;\n  background-color: #fff;\n  display: none;\n  user-select: none;\n}\n.mx3e3_mx-dropdown_index_-open .mx3e3_mx-dropdown_index_-dropdown-menu-wrapper {\n  display: block;\n}\n.mx3e3_mx-dropdown_index_-dropdown-menu {\n  overflow: auto;\n  max-height: 196px;\n  padding-bottom: 3px;\n  padding-top: 5px;\n}\n.mx3e3_mx-dropdown_index_-searchbox {\n  display: block;\n  width: 100%;\n  padding: 9px 9px 4px 9px;\n}\n.mx3e3_mx-dropdown_index_-searchbox-wrapper {\n  padding: 0;\n  width: 100%;\n}\n.mx3e3_mx-dropdown_index_-search-icon {\n  color: #ccc;\n  position: absolute;\n  left: 15px;\n  top: 16px;\n}\n.mx3e3_mx-dropdown_index_-search-input {\n  padding-left: 28px;\n  height: 28px;\n  line-height: 28px;\n  width: 100%;\n}\n.mx3e3_mx-dropdown_index_-dropdown-header {\n  padding: 5px;\n  color: #999;\n  display: block;\n  cursor: default;\n}\n.mx3e3_mx-dropdown_index_-dropdown-item {\n  padding: 0 4px;\n  margin: 2px 0;\n}\n.mx3e3_mx-dropdown_index_-item-link {\n  color: #666;\n  display: block;\n  width: 100%;\n  padding: 0 12px;\n  height: 29px;\n  line-height: 29px;\n  border-radius: 4px;\n}\n.mx3e3_mx-dropdown_index_-item-link:hover,\n.mx3e3_mx-dropdown_index_-item-link:focus,\n.mx3e3_mx-dropdown_index_-item-link:active {\n  color: #333;\n  background-color: #f0f0f0;\n}\n.mx3e3_mx-dropdown_index_-active,\n.mx3e3_mx-dropdown_index_-active:hover,\n.mx3e3_mx-dropdown_index_-active:active,\n.mx3e3_mx-dropdown_index_-active:focus {\n  color: #fff;\n  background-color: #6363e6;\n}\n");
module.exports = Magix.View.extend({
    tmpl: {"html":"<div mx-guid=\"g0\u001f\" class=\"mx3e3_mx-dropdown_index_-dropdown-toggle\" mx-click=\"\u001f\u001etoggle()\" title=\"<%=$$.selectedText%>\"><span mx-guid=\"g1\u001f\" class=\"mx3e3_mx-dropdown_index_-dropdown-toggle-label <%if($$.selected===''){%> mx3e3_mx-dropdown_index_-dropdown-toggle-label-ph <%}%>\">2\u001d</span><span class=\"mx3e3_mx-style_index_-iconfont mx3e3_mx-dropdown_index_-arrow\">&#xe692;</span></div><div mx-guid=\"g2\u001f\" class=\"mx3e3_mx-dropdown_index_-dropdown-menu-wrapper\">3\u001d</div>","subs":[{"keys":["selectedText"],"path":"div[mx-guid=\"g0\u001f\"]","attr":"title=\"<%=$$.selectedText%>\"","attrs":[{"n":"title","p":1}]},{"keys":["selected","selectedText"],"path":"span[mx-guid=\"g1\u001f\"]","tmpl":"<%=$$.selectedText%>","s":"2\u001d","attr":"class=\"mx3e3_mx-dropdown_index_-dropdown-toggle-label <%if($$.selected===''){%> mx3e3_mx-dropdown_index_-dropdown-toggle-label-ph <%}%>\"","attrs":[{"n":"class","p":1,"f":"className"}],"mask":"21"},{"keys":["rList","searchbox"],"path":"div[mx-guid=\"g2\u001f\"]","tmpl":"<%if($$.rList){%><%if($$.searchbox){%><div class=\"mx3e3_mx-dropdown_index_-searchbox\"><label class=\"mx3e3_mx-dropdown_index_-searchbox-wrapper\"><span class=\"mx3e3_mx-style_index_-iconfont mx3e3_mx-dropdown_index_-search-icon\">&#xe608;</span><input placeholder=\"搜索关键词\" mx-keyup=\"\u001f\u001esearch()\" mx-paste=\"\u001f\u001esearch()\" mx-change=\"\u001f\u001estop()\" mx-focusin=\"\u001f\u001estop()\" mx-focusout=\"\u001f\u001estop()\" class=\"mx3e3_mx-style_index_-input mx3e3_mx-dropdown_index_-search-input\"></label></div><%}%><ul mx-guid=\"g3\u001f\" class=\"mx3e3_mx-dropdown_index_-dropdown-menu\" id=\"list_<%=$$.viewId%>\">4\u001d</ul><%}%>","s":"3\u001d"},{"keys":["viewId","list","textKey","valueKey","selected"],"path":"ul[mx-guid=\"g3\u001f\"]","pKeys":["rList","searchbox"],"tmpl":"<%let a,b%><%for(let c of $$.list){%><%if($$.textKey&&$$.valueKey){%><%a=c[$$.textKey];b=c[$$.valueKey]%><%}else{%><%a=c;b=c;%><%}%><%if(c&&c.group){%><li class=\"mx3e3_mx-dropdown_index_-dropdown-header mx3e3_mx-style_index_-ellipsis\" title=\"<%=c[$$.textKey]%>\"><%=c[$$.textKey]%></li><%}else{%><li title=\"<%=a%>\" class=\"mx3e3_mx-dropdown_index_-dropdown-item\"><%let d=(b+'')===($$.selected+'')%><a href=\"#\" class=\"mx3e3_mx-dropdown_index_-item-link mx3e3_mx-style_index_-ellipsis <%if(d){%> mx3e3_mx-dropdown_index_-active <%}%>\" mx-click=\"\u001f\u001eselect({item:'<%@c%>'})\"><%=a%></a></li><%}%><%}%>","s":"4\u001d","attr":"id=\"list_<%=$$.viewId%>\"","attrs":[{"n":"id","p":1}],"mask":"21111"}],"file":"mx-dropdown/index.html"},
    init(extra) {
        let me = this;
        Monitor.setup();
        me.on('destroy', Monitor.teardown);
        extra.viewId = me.id;
        me.updater.set(extra);
    },
    inside(node) {
        let me = this;
        return Magix.inside(node, me.id);
    },
    render() {
        let me = this;
        let node = $('#' + me.id);
        me.$oNode = node;
        let updater = me.updater;
        let data = updater.get();
        node.addClass('mx3e3_mx-dropdown_index_-dropdown');
        if (!data.list) {
            let list = [];
            let group;
            node.children().each((idx, item) => {
                item = $(item);
                group = item.attr('group') == 'true';
                list.push({
                    group: group,
                    text: item.text(),
                    value: group ? Magix.guid() : item.attr('value')
                });
            });
            me.updater.set({
                textKey: 'text',
                valueKey: 'value',
                list: list
            });
        }
        if (data.disabled) {
            node.addClass('mx3e3_mx-dropdown_index_-notallowed');
        }
        me.updateList(data.list, data.selected, true);
    },
    hide() {
        let me = this;
        if (me.$oNode.hasClass('mx3e3_mx-dropdown_index_-open')) {
            me.$oNode.removeClass('mx3e3_mx-dropdown_index_-open').trigger('focusout');
            Monitor.remove(me);
        }
    },
    show() {
        let me = this;
        if (!me.$oNode.hasClass('mx3e3_mx-dropdown_index_-open')) {
            let data = me.updater.get();
            if (!data.rList) {
                me.updater.digest({
                    rList: true
                });
            }
            me.$oNode.addClass('mx3e3_mx-dropdown_index_-open').trigger('focusin');
            let listNode = $('#list_' + me.id);
            let active = listNode.find('.mx3e3_mx-dropdown_index_-active');
            let pos = active.position();
            let height = listNode.height();
            let stop = listNode.prop('scrollTop');
            if (pos.top < 0 || pos.top > height) {
                let top = pos.top - height + stop + height / 2;
                listNode.prop('scrollTop', top);
            }
            Monitor.add(me);
        }
    },
    updateList(list, selected, ignoreFireEvent) {
        let me = this;
        selected += '';
        let updater = me.updater;
        let data = updater.get();
        list = (list || []).slice();
        let textKey = data.textKey || '';
        let valueKey = data.valueKey || '';
        if (data.emptyText) {
            if (textKey && valueKey) {
                let temp = {};
                temp[textKey] = data.emptyText;
                temp[valueKey] = '';
                list.unshift(temp);
            } else {
                list.unshift(data.emptyText);
            }
        }
        let map = Magix.toMap(list, valueKey);
        me.$list = list;
        if (!selected && data.emptyText && !(textKey || valueKey)) {
            selected = data.emptyText;
        }
        if (!selected || !map[selected]) { //未提供选项，或提供的选项不在列表里，则默认第一个
            selected = map[selected] || list[0];
            if (textKey && valueKey) {
                selected = selected[valueKey];
            }
        }
        updater.digest({
            selected,
            selectedText: textKey && valueKey ? map[selected][textKey] : selected,
            list
        });
        me.$oNode.val(selected);
        if (!ignoreFireEvent) {
            me.fireEvent(selected);
        }
    },
    search(val, callback) {
        let me = this;
        clearTimeout(me.$goTimer);
        let srcList = me.$list;
        let data = me.updater.get();
        let newList = [];
        let index = 0;
        let max = srcList.length;
        let textKey = data.textKey;
        let valueKey = data.valueKey;
        if (!val) {
            callback(srcList);
            return;
        }
        let go = () => {
            if (index < max) {
                let end = Math.min(index + 400, max);
                for (let i = index, li, text, value; i < end; i++) {
                    li = srcList[i];
                    text = li;
                    value = li;
                    if (textKey && valueKey) {
                        text = li[textKey];
                        value = li[valueKey];
                    }
                    if ((text + '').indexOf(val) >= 0 || (value + '').indexOf(val) >= 0) {
                        newList.push(li);
                    }
                }
                index = end;
                me.$goTimer = setTimeout(me.wrapAsync(go), 20);
            } else {
                callback(newList);
            }
        };
        go();
    },
    fireEvent(item, compare) {
        let me = this;
        let updater = me.updater;
        let data = updater.get();
        let valueKey = data.valueKey;
        let textKey = data.textKey;
        let lastSelected = data.selected;
        let selected = item;
        let selectedText = item;
        if (textKey && valueKey) {
            selectedText = item[textKey];
            selected = item[valueKey];
        }
        if (!compare || lastSelected !== selected) {
            updater.set({
                selected: selected
            });
            let event = $.Event('change', {
                item: item,
                keys: {
                    text: textKey,
                    value: valueKey
                },
                value: valueKey ? item[valueKey] : item,
                text: textKey ? item[textKey] : item
            });
            me.$oNode.val(valueKey ? item[valueKey] : item).trigger(event);
            if (!event.isDefaultPrevented()) {
                updater.digest({
                    selected: selected,
                    selectedText: selectedText
                });
            } else {
                updater.set({
                    selected: lastSelected
                });
            }
        }
    },
    'toggle<click>' () {
        let me = this;
        let node = me.$oNode;
        if (node.hasClass('mx3e3_mx-dropdown_index_-open')) {
            me.hide();
        } else if (!node.hasClass('mx3e3_mx-dropdown_index_-notallowed')) {
            me.show();
        }
    },
    'search<keyup,paste>' (e) {
        let me = this;
        e.stopPropagation();
        clearTimeout(me.$sTimer);
        let val = $.trim(e.eventTarget.value);
        me.$sTimer = setTimeout(me.wrapAsync(() => {
            if (val != me.$lVal) {
                me.search(me.$lVal = val, (list) => {
                    me.updater.digest({
                        list: list
                    });
                });
            }
        }), 300);
    },
    'select<click>' (e) {
        e.preventDefault();
        e.stopPropagation();
        let me = this;
        me.fireEvent(e.params.item, true);
        me.hide();
    },
    'stop<change,focusin,focusout>' (e) {
        e.stopPropagation();
    }
});
});