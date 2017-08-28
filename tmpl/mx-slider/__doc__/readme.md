
## 滑块组件

> 该组件包含“单个滑块、范围滑块”两个子组件。


### 单滑块组件

#### 使用

<a href="https://magix-components.github.io/magix-components/#!/mx-slider/index" target="_blank">在线示例</a>

```html
<div mx-view="app/gallery/mx-slider/index"
    view-max="200"
    view-min="100"
    view-value="130"
    view-step="0.05"
    class="fl"
></div>
```


### API

#### options
| 参数 | 说明 | 类型 | 默认值 |
| -------- | -------- | -------- | -------- |
| value    | 设置滑块的值 | number | 0 |
| min     | 区间最小值 | number | 0 |
| max     | 区间最大值 | number | 100 |
| step     | 步长 | number | 1 |
| width     | 宽度 | number | 340 |
| disabled     | 是否禁用 | boolean | false |


#### method

| 方法名 | 说明 | 入参 | 返回值 | 说明 |
| -------- | -------- | -------- | -------- | -------- |
| val | 设置或获取值 | string | string | &nbsp; |

> method调用方法： $('#id').invokeView('val',[20]);

#### event
#### change 滑块位置变化时触发

| 参数名称 | 参数类型 | 说明 |
| -------- | -------- |
| value | string | value |

-----

### 范围滑块组件

#### 使用

<a href="https://magix-components.github.io/magix-components/#!/mx-slider/range" target="_blank">在线示例</a>

```html
<div mx-view="mx-slider/range"
    view-max="200"
    view-min="100"
    view-value="30,150"
    view-step="0.05"
    class="fl"
></div>
```


### API

#### options
| 参数 | 说明 | 类型 | 默认值 |
| -------- | -------- | -------- | -------- |
| value    | 逗号分割的值 | string | 0,0 |
| min     | 区间最小值 | number | 0 |
| max     | 区间最大值 | number | 100 |
| step     | 步长 | number | 1 |
| width     | 宽度 | number | 340 |
| disabled     | 是否禁用 | boolean | false |


#### method

| 方法名 | 说明 | 入参 | 返回值 | 说明 |
| -------- | -------- | -------- | -------- | -------- |
| val | 设置或获取值 | array | array | &nbsp; |

> method调用方法： $('#id').invokeView('val',[[20,40]]);

#### event
#### change 滑块位置变化时触发

| 参数名称 | 参数类型 | 说明 |
| -------- | -------- |
| value | array | value |
| start | number | 开始滑块的值 |
| end | number | 结束滑块的值 |




