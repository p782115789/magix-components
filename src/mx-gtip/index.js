/*
    generate by magix-combine@3.5.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-gtip/index',["magix","$"],function(require,exports,module){
/*Magix,$*/

/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let $ = require('$');
let TipHeight = 65; //写死
let Space = {
    vertical: 5,
    horizontal: 10
};
let Docks = {
    lt(tip, index) {
        tip.css({
            top: TipHeight * index + Space.vertical * (index + 1),
            left: Space.horizontal
        });
    },
    rt(tip, index) {
        tip.css({
            top: TipHeight * index + Space.vertical * (index + 1),
            right: Space.horizontal
        });
    },
    lb(tip, index) {
        tip.css({
            bottom: TipHeight * index + Space.vertical * (index + 1),
            left: Space.horizontal
        });
    },
    rb(tip, index) {
        tip.css({
            bottom: TipHeight * index + Space.vertical * (index + 1),
            right: Space.horizontal
        });
    }
};
Magix.applyStyle("mx3e3-_mx-gtip_index_",".mx3e3-_mx-gtip_index_-gtip {\n  border: solid 1px #e6e6e6;\n  background-color: #fff;\n  padding: 8px 20px;\n  position: fixed;\n  z-index: 450;\n  border-radius: 4px;\n  width: 300px;\n  height: 65px;\n  overflow: hidden;\n  word-break: break-all;\n  transition: all 0.3s;\n  opacity: 0;\n}\n.mx3e3-_mx-gtip_index_-fadein {\n  opacity: 1;\n}\n.mx3e3-_mx-gtip_index_-fadeout {\n  opacity: 0;\n}\n");
let GTipManager = {
    calc(dock) {
        let me = this;
        let list = me['$' + dock];
        if (list && list.length) {
            for (let i = 0, tip; i < list.length; i++) {
                tip = list[i];
                let fn = Docks[dock];
                fn(tip, i);
            }
        }
    },
    add(tip, dock) {
        if (!dock) {
            dock = 'rt';
        }
        let me = this;
        if (!Docks[dock]) {
            throw new Error('mx-gip unsupport dock:' + dock);
        }
        let list = me['$' + dock] || (me['$' + dock] = []);
        list.push(tip);
        tip.on('tipclose', () => {
            me.remove(tip, dock);
        });
        me.calc(dock);
    },
    remove(tip, dock) {
        tip.off('close');
        let me = this;
        let list = me['$' + dock];
        for (let i = list.length - 1; i >= 0; i--) {
            let t = list[i];
            if (t == tip) {
                list.splice(i, 1);
                break;
            }
        }
        me.calc(dock);
    }
};
module.exports = Magix.View.extend({
    tmpl: {"html":"1\u001d","subs":[{"keys":["tip"],"path":"#\u001f","tmpl":"<%=$$.tip.msg%>","s":"1\u001d"}],"file":"mx-gtip/index.html"},
    init(extra) {
        this.$extra = extra;
        this.on('destroy', () => {
            this.$oNode.trigger('tipclose').remove();
        });
    },
    render() {
        let me = this;
        let oNode = $('#' + me.id);
        oNode.addClass('mx3e3-_mx-gtip_index_-gtip');
        me.$oNode = oNode;
        me.updater.digest({
            tip: me.$extra
        });
        if (me.$extra.timeout) {
            setTimeout(me.wrapAsync(() => {
                me.close();
            }), me.$extra.timeout);
        }
        setTimeout(me.wrapAsync(() => {
            oNode.addClass('mx3e3-_mx-gtip_index_-fadein');
        }), 20);
    },
    close() {
        this.$oNode.addClass('mx3e3-_mx-gtip_index_-fadeout');
        setTimeout(this.wrapAsync(() => {
            this.owner.unmountVframe();
        }), 300);
    }
}, {
    gtipShow(ops) {
        let id = Magix.guid('gtip-');
        $('body').append(`<div id="${id}" />`);
        this.owner.mountVframe(id, 'mx-gtip/index', ops);
        GTipManager.add($('#' + id), ops.dock);
    },
    gtipRT(msg, timeout) {
        this.gtipShow({
            msg: msg,
            dock: 'rt',
            timeout: timeout || 3000
        });
    },
    gtipRB(msg, timeout) {
        this.gtipShow({
            msg: msg,
            dock: 'rb',
            timeout: timeout || 3000
        });
    },
    gtipLT(msg, timeout) {
        this.gtipShow({
            msg: msg,
            dock: 'lt',
            timeout: timeout || 3000
        });
    },
    gtipLB(msg, timeout) {
        this.gtipShow({
            msg: msg,
            dock: 'lb',
            timeout: timeout || 3000
        });
    }
});
});