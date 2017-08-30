/*
    generate by magix-combine@3.5.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-loading/mask',["$","magix"],function(require,exports,module){
/*$,Magix*/

/*
    author:xinglie.lkf@alibaba-inc.com
 */
let $ = require('$');
let Magix = require('magix');
Magix.applyStyle("mx3e3-_mx-loading_mask_",".mx3e3-_mx-loading_mask_-loading-overwite {\n  padding: 10px;\n}\n.mx3e3-_mx-loading_mask_-mask-loading {\n  position: fixed;\n  width: 150px;\n  height: 34px;\n  background-color: #000;\n  opacity: 0.3;\n  border-radius: 4px;\n  z-index: 999999;\n  display: none;\n}\n");
let MaskId = 'm_loading';
let Tmpl = "<div id=\"m_loading\" class=\"mx3e3-_mx-loading_mask_-mask-loading\"><div class=\"mx3e3-_mx-style_index_-loading mx3e3-_mx-loading_mask_-loading-overwite\"><span class=\"mx3e3-_mx-style_index_-loading-anim\"></span></div></div>";
let Win = $(window);
//let Doc = $(document);
module.exports = {
    ctor() {
        let me = this;
        me.on('rendercall', () => {
            if (me.$uiRendered) {
                me.showLoading();
            }
        });
        me.on('rendered', () => {
            me.$uiRendered = true;
            me.hideLoading();
        });
        //Doc.on('ajaxSend', () => {
        //    console.log('xx1');
        //}).on('ajaxComplete', () => {
        //    console.log('yy2')
        //});
    },
    buildLoading() {
        let node = $('#' + MaskId);
        if (!node.length) {
            $(document.body).append(Tmpl);
            node = $('#' + MaskId);
        }
        return node;
    },
    showLoading() {
        let me = this;
        let node = me.buildLoading();
        let left = ((Win.width() - 150) / 2) | 0;
        let top = ((Win.height() - 40) / 2) | 0;
        node.css({
            left: left,
            top: top,
            display: 'block'
        });
    },
    hideLoading() {
        let me = this;
        let node = me.buildLoading();
        node.css({
            display: 'none'
        });
    }
};
});