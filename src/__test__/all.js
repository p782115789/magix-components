/*
    generate by magix-combine@3.5.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('__test__/all',["magix","$"],function(require,exports,module){
/*Magix,$*/

/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let $ = require('$');
Magix.applyStyle("mx3e3-_scoped_style_","@charset \"UTF-8\";\n\n\n\nbody,\ndl,\ndd,\nul,\nol,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\npre,\nform,\nfieldset,\nlegend,\ninput,\ntextarea,\np,\nfigure,\nhr,\nthead,\ntbody,\ntfoot,\nth,\ntd {\n  margin: 0;\n  padding: 0;\n}\n\nul,\nol {\n  list-style-type: none;\n  list-style-image: none;\n}\n\n\na {\n  text-decoration: none;\n  \n  background-color: transparent;\n  \n}\n\na:active,\na:hover {\n  outline-width: 0;\n}\n\na:focus {\n  outline: 1px dotted;\n}\n\n\nhtml {\n  -webkit-text-size-adjust: 100%;\n  -ms-text-size-adjust: 100%;\n  text-size-adjust: 100%;\n  \n  font-size: 62.5%;\n  \n}\nbody {\n  font-size: 14px;\n  line-height: 1.8;\n}\n\n\nbody,\nbutton,\ninput,\ntextarea {\n  font-family: 'helvetica neue', arial, 'hiragino sans gb', stheiti, 'wenquanyi micro hei', sans-serif;\n  -ms-text-autospace: ideograph-alpha ideograph-numeric ideograph-parenthesis;\n  \n  text-spacing: ideograph-alpha ideograph-numeric ideograph-parenthesis;\n  \n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-weight: normal;\n}\nh1 {\n  font-size: 36px;\n}\nh2 {\n  font-size: 30px;\n}\nh3 {\n  font-size: 22px;\n}\nh4 {\n  font-size: 18px;\n}\nh5 {\n  font-size: 14px;\n}\nh6 {\n  font-size: 12px;\n}\n\n\n\n\n\n\n\nb,\nstrong {\n  font-weight: bold;\n}\n\n\n\nhr {\n  -webkit-box-sizing: content-box;\n  box-sizing: content-box;\n  height: 0;\n}\n\n\n\n\n\npre {\n  white-space: pre;\n  white-space: pre-wrap;\n  \n  word-wrap: break-word;\n  overflow: auto;\n}\n\nq {\n  quotes: none;\n}\n\nq:before,\nq:after {\n  content: '';\n  content: none;\n}\n\nsmall {\n  font-size: 85.7%;\n  \n}\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\nsup {\n  top: -0.5em;\n}\nsub {\n  bottom: -0.25em;\n}\n\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\nth {\n  text-align: left;\n}\n\nth,\ntd {\n  border: 1px solid #ddd;\n  padding: 8px 10px;\n}\n\nth {\n  font-weight: inherit;\n  border-bottom-width: 2px;\n  border-bottom-color: #ccc;\n}\n\n\nimg {\n  border-style: none;\n  \n  width: auto\\9;\n  \n  height: auto;\n  \n  max-width: 100%;\n  \n  vertical-align: top;\n  \n  -ms-interpolation-mode: bicubic;\n  \n}\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: .35em .625em .75em;\n}\n\nlegend {\n  border-style: none;\n  \n  white-space: normal;\n  \n  *margin-left: -7px;\n  \n}\n\nbutton,\ninput,\ntextarea {\n  font-family: inherit;\n  \n  font-size: 100%;\n  \n  margin: 0;\n  \n  vertical-align: middle;\n  \n  *vertical-align: middle;\n  \n}\n\ninput,\nbutton {\n  *overflow: visible;\n}\n\nbutton {\n  text-transform: none;\n}\n\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  \n  cursor: pointer;\n  \n}\n\nbutton[disabled],\ninput[disabled] {\n  cursor: not-allowed;\n}\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box;\n  \n  padding: 0;\n  \n  *height: 13px;\n  \n  *width: 13px;\n  \n}\n\n\n\n\n\n\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n\n\ntextarea {\n  overflow: auto;\n  \n  resize: vertical;\n  \n}\n\n\n\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\n  input {\n    line-height: normal !important;\n  }\n}\n\ninput::-moz-placeholder,\ntextarea::-moz-placeholder {\n  color: darkGray;\n  opacity: 1;\n}\n\nlabel {\n  cursor: pointer;\n}\n\n\n\n\n\n\naudio,\ncanvas,\nvideo {\n  display: inline-block;\n  \n  vertical-align: baseline;\n  \n}\n\n\n\n\n\n\n\n\n\n\nhtml {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n* {\n  -webkit-box-sizing: inherit;\n  -moz-box-sizing: inherit;\n  box-sizing: inherit;\n}\n*:before,\n*:after {\n  -webkit-box-sizing: inherit;\n  -moz-box-sizing: inherit;\n  box-sizing: inherit;\n}\ninput:focus,\ntextarea:focus,\na:focus,\nbutton:focus {\n  outline: none;\n  resize: none;\n}\na {\n  color: #6363e6;\n  text-decoration: none;\n}\na:hover,\na:focus {\n  color: #3838A9;\n}\na:hover,\na:focus,\na:active,\na:visited {\n  outline: 0;\n  text-decoration: none;\n}\nlabel {\n  cursor: default;\n  display: inline-block;\n  max-width: 100%;\n  font-weight: 400;\n}\nlabel.mx3e3-_mx-style_index_-disabled {\n  color: #fbfbfb;\n  cursor: not-allowed;\n}\n[mx-view] item {\n  display: none;\n}\n@font-face {\n  font-family: 'mx3e3-_mx-style_index_-iconfont';\n  \n  src: url('data:application/x-font-woff;charset=utf-8;base64,d09GRgABAAAAAAagAAsAAAAACeQAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADMAAABCsP6z7U9TLzIAAAE8AAAARAAAAFZXOEjOY21hcAAAAYAAAACKAAAB9Gl6OhxnbHlmAAACDAAAAmsAAAMUgksUmWhlYWQAAAR4AAAALwAAADYOp9rVaGhlYQAABKgAAAAcAAAAJAfeA4lobXR4AAAExAAAABQAAAAgH+kAAGxvY2EAAATYAAAAEgAAABIEcAOSbWF4cAAABOwAAAAfAAAAIAEXAF1uYW1lAAAFDAAAAUUAAAJtPlT+fXBvc3QAAAZUAAAASwAAAGGg4UTheJxjYGRgYOBikGPQYWB0cfMJYeBgYGGAAJAMY05meiJQDMoDyrGAaQ4gZoOIAgCKIwNPAHicY2Bk/ss4gYGVgYOpk+kMAwNDP4RmfM1gxMjBwMDEwMrMgBUEpLmmMDgwVDy7z9zwv4EhhrmB4RRQmBEkBwA4Ig2aeJzFkUsKg0AQRKsz/gguPIEnyJkCgodw595V8ILu6hqmelowAfdW8wa6mB/VAEoASbxEAdgHBtci17Kf8Mx+gbf6TuX7JzbsOXDmym3fL51fWT55ljtJd5Z4oEKttsJtsvue/leb1/HolAqmA32RTeD5sw98ZhwCnyXnQKmCa6B8wS1A/QVrUykYAAB4nH1Sv2/TQBR+785nx21yThzHTtL8ctzYoYHQpq4zVKQLC9ABCSkSEgz8ATAw0IUhIuqPgYH/AClCQioDVOmCVMaOMGZuRSVYSMvGEsO5pFIHxOl0371P39O7d98DBvD7mB7QLKShDktwE+4CoNzAKidFtD2/SRqYsVnGMjj1HM9WnGqT3kCrKhtmK/BdS1ZkDTmWcNluBV6TeLjid8gqtswiYm4uf0+vFXT6CmeyXmkzvE0GmCk7Ba1zLbx1dc1oVdKxjbiu53T9ZUxmLEaIpHF8bJkqU2fk8A3T8pmD8hVSxnjOy6/fT1Tm9Ec7/pNizVIRez1Mz1X427VUPiX287yZ1nNKMhHL5hPOvIEbJ7PZdLzofgWxiOg1oL+oC7OwGnUJiglWAG0XqGUaGsrV6+hWp+ivYeBPsVVGszXFSGcQGIUnsoyF0QgLshyerPc5r2k1rc9d3hdY47yfSPyLpK6Qjy6lT8b/T7hE/u3hBZ3QZ5CDGgDzXK+DK030OColtFpB24zeGvg1wXWwLTiO9MeRojYW2Xh/f8zEeWczkJSj1EJlsr89pHS4fX46x4oUbN4ZnkrS6VAIFxuqcqxVFg6FYGsoScOt7SGgqN+j87Qn5gVUYhpy1UPL9duLS+J7TINmwi7u8lJdCzWHc/yi1Ut0IeyGXXHh+NPR6kn8rJXqwg+MTKEPyTfhB6CdclJ2xk4tp2z6IDzbCc8wuYNJHGFyGsFFDjnEcVT/3CzPFaNYjuYviBwjn5iuDF7Lepx9oCqdZXsMvzM2GLCZtPKeSijvUf2idhc/AgVIi7rvyO5EhE8B/gB5X5wLAHicY2BkYGAAYvvPJpLx/DZfGbhZGEDg6hHviQj6vxkLA3MDkMvBwAQSBQAZkAngAHicY2BkYGBu+N/AEMPCAAJAkpEBFXAAAEcOAnF4nGNhYGBgfsnAwMKAHQMAGtcBCQAAAAAAdgDYARgBPgFYAXwBigAAeJxjYGRgYOBgCGRgZQABJiDmAkIGhv9gPgMAEX4BdQB4nGWPTU7DMBCFX/oHpBKqqGCH5AViASj9EatuWFRq911036ZOmyqJI8et1ANwHo7ACTgC3IA78EgnmzaWx9+8eWNPANzgBx6O3y33kT1cMjtyDRe4F65TfxBukF+Em2jjVbhF/U3YxzOmwm10YXmD17hi9oR3YQ8dfAjXcI1P4Tr1L+EG+Vu4iTv8CrfQ8erCPuZeV7iNRy/2x1YvnF6p5UHFockikzm/gple75KFrdLqnGtbxCZTg6BfSVOdaVvdU+zXQ+ciFVmTqgmrOkmMyq3Z6tAFG+fyUa8XiR6EJuVYY/62xgKOcQWFJQ6MMUIYZIjK6Og7VWb0r7FDwl57Vj3N53RbFNT/c4UBAvTPXFO6stJ5Ok+BPV8bUnV0K27LnpQ0kV7NSRKyQl7WtlRC6gE2ZVeOEXpc0Yk/KGdI/wAJWm7IAAAAeJxtxzEOgCAMBdB+RKzehiPVBapJGUgTwumNcfVtjwJ9DvrHCFgQsSJhA2MnjFRc7NTUm3dvPFSsTG/xUsk8q9gtmt8Z0QOGGg+dAA==') format('woff');\n}\n.mx3e3-_mx-style_index_-iconfont {\n  font-family: \"mx3e3-_mx-style_index_-iconfont\";\n  line-height: 1;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  display: inline-block;\n  speak: none;\n  position: relative;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.mx3e3-_mx-style_index_-mt5 {\n  margin-top: 5px;\n}\n.mx3e3-_mx-style_index_-mt10 {\n  margin-top: 10px;\n}\n.mx3e3-_mx-style_index_-mt15 {\n  margin-top: 15px;\n}\n.mx3e3-_mx-style_index_-mt20 {\n  margin-top: 20px;\n}\n.mx3e3-_mx-style_index_-mt25 {\n  margin-top: 25px;\n}\n.mx3e3-_mx-style_index_-mt30 {\n  margin-top: 30px;\n}\n.mx3e3-_mx-style_index_-mr5 {\n  margin-right: 5px;\n}\n.mx3e3-_mx-style_index_-mr10 {\n  margin-right: 10px;\n}\n.mx3e3-_mx-style_index_-mr15 {\n  margin-right: 15px;\n}\n.mx3e3-_mx-style_index_-mr20 {\n  margin-right: 20px;\n}\n.mx3e3-_mx-style_index_-mr25 {\n  margin-right: 25px;\n}\n.mx3e3-_mx-style_index_-mr30 {\n  margin-right: 30px;\n}\n.mx3e3-_mx-style_index_-mb5 {\n  margin-bottom: 5px;\n}\n.mx3e3-_mx-style_index_-mb10 {\n  margin-bottom: 10px;\n}\n.mx3e3-_mx-style_index_-mb15 {\n  margin-bottom: 15px;\n}\n.mx3e3-_mx-style_index_-mb20 {\n  margin-bottom: 20px;\n}\n.mx3e3-_mx-style_index_-mb25 {\n  margin-bottom: 25px;\n}\n.mx3e3-_mx-style_index_-mb30 {\n  margin-bottom: 30px;\n}\n.mx3e3-_mx-style_index_-ml5 {\n  margin-left: 5px;\n}\n.mx3e3-_mx-style_index_-ml10 {\n  margin-left: 10px;\n}\n.mx3e3-_mx-style_index_-ml15 {\n  margin-left: 15px;\n}\n.mx3e3-_mx-style_index_-ml20 {\n  margin-left: 20px;\n}\n.mx3e3-_mx-style_index_-ml25 {\n  margin-left: 25px;\n}\n.mx3e3-_mx-style_index_-ml30 {\n  margin-left: 30px;\n}\n.mx3e3-_mx-style_index_-pt5 {\n  padding-top: 5px;\n}\n.mx3e3-_mx-style_index_-pt10 {\n  padding-top: 10px;\n}\n.mx3e3-_mx-style_index_-pt15 {\n  padding-top: 15px;\n}\n.mx3e3-_mx-style_index_-pt20 {\n  padding-top: 20px;\n}\n.mx3e3-_mx-style_index_-pt25 {\n  padding-top: 25px;\n}\n.mx3e3-_mx-style_index_-pt30 {\n  padding-top: 30px;\n}\n.mx3e3-_mx-style_index_-pr5 {\n  padding-right: 5px;\n}\n.mx3e3-_mx-style_index_-pr10 {\n  padding-right: 10px;\n}\n.mx3e3-_mx-style_index_-pr15 {\n  padding-right: 15px;\n}\n.mx3e3-_mx-style_index_-pr20 {\n  padding-right: 20px;\n}\n.mx3e3-_mx-style_index_-pr25 {\n  padding-right: 25px;\n}\n.mx3e3-_mx-style_index_-pr30 {\n  padding-right: 30px;\n}\n.mx3e3-_mx-style_index_-pb5 {\n  padding-bottom: 5px;\n}\n.mx3e3-_mx-style_index_-pb10 {\n  padding-bottom: 10px;\n}\n.mx3e3-_mx-style_index_-pb15 {\n  padding-bottom: 15px;\n}\n.mx3e3-_mx-style_index_-pb20 {\n  padding-bottom: 20px;\n}\n.mx3e3-_mx-style_index_-pb25 {\n  padding-bottom: 25px;\n}\n.mx3e3-_mx-style_index_-pb30 {\n  padding-bottom: 30px;\n}\n.mx3e3-_mx-style_index_-pl5 {\n  padding-left: 5px;\n}\n.mx3e3-_mx-style_index_-pl10 {\n  padding-left: 10px;\n}\n.mx3e3-_mx-style_index_-pl15 {\n  padding-left: 15px;\n}\n.mx3e3-_mx-style_index_-pl20 {\n  padding-left: 20px;\n}\n.mx3e3-_mx-style_index_-pl25 {\n  padding-left: 25px;\n}\n.mx3e3-_mx-style_index_-pl30 {\n  padding-left: 30px;\n}\n.mx3e3-_mx-style_index_-tr {\n  text-align: right;\n}\n.mx3e3-_mx-style_index_-tl {\n  text-align: left;\n}\n.mx3e3-_mx-style_index_-tc {\n  text-align: center;\n}\n.mx3e3-_mx-style_index_-fl {\n  float: left;\n}\n.mx3e3-_mx-style_index_-fr {\n  float: right;\n}\n.mx3e3-_mx-style_index_-ib {\n  display: inline-block;\n}\n.mx3e3-_mx-style_index_-cp {\n  cursor: pointer;\n}\n.mx3e3-_mx-style_index_-cm {\n  cursor: move;\n}\n.mx3e3-_mx-style_index_-pa {\n  position: absolute;\n}\n.mx3e3-_mx-style_index_-pr {\n  position: relative;\n}\n.mx3e3-_mx-style_index_-none {\n  display: none;\n}\n.mx3e3-_mx-style_index_-clearfix:before,\n.mx3e3-_mx-style_index_-clearfix:after {\n  content: \" \";\n  display: table;\n}\n.mx3e3-_mx-style_index_-clearfix:after {\n  clear: both;\n}\n.mx3e3-_mx-style_index_-unselectable {\n  user-select: none;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n}\n.mx3e3-_mx-style_index_-scrollable::-webkit-scrollbar {\n  width: 10px;\n  height: 10px;\n  overflow: auto;\n}\n.mx3e3-_mx-style_index_-scrollable::-webkit-scrollbar-thumb {\n  background-color: #cccccc;\n  border-radius: 6px;\n  height: 30px;\n  border: 2px solid #e5e5e5;\n}\n.mx3e3-_mx-style_index_-scrollable::-webkit-scrollbar-thumb:hover {\n  background-color: #6a6a6a;\n}\n.mx3e3-_mx-style_index_-scrollable::-webkit-scrollbar-track {\n  background-color: #e5e5e5;\n}\n.mx3e3-_mx-style_index_-ellipsis {\n  white-space: nowrap;\n  word-wrap: normal;\n  overflow: hidden;\n  -o-text-overflow: ellipsis;\n  text-overflow: ellipsis;\n}\n.mx3e3-_mx-style_index_-btn {\n  display: inline-block;\n  font-weight: normal;\n  text-align: center;\n  vertical-align: middle;\n  cursor: pointer;\n  background-image: none;\n  background-color: #eaeaea;\n  white-space: nowrap;\n  padding: 9px 14px;\n  font-size: 14px;\n  line-height: 1;\n  border: 0;\n  color: #333;\n  border-radius: 4px;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.mx3e3-_mx-style_index_-btn:focus {\n  outline: none;\n}\n.mx3e3-_mx-style_index_-btn:hover {\n  background-color: #ccc;\n  color: #333;\n}\n.mx3e3-_mx-style_index_-btn-brand {\n  background-color: #6363e6;\n  color: #fff;\n}\n.mx3e3-_mx-style_index_-btn-brand:hover,\n.mx3e3-_mx-style_index_-btn-brand:focus {\n  background-color: #3838A9;\n  color: #fff;\n}\n.mx3e3-_mx-style_index_-btn[disabled] {\n  background-color: #fbfbfb;\n}\n.mx3e3-_mx-style_index_-btn[disabled]:hover {\n  border-color: #e6e6e6;\n}\n::-webkit-input-placeholder {\n  color: #999;\n}\n:-moz-placeholder {\n  color: #999;\n}\n:-ms-input-placeholder {\n  color: #999;\n}\n.mx3e3-_mx-style_index_-input,\n.mx3e3-_mx-style_index_-textarea {\n  display: inline-block;\n  height: 32px;\n  padding: 6px 9px;\n  border-radius: 4px;\n  box-sizing: border-box;\n  box-shadow: none;\n  border: 1px solid #e6e6e6;\n  background-color: #fff;\n  color: #333;\n  width: 340px;\n  max-width: 100%;\n}\n.mx3e3-_mx-style_index_-input:hover,\n.mx3e3-_mx-style_index_-textarea:hover {\n  border-color: #ccc;\n}\n.mx3e3-_mx-style_index_-input:focus,\n.mx3e3-_mx-style_index_-input-focus,\n.mx3e3-_mx-style_index_-textarea:focus {\n  border-color: #6363e6 !important;\n}\n.mx3e3-_mx-style_index_-input-focus:hover {\n  border-color: #6363e6 !important;\n}\n.mx3e3-_mx-style_index_-textarea {\n  height: auto;\n}\n.mx3e3-_mx-style_index_-input[disabled],\n.mx3e3-_mx-style_index_-textarea[disabled] {\n  background-color: #fbfbfb;\n}\n.mx3e3-_mx-style_index_-input[disabled]:hover,\n.mx3e3-_mx-style_index_-textarea[disabled]:hover {\n  border-color: #e6e6e6;\n}\n.mx3e3-_mx-style_index_-checkbox,\n.mx3e3-_mx-style_index_-radio {\n  width: 14px;\n  height: 14px;\n  text-align: center;\n  font-size: 10px;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  vertical-align: middle;\n  border-radius: 4px;\n  transition: background-color 0.25s;\n  background-color: #fff;\n  border: 1px solid #e6e6e6;\n  margin-right: 8px;\n}\n.mx3e3-_mx-style_index_-radio {\n  border-radius: 50%;\n}\n.mx3e3-_mx-style_index_-checkbox:checked,\n.mx3e3-_mx-style_index_-checkbox:indeterminate,\n.mx3e3-_mx-style_index_-radio:checked {\n  background-color: #6363e6;\n}\n.mx3e3-_mx-style_index_-checkbox:checked:after {\n  content: '✓';\n  color: #fff;\n}\n.mx3e3-_mx-style_index_-checkbox:indeterminate:after {\n  content: '╍';\n  color: #fff;\n}\n.mx3e3-_mx-style_index_-radio:checked:after {\n  content: '';\n  display: block;\n  height: 4px;\n  width: 4px;\n  border-radius: 50%;\n  margin: 35% auto;\n  background-color: #fff;\n}\n.mx3e3-_mx-style_index_-form-item {\n  margin-bottom: 22px;\n}\n.mx3e3-_mx-style_index_-form-label {\n  height: 32px;\n  line-height: 32px;\n  text-align: right;\n  width: 120px;\n  vertical-align: top;\n  white-space: nowrap;\n  word-wrap: normal;\n  overflow: hidden;\n  -o-text-overflow: ellipsis;\n  text-overflow: ellipsis;\n}\n.mx3e3-_mx-style_index_-form-required:before {\n  display: inline-block;\n  margin-right: 4px;\n  content: \"*\";\n  font-family: SimSun;\n  line-height: 1;\n  color: #f04134;\n}\n.mx3e3-_mx-style_index_-form-content {\n  display: inline-block;\n  position: relative;\n  min-height: 32px;\n  line-height: 32px;\n}\n.mx3e3-_mx-style_index_-form-footer {\n  margin-left: 120px;\n}\n\n.mx3e3-_mx-style_index_-table {\n  width: 100%;\n  border: solid 1px #e6e6e6;\n}\n\n.mx3e3-_mx-style_index_-table th {\n  border: 0 none;\n  border-bottom: 2px solid #e6e6e6;\n  font-weight: bold;\n}\n.mx3e3-_mx-style_index_-table td {\n  border: 0 none;\n  border-top: 1px solid #e6e6e6;\n}\n\n.mx3e3-_mx-style_index_-table-striped tbody tr:nth-child(odd) td {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n.mx3e3-_mx-style_index_-table tfoot td {\n  padding: 0;\n}\n.mx3e3-_mx-style_index_-loading {\n  padding: 150px 0;\n  margin: 0 auto;\n  width: 150px;\n  text-align: center;\n  line-height: 0;\n}\n.mx3e3-_mx-style_index_-loading:before,\n.mx3e3-_mx-style_index_-loading:after {\n  content: \"\";\n}\n.mx3e3-_mx-style_index_-loading-anim,\n.mx3e3-_mx-style_index_-loading:after,\n.mx3e3-_mx-style_index_-loading:before {\n  width: 14px;\n  height: 14px;\n  background-color: #eaeaea;\n  border-radius: 100%;\n  display: inline-block;\n  animation: mx3e3-_mx-style_index_-sk-bouncedelay 1s infinite ease-in-out both;\n}\n.mx3e3-_mx-style_index_-loading:before {\n  animation-delay: -0.32s;\n}\n.mx3e3-_mx-style_index_-loading-anim {\n  margin: 0 10px;\n  animation-delay: -0.16s;\n}\n@keyframes mx3e3-_mx-style_index_-sk-bouncedelay {\n  0%,\n  80%,\n  100% {\n    transform: scale(0);\n  }\n  40% {\n    transform: scale(1);\n  }\n}\n.mx3e3-_mx-style_index_-dialog-header {\n  padding: 15px 40px;\n  border-bottom: 1px solid #e6e6e6;\n  color: #333;\n  margin: 0;\n  line-height: 1.42857143;\n}\n.mx3e3-_mx-style_index_-dialog-body {\n  padding: 18px 40px;\n}\n.mx3e3-_mx-style_index_-dialog-footer {\n  padding: 15px 40px;\n  text-align: left;\n  border-top: 1px solid #e6e6e6;\n}\n");
Magix.applyStyle("mx3e3-___test___all_","\n.mx3e3-___test___all_-main{\n    padding:50px;\n}");
module.exports = Magix.View.extend({
    tmpl: {"html":"<div mx-guid=\"g0\u001f\" class=\"mx3e3-___test___all_-main\" mx-view=\"<%=$$.view%>\"></div>","subs":[{"keys":["view"],"path":"div[mx-guid=\"g0\u001f\"]","attr":"mx-view=\"<%=$$.view%>\"","attrs":[{"n":"mx-view","v":1}]}],"file":"__test__/all.html"},
    init() {
        this.observeLocation({
            path: true
        });
        this.owner.on('created', () => {
            $('pre').each((i, it) => {
                hljs.highlightBlock(it);
            });
        });
    },
    render() {
        let me = this;
        let loc = Magix.Router.parse();
        let view = loc.path;
        view = view.slice(1);
        if (view == 'list') {
            view = '__test__/list';
        } else {
            let i = view.indexOf('/');
            view = view.slice(0, i) + '/__test__' + view.slice(i);
        }
        me.updater.digest({
            view: view
        });
    }
});
/*
    generate by magix-combine@3.5.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('__test__/list',["magix"],function(require,exports,module){
/*Magix*/

/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
module.exports = Magix.View.extend({
    tmpl: {"html":"<a href=\"#!/mx-calendar/index\" class=\"mx3e3-_mx-style_index_-ib mx3e3-_mx-style_index_-mr20\">mx-calendar/index(日历)</a><a href=\"#!/mx-calendar/datepicker\" class=\"mx3e3-_mx-style_index_-ib mx3e3-_mx-style_index_-mr20\">mx-calendar/datepicker(日期选择)</a><a href=\"#!/mx-calendar/rangepicker\" class=\"mx3e3-_mx-style_index_-ib mx3e3-_mx-style_index_-mr20\">mx-calendar/rangepicker(日期范围选择)</a><a href=\"#!/mx-color/index\" class=\"mx3e3-_mx-style_index_-ib mx3e3-_mx-style_index_-mr20\">mx-color/index(颜色选择)</a><a href=\"#!/mx-dialog/index\" class=\"mx3e3-_mx-style_index_-ib mx3e3-_mx-style_index_-mr20\">mx-dialog/index(对话框)</a><a href=\"#!/mx-dropdown/index\" class=\"mx3e3-_mx-style_index_-ib mx3e3-_mx-style_index_-mr20\">mx-dropdown/index(下拉框)</a><a href=\"#!/mx-form/index\" class=\"mx3e3-_mx-style_index_-ib mx3e3-_mx-style_index_-mr20\">mx-form/index(表单)</a><a href=\"#!/mx-gtip/index\" class=\"mx3e3-_mx-style_index_-ib mx3e3-_mx-style_index_-mr20\">mx-gtip/index(提示)</a><a href=\"#!/mx-hour/index\" class=\"mx3e3-_mx-style_index_-ib mx3e3-_mx-style_index_-mr20\">mx-hour/index(小时)</a><a href=\"#!/mx-pagination/index\" class=\"mx3e3-_mx-style_index_-ib mx3e3-_mx-style_index_-mr20\">mx-pagination/index(分页)</a><a href=\"#!/mx-popover/index\" class=\"mx3e3-_mx-style_index_-ib mx3e3-_mx-style_index_-mr20\">mx-popover/index</a><a href=\"#!/mx-slider/index\" class=\"mx3e3-_mx-style_index_-ib mx3e3-_mx-style_index_-mr20\">mx-slider/index(滑块)</a><a href=\"#!/mx-taginput/index\" class=\"mx3e3-_mx-style_index_-ib mx3e3-_mx-style_index_-mr20\">mx-gtip/index(标签输入)</a><a href=\"#!/mx-time/index\" class=\"mx3e3-_mx-style_index_-ib mx3e3-_mx-style_index_-mr20\">mx-time/index(时间)</a><a href=\"#!/mx-time/picker\" class=\"mx3e3-_mx-style_index_-ib mx3e3-_mx-style_index_-mr20\">mx-time/picker(时间选取)</a><a href=\"#!/mx-uploader/index\" class=\"mx3e3-_mx-style_index_-ib mx3e3-_mx-style_index_-mr20\">mx-uploader/index(上传)</a>","subs":[],"file":"__test__/list.html"},
    render() {
        let me = this;
        me.updater.digest();
    }
});
});
/*
    generate by magix-combine@3.5.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-calendar/__test__/index',["magix","mx-gtip/index","../index"],function(require,exports,module){
/*Magix,GTip*/
require("../index");
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let GTip = require('mx-gtip/index');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-calendar</h2><h3>默认情形</h3><div class=\"mx3e3-_mx-style_index_-pt20 mx3e3-_mx-style_index_-clearfix\"><div mx-view=\"mx-calendar/index\"></div></div><div class=\"mx3e3-_mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;div mx-view=\"app/gallery/mx-calendar/index\"&gt;&lt;/div&gt;</pre></div><h3 class=\"mx3e3-_mx-style_index_-mt30\">默认选中某天</h3><div class=\"mx3e3-_mx-style_index_-pt20 mx3e3-_mx-style_index_-clearfix\"><div mx-view=\"mx-calendar/index?selected=2018-01-01\" view-selected></div></div><div class=\"mx3e3-_mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;div mx-view=\"app/gallery/mx-calendar/index\"\n    view-selected=\"2018-01-01\"\n&gt;&lt;/div&gt;</pre></div><h3 class=\"mx3e3-_mx-style_index_-mt30\">设置可选择的范围</h3><div class=\"mx3e3-_mx-style_index_-pt20 mx3e3-_mx-style_index_-clearfix\"><div mx-view=\"mx-calendar/index?min=2017-08-05&max=2017-08-22&selected=2017-08-12\" view-min view-max view-selected></div></div><div class=\"mx3e3-_mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;div mx-view=\"app/gallery/mx-calendar/index\"\n    view-min=\"2017-08-05\"\n    view-max=\"2017-08-22\"\n    view-selected=\"2017-08-12\"\n&gt;&lt;/div&gt;</pre></div><h3 class=\"mx3e3-_mx-style_index_-mt30\">设置周二为一周的开始</h3><div class=\"mx3e3-_mx-style_index_-pt20 mx3e3-_mx-style_index_-clearfix\"><div mx-view=\"mx-calendar/index?weekStart=<%@ 2%>\" view-weekStart></div></div><div class=\"mx3e3-_mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;div mx-view=\"app/gallery/mx-calendar/index\"\n    view-week-start=\"&lt;%@ 2 %&gt;\"\n&gt;&lt;/div&gt;</pre></div><h3 class=\"mx3e3-_mx-style_index_-mt30\">带时分秒</h3><div class=\"mx3e3-_mx-style_index_-pt20 mx3e3-_mx-style_index_-clearfix\"><div mx-view=\"mx-calendar/index?timeTypes=all\" view-timeTypes></div></div><div class=\"mx3e3-_mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;div mx-view=\"app/gallery/mx-calendar/index\"\n    view-time-types=\"all\"\n&gt;&lt;/div&gt;</pre></div><h3 class=\"mx3e3-_mx-style_index_-mt30\">带时分秒的选中</h3><div class=\"mx3e3-_mx-style_index_-pt20 mx3e3-_mx-style_index_-clearfix\"><div mx-view=\"mx-calendar/index?timeTypes=all&selected=2018-08-08%2018%3A08%3A20\" view-timeTypes view-selected></div></div><div class=\"mx3e3-_mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;div mx-view=\"app/gallery/mx-calendar/index\"\n    view-time-types=\"all\"\n    view-selected=\"2018-08-08 18:08:20\"\n&gt;&lt;/div&gt;</pre></div><h3 class=\"mx3e3-_mx-style_index_-mt30\">带时分秒,只能选择小时和分钟</h3><div class=\"mx3e3-_mx-style_index_-pt20 mx3e3-_mx-style_index_-clearfix\"><div mx-view=\"mx-calendar/index?timeTypes=hour%2Cminute\" view-timeTypes></div></div><div class=\"mx3e3-_mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;div mx-view=\"app/gallery/mx-calendar/index\"\n    view-time-types=\"hour,minute\"\n&gt;&lt;/div&gt;</pre></div><h3 class=\"mx3e3-_mx-style_index_-mt30\">change事件</h3><div class=\"mx3e3-_mx-style_index_-pt20 mx3e3-_mx-style_index_-clearfix\"><div mx-view=\"mx-calendar/index?timeTypes=all&selected=2018-08-08%2018%3A08%3A20\" view-timeTypes view-selected mx-change=\"\u001f\u001eshowDatetime()\"></div></div><div class=\"mx3e3-_mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;div mx-view=\"app/gallery/mx-calendar/index\"\n    view-time-types=\"all\"\n    view-selected=\"2018-08-08 18:08:20\"\n    mx-change=\"showDatetime()\"\n&gt;&lt;/div&gt;</pre><div class=\"mx3e3-_mx-style_index_-pt10\">Javascript Code:</div><pre>let Magix = require('magix');\nlet GTip = require('mx-gtip/index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    'showDatetime&lt;change&gt;' (e) {\n        this.gtipRT('日期：' + e.date + '，时间：' + e.time);\n    }\n});</pre></div>","subs":[],"file":"mx-calendar/__test__/index.html"},
    mixins: [GTip],
    render() {
        let me = this;
        me.updater.digest();
    },
    'showDatetime<change>' (e) {
        this.gtipRT('日期：' + e.date + '，时间：' + e.time);
    }
});
});
/*
    generate by magix-combine@3.5.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-calendar/__test__/datepicker',["magix","mx-gtip/index","../datepicker"],function(require,exports,module){
/*Magix,GTip*/
require("../datepicker");
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let GTip = require('mx-gtip/index');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-calendar</h2><h3>默认情形</h3><div class=\"mx3e3-_mx-style_index_-pt20 mx3e3-_mx-style_index_-clearfix\"><input mx-view=\"mx-calendar/datepicker\" class=\"mx3e3-_mx-style_index_-input\" placeholder=\"请选择日期\"></div><div class=\"mx3e3-_mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;input mx-view=\"app/gallerymx-calendar/datepicker\" class=\"input\" placeholder=\"请选择日期\"&gt;</pre></div><h3 class=\"mx3e3-_mx-style_index_-mt30\">默认选中某天</h3><div class=\"mx3e3-_mx-style_index_-pt20 mx3e3-_mx-style_index_-clearfix\"><input class=\"mx3e3-_mx-style_index_-input\" placeholder=\"请选择日期\" mx-view=\"mx-calendar/datepicker?selected=2018-01-01\" view-selected></div><div class=\"mx3e3-_mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;input class=\"input\" placeholder=\"请选择日期\"\n    mx-view=\"app/gallery/mx-calendar/datepicker\"\n    view-selected=\"2018-01-01\"&gt;</pre></div><h3 class=\"mx3e3-_mx-style_index_-mt30\">从input中读取日期</h3><div class=\"mx3e3-_mx-style_index_-pt20 mx3e3-_mx-style_index_-clearfix\"><input class=\"mx3e3-_mx-style_index_-input\" placeholder=\"请选择日期\" value=\"2018-03-02\" mx-view=\"mx-calendar/datepicker\"></div><div class=\"mx3e3-_mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;input class=\"input\" placeholder=\"请选择日期\"\n    value=\"2018-03-02\"\n    mx-view=\"app/gallery/mx-calendar/datepicker\"&gt;</pre></div><h3 class=\"mx3e3-_mx-style_index_-mt30\">设置可选择的范围</h3><div class=\"mx3e3-_mx-style_index_-pt20 mx3e3-_mx-style_index_-clearfix\"><input mx-view=\"mx-calendar/datepicker?min=2017-08-05&max=2017-08-22\" view-min view-max value=\"2017-08-12\" class=\"mx3e3-_mx-style_index_-input\"></div><div class=\"mx3e3-_mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;input mx-view=\"app/gallery/mx-calendar/datepicker\"\n    view-min=\"2017-08-05\"\n    view-max=\"2017-08-22\"\n    value=\"2017-08-12\"\n    class=\"input\"\n&gt;</pre></div><h3 class=\"mx3e3-_mx-style_index_-mt30\">设置周二为一周的开始</h3><div class=\"mx3e3-_mx-style_index_-pt20 mx3e3-_mx-style_index_-clearfix\"><input mx-view=\"mx-calendar/datepicker?weekStart=<%@ 2%>\" view-weekStart class=\"mx3e3-_mx-style_index_-input\"></div><div class=\"mx3e3-_mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;input mx-view=\"app/gallery/mx-calendar/datepicker\"\n    view-week-start=\"&lt;%@ 2 %&gt;\"\n    class=\"input\"\n&gt;</pre></div><h3 class=\"mx3e3-_mx-style_index_-mt30\">右下对齐</h3><div class=\"mx3e3-_mx-style_index_-pt20 mx3e3-_mx-style_index_-clearfix\"><input mx-view=\"mx-calendar/datepicker?align=right\" view-align class=\"mx3e3-_mx-style_index_-input\"></div><div class=\"mx3e3-_mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;input mx-view=\"app/gallery/mx-calendar/datepicker\"\n    view-align=\"right\"\n    class=\"input\"\n&gt;</pre></div><h3 class=\"mx3e3-_mx-style_index_-mt30\">右上对齐</h3><div class=\"mx3e3-_mx-style_index_-pt20 mx3e3-_mx-style_index_-clearfix\"><input mx-view=\"mx-calendar/datepicker?align=right&placement=top\" view-align view-placement class=\"mx3e3-_mx-style_index_-input\"></div><div class=\"mx3e3-_mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;input mx-view=\"app/gallery/mx-calendar/datepicker\"\n    view-align=\"right\"\n    view-placement=\"top\"\n    class=\"input\"\n&gt;</pre></div><h3 class=\"mx3e3-_mx-style_index_-mt30\">带时分秒</h3><div class=\"mx3e3-_mx-style_index_-pt20 mx3e3-_mx-style_index_-clearfix\"><input mx-view=\"mx-calendar/datepicker?timeTypes=all\" view-timeTypes class=\"mx3e3-_mx-style_index_-input\"></div><div class=\"mx3e3-_mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;input mx-view=\"app/gallery/mx-calendar/datepicker\"\n    view-time-types=\"all\"\n    class=\"input\"\n&gt;</pre></div><h3 class=\"mx3e3-_mx-style_index_-mt30\">带时分秒的选中</h3><div class=\"mx3e3-_mx-style_index_-pt20 mx3e3-_mx-style_index_-clearfix\"><input mx-view=\"mx-calendar/datepicker?timeTypes=all\" view-timeTypes value=\"2018-08-08 18:08:20\" class=\"mx3e3-_mx-style_index_-input\"></div><div class=\"mx3e3-_mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;input mx-view=\"app/gallery/mx-calendar/datepicker\"\n    view-time-types=\"all\"\n    value=\"2018-08-08 18:08:20\"\n    class=\"input\"\n&gt;</pre></div><h3 class=\"mx3e3-_mx-style_index_-mt30\">带时分秒,只能选择小时</h3><div class=\"mx3e3-_mx-style_index_-pt20 mx3e3-_mx-style_index_-clearfix\"><input mx-view=\"mx-calendar/datepicker?timeTypes=hour\" view-timeTypes value=\"2018-08-08 18:08:20\" class=\"mx3e3-_mx-style_index_-input\"></div><div class=\"mx3e3-_mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;input mx-view=\"app/gallery/mx-calendar/datepicker\"\n    view-time-types=\"hour\"\n    value=\"2018-08-08 18:08:20\"\n    class=\"input\"\n&gt;</pre></div><h3 class=\"mx3e3-_mx-style_index_-mt30\">change事件</h3><div class=\"mx3e3-_mx-style_index_-pt20 mx3e3-_mx-style_index_-clearfix\"><input mx-view=\"mx-calendar/datepicker?timeTypes=all&selected=2018-08-08%2018%3A08%3A20\" view-timeTypes view-selected mx-change=\"\u001f\u001eshowDatetime()\" class=\"mx3e3-_mx-style_index_-input\"></div><div class=\"mx3e3-_mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;input mx-view=\"app/gallery/mx-calendar/datepicker\"\n    view-time-types=\"all\"\n    view-selected=\"2018-08-08 18:08:20\"\n    mx-change=\"showDatetime()\"\n    class=\"input\"\n&gt;</pre><div class=\"mx3e3-_mx-style_index_-pt10\">Javascript Code:</div><pre>let Magix = require('magix');\nlet GTip = require('mx-gtip/index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    'showDatetime&lt;change&gt;' (e) {\n        this.gtipRT('日期：' + e.date + '，时间：' + e.time);\n    }\n});</pre></div>","subs":[],"file":"mx-calendar/__test__/datepicker.html"},
    mixins: [GTip],
    render() {
        let me = this;
        me.updater.digest();
    },
    'showDatetime<change>' (e) {
        this.gtipRT('日期：' + e.date + '，时间：' + e.time);
    }
});
});
/*
    generate by magix-combine@3.5.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-calendar/__test__/rangepicker',["magix","mx-gtip/index","../rangepicker"],function(require,exports,module){
/*Magix,GTip*/
require("../rangepicker");
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let GTip = require('mx-gtip/index');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-calendar</h2><h3>默认情形</h3><div class=\"mx3e3-_mx-style_index_-pt20 mx3e3-_mx-style_index_-clearfix\"><input mx-view=\"mx-calendar/rangepicker\" class=\"mx3e3-_mx-style_index_-input\" placeholder=\"请选择日期范围\"></div><div class=\"mx3e3-_mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;input mx-view=\"app/gallery/mx-calendar/rangepicker\" class=\"input\" placeholder=\"请选择日期范围\"&gt;</pre></div><h3 class=\"mx3e3-_mx-style_index_-mt30\">指定开始结束日期</h3><div class=\"mx3e3-_mx-style_index_-pt20 mx3e3-_mx-style_index_-clearfix\"><input class=\"mx3e3-_mx-style_index_-input\" placeholder=\"请选择日期范围\" mx-view=\"mx-calendar/rangepicker?start=2018-01-01&end=2019-01-01\" view-start view-end></div><div class=\"mx3e3-_mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;input class=\"input\" placeholder=\"请选择日期范围\"\n    mx-view=\"app/gallery/mx-calendar/rangepicker\"\n    view-start=\"2018-01-01\"\n    view-end=\"2019-01-01\"&gt;</pre></div><h3 class=\"mx3e3-_mx-style_index_-mt30\">不显示快捷日期</h3><div class=\"mx3e3-_mx-style_index_-pt20 mx3e3-_mx-style_index_-clearfix\"><input class=\"mx3e3-_mx-style_index_-input\" placeholder=\"请选择日期范围\" mx-view=\"mx-calendar/rangepicker?shortcuts=false\" view-shortcuts></div><div class=\"mx3e3-_mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;input class=\"input\" placeholder=\"请选择日期范围\"\n    mx-view=\"app/gallery/mx-calendar/datepicker\"\n    view-shortcuts=\"false\"&gt;</pre></div><h3 class=\"mx3e3-_mx-style_index_-mt30\">设置可选择的范围</h3><div class=\"mx3e3-_mx-style_index_-pt20 mx3e3-_mx-style_index_-clearfix\"><input mx-view=\"mx-calendar/rangepicker?min=2017-08-05&max=2017-08-22&start=2017-08-08&end=2017-08-20&shortcuts=false\" view-min view-max view-start view-end view-shortcuts class=\"mx3e3-_mx-style_index_-input\"></div><div class=\"mx3e3-_mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;input mx-view=\"app/gallery/mx-calendar/rangepicker\"\n    view-min=\"2017-08-05\"\n    view-max=\"2017-08-22\"\n    view-start=\"2017-08-08\"\n    view-end=\"2017-08-20\"\n    view-shortcuts=\"false\"\n    class=\"input\"\n&gt;</pre></div><h3 class=\"mx3e3-_mx-style_index_-mt30\">右上对齐</h3><div class=\"mx3e3-_mx-style_index_-pt20 mx3e3-_mx-style_index_-clearfix\"><input mx-view=\"mx-calendar/rangepicker?align=right&placement=top\" view-align view-placement class=\"mx3e3-_mx-style_index_-input\"></div><div class=\"mx3e3-_mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;input mx-view=\"app/gallery/mx-calendar/rangepicker\"\n    view-align=\"right\"\n    view-placement=\"top\"\n    class=\"input\"\n&gt;</pre></div><h3 class=\"mx3e3-_mx-style_index_-mt30\">带时分秒</h3><div class=\"mx3e3-_mx-style_index_-pt20 mx3e3-_mx-style_index_-clearfix\"><input mx-view=\"mx-calendar/rangepicker?timeTypes=all\" view-timeTypes class=\"mx3e3-_mx-style_index_-input\"></div><div class=\"mx3e3-_mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;input mx-view=\"app/gallery/mx-calendar/rangepicker\"\n    view-time-types=\"all\"\n    class=\"input\"\n&gt;</pre></div><h3 class=\"mx3e3-_mx-style_index_-mt30\">带时分秒的选中</h3><div class=\"mx3e3-_mx-style_index_-pt20 mx3e3-_mx-style_index_-clearfix\"><input mx-view=\"mx-calendar/rangepicker?timeTypes=all&start=2017-07-07%2018%3A08%3A08&end=2017-12-30%2015%3A15%3A15\" view-timeTypes view-start view-end class=\"mx3e3-_mx-style_index_-input\"></div><div class=\"mx3e3-_mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;input mx-view=\"app/gallery/mx-calendar/rangepicker\"\n    view-time-types=\"all\"\n    view-start=\"2017-07-07 18:08:08\"\n    view-end=\"2017-12-30 15:15:15\"\n    class=\"input\"\n&gt;</pre></div><h3 class=\"mx3e3-_mx-style_index_-mt30\">change事件</h3><div class=\"mx3e3-_mx-style_index_-pt20 mx3e3-_mx-style_index_-clearfix\"><input mx-view=\"mx-calendar/rangepicker?timeTypes=all\" view-timeTypes mx-change=\"\u001f\u001eshowDatetime()\" class=\"mx3e3-_mx-style_index_-input\"></div><div class=\"mx3e3-_mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;input mx-view=\"app/gallery/mx-calendar/rangepicker\"\n    view-time-types=\"all\"\n    mx-change=\"showDatetime()\"\n    class=\"input\"\n&gt;</pre><div class=\"mx3e3-_mx-style_index_-pt10\">Javascript Code:</div><pre>let Magix = require('magix');\nlet GTip = require('mx-gtip/index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@rangepicker.html',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    'showDatetime&lt;change&gt;' (e) {\n        console.log(e.dates);\n        this.gtipRT('日期：' + JSON.stringify(e.dates));\n    }\n});</pre></div>","subs":[],"file":"mx-calendar/__test__/rangepicker.html"},
    mixins: [GTip],
    render() {
        let me = this;
        me.updater.digest();
    },
    'showDatetime<change>' (e) {
        console.log(e.dates);
        this.gtipRT('日期：' + JSON.stringify(e.dates));
    }
});
});
/*
    generate by magix-combine@3.5.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-color/__test__/index',["magix","../index","../picker"],function(require,exports,module){
/*Magix*/
require("../index");
require("../picker");
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-color</h2><h3>默认情形</h3><div class=\"mx3e3-_mx-style_index_-pt20 mx3e3-_mx-style_index_-clearfix\"><div mx-view=\"mx-color/index\"></div></div><div class=\"mx3e3-_mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;div mx-view=\"mx-color/index\"&gt;&lt;/div&gt;</pre></div><h3 class=\"mx3e3-_mx-style_index_-mt30\">颜色选择</h3><div class=\"mx3e3-_mx-style_index_-pt20 mx3e3-_mx-style_index_-clearfix\"><input mx-view=\"mx-color/picker\" class=\"mx3e3-_mx-style_index_-input\"></div><div class=\"mx3e3-_mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;input mx-view=\"mx-color/picker\" class=\"input\" /&gt;</pre></div>","subs":[],"file":"mx-color/__test__/index.html"},
    render() {
        let me = this;
        me.updater.digest();
    }
});
});
/*
    generate by magix-combine@3.5.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-dialog/__test__/index',["magix","mx-dialog/index"],function(require,exports,module){
/*Magix,Dialog*/

/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let Dialog = require('mx-dialog/index');
module.exports = Magix.View.extend({
    tmpl: {"html":"1\u001d","subs":[{"keys":["inDialog"],"path":"#\u001f","tmpl":"<%if($$.inDialog){%><div class=\"mx3e3-_mx-style_index_-dialog-header\">加载view测试</div><div class=\"mx3e3-_mx-style_index_-dialog-body\"><%}%><h2>mx-dialog</h2><h3>内置alert与confirm</h3><div class=\"mx3e3-_mx-style_index_-pt20 mx3e3-_mx-style_index_-clearfix\"><button type=\"button\" class=\"mx3e3-_mx-style_index_-btn mx3e3-_mx-style_index_-btn-brand mx3e3-_mx-style_index_-mr20\" mx-click=\"\u001f\u001ealert()\">alert</button><button type=\"button\" class=\"mx3e3-_mx-style_index_-btn mx3e3-_mx-style_index_-btn-brand mx3e3-_mx-style_index_-mr20\" mx-click=\"\u001f\u001econfirm()\">confirm</button></div><div class=\"mx3e3-_mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;button type=\"button\" class=\"btn btn-brand mr20\" mx-click=\"alert()\"&gt;alert&lt;/button&gt;\n&lt;button type=\"button\" class=\"btn btn-brand mr20\" mx-click=\"confirm()\"&gt;confirm&lt;/button&gt;</pre><div class=\"mx3e3-_mx-style_index_-pt10\">Javascript Code:</div><pre>let Magix = require('magix');\nlet Dialog = require('app/gallery/mx-dialog/index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [Dialog],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    'alert&lt;click&gt;' () {\n        this.alert('xxx', () => {\n            console.log('确定被点击');\n        });\n    },\n    'confirm&lt;click&gt;' () {\n        this.confirm('xxx', () => {\n            console.log('确定被点击');\n        }, () => {\n            console.log('取消被点击');\n        });\n    }\n});</pre></div><h3 class=\"mx3e3-_mx-style_index_-mt30\">加载普通view</h3><div class=\"mx3e3-_mx-style_index_-pt20 mx3e3-_mx-style_index_-clearfix\"><button type=\"button\" class=\"mx3e3-_mx-style_index_-btn mx3e3-_mx-style_index_-btn-brand mx3e3-_mx-style_index_-mr20\" mx-click=\"\u001f\u001eview()\">view</button></div><div class=\"mx3e3-_mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;button type=\"button\" class=\"btn btn-brand mr20\" mx-click=\"view()\"&gt;view&lt;/button&gt;</pre><div class=\"mx3e3-_mx-style_index_-pt10\">Javascript Code:</div><pre>let Magix = require('magix');\nlet Dialog = require('app/gallery/mx-dialog/index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [Dialog],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    'view&lt;click&gt;' () {\n        this.mxDialog('path/to/view', {\n            width: 900\n        });\n    }\n});</pre></div><%if($$.inDialog){%></div><div class=\"mx3e3-_mx-style_index_-dialog-footer\">dialog footer</div><%}%>","s":"1\u001d"}],"file":"mx-dialog/__test__/index.html"},
    mixins: [Dialog],
    init(extra) {
        this.updater.set(extra);
    },
    render() {
        let me = this;
        me.updater.digest();
    },
    'alert<click>' () {
        this.alert('xxx', () => {
            console.log('确定被点击');
        });
    },
    'confirm<click>' () {
        this.confirm('xxx', () => {
            console.log('确定被点击');
        }, () => {
            console.log('取消被点击');
        });
    },
    'view<click>' () {
        this.mxDialog('mx-dialog/__test__/index', {
            inDialog: true,
            width: 900
        });
    }
});
});
/*
    generate by magix-combine@3.5.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-dropdown/__test__/index',["magix","mx-gtip/index","../index","../multiple"],function(require,exports,module){
/*Magix,GTip*/
require("../index");
require("../multiple");
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let GTip = require('mx-gtip/index');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-dropdown</h2><h3>单选</h3><div class=\"mx3e3-_mx-style_index_-pt20 mx3e3-_mx-style_index_-clearfix\"><div mx-view=\"mx-dropdown/index?searchbox=true&emptyText=%E8%AF%B7%E9%80%89%E6%8B%A9%E6%97%A5%E6%9C%9F\" view-searchbox view-emptyText mx-change=\"\u001f\u001eshowWeek()\" class=\"mx3e3-_mx-style_index_-fl\" style=\"width:150px\"><item value=\"mon\">周一</item><item value=\"wed\">周三</item><item value=\"thu\">周四</item><item value=\"fri\">周五</item><item value=\"sat\">周六</item></div></div><div class=\"mx3e3-_mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;div mx-view=\"app/gallery/mx-dropdown/index\"\n    view-searchbox=\"true\"\n    view-empty-text=\"请选择日期\"\n    mx-change=\"showWeek()\"\n    class=\"fl\" style=\"width:150px;\"&gt;\n    &lt;item value=\"mon\"&gt;周一&lt;/item&gt;\n    &lt;item value=\"wed\"&gt;周三&lt;/item&gt;\n    &lt;item value=\"thu\"&gt;周四&lt;/item&gt;\n    &lt;item value=\"fri\"&gt;周五&lt;/item&gt;\n    &lt;item value=\"sat\"&gt;周六&lt;/item&gt;\n&lt;/div&gt;</pre><div class=\"mx3e3-_mx-style_index_-pt10\">Javascript Code:</div><pre>let Magix = require('magix');\nlet GTip = require('app/gallery/mx-gtip/index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    'showWeek&lt;change&gt;' (e) {\n        this.gtipRB('text:' + e.text + ',value:' + e.value);\n    }\n});</pre></div><h3 class=\"mx3e3-_mx-style_index_-mt30\">单选带分组</h3><div class=\"mx3e3-_mx-style_index_-pt20 mx3e3-_mx-style_index_-clearfix\"><div mx-view=\"mx-dropdown/index?searchbox=true&emptyText=%E8%AF%B7%E9%80%89%E6%8B%A9%E6%97%A5%E6%9C%9F\" view-searchbox view-emptyText mx-change=\"\u001f\u001eshowWeek()\" class=\"mx3e3-_mx-style_index_-fl\" style=\"width:150px\"><item group=\"true\">本周日期</item><item value=\"mon\">周一</item><item value=\"wed\">周三</item><item value=\"thu\">周四</item><item value=\"fri\">周五</item><item value=\"sat\">周六</item><item group=\"true\">下周日期</item><item value=\"next-mon\">下周一</item><item value=\"next-wed\">下周三</item><item value=\"next-thu\">下周四</item><item value=\"next-fri\">下周五</item><item value=\"next-sat\">下周六</item></div></div><div class=\"mx3e3-_mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;div mx-view=\"app/gallery/mx-dropdown/index\"\n    view-searchbox=\"true\"\n    view-empty-text=\"请选择日期\"\n    mx-change=\"showWeek()\"\n    class=\"fl\" style=\"width:150px;\"&gt;\n    &lt;item group=\"true\"&gt;本周日期&lt;/item&gt;\n    &lt;item value=\"mon\"&gt;周一&lt;/item&gt;\n    &lt;item value=\"wed\"&gt;周三&lt;/item&gt;\n    &lt;item value=\"thu\"&gt;周四&lt;/item&gt;\n    &lt;item value=\"fri\"&gt;周五&lt;/item&gt;\n    &lt;item value=\"sat\"&gt;周六&lt;/item&gt;\n    &lt;item group=\"true\"&gt;下周日期&lt;/item&gt;\n    &lt;item value=\"next-mon\"&gt;下周一&lt;/item&gt;\n    &lt;item value=\"next-wed\"&gt;下周三&lt;/item&gt;\n    &lt;item value=\"next-thu\"&gt;下周四&lt;/item&gt;\n    &lt;item value=\"next-fri\"&gt;下周五&lt;/item&gt;\n    &lt;item value=\"next-sat\"&gt;下周六&lt;/item&gt;\n&lt;/div&gt;</pre><div class=\"mx3e3-_mx-style_index_-pt10\">Javascript Code:</div><pre>let Magix = require('magix');\nlet GTip = require('app/gallery/mx-gtip/index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    'showWeek&lt;change&gt;' (e) {\n        this.gtipRB('text:' + e.text + ',value:' + e.value);\n    }\n});</pre></div><h3 class=\"mx3e3-_mx-style_index_-mt30\">动态数据并设置选中</h3><div class=\"mx3e3-_mx-style_index_-pt20 mx3e3-_mx-style_index_-clearfix\"><div mx-guid=\"g0\u001f\" mx-view=\"mx-dropdown/index?searchbox=true&emptyText=%E8%AF%B7%E9%80%89%E6%8B%A9%E7%94%A8%E6%88%B7&textKey=name&valueKey=id&selected=<%@ $$.userSelected%>&list=<%@ $$.userList%>\" view-searchbox view-emptyText view-textKey view-valueKey view-selected view-list mx-change=\"\u001f\u001eshowUser()\" class=\"mx3e3-_mx-style_index_-fl\" style=\"width:200px\"></div></div><div class=\"mx3e3-_mx-style_index_-pt20\"><div>HTML Code:</div><pre lang=\"html\">&lt;div mx-view=\"app/gallery/mx-dropdown/index\"\n    view-searchbox=\"true\"\n    view-empty-text=\"请选择用户\"\n    view-text-key=\"name\"\n    view-value-key=\"id\"\n    view-selected=\"&lt;%@ userSelected %&gt;\"\n    view-list=\"&lt;%@ userList %&gt;\"\n    mx-change=\"showUser()\"\n    class=\"fl\" style=\"width:200px;\"&gt;\n&lt;/div&gt;</pre><div class=\"mx3e3-_mx-style_index_-pt10\">Javascript Code:</div><pre>let Magix = require('magix');\nlet GTip = require('app/gallery/mx-gtip/index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest({\n            userList: [{\n                name: 'xinglie',\n                id: 58782\n            }, {\n                name: 'xinglie1',\n                id: 587821\n            }, {\n                name: 'xinglie2',\n                id: 587822\n            }, {\n                name: 'xinglie3',\n                id: 587823\n            }, {\n                name: 'xinglie4',\n                id: 587824\n            }, {\n                name: 'xinglie5',\n                id: 587825\n            }, {\n                name: 'xinglie6',\n                id: 587826\n            }, {\n                name: 'xinglie7',\n                id: 587827\n            }, {\n                name: 'xinglie8',\n                id: 587828\n            }, {\n                name: 'xinglie9',\n                id: 587829\n            }],\n            userSelected: 587828\n        });\n    },\n    'showUser&lt;change&gt;' (e) {\n        this.gtipRB('name:' + e.text + ',id:' + e.value);\n    }\n});</pre></div><h3 class=\"mx3e3-_mx-style_index_-mt30\">多选</h3><div class=\"mx3e3-_mx-style_index_-pt20 mx3e3-_mx-style_index_-clearfix\"><div mx-view=\"mx-dropdown/multiple?searchbox=true&emptyText=%E8%AF%B7%E9%80%89%E6%8B%A9%E6%97%A5%E6%9C%9F\" view-searchbox view-emptyText mx-change=\"\u001f\u001eshowWeeks()\" class=\"mx3e3-_mx-style_index_-fl\" style=\"width:150px\"><item value=\"mon\">周一</item><item value=\"wed\">周三</item><item value=\"thu\">周四</item><item value=\"fri\">周五</item><item value=\"sat\">周六</item></div></div><div class=\"mx3e3-_mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;div mx-view=\"app/gallery/mx-dropdown/multiple\"\n    view-searchbox=\"true\"\n    view-empty-text=\"请选择日期\"\n    mx-change=\"showWeeks()\"\n    class=\"fl\" style=\"width:150px;\"&gt;\n    &lt;item value=\"mon\"&gt;周一&lt;/item&gt;\n    &lt;item value=\"wed\"&gt;周三&lt;/item&gt;\n    &lt;item value=\"thu\"&gt;周四&lt;/item&gt;\n    &lt;item value=\"fri\"&gt;周五&lt;/item&gt;\n    &lt;item value=\"sat\"&gt;周六&lt;/item&gt;\n&lt;/div&gt;</pre><div class=\"mx3e3-_mx-style_index_-pt10\">Javascript Code:</div><pre>let Magix = require('magix');\nlet GTip = require('app/gallery/mx-gtip/index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    'showWeeks&lt;change&gt;' (e) {\n        this.gtipRB('values:' + e.values);\n    }\n});</pre></div><h3 class=\"mx3e3-_mx-style_index_-mt30\">多选带分组</h3><div class=\"mx3e3-_mx-style_index_-pt20 mx3e3-_mx-style_index_-clearfix\"><div mx-view=\"mx-dropdown/multiple?searchbox=true&emptyText=%E8%AF%B7%E9%80%89%E6%8B%A9%E6%97%A5%E6%9C%9F\" view-searchbox view-emptyText mx-change=\"\u001f\u001eshowWeeks()\" class=\"mx3e3-_mx-style_index_-fl\" style=\"width:150px\"><item group=\"true\">本周日期</item><item value=\"mon\">周一</item><item value=\"wed\">周三</item><item value=\"thu\">周四</item><item value=\"fri\">周五</item><item value=\"sat\">周六</item><item group=\"true\">下周日期</item><item value=\"next-mon\">下周一</item><item value=\"next-wed\">下周三</item><item value=\"next-thu\">下周四</item><item value=\"next-fri\">下周五</item><item value=\"next-sat\">下周六</item></div></div><div class=\"mx3e3-_mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;div mx-view=\"app/gallery/mx-dropdown/multiple\"\n    view-searchbox=\"true\"\n    view-empty-text=\"请选择日期\"\n    mx-change=\"showWeeks()\"\n    class=\"fl\" style=\"width:150px;\"&gt;\n    &lt;item group=\"true\"&gt;本周日期&lt;/item&gt;\n    &lt;item value=\"mon\"&gt;周一&lt;/item&gt;\n    &lt;item value=\"wed\"&gt;周三&lt;/item&gt;\n    &lt;item value=\"thu\"&gt;周四&lt;/item&gt;\n    &lt;item value=\"fri\"&gt;周五&lt;/item&gt;\n    &lt;item value=\"sat\"&gt;周六&lt;/item&gt;\n    &lt;item group=\"true\"&gt;下周日期&lt;/item&gt;\n    &lt;item value=\"next-mon\"&gt;下周一&lt;/item&gt;\n    &lt;item value=\"next-wed\"&gt;下周三&lt;/item&gt;\n    &lt;item value=\"next-thu\"&gt;下周四&lt;/item&gt;\n    &lt;item value=\"next-fri\"&gt;下周五&lt;/item&gt;\n    &lt;item value=\"next-sat\"&gt;下周六&lt;/item&gt;\n&lt;/div&gt;</pre><div class=\"mx3e3-_mx-style_index_-pt10\">Javascript Code:</div><pre>let Magix = require('magix');\nlet GTip = require('app/gallery/mx-gtip/index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    'showWeeks&lt;change&gt;' (e) {\n        this.gtipRB('values:' + e.values);\n    }\n});</pre></div><h3 class=\"mx3e3-_mx-style_index_-mt30\">动态数据并设置选中</h3><div class=\"mx3e3-_mx-style_index_-pt20 mx3e3-_mx-style_index_-clearfix\"><div mx-guid=\"g1\u001f\" mx-view=\"mx-dropdown/multiple?searchbox=true&emptyText=%E8%AF%B7%E9%80%89%E6%8B%A9%E7%94%A8%E6%88%B7&textKey=name&valueKey=id&selected=<%@ $$.usersSelected%>&list=<%@ $$.userList%>\" view-searchbox view-emptyText view-textKey view-valueKey view-selected view-list mx-change=\"\u001f\u001eshowUsers()\" class=\"mx3e3-_mx-style_index_-fl\" style=\"width:200px\"></div></div><div class=\"mx3e3-_mx-style_index_-pt20\"><div>HTML Code:</div><pre lang=\"html\">&lt;div mx-view=\"app/gallery/mx-dropdown/mutiple\"\n    view-searchbox=\"true\"\n    view-empty-text=\"请选择用户\"\n    view-text-key=\"name\"\n    view-value-key=\"id\"\n    view-selected=\"&lt;%@ usersSelected %&gt;\"\n    view-list=\"&lt;%@ userList %&gt;\"\n    mx-change=\"showUsers()\"\n    class=\"fl\" style=\"width:200px;\"&gt;\n&lt;/div&gt;</pre><div class=\"mx3e3-_mx-style_index_-pt10\">Javascript Code:</div><pre>let Magix = require('magix');\nlet GTip = require('app/gallery/mx-gtip/index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest({\n            userList: [{\n                name: 'xinglie',\n                id: 58782\n            }, {\n                name: 'xinglie1',\n                id: 587821\n            }, {\n                name: 'xinglie2',\n                id: 587822\n            }, {\n                name: 'xinglie3',\n                id: 587823\n            }, {\n                name: 'xinglie4',\n                id: 587824\n            }, {\n                name: 'xinglie5',\n                id: 587825\n            }, {\n                name: 'xinglie6',\n                id: 587826\n            }, {\n                name: 'xinglie7',\n                id: 587827\n            }, {\n                name: 'xinglie8',\n                id: 587828\n            }, {\n                name: 'xinglie9',\n                id: 587829\n            }],\n            usersSelected: [58782,587829]\n        });\n    },\n    'showUsers&lt;change&gt;' (e) {\n        this.gtipRB('user ids:' + e.values);\n    }\n});</pre></div>","subs":[{"keys":["userSelected","userList"],"path":"div[mx-guid=\"g0\u001f\"]","attr":"mx-view=\"mx-dropdown/index?searchbox=true&emptyText=%E8%AF%B7%E9%80%89%E6%8B%A9%E7%94%A8%E6%88%B7&textKey=name&valueKey=id&selected=<%@ $$.userSelected%>&list=<%@ $$.userList%>\" view-searchbox view-emptyText view-textKey view-valueKey","attrs":[{"n":"mx-view","v":1},{"n":"view-searchbox"},{"n":"view-emptyText"},{"n":"view-textKey"},{"n":"view-valueKey"}]},{"keys":["usersSelected","userList"],"path":"div[mx-guid=\"g1\u001f\"]","attr":"mx-view=\"mx-dropdown/multiple?searchbox=true&emptyText=%E8%AF%B7%E9%80%89%E6%8B%A9%E7%94%A8%E6%88%B7&textKey=name&valueKey=id&selected=<%@ $$.usersSelected%>&list=<%@ $$.userList%>\" view-searchbox view-emptyText view-textKey view-valueKey","attrs":[{"n":"mx-view","v":1},{"n":"view-searchbox"},{"n":"view-emptyText"},{"n":"view-textKey"},{"n":"view-valueKey"}]}],"file":"mx-dropdown/__test__/index.html"},
    mixins: [GTip],
    render() {
        let me = this;
        me.updater.digest({
            userList: [{
                name: 'xinglie',
                id: 58782
            }, {
                name: 'xinglie1',
                id: 587821
            }, {
                name: 'xinglie2',
                id: 587822
            }, {
                name: 'xinglie3',
                id: 587823
            }, {
                name: 'xinglie4',
                id: 587824
            }, {
                name: 'xinglie5',
                id: 587825
            }, {
                name: 'xinglie6',
                id: 587826
            }, {
                name: 'xinglie7',
                id: 587827
            }, {
                name: 'xinglie8',
                id: 587828
            }, {
                name: 'xinglie9',
                id: 587829
            }],
            userSelected: 587828,
            usersSelected: [58782, 587829]
        });
    },
    'showWeek<change>' (e) {
        this.gtipRB('text:' + e.text + ',value:' + e.value);
    },
    'showUser<change>' (e) {
        this.gtipRB('name:' + e.text + ',id:' + e.value);
    },
    'showWeeks<change>' (e) {
        this.gtipRB('values:' + e.values);
    },
    'showUsers<change>' (e) {
        this.gtipRB('user ids:' + e.values);
    }
});
});
/*
    generate by magix-combine@3.5.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-form/__test__/index',["magix","../index","mx-color/picker","mx-taginput/index","mx-dropdown/index","mx-time/picker","mx-calendar/datepicker","mx-slider/index","mx-slider/range","mx-uploader/index"],function(require,exports,module){
/*Magix,Form*/
require("mx-color/picker");
require("mx-taginput/index");
require("mx-dropdown/index");
require("mx-time/picker");
require("mx-calendar/datepicker");
require("mx-slider/index");
require("mx-slider/range");
require("mx-uploader/index");
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let Form = require('../index');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-form</h2><h3>示例表单</h3><div class=\"mx3e3-_mx-style_index_-pt20 mx3e3-_mx-style_index_-clearfix\"><div style=\"width:600px;border:solid 1px #ccc;border-radius: 5px;padding: 25px 0\"><div class=\"mx3e3-_mx-style_index_-form-item mx3e3-_mx-style_index_-clearfix\"><label class=\"mx3e3-_mx-style_index_-form-label mx3e3-_mx-style_index_-form-required\">活动名称：</label><div class=\"mx3e3-_mx-style_index_-form-content\"><input mx-guid=\"g0\u001f\" class=\"mx3e3-_mx-style_index_-input\" placeholder=\"请填写活动名称\" value=\"<%=$$.name%>\" mx-beid=\"\u001f\u001e0\" mx-change=\"\u001f\u001esyncValue({p:'name',f:{required:true,blength:[20,50]}})\" mx-focusout=\"\u001f\u001esyncValue({p:'name',f:{required:true,blength:[20,50]}})\" mx-focusin=\"\u001f\u001esyncValue()\"></div></div><div class=\"mx3e3-_mx-style_index_-form-item mx3e3-_mx-style_index_-clearfix\"><label class=\"mx3e3-_mx-style_index_-form-label\">色彩：</label><div class=\"mx3e3-_mx-style_index_-form-content\"><input mx-view=\"mx-color/picker\" class=\"mx3e3-_mx-style_index_-input\"></div></div><div class=\"mx3e3-_mx-style_index_-form-item\"><label class=\"mx3e3-_mx-style_index_-form-label mx3e3-_mx-style_index_-form-required\">标签：</label><div class=\"mx3e3-_mx-style_index_-form-content\"><div mx-guid=\"g1\u001f\" mx-view=\"mx-taginput/index?list=<%@$$.list%>&placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E6%A0%87%E7%AD%BE&selected=<%@$$.tags%>\" view-list view-placeholder view-selected mx-beid=\"\u001f\u001e1\" mx-change=\"\u001f\u001esyncValue({p:'tags',f:{required:true}})\" mx-focusout=\"\u001f\u001esyncValue({p:'tags',f:{required:true}})\" mx-focusin=\"\u001f\u001esyncValue()\"></div></div></div><div class=\"mx3e3-_mx-style_index_-form-item\"><label class=\"mx3e3-_mx-style_index_-form-label mx3e3-_mx-style_index_-form-required\">活动时间：</label><div class=\"mx3e3-_mx-style_index_-form-content\"><div mx-guid=\"g2\u001f\" mx-view=\"mx-dropdown/index?searchbox=true&emptyText=%E8%AF%B7%E9%80%89%E6%8B%A9%E6%97%A5%E6%9C%9F&selected=<%@$$.day%>\" view-searchbox view-emptyText view-selected mx-beid=\"\u001f\u001e2\" mx-change=\"\u001f\u001esyncValue({p:'day',f:{required:true}})\" mx-focusout=\"\u001f\u001esyncValue({p:'day',f:{required:true}})\" mx-focusin=\"\u001f\u001esyncValue()\" style=\"width:180px\"><item value=\"mon\">周一</item><item value=\"wed\">周三</item><item value=\"thu\">周四</item><item value=\"fri\">周五</item><item value=\"sat\">周六</item></div><span class=\"mx3e3-_mx-style_index_-ib mx3e3-_mx-style_index_-ml5 mx3e3-_mx-style_index_-mr5\">-</span><input mx-guid=\"g3\u001f\" class=\"mx3e3-_mx-style_index_-input\" style=\"width:145px\" placeholder=\"请选择时间\" value=\"<%=$$.time%>\" mx-beid=\"\u001f\u001e3\" mx-change=\"\u001f\u001esyncValue({p:'time',f:{required:true}})\" mx-focusout=\"\u001f\u001esyncValue({p:'time',f:{required:true}})\" mx-focusin=\"\u001f\u001esyncValue()\" mx-view=\"mx-time/picker\"></div></div><div class=\"mx3e3-_mx-style_index_-form-item\"><label class=\"mx3e3-_mx-style_index_-form-label\">checkbox：</label><div class=\"mx3e3-_mx-style_index_-form-content\"><label class=\"mx3e3-_mx-style_index_-mr10\"><input type=\"checkbox\" mx-beid=\"\u001f\u001e4\" mx-change=\"\u001f\u001esyncValue({p:'checkbox'})\" mx-focusout=\"\u001f\u001esyncValue({p:'checkbox'})\" mx-focusin=\"\u001f\u001esyncValue()\" name=\"cb\" value=\"c1\" class=\"mx3e3-_mx-style_index_-checkbox\">c1</label><label class=\"mx3e3-_mx-style_index_-mr10\"><input type=\"checkbox\" mx-beid=\"\u001f\u001e5\" mx-change=\"\u001f\u001esyncValue({p:'checkbox'})\" mx-focusout=\"\u001f\u001esyncValue({p:'checkbox'})\" mx-focusin=\"\u001f\u001esyncValue()\" name=\"cb\" value=\"c2\" class=\"mx3e3-_mx-style_index_-checkbox\">c2</label><label class=\"mx3e3-_mx-style_index_-mr10\"><input type=\"checkbox\" mx-beid=\"\u001f\u001e6\" mx-change=\"\u001f\u001esyncValue({p:'checkbox'})\" mx-focusout=\"\u001f\u001esyncValue({p:'checkbox'})\" mx-focusin=\"\u001f\u001esyncValue()\" name=\"cb\" value=\"c3\" class=\"mx3e3-_mx-style_index_-checkbox\">c3</label><label class=\"mx3e3-_mx-style_index_-mr10\"><input type=\"checkbox\" mx-beid=\"\u001f\u001e7\" mx-change=\"\u001f\u001esyncValue({p:'checkbox'})\" mx-focusout=\"\u001f\u001esyncValue({p:'checkbox'})\" mx-focusin=\"\u001f\u001esyncValue()\" name=\"cb\" value=\"c4\" class=\"mx3e3-_mx-style_index_-checkbox\">c4</label></div></div><div class=\"mx3e3-_mx-style_index_-form-item\"><label class=\"mx3e3-_mx-style_index_-form-label\">radio：</label><div class=\"mx3e3-_mx-style_index_-form-content\"><label class=\"mx3e3-_mx-style_index_-mr10\"><input type=\"radio\" mx-beid=\"\u001f\u001e8\" mx-change=\"\u001f\u001esyncValue({p:'radio'})\" mx-focusout=\"\u001f\u001esyncValue({p:'radio'})\" mx-focusin=\"\u001f\u001esyncValue()\" value=\"r1\" class=\"mx3e3-_mx-style_index_-radio\" name=\"magix\">r1</label><label class=\"mx3e3-_mx-style_index_-mr10\"><input type=\"radio\" mx-beid=\"\u001f\u001e9\" mx-change=\"\u001f\u001esyncValue({p:'radio'})\" mx-focusout=\"\u001f\u001esyncValue({p:'radio'})\" mx-focusin=\"\u001f\u001esyncValue()\" value=\"r2\" class=\"mx3e3-_mx-style_index_-radio\" name=\"magix\">r2</label><label class=\"mx3e3-_mx-style_index_-mr10\"><input type=\"radio\" mx-beid=\"\u001f\u001ea\" mx-change=\"\u001f\u001esyncValue({p:'radio'})\" mx-focusout=\"\u001f\u001esyncValue({p:'radio'})\" mx-focusin=\"\u001f\u001esyncValue()\" value=\"r3\" class=\"mx3e3-_mx-style_index_-radio\" name=\"magix\">r3</label></div></div><div class=\"mx3e3-_mx-style_index_-form-item\"><label class=\"mx3e3-_mx-style_index_-form-label\">日期：</label><div class=\"mx3e3-_mx-style_index_-form-content\"><input mx-guid=\"g4\u001f\" mx-view=\"mx-calendar/datepicker\" class=\"mx3e3-_mx-style_index_-input\" placeholder=\"请选择开始日期\" value=\"<%=$$.dateStart%>\" mx-beid=\"\u001f\u001eb\" mx-change=\"\u001f\u001esyncValue({p:'dateStart'})\" mx-focusout=\"\u001f\u001esyncValue({p:'dateStart'})\" mx-focusin=\"\u001f\u001esyncValue()\" style=\"width:162px\"><span class=\"mx3e3-_mx-style_index_-ib mx3e3-_mx-style_index_-ml5 mx3e3-_mx-style_index_-mr5\">-</span><input mx-guid=\"g5\u001f\" mx-view=\"mx-calendar/datepicker\" class=\"mx3e3-_mx-style_index_-input\" placeholder=\"请选择结束日期\" value=\"<%=$$.dateEnd%>\" mx-beid=\"\u001f\u001ec\" mx-change=\"\u001f\u001esyncValue({p:'dateEnd'})\" mx-focusout=\"\u001f\u001esyncValue({p:'dateEnd'})\" mx-focusin=\"\u001f\u001esyncValue()\" style=\"width:162px\"></div></div><div class=\"mx3e3-_mx-style_index_-form-item\"><label class=\"mx3e3-_mx-style_index_-form-label\">范围：</label><div class=\"mx3e3-_mx-style_index_-form-content\"><div mx-guid=\"g6\u001f\" mx-view=\"mx-slider/index?max=200&min=20&value=<%@$$.range%>&step=0.2\" view-max view-min view-value mx-beid=\"\u001f\u001ed\" mx-change=\"\u001f\u001esyncValue({p:'range'})\" mx-focusout=\"\u001f\u001esyncValue({p:'range'})\" mx-focusin=\"\u001f\u001esyncValue()\" view-step></div></div></div><div class=\"mx3e3-_mx-style_index_-form-item\"><label class=\"mx3e3-_mx-style_index_-form-label\">范围：</label><div class=\"mx3e3-_mx-style_index_-form-content\"><div mx-guid=\"g7\u001f\" mx-view=\"mx-slider/range?max=500&min=200&value=<%@$$.range1%>&step=10\" view-max view-min view-value mx-beid=\"\u001f\u001ee\" mx-change=\"\u001f\u001esyncValue({p:'range1'})\" mx-focusout=\"\u001f\u001esyncValue({p:'range1'})\" mx-focusin=\"\u001f\u001esyncValue()\" view-step></div></div></div><div class=\"mx3e3-_mx-style_index_-form-item\"><label class=\"mx3e3-_mx-style_index_-form-label\">封面：</label><div class=\"mx3e3-_mx-style_index_-form-content\"><button class=\"mx3e3-_mx-style_index_-btn mx3e3-_mx-style_index_-btn-brand\" mx-view=\"mx-uploader/index?action=.%2F&name=file1&multiple=true\" view-action view-name view-multiple>上传文件</button></div></div><div class=\"mx3e3-_mx-style_index_-form-item\"><label class=\"mx3e3-_mx-style_index_-form-label\">备注：</label><div class=\"mx3e3-_mx-style_index_-form-content\"><textarea mx-guid=\"g8\u001f\" class=\"mx3e3-_mx-style_index_-textarea\" rows=\"8\" mx-beid=\"\u001f\u001ef\" mx-change=\"\u001f\u001esyncValue({p:'mark',f:{maxLength:10}})\" mx-focusout=\"\u001f\u001esyncValue({p:'mark',f:{maxLength:10}})\" mx-focusin=\"\u001f\u001esyncValue()\"><%=$$.mark,\"{maxLength:10}\"%></textarea></div></div><div class=\"mx3e3-_mx-style_index_-form-footer\"><button class=\"mx3e3-_mx-style_index_-btn mx3e3-_mx-style_index_-btn-brand\" mx-click=\"\u001f\u001eisValid()\">isValid</button><button class=\"mx3e3-_mx-style_index_-btn mx3e3-_mx-style_index_-btn-brand mx3e3-_mx-style_index_-ml10\" mx-click=\"\u001f\u001egetData()\">getData</button></div></div></div><div class=\"mx3e3-_mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;div class=\"form-item clearfix\"&gt;\n    &lt;label class=\"form-label form-required\"&gt;活动名称：&lt;/label&gt;\n    &lt;div class=\"form-content\"&gt;&lt;input class=\"input\" placeholder=\"请填写活动名称\" value=\"&lt;%:name{required:true,blength:[20,50]}%&gt;\" /&gt;&lt;/div&gt;\n&lt;/div&gt;\n\n&lt;div class=\"form-item clearfix\"&gt;\n    &lt;label class=\"form-label\"&gt;色彩：&lt;/label&gt;\n    &lt;div class=\"form-content\"&gt;&lt;input mx-view=\"app/gallery/mx-color/picker\" class=\"input\" /&gt;&lt;/div&gt;\n&lt;/div&gt;\n\n&lt;div class=\"form-item\"&gt;\n    &lt;label class=\"form-label form-required\"&gt;活动时间：&lt;/label&gt;\n    &lt;div class=\"form-content\"&gt;\n        &lt;div mx-view=\"app/gallery/mx-dropdown/index\"\n            view-searchbox=\"true\"\n            view-empty-text=\"请选择日期\"\n            view-selected=\"&lt;%:day{required:true}%&gt;\" style=\"width:180px;\"&gt;\n            &lt;item value=\"mon\"&gt;周一&lt;/item&gt;\n            &lt;item value=\"wed\"&gt;周三&lt;/item&gt;\n            &lt;item value=\"thu\"&gt;周四&lt;/item&gt;\n            &lt;item value=\"fri\"&gt;周五&lt;/item&gt;\n            &lt;item value=\"sat\"&gt;周六&lt;/item&gt;\n        &lt;/div&gt;\n        &lt;span class=\"ib ml5 mr5\"&gt;\n        -&lt;/span&gt;\n        &lt;input class=\"input\" style=\"width:145px\" placeholder=\"请选择时间\" value=\"&lt;%:time{required:true}%&gt;\" mx-view=\"app/gallery/mx-time/picker\" /&gt;\n    &lt;/div&gt;\n&lt;/div&gt;\n\n&lt;div class=\"form-item\"&gt;\n    &lt;label class=\"form-label form-required\"&gt;标签：&lt;/label&gt;\n    &lt;div class=\"form-content\"&gt;\n        &lt;div mx-view=\"app/gallery/mx-taginput/index\"\n            view-list=\"&lt;%@list%&gt;\"\n            view-placeholder=\"请选择标签\"\n            view-selected=\"&lt;%:tags{required:true}%&gt;\"\n        &gt;&lt;/div&gt;\n    &lt;/div&gt;\n&lt;/div&gt;\n&lt;div class=\"form-item\"&gt;\n    &lt;label class=\"form-label\"&gt;checkbox：&lt;/label&gt;\n    &lt;div class=\"form-content\"&gt;\n        &lt;label class=\"mr10\"&gt;\n            &lt;input type=\"checkbox\" &lt;%:checkbox%&gt; name=\"cb\" value=\"c1\" class=\"checkbox\" /&gt;c1\n        &lt;/label&gt;\n        &lt;label class=\"mr10\"&gt;\n            &lt;input type=\"checkbox\" &lt;%:checkbox%&gt; name=\"cb\" value=\"c2\" class=\"checkbox\" /&gt;c2\n        &lt;/label&gt;\n        &lt;label class=\"mr10\"&gt;\n            &lt;input type=\"checkbox\" &lt;%:checkbox%&gt; name=\"cb\" value=\"c3\" class=\"checkbox\" /&gt;c3\n        &lt;/label&gt;\n        &lt;label class=\"mr10\"&gt;\n            &lt;input type=\"checkbox\" &lt;%:checkbox%&gt; name=\"cb\" value=\"c4\" class=\"checkbox\" /&gt;c4\n        &lt;/label&gt;\n    &lt;/div&gt;\n&lt;/div&gt;\n&lt;div class=\"form-item\"&gt;\n    &lt;label class=\"form-label\"&gt;radio：&lt;/label&gt;\n    &lt;div class=\"form-content\"&gt;\n        &lt;label class=\"mr10\"&gt;\n            &lt;input type=\"radio\" &lt;%:radio%&gt; value=\"r1\" class=\"radio\" name=\"magix\" /&gt;r1\n        &lt;/label&gt;\n        &lt;label class=\"mr10\"&gt;\n            &lt;input type=\"radio\" &lt;%:radio%&gt; value=\"r2\" class=\"radio\" name=\"magix\" /&gt;r2\n        &lt;/label&gt;\n        &lt;label class=\"mr10\"&gt;\n            &lt;input type=\"radio\" &lt;%:radio%&gt; value=\"r3\" class=\"radio\" name=\"magix\" /&gt;r3\n        &lt;/label&gt;\n    &lt;/div&gt;\n&lt;/div&gt;\n&lt;div class=\"form-item\"&gt;\n    &lt;label class=\"form-label\"&gt;日期：&lt;/label&gt;\n    &lt;div class=\"form-content\"&gt;\n        &lt;input mx-view=\"app/gallery/mx-calendar/datepicker\" class=\"input\" placeholder=\"请选择开始日期\" value=\"&lt;%:dateStart%&gt;\" style=\"width:162px;\"&gt;\n        &lt;span class=\"ib ml5 mr5\"&gt;\n        -&lt;/span&gt;\n        &lt;input mx-view=\"app/gallery/mx-calendar/datepicker\" class=\"input\" placeholder=\"请选择结束日期\" value=\"&lt;%:dateEnd%&gt;\" style=\"width:162px;\"&gt;\n    &lt;/div&gt;\n&lt;/div&gt;\n&lt;div class=\"form-item\"&gt;\n    &lt;label class=\"form-label\"&gt;范围：&lt;/label&gt;\n    &lt;div class=\"form-content\"&gt;\n        &lt;div mx-view=\"app/gallery/mx-slider/index\"\n            view-max=\"200\"\n            view-min=\"0\"\n            view-value=\"&lt;%:range%&gt;\"\n            view-step=\"0.2\"\n        &gt;&lt;/div&gt;\n    &lt;/div&gt;\n&lt;/div&gt;\n&lt;div class=\"form-item\"&gt;\n    &lt;label class=\"form-label\"&gt;范围：&lt;/label&gt;\n    &lt;div class=\"form-content\"&gt;\n        &lt;div mx-view=\"app/gallery/mx-slider/range\"\n            view-max=\"500\"\n            view-min=\"200\"\n            view-value=\"&lt;%:range1%&gt;\"\n            view-step=\"10\"\n        &gt;&lt;/div&gt;\n    &lt;/div&gt;\n&lt;/div&gt;\n&lt;div class=\"form-item\"&gt;\n    &lt;label class=\"form-label\"&gt;封面：&lt;/label&gt;\n    &lt;div class=\"form-content\"&gt;\n        &lt;button\n            class=\"btn btn-brand\"\n            mx-view=\"app/gallery/mx-uploader/index\"\n            view-action=\"./\"\n            view-name=\"file1\"\n            view-multiple=\"true\"\n        &gt;上传文件&lt;/button&gt;\n    &lt;/div&gt;\n&lt;/div&gt;\n\n&lt;div class=\"form-item\"&gt;\n    &lt;label class=\"form-label\"&gt;备注：&lt;/label&gt;\n    &lt;div class=\"form-content\"&gt;\n        &lt;textarea class=\"textarea\" rows=\"8\"&gt;&lt;%:mark{maxLength:10}%&gt;&lt;/textarea&gt;\n    &lt;/div&gt;\n&lt;/div&gt;\n&lt;div class=\"form-footer\"&gt;\n    &lt;button class=\"btn btn-brand\" mx-click=\"isValid()\"&gt;isValid&lt;/button&gt;\n    &lt;button class=\"btn btn-brand ml10\" mx-click=\"getData()\"&gt;getData&lt;/button&gt;\n&lt;/div&gt;</pre><div class=\"mx3e3-_mx-style_index_-pt10\">Javascript Code:</div><pre>let Magix = require('magix');\nlet Form = require('app/gallery/mx-form/index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [Form],\n    render() {\n        let me = this;\n        me.updater.digest({\n            checkbox: [],\n            range: 0,\n            range1: [230, 300],\n            list: [111111111111111, 222222222222222, 333333333333, 44444444444444]\n        });\n    },\n    'isValid&lt;click&gt;' () {\n        console.log(this.isValid());\n    },\n    'getData&lt;click&gt;' () {\n        let src = this.updater.get();\n        let data = this.fromKeys(src, 'name,day,time,tags,checkbox,radio,dateStart,dateEnd,range,range1,mark');\n        console.log(data);\n    }\n});</pre></div>","subs":[{"keys":["name"],"path":"input[mx-guid=\"g0\u001f\"]","attr":"value=\"<%=$$.name%>\"","attrs":[{"n":"value","q":1,"p":1}]},{"keys":["list","tags"],"path":"div[mx-guid=\"g1\u001f\"]","attr":"mx-view=\"mx-taginput/index?list=<%@$$.list%>&placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E6%A0%87%E7%AD%BE&selected=<%@$$.tags%>\"","attrs":[{"n":"mx-view","v":1}]},{"keys":["day"],"path":"div[mx-guid=\"g2\u001f\"]","attr":"mx-view=\"mx-dropdown/index?searchbox=true&emptyText=%E8%AF%B7%E9%80%89%E6%8B%A9%E6%97%A5%E6%9C%9F&selected=<%@$$.day%>\" view-searchbox view-emptyText","attrs":[{"n":"mx-view","v":1},{"n":"view-searchbox"},{"n":"view-emptyText"}]},{"keys":["time"],"path":"input[mx-guid=\"g3\u001f\"]","attr":"value=\"<%=$$.time%>\"","attrs":[{"n":"value","q":1,"p":1}]},{"keys":["dateStart"],"path":"input[mx-guid=\"g4\u001f\"]","attr":"value=\"<%=$$.dateStart%>\"","attrs":[{"n":"value","q":1,"p":1}]},{"keys":["dateEnd"],"path":"input[mx-guid=\"g5\u001f\"]","attr":"value=\"<%=$$.dateEnd%>\"","attrs":[{"n":"value","q":1,"p":1}]},{"keys":["range"],"path":"div[mx-guid=\"g6\u001f\"]","attr":"mx-view=\"mx-slider/index?max=200&min=20&value=<%@$$.range%>&step=0.2\"","attrs":[{"n":"mx-view","v":1}]},{"keys":["range1"],"path":"div[mx-guid=\"g7\u001f\"]","attr":"mx-view=\"mx-slider/range?max=500&min=200&value=<%@$$.range1%>&step=10\"","attrs":[{"n":"mx-view","v":1}]},{"keys":["mark"],"path":"textarea[mx-guid=\"g8\u001f\"]","attr":"value=\"<%=$$.mark,\"{maxLength:10}\"%>\"","attrs":[{"n":"value","q":1,"p":1}]}],"file":"mx-form/__test__/index.html"},
    mixins: [Form],
    render() {
        let me = this;
        me.updater.digest({
            keys:['aa','bb','cc'],
            user: [{
                name: 'a'
            }, {
                name: 'b'
            }, {
                name: 'c'
            }, {
                name: 'd'
            }, {
                name: 'e'
            }],
            checkbox: [],
            range: 0,
            range1: [230, 300],
            list: [111111111111111, 222222222222222, 333333333333, 44444444444444]
        });
    },
    'isValid<click>' () {
        console.log(this.isValid());
    },
    'getData<click>' () {
        let src = this.updater.get();
        let data = this.fromKeys(src, 'name,day,time,tags,checkbox,radio,dateStart,dateEnd,range,range1,mark');
        console.log(data);
    },
    'abc<focusin>'(e){
        console.log(e);
    },
    'delete<click>' (e) {
        let user = this.updater.get('user');
        user.splice(e.params.key, 1);
        this.updater.digest({
            user
        });
    }
});
});
/*
    generate by magix-combine@3.5.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-gtip/__test__/index',["magix","mx-gtip/index"],function(require,exports,module){
/*Magix,GTip*/

/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let GTip = require('mx-gtip/index');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-gtip</h2><div class=\"mx3e3-_mx-style_index_-pt20 mx3e3-_mx-style_index_-clearfix\"><button class=\"mx3e3-_mx-style_index_-btn mx3e3-_mx-style_index_-fl\" mx-click=\"\u001f\u001ert()\">右上角提示</button><button class=\"mx3e3-_mx-style_index_-btn mx3e3-_mx-style_index_-fl mx3e3-_mx-style_index_-ml10\" mx-click=\"\u001f\u001erb()\">右下角提示</button><button class=\"mx3e3-_mx-style_index_-btn mx3e3-_mx-style_index_-fl mx3e3-_mx-style_index_-ml10\" mx-click=\"\u001f\u001elt();\">左上角提示</button><button class=\"mx3e3-_mx-style_index_-btn mx3e3-_mx-style_index_-fl mx3e3-_mx-style_index_-ml10\" mx-click=\"\u001f\u001elb();\">左下角提示</button></div><div class=\"mx3e3-_mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;button class=\"btn fl\" mx-click=\"rt()\"&gt;右上角提示&lt;/button&gt;\n    &lt;button class=\"btn fl ml10\" mx-click=\"rb()\"&gt;右下角提示&lt;/button&gt;\n    &lt;button class=\"btn fl ml10\" mx-click=\"lt();\"&gt;左上角提示&lt;/button&gt;\n    &lt;button class=\"btn fl ml10\" mx-click=\"lb();\"&gt;左下角提示&lt;/button&gt;</pre><div class=\"mx3e3-_mx-style_index_-pt10\">Javascript Code:</div><pre>\nlet Magix = require('magix');\nlet GTip = require('app/gallery/mx-gtip/index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    'rt&lt;click&gt;' () {\n        this.gtipRT('右上角，消息内容' + Date.now());\n    },\n    'rb&lt;click&gt;' () {\n        this.gtipRB('右下角，消息内容' + Date.now());\n    },\n    'lt&lt;click&gt;' () {\n        this.gtipLT('左上角，消息内容' + Date.now());\n    },\n    'lb&lt;click&gt;' () {\n        this.gtipLB('左下角，消息内容' + Date.now());\n    },\n    'rtt&lt;click&gt;' (e) {\n        this.gtipRT('右上角，消息内容' + Date.now(), e.params.s * 1000);\n    }\n});</pre></div>","subs":[],"file":"mx-gtip/__test__/index.html"},
    mixins: [GTip],
    render() {
        let me = this;
        me.updater.digest();
    },
    'rt<click>' () {
        this.gtipRT('右上角，消息内容' + Date.now());
    },
    'rb<click>' () {
        this.gtipRB('右下角，消息内容' + Date.now());
    },
    'lt<click>' () {
        this.gtipLT('左上角，消息内容' + Date.now());
    },
    'lb<click>' () {
        this.gtipLB('左下角，消息内容' + Date.now());
    },
    'rtt<click>' (e) {
        this.gtipRT('右上角，消息内容' + Date.now(), e.params.s * 1000);
    }
});
});
/*
    generate by magix-combine@3.5.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-hour/__test__/index',["magix","../index","../day","../week"],function(require,exports,module){
/*Magix*/
require("../index");
require("../day");
require("../week");
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-hour</h2><h3>小时选取基础组件</h3><div class=\"mx3e3-_mx-style_index_-pt20 mx3e3-_mx-style_index_-clearfix\"><div mx-view=\"mx-hour/index?range=00001111011\" view-range></div></div><div class=\"mx3e3-_mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;div mx-view=\"app/gallery/mx-hour/index\" view-range=\"00001111011\"&lt;/div&gt;</pre></div><h3 class=\"mx3e3-_mx-style_index_-mt30\">天小时选取组件</h3><div class=\"mx3e3-_mx-style_index_-pt20 mx3e3-_mx-style_index_-clearfix\"><div mx-view=\"mx-hour/day?hours=00001111011\" view-hours></div></div><div class=\"mx3e3-_mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;div mx-view=\"app/gallery/mx-hour/day\" view-hours=\"00001111011\"&lt;/div&gt;</pre></div><h3 class=\"mx3e3-_mx-style_index_-mt30\">周小时选取组件</h3><div class=\"mx3e3-_mx-style_index_-pt20 mx3e3-_mx-style_index_-clearfix\"><div mx-view=\"mx-hour/week?days=<%@['','001111','','','00000000111111001']%>\" view-days></div></div><div class=\"mx3e3-_mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;div mx-view=\"app/gallery/mx-hour/week\" view-days=\"&lt;%@['','001111','','','00000000111111001']%&gt;\"&gt;&lt;/div&gt;</pre></div>","subs":[],"file":"mx-hour/__test__/index.html"},
    render() {
        let me = this;
        me.updater.digest();
    }
});
});
/*
    generate by magix-combine@3.5.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-pagination/__test__/index',["magix","../index"],function(require,exports,module){
/*Magix*/
require("../index");
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-pagination</h2><h3>完整模式</h3><div class=\"mx3e3-_mx-style_index_-pt20 mx3e3-_mx-style_index_-clearfix\"><div mx-view=\"mx-pagination/index?total=2000&step=5&page=15\" view-total view-step view-page class=\"mx3e3-_mx-style_index_-fl\"></div></div><div class=\"mx3e3-_mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;div mx-view=\"app/gallery/mx-pagination/index\"\n    view-total=\"2000\"\n    view-step=\"5\"\n    view-page=\"15\" class=\"fl\"&gt;\n&lt;/div&gt;</pre></div><h3 class=\"mx3e3-_mx-style_index_-mt30\">简单模式</h3><div class=\"mx3e3-_mx-style_index_-pt20 mx3e3-_mx-style_index_-clearfix\"><div mx-view=\"mx-pagination/index?total=2000&step=5&simplify=<%@true%>&page=15\" view-total view-step view-simplify view-page class=\"mx3e3-_mx-style_index_-fl\"></div></div><div class=\"mx3e3-_mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;div mx-view=\"app/gallery/mx-pagination/index\"\n    view-total=\"2000\"\n    view-step=\"5\"\n    view-simplify=\"&lt;%@ true %&gt;\"\n    view-page=\"15\" class=\"fl\"&gt;\n&lt;/div&gt;</pre></div><h3 class=\"mx3e3-_mx-style_index_-mt30\">迷你模式</h3><div class=\"mx3e3-_mx-style_index_-pt20 mx3e3-_mx-style_index_-clearfix\"><div mx-view=\"mx-pagination/index?total=2000&step=5&mini=<%@true%>&page=15\" view-total view-step view-mini view-page class=\"mx3e3-_mx-style_index_-fl\"></div></div><div class=\"mx3e3-_mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;div mx-view=\"app/gallery/mx-pagination/index\"\n    view-total=\"2000\"\n    view-step=\"5\"\n    view-mini=\"&lt;%@ true %&gt;\"\n    view-page=\"15\" class=\"fl\"&gt;\n&lt;/div&gt;</pre></div><h3 class=\"mx3e3-_mx-style_index_-mt30\">监听change事件</h3><div class=\"mx3e3-_mx-style_index_-pt20 mx3e3-_mx-style_index_-clearfix\"><div mx-view=\"mx-pagination/index?total=2000&step=5&page=15\" view-total view-step view-page mx-change=\"\u001f\u001eshow()\" class=\"mx3e3-_mx-style_index_-fl\"></div></div><div class=\"mx3e3-_mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;div mx-view=\"app/gallery/mx-pagination/index\"\n    view-total=\"2000\"\n    view-step=\"5\"\n    view-page=\"15\" mx-change=\"show()\" class=\"fl\"&gt;\n&lt;/div&gt;</pre><div class=\"mx3e3-_mx-style_index_-pt10\">Javascript Code:</div><pre>let Magix = require('magix');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    'show&lt;change&gt;' (e) {\n        console.log(e.page, e.size);\n    }\n});</pre></div>","subs":[],"file":"mx-pagination/__test__/index.html"},
    render() {
        let me = this;
        me.updater.digest();
    },
    'show<change>' (e) {
        console.log(e.page, e.size);
    }
});
});
/*
    generate by magix-combine@3.5.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-popover/__test__/index',["magix","../index"],function(require,exports,module){
/*Magix*/
require("../index");
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-popover</h2><div class=\"mx3e3-_mx-style_index_-pt20 mx3e3-_mx-style_index_-clearfix\"><button class=\"mx3e3-_mx-style_index_-btn\" mx-view=\"mx-popover/index?content=%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9\" view-content>提示右</button><button class=\"mx3e3-_mx-style_index_-btn mx3e3-_mx-style_index_-ml10\" mx-view=\"mx-popover/index?content=%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9&placement=top\" view-content view-placement>提示上</button><button class=\"mx3e3-_mx-style_index_-btn mx3e3-_mx-style_index_-ml10\" mx-view=\"mx-popover/index?content=%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9&placement=bottom\" view-content view-placement>提示下</button><button class=\"mx3e3-_mx-style_index_-btn mx3e3-_mx-style_index_-ml10\" mx-view=\"mx-popover/index?content=%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9&placement=left\" view-content view-placement>提示左</button><button class=\"mx3e3-_mx-style_index_-btn mx3e3-_mx-style_index_-ml10\" mx-view=\"mx-popover/index?content=%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9&placement=left&align=top\" view-content view-placement view-align>提示左顶部对齐</button><button class=\"mx3e3-_mx-style_index_-btn mx3e3-_mx-style_index_-ml10\" mx-view=\"mx-popover/index?content=%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9&placement=right&align=top\" view-content view-placement view-align>提示右顶部对齐</button><button class=\"mx3e3-_mx-style_index_-btn mx3e3-_mx-style_index_-ml10\" mx-view=\"mx-popover/index?content=%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9&placement=top&align=left\" view-content view-placement view-align>提示上左对齐</button><button class=\"mx3e3-_mx-style_index_-btn mx3e3-_mx-style_index_-ml10\" mx-view=\"mx-popover/index?content=%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9&placement=top&align=right\" view-content view-placement view-align>提示上右对齐</button></div><div class=\"mx3e3-_mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;button class=\"btn\" mx-view=\"app/gallery/mx-popover/index\"\n    view-content=\"提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容\"&gt;提示右&lt;/button&gt;\n&lt;button class=\"btn ml10\" mx-view=\"app/gallery/mx-popover/index\"\n    view-content=\"提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容\"\n    view-placement=\"top\"&gt;提示上&lt;/button&gt;\n&lt;button class=\"btn ml10\" mx-view=\"app/gallery/mx-popover/index\"\n    view-content=\"提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容\"\n    view-placement=\"bottom\"&gt;提示下&lt;/button&gt;\n&lt;button class=\"btn ml10\" mx-view=\"app/gallery/mx-popover/index\"\n    view-content=\"提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容\"\n    view-placement=\"left\"&gt;提示左&lt;/button&gt;\n&lt;button class=\"btn ml10\" mx-view=\"app/gallery/mx-popover/index\"\n    view-content=\"提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容\"\n    view-placement=\"left\"\n    view-align=\"top\"&gt;提示左顶部对齐&lt;/button&gt;\n&lt;button class=\"btn ml10\" mx-view=\"app/gallery/mx-popover/index\"\n    view-content=\"提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容\"\n    view-placement=\"right\"\n    view-align=\"top\"&gt;提示右顶部对齐&lt;/button&gt;\n&lt;button class=\"btn ml10\" mx-view=\"app/gallery/mx-popover/index\"\n    view-content=\"提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容\"\n    view-placement=\"top\"\n    view-align=\"left\"&gt;提示上左对齐&lt;/button&gt;\n&lt;button class=\"btn ml10\" mx-view=\"app/gallery/mx-popover/index\"\n    view-content=\"提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容\"\n    view-placement=\"top\"\n    view-align=\"right\"&gt;提示上右对齐&lt;/button&gt;</pre></div>","subs":[],"file":"mx-popover/__test__/index.html"},
    render() {
        let me = this;
        me.updater.digest();
    }
});
});
/*
    generate by magix-combine@3.5.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-slider/__test__/index',["magix","mx-gtip/index","../index"],function(require,exports,module){
/*Magix,GTip*/
require("../index");
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let GTip = require('mx-gtip/index');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-slider</h2><h3>默认情形</h3><div class=\"mx3e3-_mx-style_index_-pt20 mx3e3-_mx-style_index_-clearfix\"><div mx-view=\"mx-slider/index?max=200&min=100&value=130&step=0.05\" view-max view-min view-value view-step class=\"mx3e3-_mx-style_index_-fl\"></div></div><div class=\"mx3e3-_mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;div mx-view=\"mx-slider/index\"\n    view-max=\"200\"\n    view-min=\"100\"\n    view-value=\"130\"\n    view-step=\"0.05\"\n    class=\"fl\"\n&gt;&lt;/div&gt;</pre></div><h3 class=\"mx3e3-_mx-style_index_-mt30\">禁用</h3><div class=\"mx3e3-_mx-style_index_-pt20 mx3e3-_mx-style_index_-clearfix\"><div mx-view=\"mx-slider/index?max=200&min=100&value=130&step=0.05&disabled=true\" view-max view-min view-value view-step view-disabled class=\"mx3e3-_mx-style_index_-fl\"></div></div><div class=\"mx3e3-_mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;div mx-view=\"mx-slider/index\"\n    view-max=\"200\"\n    view-min=\"100\"\n    view-value=\"130\"\n    view-step=\"0.05\"\n    view-disabled=\"true\"\n    class=\"fl\"\n&gt;&lt;/div&gt;</pre></div><h3 class=\"mx3e3-_mx-style_index_-mt30\">响应change事件</h3><div class=\"mx3e3-_mx-style_index_-pt20 mx3e3-_mx-style_index_-clearfix\"><div mx-view=\"mx-slider/index?max=200&min=0&value=130&step=5\" view-max view-min view-value view-step mx-change=\"\u001f\u001eshowValue()\" class=\"mx3e3-_mx-style_index_-fl\"></div></div><div class=\"mx3e3-_mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;div mx-view=\"mx-slider/index\"\n    view-max=\"200\"\n    view-min=\"100\"\n    view-value=\"130\"\n    view-step=\"5\"\n    mx-change=\"showValue()\"\n    class=\"fl\"\n&gt;&lt;/div&gt;</pre><div class=\"mx3e3-_mx-style_index_-pt10\">Javascript Code:</div><pre>let Magix = require('magix');\nlet GTip = require('app/gallery/mx-gtip/index');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    'showValue&lt;change&gt;' (e) {\n        this.gtipRT('value:' + e.value);\n    }\n});</pre></div>","subs":[],"file":"mx-slider/__test__/index.html"},
    mixins: [GTip],
    render() {
        let me = this;
        me.updater.digest();
    },
    'showValue<change>' (e) {
        this.gtipRT('value:' + e.value);
    }
});
});
/*
    generate by magix-combine@3.5.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-taginput/__test__/index',["magix","mx-gtip/index","../index"],function(require,exports,module){
/*Magix,GTip*/
require("../index");
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let GTip = require('mx-gtip/index');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-taginput</h2><h3>默认情形</h3><div class=\"mx3e3-_mx-style_index_-pt20 mx3e3-_mx-style_index_-clearfix\"><div mx-guid=\"g0\u001f\" mx-view=\"mx-taginput/index?list=<%@$$.list%>&placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E5%88%86%E7%B1%BB\" view-list view-placeholder class=\"mx3e3-_mx-style_index_-fl\"></div></div><div class=\"mx3e3-_mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;div mx-view=\"app/gallery/mx-taginput/index\"\n    view-list=\"&lt;%@ list %&gt;\"\n    view-placeholder=\"请选择分类\"\n&gt;&lt;/div&gt;</pre><div class=\"mx3e3-_mx-style_index_-pt10\">Javascript Code:</div><pre>let Magix = require('magix');\nMagix.applyStyle('@index.css');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    render() {\n        let me = this;\n        me.updater.digest({\n            list: ['分类1', '分类2', '分类3', '分类4', '分类5', '分类6', '分类7', '分类8', '分类9', '分类10']\n        });\n    }\n});</pre></div><h3 class=\"mx3e3-_mx-style_index_-mt30\">默认选中</h3><div class=\"mx3e3-_mx-style_index_-pt20 mx3e3-_mx-style_index_-clearfix\"><div mx-guid=\"g1\u001f\" mx-view=\"mx-taginput/index?list=<%@$$.list%>&selected=<%@$$.selected%>&placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E5%88%86%E7%B1%BB\" view-list view-selected view-placeholder class=\"mx3e3-_mx-style_index_-fl\"></div></div><div class=\"mx3e3-_mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;div mx-view=\"app/gallery/mx-taginput/index\"\n    view-list=\"&lt;%@ list %&gt;\"\n    view-selected=\"&lt;%@ selected %&gt;\"\n    view-placeholder=\"请选择分类\"\n&gt;&lt;/div&gt;</pre><div class=\"mx3e3-_mx-style_index_-pt10\">Javascript Code:</div><pre>let Magix = require('magix');\nMagix.applyStyle('@index.css');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    render() {\n        let me = this;\n        me.updater.digest({\n            list: ['分类1', '分类2', '分类3', '分类4', '分类5', '分类6', '分类7', '分类8', '分类9', '分类10'],\n            selected: ['分类1', '分类5', '分类10']\n        });\n    }\n});</pre></div><h3 class=\"mx3e3-_mx-style_index_-mt30\">禁用</h3><div class=\"mx3e3-_mx-style_index_-pt20 mx3e3-_mx-style_index_-clearfix\"><div mx-guid=\"g2\u001f\" mx-view=\"mx-taginput/index?list=<%@$$.list%>&selected=<%@$$.selected%>&placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E5%88%86%E7%B1%BB&disabled=true\" view-list view-selected view-placeholder view-disabled class=\"mx3e3-_mx-style_index_-fl\"></div></div><div class=\"mx3e3-_mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;div mx-view=\"app/gallery/mx-taginput/index\"\n    view-list=\"&lt;%@ list %&gt;\"\n    view-selected=\"&lt;%@ selected %&gt;\"\n    view-placeholder=\"请选择分类\"\n    view-disabled=\"true\"\n&gt;&lt;/div&gt;</pre><div class=\"mx3e3-_mx-style_index_-pt10\">Javascript Code:</div><pre>let Magix = require('magix');\nMagix.applyStyle('@index.css');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    render() {\n        let me = this;\n        me.updater.digest({\n            list: ['分类1', '分类2', '分类3', '分类4', '分类5', '分类6', '分类7', '分类8', '分类9', '分类10'],\n            selected: ['分类1', '分类5', '分类10']\n        });\n    }\n});</pre></div><h3 class=\"mx3e3-_mx-style_index_-mt30\">数据列表为对象</h3><div class=\"mx3e3-_mx-style_index_-pt20 mx3e3-_mx-style_index_-clearfix\"><div mx-guid=\"g3\u001f\" mx-view=\"mx-taginput/index?list=<%@ $$.userList%>&selected=<%@ $$.userSelected%>&placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E7%94%A8%E6%88%B7&textKey=name&valueKey=id\" view-list view-selected view-placeholder view-textKey view-valueKey class=\"mx3e3-_mx-style_index_-fl\"></div></div><div class=\"mx3e3-_mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;div mx-view=\"app/gallery/mx-taginput/index\"\n    view-list=\"&lt;%@ userList %&gt;\"\n    view-selected=\"&lt;%@ userSelected %&gt;\"\n    view-placeholder=\"请选择用户\"\n    view-text-key=\"name\"\n    view-value-key=\"id\"\n&gt;&lt;/div&gt;</pre><div class=\"mx3e3-_mx-style_index_-pt10\">Javascript Code:</div><pre>let Magix = require('magix');\nMagix.applyStyle('@index.css');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    render() {\n        let me = this;\n        me.updater.digest({\n            userList: [{\n                name: 'xinglie',\n                id: 58782\n            }, {\n                name: 'xinglie1',\n                id: 587821\n            }, {\n                name: 'xinglie2',\n                id: 587822\n            }, {\n                name: 'xinglie3',\n                id: 587823\n            }, {\n                name: 'xinglie4',\n                id: 587824\n            }, {\n                name: 'xinglie5',\n                id: 587825\n            }, {\n                name: 'xinglie6',\n                id: 587826\n            }, {\n                name: 'xinglie7',\n                id: 587827\n            }, {\n                name: 'xinglie8',\n                id: 587828\n            }, {\n                name: 'xinglie9',\n                id: 587829\n            }],\n            userSelected: [58782]\n        });\n    }\n});</pre></div><h3 class=\"mx3e3-_mx-style_index_-mt30\">change事件</h3><div class=\"mx3e3-_mx-style_index_-pt20 mx3e3-_mx-style_index_-clearfix\"><div mx-guid=\"g4\u001f\" mx-view=\"mx-taginput/index?list=<%@ $$.userList%>&selected=<%@ $$.userSelected%>&placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E7%94%A8%E6%88%B7&textKey=name&valueKey=id\" view-list view-selected view-placeholder view-textKey view-valueKey mx-change=\"\u001f\u001eshowUserIds()\" class=\"mx3e3-_mx-style_index_-fl\"></div></div><div class=\"mx3e3-_mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;div mx-view=\"app/gallery/mx-taginput/index\"\n    view-list=\"&lt;%@ userList %&gt;\"\n    view-selected=\"&lt;%@ userSelected %&gt;\"\n    view-placeholder=\"请选择用户\"\n    view-text-key=\"name\"\n    view-value-key=\"id\"\n    mx-change=\"showUserIds()\"\n&gt;&lt;/div&gt;</pre><div class=\"mx3e3-_mx-style_index_-pt10\">Javascript Code:</div><pre>let Magix = require('magix');\nlet GTip = require('mx-gtip/index');\nMagix.applyStyle('@index.css');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest({\n            list: ['分类1', '分类2', '分类3', '分类4', '分类5', '分类6', '分类7', '分类8', '分类9', '分类10'],\n            selected: ['分类1', '分类5', '分类10'],\n            userList: [{\n                name: 'xinglie',\n                id: 58782\n            }, {\n                name: 'xinglie1',\n                id: 587821\n            }, {\n                name: 'xinglie2',\n                id: 587822\n            }, {\n                name: 'xinglie3',\n                id: 587823\n            }, {\n                name: 'xinglie4',\n                id: 587824\n            }, {\n                name: 'xinglie5',\n                id: 587825\n            }, {\n                name: 'xinglie6',\n                id: 587826\n            }, {\n                name: 'xinglie7',\n                id: 587827\n            }, {\n                name: 'xinglie8',\n                id: 587828\n            }, {\n                name: 'xinglie9',\n                id: 587829\n            }],\n            userSelected: [58782]\n        });\n    },\n    'showUserIds&lt;change&gt;' (e) {\n        this.gtipRT('选中的用户ids:'+e.ids);\n    }\n});</pre></div>","subs":[{"keys":["list"],"path":"div[mx-guid=\"g0\u001f\"]","attr":"mx-view=\"mx-taginput/index?list=<%@$$.list%>&placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E5%88%86%E7%B1%BB\"","attrs":[{"n":"mx-view","v":1}]},{"keys":["list","selected"],"path":"div[mx-guid=\"g1\u001f\"]","attr":"mx-view=\"mx-taginput/index?list=<%@$$.list%>&selected=<%@$$.selected%>&placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E5%88%86%E7%B1%BB\"","attrs":[{"n":"mx-view","v":1}]},{"keys":["list","selected"],"path":"div[mx-guid=\"g2\u001f\"]","attr":"mx-view=\"mx-taginput/index?list=<%@$$.list%>&selected=<%@$$.selected%>&placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E5%88%86%E7%B1%BB&disabled=true\"","attrs":[{"n":"mx-view","v":1}]},{"keys":["userList","userSelected"],"path":"div[mx-guid=\"g3\u001f\"]","attr":"mx-view=\"mx-taginput/index?list=<%@ $$.userList%>&selected=<%@ $$.userSelected%>&placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E7%94%A8%E6%88%B7&textKey=name&valueKey=id\" view-list view-selected view-placeholder view-textKey view-valueKey","attrs":[{"n":"mx-view","v":1},{"n":"view-list"},{"n":"view-selected"},{"n":"view-placeholder"},{"n":"view-textKey"},{"n":"view-valueKey"}]},{"keys":["userList","userSelected"],"path":"div[mx-guid=\"g4\u001f\"]","attr":"mx-view=\"mx-taginput/index?list=<%@ $$.userList%>&selected=<%@ $$.userSelected%>&placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E7%94%A8%E6%88%B7&textKey=name&valueKey=id\" view-list view-selected view-placeholder view-textKey view-valueKey","attrs":[{"n":"mx-view","v":1},{"n":"view-list"},{"n":"view-selected"},{"n":"view-placeholder"},{"n":"view-textKey"},{"n":"view-valueKey"}]}],"file":"mx-taginput/__test__/index.html"},
    mixins: [GTip],
    render() {
        let me = this;
        me.updater.digest({
            list: ['分类1', '分类2', '分类3', '分类4', '分类5', '分类6', '分类7', '分类8', '分类9', '分类10'],
            selected: ['分类1', '分类5', '分类10'],
            userList: [{
                name: 'xinglie',
                id: 58782
            }, {
                name: 'xinglie1',
                id: 587821
            }, {
                name: 'xinglie2',
                id: 587822
            }, {
                name: 'xinglie3',
                id: 587823
            }, {
                name: 'xinglie4',
                id: 587824
            }, {
                name: 'xinglie5',
                id: 587825
            }, {
                name: 'xinglie6',
                id: 587826
            }, {
                name: 'xinglie7',
                id: 587827
            }, {
                name: 'xinglie8',
                id: 587828
            }, {
                name: 'xinglie9',
                id: 587829
            }],
            userSelected: [58782]
        });
    },
    'showUserIds<change>' (e) {
        this.gtipRT('选中的用户ids:'+e.ids);
    }
});
});
/*
    generate by magix-combine@3.5.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-time/__test__/index',["magix","../index"],function(require,exports,module){
/*Magix*/
require("../index");
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-time</h2><div class=\"mx3e3-_mx-style_index_-pt20 mx3e3-_mx-style_index_-clearfix\"><div mx-view=\"mx-time/index?time=00%3A12%3A13&types=minute%2Csecond\" view-time view-types mx-change=\"\u001f\u001etest()\"></div></div><div class=\"mx3e3-_mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;div mx-view=\"mx-time/index\"\n    view-time=\"00:12:13\"\n    view-types=\"minute,second\" mx-change=\"test()\"\n&gt;&lt;/div&gt;</pre><div class=\"mx3e3-_mx-style_index_-pt10\">Javascript Code:</div><pre>let Magix = require('magix');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    'test&lt;change&gt;' (e) {\n        console.log(e, e.time);\n    }\n});</pre></div>","subs":[],"file":"mx-time/__test__/index.html"},
    render() {
        let me = this;
        me.updater.digest();
    },
    'test<change>' (e) {
        console.log(e, e.time);
    }
});
});
/*
    generate by magix-combine@3.5.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-time/__test__/picker',["magix","../picker"],function(require,exports,module){
/*Magix*/
require("../picker");
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-time</h2><div class=\"mx3e3-_mx-style_index_-pt20 mx3e3-_mx-style_index_-clearfix\"><input mx-view=\"mx-time/picker?types=hour%2Cminute\" value=\"18:26:00\" class=\"mx3e3-_mx-style_index_-input\" view-types></div><div class=\"mx3e3-_mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;input mx-view=\"app/gallery/mx-time/picker\"\n    view-align=\"right\"\n    class=\"input\"\n    value=\"18:26:00\"\n    view-types=\"hour,minute\" /&gt;</pre></div>","subs":[],"file":"mx-time/__test__/picker.html"},
    render() {
        let me = this;
        me.updater.digest();
    }
});
});
/*
    generate by magix-combine@3.5.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-uploader/__test__/index',["magix","../index"],function(require,exports,module){
/*Magix*/
require("../index");
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-uploader</h2><div class=\"mx3e3-_mx-style_index_-pt20 mx3e3-_mx-style_index_-clearfix\"><button class=\"mx3e3-_mx-style_index_-btn mx3e3-_mx-style_index_-btn-brand\" mx-view=\"mx-uploader/index?action=.%2F&name=file1&multiple=true\" view-action view-name view-multiple mx-error=\"\u001f\u001eshowError()\" mx-success=\"\u001f\u001eshowSuccess()\" mx-progress=\"\u001f\u001eshowProgress()\">上传文件</button></div><div class=\"mx3e3-_mx-style_index_-pt20\"><div>HTML Code:</div><pre>&lt;button\n    class=\"btn btn-brand\"\n    mx-view=\"app/gallery/mx-uploader/index\"\n    view-action=\"./\"\n    view-name=\"file1\"\n    view-multiple=\"true\"\n    mx-error=\"showError()\"\n    mx-success=\"showSuccess()\"\n    mx-progress=\"showProgress()\"\n&gt;上传文件&lt;/button&gt;</pre><div class=\"mx3e3-_mx-style_index_-pt10\">Javascript Code:</div><pre>let Magix = require('magix');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    render() {\n        let me = this;\n        me.updater.digest();\n    },\n    'showError&lt;error&gt;' (e) {\n        console.log(e.error);\n    },\n    'showSuccess&lt;success&gt;' (e) {\n        console.log(e.response);\n    },\n    'showProgress&lt;progress&gt;' (e) {\n        console.log(e.percent);\n    }\n});</pre></div>","subs":[],"file":"mx-uploader/__test__/index.html"},
    render() {
        let me = this;
        me.updater.digest();
    },
    'showError<error>' (e) {
        console.log(e.error);
    },
    'showSuccess<success>' (e) {
        console.log(e.response);
    },
    'showProgress<progress>' (e) {
        console.log(e.percent);
    }
});
});
});