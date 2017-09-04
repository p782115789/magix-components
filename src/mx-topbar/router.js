/*
    generate by magix-combine@3.5.6: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-topbar/router',["magix","$"],function(require,exports,module){
/*Magix,$*/

/*
ver:1.0.0
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let $ = require('$');
Magix.applyStyle("mx3e3_mx-topbar_index_",".mx3e3_mx-topbar_index_-bar {\n  position: fixed;\n  z-index: 400;\n  height: 2px;\n  left: 0;\n  top: 0;\n  right: 0;\n  background-color: #d45414;\n  transform: translate3d(-100%, 0px, 0px);\n  transition: all 300ms ease;\n}\n");
let barId = Magix.guid('mx_topbar_');
let Vframe = Magix.Vframe;
let timer, interval;
let percent = 100;
let Topbar = {
    show() {
        clearTimeout(timer);
        let bar = $('#' + barId);
        if (!bar.length) {
            $('body').append(`<div class="mx3e3_mx-topbar_index_-bar" id="${barId}"></div>`);
            interval = setInterval(Topbar.porgress, 300);
        }
    },
    porgress() {
        let bar = $('#' + barId);
        if (bar.length) {
            if (percent > 15) {
                percent -= (3 + Math.random() * 5);
            } else if (percent > 4) {
                percent -= (1 + Math.random());
            }
            bar.css({
                transform: `translate3d(-${percent}%,0px,0px)`
            });
        }
    },
    hide() {
        setTimeout(() => {
            clearInterval(interval);
            let bar = $('#' + barId);
            if (bar.length) {
                bar.css({
                    transform: `translate3d(0,0px,0px)`
                });
                timer = setTimeout(() => {
                    percent = 100;
                    bar.remove();
                }, 400);
            }
        }, 0);
    }
};
module.exports = Magix.View.extend({
    init(extra) {
        Magix.Router.on('changed', e => {
            if (e.path) {
                Topbar.show();
            }
        });
        let resume = vf => {
            vf.off('created', Topbar.hide);
            vf.on('created', Topbar.hide);
        };

        let watch = e => {
            if (e.vframe.id == extra.id) {
                resume(e.vframe);
            }
        };
        Vframe.on('add', watch);
        let vf = Vframe.get(extra.id);
        if (vf) {
            resume(vf);
        }
    },
    render() {
        Topbar.show();
    }
});
});