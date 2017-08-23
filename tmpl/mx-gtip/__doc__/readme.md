## 全局提示组件

### 使用

<a href="https://magix-components.github.io/magix-components/#!/mx-gtip/index" target="_blank">在线示例</a>
```js
let Magix = require('magix');
let GTip = require('app/gallery/mx-gtip/index');
module.exports = Magix.View.extend({
    tmpl: '@index.html',
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
```

### API

#### options
| 参数 | 说明 | 类型 | 默认值 |
| -------- | -------- | -------- | -------- |
| msg    | 提示内容 | string |  |
| dock     | 停靠位置 | string | rt |
| timeout     | 多久消失，毫秒 | number | 3000ms |


