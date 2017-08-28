/*
    generate by magix-combine@3.5.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-color/index',["magix","$","../mx-dragdrop/index"],function(require,exports,module){
/*Magix,$,DD*/

/*
    author:xinglie.lkf@taobao.com
 */
let Magix = require('magix');
let $ = require('$');
let DD = require('../mx-dragdrop/index');
let pickerIndicator = 6 / 2;
let pickerZone = 196;
let slider = 16 / 2;
Magix.applyStyle("mx3e3-_mx-color_index_",".mx3e3-_mx-color_index_-cnt{\n  padding:10px;\n  background-color: #fff;\n  display: inline-block;\n  border: 1px solid #CCC;\n  border-radius: 5px;\n  overflow-y: hidden;\n  z-index: 10;\n}\n\n.mx3e3-_mx-color_index_-shortcuts {\n  width: 225px;\n}\n.mx3e3-_mx-color_index_-shortcuts {\n  *zoom: 1;\n}\n.mx3e3-_mx-color_index_-shortcuts:before,\n.mx3e3-_mx-color_index_-shortcuts:after {\n  display: table;\n  content: \"\";\n}\n.mx3e3-_mx-color_index_-shortcuts:after {\n  clear: both;\n}\n.mx3e3-_mx-color_index_-shortcuts-item {\n  border: 1px solid #000;\n  float: left;\n  width: 15px;\n  height: 15px;\n  margin: -1px 0px 0 -1px;\n  display: inline;\n  position: relative;\n}\n.mx3e3-_mx-color_index_-selected:before {\n  content: ' ';\n  position: absolute;\n  left: 2px;\n  top: 2px;\n  border:solid 2px #e8e8e8;\n  border-style: inset;\n  width:9px;\n  height: 9px;\n}\n.mx3e3-_mx-color_index_-body{\n  margin:10px 0;\n  height: 200px\n}\n.mx3e3-_mx-color_index_-cpicker-wrapper{\n  position: relative;\n  float:left;\n}\n.mx3e3-_mx-color_index_-cpicker{\n  width:196px;\n  height:196px;\n}\n.mx3e3-_mx-color_index_-cpicker-indicator{\n  position: absolute;\n  width:6px;\n  height:6px;\n  box-shadow: 0 0 0 1.5px #fff,inset 0 0 1px 1px rgba(0,0,0,.3),0 0 1px 2px rgba(0,0,0,.4);\n  border-radius: 50%;\n  cursor: default;\n}\n.mx3e3-_mx-color_index_-slide-wrapper{\n  position: relative;\n  float:left;\n  margin-left:10px;\n}\n.mx3e3-_mx-color_index_-slide{\n  width:20px;\n  height:196px;\n}\n.mx3e3-_mx-color_index_-slide-indicator{\n  position: absolute;\n  left:4px;\n  top:-8px;\n  border: 8px solid transparent;\n  border-right-color: #888;\n  width:0;\n  height:0;\n  cursor: default;\n}\n.mx3e3-_mx-color_index_-foot{\n  height: 25px;\n}\n.mx3e3-_mx-color_index_-color-value{\n  width: 99px;\n  margin-right: 5px;\n  vertical-align: middle;\n}\n.mx3e3-_mx-color_index_-bgcolor{\n  width: 50px;\n  height: 23px;\n  line-height: 23px;\n  display: inline-block;\n  margin-right: 10px;\n  vertical-align: middle;\n  border: 1px solid #ddd;\n}");
let GraphicsType = (window.SVGAngle || document.implementation.hasFeature('http://www.w3.org/TR/SVG11/feature#BasicStructure', '1.1') ? 'SVG' : 'VML');
let RenderSVG = (picker, slide) => {
    slide.append("<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" width=\"100%\" height=\"100%\"><defs><linearGradient id=\"gradient-hsv\" x1=\"0%\" y1=\"100%\" x2=\"0%\" y2=\"0%\"><stop offset=\"0%\" stop-color=\"#FF0000\" stop-opacity=\"1\"></stop><stop offset=\"13%\" stop-color=\"#FF00FF\" stop-opacity=\"1\"></stop><stop offset=\"25%\" stop-color=\"#8000FF\" stop-opacity=\"1\"></stop><stop offset=\"38%\" stop-color=\"#0040FF\" stop-opacity=\"1\"></stop><stop offset=\"50%\" stop-color=\"#00FFFF\" stop-opacity=\"1\"></stop><stop offset=\"63%\" stop-color=\"#00FF40\" stop-opacity=\"1\"></stop><stop offset=\"75%\" stop-color=\"#0BED00\" stop-opacity=\"1\"></stop><stop offset=\"88%\" stop-color=\"#FFFF00\" stop-opacity=\"1\"></stop><stop offset=\"100%\" stop-color=\"#FF0000\" stop-opacity=\"1\"></stop></linearGradient></defs><rect x=\"0\" y=\"0\" width=\"100%\" height=\"100%\" fill=\"url(#gradient-hsv)\"></rect></svg>");
    picker.append("<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" width=\"100%\" height=\"100%\"><defs><lineargradient id=\"gradient-black\" x1=\"0%\" y1=\"100%\" x2=\"0%\" y2=\"0%\"><stop offset=\"0%\" stop-color=\"#000000\" stop-opacity=\"1\"></stop><stop offset=\"100%\" stop-color=\"#CC9A81\" stop-opacity=\"0\"></stop></lineargradient><lineargradient id=\"gradient-white\" x1=\"0%\" y1=\"100%\" x2=\"100%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#FFFFFF\" stop-opacity=\"1\"></stop><stop offset=\"100%\" stop-color=\"#CC9A81\" stop-opacity=\"0\"></stop></lineargradient></defs><rect x=\"0\" y=\"0\" width=\"100%\" height=\"100%\" fill=\"url(#gradient-white)\"></rect><rect x=\"0\" y=\"0\" width=\"100%\" height=\"100%\" fill=\"url(#gradient-black)\"></rect></svg>");
};
let RenderVML = (picker, slide) => {
    if (!document.namespaces.mxv) {
        document.namespaces.add('mxv', 'urn:schemas-microsoft-com:vml', '#default#VML');
    }
    slide.html("<div style=\"position: relative; width: 100%; height: 100%\"><mxv:rect style=\"position: absolute; top: 0; left: 0; width: 100%; height: 100%\" stroked=\"f\" filled=\"t\"><mxv:fill type=\"gradient\" method=\"none\" angle=\"0\" color=\"red\" color2=\"red\" colors=\"8519f fuchsia;.25 #8000ff;24903f #0040ff;.5 aqua;41287f #00ff40;.75 #0bed00;57671f yellow\"></mxv:fill></mxv:rect></div>");
    picker.html("<div style=\"position: relative; width: 100%; height: 100%\"><mxv:rect style=\"position: absolute; left: -1px; top: -1px; width: 101%; height: 101%\" stroked=\"f\" filled=\"t\"><mxv:fill type=\"gradient\" method=\"none\" angle=\"270\" color=\"#FFFFFF\" opacity=\"100%\" color2=\"#CC9A81\" o:opacity2=\"0%\"></mxv:fill></mxv:rect><mxv:rect style=\"position: absolute; left: 0px; top: 0px; width: 100%; height: 101%\" stroked=\"f\" filled=\"t\"><mxv:fill type=\"gradient\" method=\"none\" angle=\"0\" color=\"#000000\" opacity=\"100%\" color2=\"#CC9A81\" o:opacity2=\"0%\"></mxv:fill></mxv:rect></div>");
};
let CSSNames = {"selected":"mx3e3-_mx-color_index_-selected","cnt":"mx3e3-_mx-color_index_-cnt"};
let ShortCuts = ['d81e06', 'f4ea2a', '1afa29', '1296db', '13227a', 'd4237a', 'ffffff', 'e6e6e6', 'dbdbdb', 'cdcdcd', 'bfbfbf', '8a8a8a', '707070', '515151', '2c2c2c', '000000', 'ea986c', 'eeb174', 'f3ca7e', 'f9f28b', 'c8db8c', 'aad08f', '87c38f', '83c6c2', '7dc5eb', '87a7d6', '8992c8', 'a686ba', 'bd8cbb', 'be8dbd', 'e89abe', 'e8989a', 'e16632', 'e98f36', 'efb336', 'f6ef37', 'afcd51', '7cba59', '36ab60', '1baba8', '17ace3', '3f81c1', '4f68b0', '594d9c', '82529d', 'a4579d', 'db649b', 'dd6572', 'd84e06', 'e0620d', 'ea9518', 'f4ea2a', '8cbb1a', '2ba515', '0e932e', '0c9890', '1295db', '0061b2', '0061b0', '004198', '122179', '88147f', 'd3227b', 'd6204b'];
let HSV2RGB = (h, s, v) => {
    let R, G, B, X, C;
    h = (h % 360) / 60;
    C = v * s;
    X = C * (1 - Math.abs(h % 2 - 1));
    R = G = B = v - C;

    h = ~~h;
    R += [C, X, 0, 0, X, C][h];
    G += [X, C, C, X, 0, 0][h];
    B += [0, 0, X, C, C, X][h];

    let r = R * 255,
        g = G * 255,
        b = B * 255;
    return {
        r: r,
        g: g,
        b: b,
        hex: '#' + (16777216 | b | (g << 8) | (r << 16)).toString(16).slice(1)
    };
};
let RGB2HSV = (r, g, b) => {
    //if (r > 0 || g > 0 || b > 0) {
    r /= 255;
    g /= 255;
    b /= 255;
    //}
    let H, S, V, C;
    V = Math.max(r, g, b);
    C = V - Math.min(r, g, b);
    H = (C === 0 ? null : V == r ? (g - b) / C + (g < b ? 6 : 0) : V == g ? (b - r) / C + 2 : (r - g) / C + 4);
    H = (H % 6) * 60;
    S = C === 0 ? 0 : C / V;
    return {
        h: H,
        s: S,
        v: V
    };
};
module.exports = Magix.View.extend({
    tmpl: {"html":"<div mx-guid=\"g0\u001f\" id=\"shortcuts_<%=$$.id%>\"><ul mx-guid=\"g1\u001f\" class=\"mx3e3-_mx-color_index_-shortcuts\">2\u001d</ul></div><div class=\"mx3e3-_mx-color_index_-body\"><div class=\"mx3e3-_mx-color_index_-cpicker-wrapper\"><div mx-guid=\"g2\u001f\" class=\"mx3e3-_mx-color_index_-cpicker\" id=\"cpicker_<%=$$.id%>\" mx-click=\"\u001f\u001ecolorZoneClick()\"></div><div mx-guid=\"g3\u001f\" class=\"mx3e3-_mx-color_index_-cpicker-indicator\" id=\"ph_<%=$$.id%>\" mx-mousedown=\"\u001f\u001edragPicker()\"></div></div><div class=\"mx3e3-_mx-color_index_-slide-wrapper\"><div mx-guid=\"g4\u001f\" class=\"mx3e3-_mx-color_index_-slide\" id=\"slide_<%=$$.id%>\" mx-click=\"\u001f\u001eslideClick()\"></div><div mx-guid=\"g5\u001f\" class=\"mx3e3-_mx-color_index_-slide-indicator\" mx-mousedown=\"\u001f\u001edragSlide();\" id=\"sh_<%=$$.id%>\"></div></div></div><div class=\"mx3e3-_mx-color_index_-foot\"><span mx-guid=\"g6\u001f\" class=\"mx3e3-_mx-color_index_-bgcolor\" id=\"bgcolor_<%=$$.id%>\"></span><input mx-guid=\"g7\u001f\" class=\"mx3e3-_mx-style_index_-input mx3e3-_mx-color_index_-color-value\" readonly=\"readonly\" id=\"val_<%=$$.id%>\"><button class=\"mx3e3-_mx-style_index_-btn mx3e3-_mx-style_index_-btn-brand\" type=\"button\" mx-click=\"\u001f\u001eenter();\">确定</button></div>","subs":[{"keys":["id"],"path":"div[mx-guid=\"g0\u001f\"]","attr":"id=\"shortcuts_<%=$$.id%>\"","attrs":[{"n":"id","p":1}]},{"keys":["shortcuts","id"],"path":"ul[mx-guid=\"g1\u001f\"]","tmpl":"<%for(var a=0;a<$$.shortcuts.length;a++){%><li class=\"mx3e3-_mx-color_index_-shortcuts-item\" id=\"sc_<%=$$.shortcuts[a]%>_<%=$$.id%>\" style=\"background:#<%=$$.shortcuts[a]%>\" mx-click=\"\u001f\u001epickShortcuts({color:'#<%=$eq($$.shortcuts[a])%>'})\"></li><%}%>","s":"2\u001d"},{"keys":["id"],"path":"div[mx-guid=\"g2\u001f\"]","attr":"id=\"cpicker_<%=$$.id%>\"","attrs":[{"n":"id","p":1}]},{"keys":["id"],"path":"div[mx-guid=\"g3\u001f\"]","attr":"id=\"ph_<%=$$.id%>\"","attrs":[{"n":"id","p":1}]},{"keys":["id"],"path":"div[mx-guid=\"g4\u001f\"]","attr":"id=\"slide_<%=$$.id%>\"","attrs":[{"n":"id","p":1}]},{"keys":["id"],"path":"div[mx-guid=\"g5\u001f\"]","attr":"id=\"sh_<%=$$.id%>\"","attrs":[{"n":"id","p":1}]},{"keys":["id"],"path":"span[mx-guid=\"g6\u001f\"]","attr":"id=\"bgcolor_<%=$$.id%>\"","attrs":[{"n":"id","p":1}]},{"keys":["id"],"path":"input[mx-guid=\"g7\u001f\"]","attr":"id=\"val_<%=$$.id%>\"","attrs":[{"n":"id","p":1}]}],"file":"mx-color/index.html"},
    init(extra) {
        let me = this;
        me.$color = extra.color || '#ffffff';
        me.$hsv = {
            h: 0,
            s: 1,
            v: 1
        };
        $('#' + me.id).addClass(CSSNames.cnt);
    },
    render() {
        let me = this;
        me.updater.digest({
            id: me.id,
            shortcuts: ShortCuts
        });
        let slideNode = $('#slide_' + me.id);
        let pickerNode = $('#cpicker_' + me.id);
        if (GraphicsType == 'SVG') {
            RenderSVG(pickerNode, slideNode);
        } else {
            RenderVML(pickerNode, slideNode);
        }
        me.setColor(me.$color);
    },
    setHSV(hsv, ignoreSyncUI) {
        let me = this;
        let selfHSV = me.$hsv;
        selfHSV.h = hsv.h % 360;
        selfHSV.s = hsv.s;
        selfHSV.v = hsv.v;
        let rgb = HSV2RGB(hsv.h, hsv.s, hsv.v);
        let hex = rgb.hex;
        let cpickerNode = $('#cpicker_' + me.id);
        let colorZone = HSV2RGB(hsv.h, 1, 1);
        cpickerNode.css('background', colorZone.hex);
        $('#bgcolor_' + me.id).css('background', hex);
        $('#val_' + me.id).val(hex);
        if (!ignoreSyncUI) {
            $('#shortcuts_' + me.id + ' li').removeClass(CSSNames.selected);
            let top = Math.round(selfHSV.h * pickerZone / 360 - slider);
            $('#sh_' + me.id).css({
                top: top
            });
            top = Math.round((1 - selfHSV.v) * pickerZone - pickerIndicator);
            let left = Math.round(selfHSV.s * pickerZone - pickerIndicator);
            $('#ph_' + me.id).css({
                left: left,
                top: top
            });
        }
        $('#sc_' + hex.substr(1, 6) + '_' + me.id).addClass(CSSNames.selected);
    },
    setColor(hex) {
        let me = this;
        let r = parseInt(hex.substr(1, 2), 16);
        let g = parseInt(hex.substr(3, 2), 16);
        let b = parseInt(hex.substr(5, 2), 16);
        let hsv = RGB2HSV(r, g, b);
        me.setHSV(hsv);
    },
    'dragSlide<mousedown>' (e) {
        let me = this;
        let current = $(e.eventTarget);
        let startY = parseInt(current.css('top'), 10);
        let pos = e;
        DD.begin(e.eventTarget, (event) => {
            let offsetY = event.pageY - pos.pageY;
            offsetY += startY;
            if (offsetY <= -slider) offsetY = -slider;
            else if (offsetY >= (pickerZone - slider)) offsetY = pickerZone - slider;
            current.css({
                top: offsetY
            });
            let h = (offsetY + slider) / pickerZone * 360;
            me.setHSV({
                h: h,
                s: me.$hsv.s,
                v: me.$hsv.v
            }, true);
        });
    },
    'dragPicker<mousedown>' (e) {
        let me = this;
        let current = $(e.eventTarget);
        let startX = parseInt(current.css('left'), 10);
        let startY = parseInt(current.css('top'), 10);
        let pos = e;
        DD.begin(e.eventTarget, (event) => {
            let offsetY = event.pageY - pos.pageY;
            let offsetX = event.pageX - pos.pageX;
            offsetY += startY;
            if (offsetY <= -pickerIndicator) offsetY = -pickerIndicator;
            else if (offsetY >= (pickerZone - pickerIndicator)) offsetY = pickerZone - pickerIndicator;

            offsetX += startX;

            if (offsetX <= -pickerIndicator) offsetX = -pickerIndicator;
            else if (offsetX >= (pickerZone - pickerIndicator)) offsetX = pickerZone - pickerIndicator;
            current.css({
                top: offsetY,
                left: offsetX
            });
            let s = (offsetX + pickerIndicator) / pickerZone;
            let v = (pickerZone - (offsetY + pickerIndicator)) / pickerZone;
            me.setHSV({
                h: me.$hsv.h,
                s: s,
                v: v
            });
        });
    },
    'slideClick<click>' (e) {
        let me = this,
            offset = $(e.eventTarget).offset(),
            top = e.pageY - offset.top,
            h = top / pickerZone * 360;
        me.setHSV({
            h: h,
            s: me.$hsv.s,
            v: me.$hsv.v
        });
    },
    'colorZoneClick<click>' (e) {
        let me = this,
            offset = $(e.eventTarget).offset(),
            left = e.pageX - offset.left,
            top = e.pageY - offset.top,
            s = left / pickerZone,
            v = (pickerZone - top) / pickerZone;
        me.setHSV({
            h: me.$hsv.h,
            s: s,
            v: v
        });
    },
    'pickShortcuts<click>' (e) {
        this.setColor(e.params.color);
        $(e.eventTarget).addClass(CSSNames.selected);
    },
    'enter<click>' () {
        let me = this;
        let ipt = $('#val_' + me.id);
        $('#' + me.id).trigger({
            type: 'change',
            color: ipt.val()
        });
    }
});
});