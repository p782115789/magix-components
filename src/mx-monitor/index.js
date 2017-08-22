/*
    generate by magix-combine@3.5.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-monitor/index',["$"],function(require,exports,module){
/*$*/

/*
    author:xinglie.lkf@taobao.com
 */
let $ = require('$');
let ICounter = 0;
let Instances = [];
let Watcher = (e) => {
    for (let i = Instances.length - 1; i >= 0; i--) {
        let info = Instances[i];
        if (info.removed) {
            Instances.splice(i, 1);
        } else {
            let view = info.view;
            if (e.type != 'mousedown' || !view.inside(e.target)) {
                view.hide();
            }
        }
    }
};
let Remove = (view) => {
    let info = Instances[view.id];
    if (info) {
        info.removed = true;
    }
    delete Instances[view.id];
};
let Add = (view) => {
    Remove(view);
    let info = {
        view: view
    };
    Instances.push(info);
    Instances[view.id] = info;
};
let Setup = () => {
    if (!ICounter) {
        $(document).on('mousedown', Watcher);
        $(window).on('resize', Watcher);
    }
    ICounter++;
};
let Teardown = () => {
    if (ICounter > 0) {
        ICounter--;
        if (!ICounter) {
            $(document).off('mousedown', Watcher);
            $(window).off('resize', Watcher);
        }
    }
};
module.exports = {
    add: Add,
    remove: Remove,
    setup: Setup,
    teardown: Teardown
};
});