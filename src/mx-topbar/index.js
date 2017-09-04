/*
    generate by magix-combine@3.5.6: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-topbar/index',["magix","$"],function(require,exports,module){
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
    }
};

let rootId = Magix.config('rootId');
let rootVf = Vframe.get(rootId);
let resume = vf => {
    vf.on('alter', Topbar.show);
    vf.on('created', Topbar.hide);
};
if (rootVf) {
    resume(rootVf);
} else {
    Topbar.show(); //未准备好的情况下
    let watch = e => {
        if (e.vframe.id == rootId) {
            Vframe.off('add', watch);
            resume(e.vframe);
        }
    };
    Vframe.on('add', watch);
}
});