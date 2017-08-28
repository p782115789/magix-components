let $ = require('$');
let Magix = require('magix');
Magix.applyStyle('@index.less');
let ByteLen = (str) => {
    return str.replace(/[^\x00-\xff]/g, 'xl').length;
};
let Rules = {
    required(val, rule) {
        if (rule) {
            return $.trim(val);
        }
        return true;
    },
    number(val, rule) {
        val = $.trim(val);
        if (val && rule) {
            if (val.indexOf('.') != val.lastIndexOf('.')) { //多个.
                return false;
            }
            return /^-?[\d\.]+$/.test(val);
        }
        return true;
    },
    length(val, rule) {
        if (val.length < rule[0] || val.length > rule[1]) {
            return false;
        }
        return true;
    },
    blength(val, rule) {
        let len = ByteLen(val);
        if (len < rule[0] || len > rule[1]) {
            return false;
        }
        return true;
    },
    minLength(val, rule) {
        val = $.trim(val);
        if (val && val.length < rule) {
            return false;
        }
        return true;
    },
    maxLength(val, rule) {
        val = $.trim(val);
        if (val && val.length > rule) {
            return false;
        }
        return true;
    },
    range(val, rule) {
        val = parseFloat(val);
        if (isNaN(val)) {
            return false;
        }
        if (val < rule[0] || val > rule[1]) {
            return false;
        }
        return true;
    },
    equalto(val, rule) {
        let to = $(rule).val();
        return to == val;
    },
    pattern(val, rule) {
        val = $.trim(val);
        if (val) {
            let reg = new RegExp(rule);
            return reg.test(val);
        }
        return true;
    },
    max(val, rule) {
        if (+val > +rule) {
            return false;
        }
        return true;
    },
    min(val, rule) {
        if (+val < +rule) {
            return false;
        }
        return true;
    }
};
let Msgs = {
    required() {
        return '必填';
    },
    number() {
        return '数字';
    },
    length(rule, value) {
        return rule[0] + '-' + rule[1] + '个字之间,当前:' + value.length;
    },
    blength(rule, value) {
        return rule[0] + '-' + rule[1] + '个字符之间,当前:' + ByteLen(value);
    },
    range(rule) {
        return rule[0] + '-' + rule[1] + '之间的数字';
    },
    equalto(rule) {
        return '与' + rule + '同样的内容';
    },
    pattern() {
        return '格式有误';
    },
    minLength(rule) {
        return '最小长度:' + rule;
    },
    maxLength(rule) {
        return '最大长度:' + rule;
    },
    max(rule) {
        return '不能大于 ' + rule;
    },
    min(rule) {
        return '不能小于 ' + rule;
    }
};
let isValid = (actions, val) => {
    let f = true,
        r, v;
    for (let a in actions) {
        if (Magix.has(actions, a)) {
            let rule = Rules[a];
            if (rule) {
                f = rule(val, v = actions[a]);
                if (!f) {
                    r = a;
                    break;
                }
            }
        }
    }
    return {
        f,
        v,
        a: val,
        r
    };
};
let showError = (beId, key, rule, value) => {
    let node = $('[mx-beid="' + beId + '"]');
    if (!node.length) return;
    node.addClass('@index.less:fail');
    node.each((i, n) => {
        n = $(n);
        let id = n.attr('id');
        if (!id) {
            id = Magix.guid();
            n.attr('id', id);
        }
        let msgId = id + '_msg';
        let msgNode = $('#' + msgId);
        if (!msgNode.length) {
            let prt = n.parent();
            let pos = prt.css('position');
            if (pos == 'static') {
                prt.addClass('@scoped.style:pr');
            }
            n.after('<div class="@index.less:msg" id="' + msgId + '"/>');
            msgNode = $('#' + msgId);
        }
        msgNode.html(Msgs[key](rule, value)).show();
        let width = n.outerWidth() - 3;
        let mWidth = msgNode.width();
        let pos = n.position();
        msgNode.css({
            top: pos.top + 2,
            left: pos.left + width - mWidth
        });
    });
    return true;
};
let hideError = beId => {
    let node = $('[mx-beid="' + beId + '"]');
    node.removeClass('@index.less:fail');
    node.each((i, n) => {
        n = $(n);
        let msgId = n.attr('id') + '_msg';
        $('#' + msgId).hide();
    });
};
let callUserEvent = (e, view) => {
    let params = e.params;
    if (params.m) {
        let userEventName = params.m + '\x1e' + e.type;
        let userEventFN = view[userEventName];
        if (userEventFN) {
            e.params = params.a;
            userEventFN.call(view, e);
        }
    }
};
module.exports = {
    fromKeys(data, keys) {
        keys = (keys + '').split(',');
        var r = {};
        for (var i = 0, key; i < keys.length; i++) {
            key = keys[i];
            r[key] = Magix.has(data, key) ? data[key] : '';
        }
        return r;
    },
    isValid() {
        let me = this;
        let elements = $('#' + me.id + ' [mx-beid^="' + me.id + '\x1e"]');
        elements.each((i, e) => {
            $(e).trigger({
                type: 'focusout',
                from: 'valid'
            });
        });
        let form = me.updater.$form;
        if (form) {
            let keys = Magix.keys(form);
            if (keys.length) {
                let node = $('[mx-beid="' + keys[0] + '"]')[0];
                if (node) {
                    if (node.scrollIntoViewIfNeeded) {
                        node.scrollIntoViewIfNeeded();
                    } else if (node.scrollIntoView) {
                        node.scrollIntoView();
                    }
                }
                return false;
            }
        }
        return true;
    },
    'syncValue<focusin>' (e) {
        let node = $(e.eventTarget);
        hideError(node.attr('mx-beid'));
        callUserEvent(e, this);
    },
    'syncValue<change,focusout>' (e) {
        let me = this;
        let params = e.params;
        let updater = me.updater;
        if (!updater.$form) {
            updater.$form = {};
        }
        let form = updater.$form;
        let keys = updater.$keys;
        let ctrls = params.c ? params.c.slice() : [params];
        let refresh = false;
        let valid = true;
        let addCheckbox = (name, src, actions) => {
            $('input[name="' + name + '"]:checked').each(function(idx, item) {
                let value = item.value;
                if (actions.number) {
                    value = parseFloat(value);
                }
                idx = src.indexOf(value);
                if (idx === -1) {
                    src.push(value);
                }
            });
        };
        while (ctrls.length) {
            let ctrl = ctrls.shift();
            let ps = ctrl.p.split('.');
            let actions = ctrl.f || {};
            let key = ps.pop(),
                temp, node = $(e.eventTarget),
                value,
                rootKey;
            let object = updater.get();
            while (object && ps.length) {
                temp = ps.shift();
                if (!rootKey) rootKey = temp; //解决设置数据后，再调用updater.digest()不刷新的问题
                object = object[temp];
            }
            rootKey = rootKey || key;
            if (node.prop('type') == 'checkbox') {
                let src = object[key];
                let checked = node.prop('checked');
                if (src === true || src === false) {
                    value = checked;
                } else {
                    value = node.val();
                    if (actions.number && value) {
                        value = parseFloat(value);
                    }
                    if ($.isArray(src)) {
                        let checkboxName = node.prop('name');
                        if (checkboxName) {
                            src = [];
                            addCheckbox(checkboxName, src, actions);
                        } else {
                            value = node.val();
                            if (actions.number && value) {
                                value = parseFloat(value);
                            }
                            let idx = src.indexOf(value);
                            if (checked) {
                                if (idx === -1) {
                                    src.push(value);
                                }
                            } else {
                                if (idx > -1) {
                                    src.splice(idx, 1);
                                }
                            }
                        }
                        value = src;
                    } else if ($.isPlainObject(src)) {
                        if (checked) {
                            src[value] = value;
                        } else {
                            delete src[value];
                        }
                        value = src;
                    } else {
                        value = checked ? value : '';
                    }
                }
            } else {
                value = node.val();
                if (actions.number && value) {
                    value = parseFloat(value);
                }
            }
            let beId = node.attr('mx-beid');
            if (object) {
                object[key] = value;
                if (actions.refresh) {
                    refresh = true;
                    keys[rootKey] = 1; //标记改变;
                }
            } else {
                console.warn('can not set by path:', ctrl.p);
            }
            if (valid) {
                let v = isValid(actions, value);
                if (v.f) {
                    delete form[beId];
                    hideError(beId);
                } else {
                    form[beId] = v;
                    valid = false;
                    showError(beId, v.r, v.v, v.a);
                }
            }
        }
        if (valid && refresh) {
            updater.digest();
        }
        if (e.from != 'valid') {
            callUserEvent(e, me);
        }
    },
    '$doc<htmlchange>' (e) {
        let me = this;
        let form = me.updater.$form;
        if (e.vId == me.id) {
            clearTimeout(me.$_ft);
            me.$_ft = setTimeout(() => {
                if (form) {
                    for (let f in form) {
                        let v = form[f];
                        if (!showError(f, v.r, v.v, v.a)) {
                            delete form[f];
                        }
                    }
                }
            }, 0);
        }
    }
};