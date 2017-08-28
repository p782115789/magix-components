/*
    generate by magix-combine@3.5.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-dropdown/multiple',["magix","$","../mx-monitor/index"],function(require,exports,module){
/*Magix,$,Monitor*/

/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let $ = require('$');
let Monitor = require('../mx-monitor/index');
Magix.applyStyle("mx3e3-_mx-dropdown_multiple_",".mx3e3-_mx-dropdown_multiple_-dropdown {\n  position: relative;\n  width: 340px;\n  background-color: #fff;\n  border: solid 1px #e6e6e6;\n  border-radius: 4px;\n  display: inline-block;\n}\n.mx3e3-_mx-dropdown_multiple_-dropdown:hover {\n  border-color: #ccc;\n}\n.mx3e3-_mx-dropdown_multiple_-dropdown-toggle {\n  color: #333;\n  position: relative;\n  width: 100%;\n  cursor: pointer;\n  user-select: none;\n  padding: 0 30px 0 12px;\n  border-radius: 3px;\n}\n.mx3e3-_mx-dropdown_multiple_-notallowed {\n  cursor: not-allowed;\n  background-color: #fbfbfb;\n}\n.mx3e3-_mx-dropdown_multiple_-notallowed:hover {\n  border-color: #e6e6e6;\n}\n.mx3e3-_mx-dropdown_multiple_-notallowed .mx3e3-_mx-dropdown_multiple_-dropdown-toggle {\n  cursor: not-allowed;\n}\n.mx3e3-_mx-dropdown_multiple_-arrow {\n  position: absolute;\n  right: 0;\n  top: 2px;\n  font-size: 28px;\n  color: #e6e6e6;\n  transition: transform 0.3s,top 0.3s;\n}\n.mx3e3-_mx-dropdown_multiple_-open .mx3e3-_mx-dropdown_multiple_-arrow {\n  transform: rotate(180deg);\n  top: 0;\n}\n.mx3e3-_mx-dropdown_multiple_-open,\n.mx3e3-_mx-dropdown_multiple_-open:hover {\n  border-color: #6363e6;\n}\n.mx3e3-_mx-dropdown_multiple_-dropdown-toggle-label {\n  height: 30px;\n  line-height: 30px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.mx3e3-_mx-dropdown_multiple_-dropdown-toggle-label-ph {\n  color: #999;\n}\n.mx3e3-_mx-dropdown_multiple_-dropdown-menu-wrapper {\n  position: absolute;\n  top: 100%;\n  left: -1px;\n  width: 350px;\n  margin-top: 5px;\n  border-radius: 4px;\n  z-index: 300;\n  border: 1px solid #e6e6e6;\n  background-color: #fff;\n  display: none;\n  user-select: none;\n}\n.mx3e3-_mx-dropdown_multiple_-open .mx3e3-_mx-dropdown_multiple_-dropdown-menu-wrapper {\n  display: block;\n}\n.mx3e3-_mx-dropdown_multiple_-dropdown-menu {\n  overflow: auto;\n  max-height: 192px;\n  padding-bottom: 3px;\n  padding-top: 5px;\n}\n.mx3e3-_mx-dropdown_multiple_-searchbox {\n  display: block;\n  width: 100%;\n  padding: 9px 9px 4px 9px;\n}\n.mx3e3-_mx-dropdown_multiple_-searchbox-wrapper {\n  padding: 0;\n  width: 100%;\n}\n.mx3e3-_mx-dropdown_multiple_-search-icon {\n  color: #ccc;\n  position: absolute;\n  left: 15px;\n  top: 18px;\n}\n.mx3e3-_mx-dropdown_multiple_-search-input {\n  padding-left: 28px;\n  width: 100%;\n  height: 28px;\n  line-height: 28px;\n}\n.mx3e3-_mx-dropdown_multiple_-dropdown-header {\n  padding: 5px;\n  color: #999;\n  display: block;\n  cursor: default;\n}\n.mx3e3-_mx-dropdown_multiple_-dropdown-item {\n  padding: 3px 4px;\n}\n.mx3e3-_mx-dropdown_multiple_-item-link {\n  color: #666;\n  display: block;\n  width: 100%;\n  padding: 0 6px;\n  height: 26px;\n  line-height: 26px;\n  border-radius: 4px;\n}\n.mx3e3-_mx-dropdown_multiple_-s-item {\n  width: 32%;\n  float: left;\n  margin-left: 2px;\n  margin-bottom: 2px;\n}\n.mx3e3-_mx-dropdown_multiple_-s-item-link {\n  color: #666;\n  display: block;\n  padding: 0 12px;\n  height: 29px;\n  line-height: 29px;\n  border-radius: 4px;\n}\n.mx3e3-_mx-dropdown_multiple_-item-link:hover,\n.mx3e3-_mx-dropdown_multiple_-item-link:focus,\n.mx3e3-_mx-dropdown_multiple_-item-link:active,\n.mx3e3-_mx-dropdown_multiple_-s-item-link:hover,\n.mx3e3-_mx-dropdown_multiple_-s-item-link:focus,\n.mx3e3-_mx-dropdown_multiple_-s-item-link:active {\n  color: #333;\n  background-color: #f0f0f0;\n}\n.mx3e3-_mx-dropdown_multiple_-active,\n.mx3e3-_mx-dropdown_multiple_-active:hover,\n.mx3e3-_mx-dropdown_multiple_-active:active,\n.mx3e3-_mx-dropdown_multiple_-active:focus {\n  color: #fff;\n  background-color: #6363e6;\n}\n.mx3e3-_mx-dropdown_multiple_-footer {\n  border-top: 1px solid #e6e6e6;\n  margin: 0 10px;\n  padding: 10px 0;\n}\n");
module.exports = Magix.View.extend({
    tmpl: {"html":"<div mx-guid=\"g0\u001f\" class=\"mx3e3-_mx-dropdown_multiple_-dropdown-toggle\" mx-click=\"\u001f\u001etoggle()\" title=\"<%=$$.selectedText%>\"><span mx-guid=\"g1\u001f\" class=\"mx3e3-_mx-dropdown_multiple_-dropdown-toggle-label<%if($$.phLabel){%> mx3e3-_mx-dropdown_multiple_-dropdown-toggle-label-ph<%}%>\">2\u001d</span><span class=\"mx3e3-_mx-style_index_-iconfont mx3e3-_mx-dropdown_multiple_-arrow\">&#xe692;</span></div><div mx-guid=\"g2\u001f\" class=\"mx3e3-_mx-dropdown_multiple_-dropdown-menu-wrapper\">3\u001d</div>","subs":[{"keys":["selectedText"],"path":"div[mx-guid=\"g0\u001f\"]","attr":"title=\"<%=$$.selectedText%>\"","attrs":[{"n":"title","p":1}]},{"keys":["phLabel","selectedText"],"path":"span[mx-guid=\"g1\u001f\"]","tmpl":"<%=$$.selectedText%>","s":"2\u001d","attr":"class=\"mx3e3-_mx-dropdown_multiple_-dropdown-toggle-label<%if($$.phLabel){%> mx3e3-_mx-dropdown_multiple_-dropdown-toggle-label-ph<%}%>\"","attrs":[{"n":"class","p":1,"f":"className"}],"mask":"21"},{"keys":["rList","searchbox"],"path":"div[mx-guid=\"g2\u001f\"]","tmpl":"<%if($$.rList){%><%if($$.searchbox){%><div class=\"mx3e3-_mx-dropdown_multiple_-searchbox\"><label class=\"mx3e3-_mx-dropdown_multiple_-searchbox-wrapper\"><span class=\"mx3e3-_mx-style_index_-iconfont mx3e3-_mx-dropdown_multiple_-search-icon\">&#xe608;</span><input mx-keyup=\"\u001f\u001esearch()\" mx-paste=\"\u001f\u001esearch()\" mx-change=\"\u001f\u001estop()\" mx-focusin=\"\u001f\u001estop()\" mx-focusout=\"\u001f\u001estop()\" placeholder=\"搜索关键词\" class=\"mx3e3-_mx-style_index_-input mx3e3-_mx-dropdown_multiple_-search-input\"></label></div><%}%><ul mx-guid=\"g3\u001f\" class=\"mx3e3-_mx-dropdown_multiple_-dropdown-menu\" id=\"list_<%=$$.viewId%>\">4\u001d</ul><div class=\"mx3e3-_mx-dropdown_multiple_-footer\"><button class=\"mx3e3-_mx-style_index_-btn mx3e3-_mx-style_index_-btn-brand\" mx-click=\"\u001f\u001ehide({enter:true})\">确定</button><button class=\"mx3e3-_mx-style_index_-btn mx3e3-_mx-style_index_-ml5\" mx-click=\"\u001f\u001ehide()\">取消</button></div><%}%>","s":"3\u001d"},{"keys":["viewId","selected","list","textKey","valueKey"],"path":"ul[mx-guid=\"g3\u001f\"]","pKeys":["rList","searchbox"],"tmpl":"<%let a=$$.selected.split(','),b,c;%><%for(let d=0;d<$$.list.length;d++){%><%let e=$$.list[d];%><%if(e&&e.group){%><li class=\"mx3e3-_mx-dropdown_multiple_-dropdown-header mx3e3-_mx-style_index_-ellipsis\" title=\"<%=e[$$.textKey]%>\"><%=e[$$.textKey]%></li><%}else{%><%if($$.textKey&&$$.valueKey){%><%b=e[$$.textKey];c=e[$$.valueKey]%><%}else{%><%b=e;c=e;%><%}%><%let f=$$.inArray(c+'',a)>-1%><%if(c===''){%><li title=\"<%=b%>\" class=\"mx3e3-_mx-dropdown_multiple_-dropdown-item\"><a href=\"#\" class=\"mx3e3-_mx-dropdown_multiple_-item-link mx3e3-_mx-style_index_-ellipsis <%if(f){%> mx3e3-_mx-dropdown_multiple_-active<%}%>\" mx-click=\"\u001f\u001eselect({item:'<%@e%>'})\"><%=b%></a></li><%}else{%><li class=\"mx3e3-_mx-dropdown_multiple_-dropdown-item mx3e3-_mx-style_index_-clearfix\"><ul><%for(;d<$$.list.length;d++){%><%e=$$.list[d]%><%if(e&&e.group){%><%d--;%><%break;%><%}%><%if($$.textKey&&$$.valueKey){%><%b=e[$$.textKey];c=e[$$.valueKey]%><%}else{%><%b=e;c=e;%><%}%><%let g=$$.inArray(c+'',a)>-1%><li class=\"mx3e3-_mx-dropdown_multiple_-s-item\"><a href=\"#\" class=\"mx3e3-_mx-dropdown_multiple_-s-item-link mx3e3-_mx-style_index_-ellipsis<%if(g){%> mx3e3-_mx-dropdown_multiple_-active<%}%>\" mx-click=\"\u001f\u001eselect({item:'<%@e%>'})\"><%=b%></a></li><%}%></ul></li><%}%><%}%><%}%>","s":"4\u001d","attr":"id=\"list_<%=$$.viewId%>\"","attrs":[{"n":"id","p":1}],"mask":"21111"}],"file":"mx-dropdown/multiple.html"},
    init(extra) {
        let me = this;
        Monitor.setup();
        me.on('destroy', Monitor.teardown);
        extra.viewId = me.id;
        extra.inArray = $.inArray;
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
        node.addClass('mx3e3-_mx-dropdown_multiple_-dropdown');
        if (!data.list) {
            let list = [];
            let group;
            node.children().each((idx, item) => {
                item = $(item);
                group = item.attr('group') == 'true';
                list.push({
                    group,
                    text: item.text(),
                    value: group ? Magix.guid() : item.attr('value')
                });
            });
            me.updater.set({
                textKey: 'text',
                valueKey: 'value',
                list
            });
        }
        if (data.disabled) {
            node.addClass('mx3e3-_mx-dropdown_multiple_-notallowed');
        }
        me.updateList(data.list);
        me.updateSelected(data.selected);
    },
    hide(ignoreBak) {
        let me = this;
        if (me.$oNode.hasClass('mx3e3-_mx-dropdown_multiple_-open')) {
            let data = this.updater.get();
            if (Magix.has(data, 'bakSelected')) {
                let fired = ignoreBak && data.selected !== data.bakSelected;
                if (ignoreBak) {
                    me.updateSelected(data.selected);
                } else {
                    me.updateSelected(data.bakSelected);
                }
                if (fired) {
                    me.$oNode.val(data.selected).trigger({
                        type: 'change',
                        keys: {
                            text: data.textKey,
                            value: data.valueKey
                        },
                        values: (data.selected + '').split(',')
                    });
                }
                delete data.bakSelected;
            }
            me.$oNode.removeClass('mx3e3-_mx-dropdown_multiple_-open').trigger('focusout');
            Monitor.remove(me);
        }
    },
    show() {
        let me = this;
        if (!me.$oNode.hasClass('mx3e3-_mx-dropdown_multiple_-open')) {
            let data = me.updater.get();
            if (!data.rList) {
                me.updater.digest({
                    rList: true
                });
            }
            me.$oNode.addClass('mx3e3-_mx-dropdown_multiple_-open').trigger('focusin');
            let listNode = $('#list_' + me.id);
            let active = listNode.find('.mx3e3-_mx-dropdown_multiple_-active');
            let pos = active.position();
            if (pos) {
                let height = listNode.height();
                let stop = listNode.prop('scrollTop');
                if (pos.top < 0 || pos.top > height) {
                    let top = pos.top - height + stop + height / 2;
                    listNode.prop('scrollTop', top);
                }
            }
            Monitor.add(me);
        }
    },
    getText(keys, textKey) {
        let me = this;
        let map = me.$map;
        let text = [];
        for (let key of keys) {
            let entity = map[key] || {};
            if (textKey) {
                text.push(entity[textKey]);
            } else {
                text.push(entity);
            }
        }
        return text;
    },
    updateSelected(selected) {
        let me = this;
        selected = selected || '';
        selected += '';
        let updater = me.updater;
        let data = updater.get();
        let textKey = data.textKey || '';
        let valueKey = data.valueKey || '';
        let parts = selected.split(',');
        let selectedText = '';
        let list = data.list;
        if (parts.length) {
            selectedText = me.getText(parts, textKey);
        } else {
            selected = list[0];
            selectedText = list[0];
            if (textKey && valueKey) {
                selected = selected[valueKey];
                selectedText = selected[textKey];
            }
        }
        updater.digest({
            phLabel: selected === '',
            selected,
            selectedText: selectedText
        });
        me.$oNode.val(selected);
    },
    updateList(list) {
        let me = this;
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
        me.$map = map;
        updater.set({
            list
        });
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
    'toggle<click>' () {
        let me = this;
        let node = me.$oNode;
        if (node.hasClass('mx3e3-_mx-dropdown_multiple_-open')) {
            me.hide();
        } else if (!node.hasClass('mx3e3-_mx-dropdown_multiple_-notallowed')) {
            me.show();
        }
    },
    'search<keyup,paste>' (e) {
        let me = this;
        clearTimeout(me.$sTimer);
        let val = $.trim(e.eventTarget.value);
        me.$sTimer = setTimeout(me.wrapAsync(() => {
            if (val != me.$lVal) {
                me.search(me.$lVal = val, (list) => {
                    me.updater.digest({
                        list
                    });
                });
            }
        }), 300);
    },
    'select<click>' (e) {
        e.preventDefault();
        let me = this;
        let item = e.params.item;
        let updater = me.updater;
        let data = updater.get();
        if (!Magix.has(data, 'bakSelected')) {
            data.bakSelected = data.selected;
        }
        let valueKey = data.valueKey;
        let textKey = data.textKey;
        let selected = item;
        let selectedText = item;
        if (textKey && valueKey) {
            selectedText = item[textKey];
            selected = item[valueKey];
        }
        let keys = [''];
        if (selectedText != data.emptyText || selected) {
            keys = data.selected.split(',');
        }
        let idx = $.inArray('', keys);
        if (idx > -1) {
            keys.splice(idx, 1);
        }
        idx = $.inArray(selected + '', keys);
        if (idx == -1) {
            keys.push(selected);
        } else {
            keys.splice(idx, 1);
        }
        if (!keys.length) {
            if (data.emptyText) {
                keys = [''];
            }
        }
        selected = keys.join(',');
        updater.digest({
            selected
        });
    },
    'stop<change,focusin,focusout>' (e) {
        e.stopPropagation();
    },
    'hide<click>' (e) {
        this.hide(e.params.enter);
    }
});
});