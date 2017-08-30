/*
    generate by magix-combine@3.5.4: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd
 */
define('mx-checkbox/linkage',["$","magix"],function(require,exports,module){
/*$,Magix*/

/*
    author:xinglie.lkf@alibaba-inc.com
 */
let $ = require('$');
let Magix = require('magix');
let FindNames = (node) => {
    node = $(node);
    let subs = node.find('input[linkage-parent]');
    let names = {};
    subs.each((idx, item) => {
        let name = $(item).attr('linkage-parent');
        names[name] = 1;
    });
    node.find('input[linkage]').each((idx, item) => {
        let name = $(item).attr('linkage');
        names[name] = 1;
    });
    return Magix.keys(names);
};
let SyncState = (node, checkbox, name) => {
    let all = node.find('input[linkage=' + name + ']');
    let subs = node.find('input[linkage-parent=' + name + ']');
    let indeterminate = false;
    let noneChecked = false;
    let toggle = all[0] == checkbox;
    let checked = checkbox && checkbox.checked;
    subs.each((index, item) => {
        if (toggle) {
            item.checked = checked;
        }
        if (item.checked) {
            indeterminate = true;
        } else {
            noneChecked = true;
        }
    });

    all.prop('indeterminate', false);
    if (indeterminate && !noneChecked) {
        all.prop('checked', true);
    } else if (noneChecked && !indeterminate) {
        all.prop('checked', false);
    } else if (indeterminate) {
        all.prop('indeterminate', true);
    }
};
let ApplyTableCheckbox = (node, checkbox, e) => {
    node = $(node);
    let names = FindNames(node);
    if (names.length) {
        for (let i = 0; i < names.length; i++) {
            let name = names[i];
            SyncState(node, checkbox, name);
        }
    }
};
module.exports = {
    ctor() {
        let me = this;
        let timer;
        me.on('rendered', () => {
            clearTimeout(timer);
            timer = setTimeout(me.wrapAsync(() => {
                ApplyTableCheckbox('#' + me.id);
            }), 0);
        });
    },
    getSelectedIds(name) {
        let ids = [];
        $('#' + this.id + ' input:checked').each((idx, input) => {
            let value = input.value;
            let node = $(input);
            let pName = node.attr('linkage-parent');
            if (pName && value && (!name || (name && name == pName))) {
                ids.push(input.value);
            }
        });
        return ids;
    },
    '$input[linkage-parent]<change>' (e) {
        ApplyTableCheckbox('#' + this.id, e.eventTarget);
    },
    '$input[linkage]<change>' (e) {
        ApplyTableCheckbox('#' + this.id, e.eventTarget);
    }
};
});