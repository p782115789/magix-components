## 上传组件

### 使用

<a href="https://magix-components.github.io/magix-components/#!/mx-uploader/index" target="_blank">在线示例</a>
```html
<button
    class="btn btn-brand"
    mx-view="app/gallery/mx-uploader/index"
    view-action="./"
    view-name="file1"
    view-multiple="true"
    mx-error="showError()"
    mx-success="showSuccess()"
    mx-progress="showProgress()"
>上传文件</button>
```

```js
let Magix = require('magix');
module.exports = Magix.View.extend({
    tmpl: '@index.html',
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
```

### API

#### options
| 参数 | 说明 | 类型 | 默认值 |
| -------- | -------- | -------- | -------- |
| name    | 服务器端接收文件时的名称 | string | file |
| action     | 上传地址 | string |  |
| multiple     | 是否允许多文件上传 | boolean | false |
| accept | 选择文件时的类型，参考input[type=file]的accept | string | &nbsp; |



#### event
#### start 开始上传前触发

| 参数名称 | 参数类型 | 说明 |
| -------- | -------- |
| files | array | 上传的文件 |


#### success 上传成功时触发

| 参数名称 | 参数类型 | 说明 |
| -------- | -------- |
| response | obejct | 成功时服务器端返回的内容 |


#### error 上传失败时触发

| 参数名称 | 参数类型 | 说明 |
| -------- | -------- |
| error | obejct | 错误对象 |

#### progress 上传进度变化时触发

| 参数名称 | 参数类型 | 说明 |
| -------- | -------- |
| percent | number | 上传进度 0-1 之间的小数 |

