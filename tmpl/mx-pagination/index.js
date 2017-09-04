/*
ver:1.0.0
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let $ = require('$');
Magix.applyStyle('@index.less');
module.exports = Magix.View.extend({
    tmpl: '@index.html',
    init(extra) {
        let me = this;
        me.$extra = extra;
        let total = (extra.total | 0) || 0;
        let size = extra.size || 20;
        let page = extra.page || 1;
        me.updater.set({
            step: extra.step || 7,
            simplify: extra.simplify,
            mini: extra.mini,
            page: page,
            total: total,
            size: size
        });
    },
    render() {
        let me = this;
        let info = me.cal();
        me.updater.set(info).digest();
    },
    cal() {
        let me = this;
        let data = me.updater.get();
        let page = data.page | 0;
        let pages = Math.ceil((data.total || 1) / data.size);
        if (page > pages) page = pages;
        let step = data.step | 0;
        let middle = step / 2 | 0;
        let start = Math.max(1, page - middle);
        let end = Math.min(pages, start + step - 1);
        start = Math.max(1, end - step + 1);
        let offset;
        if (start <= 2) { //=2 +1  =1  +2
            offset = 3 - start;
            if (end + offset < pages) {
                end += offset;
            }
        }
        if (end + 2 > pages) {
            offset = 2 - (pages - end);
            if ((start - offset) > 1) {
                start -= offset;
            }
        }
        if (start == 3) {
            start -= 1;
        }
        if (end + 2 == pages) {
            end += 1;
        }
        let offsetStart = (page - 1) * data.size + 1;
        let offsetEnd = Math.min(data.total, page * data.size);
        return {
            pages,
            offsetStart: offsetStart,
            offsetEnd: offsetEnd,
            startSpace: (data.total + '').length - (offsetStart + '').length,
            endSpace: (data.total + '').length - (offsetEnd + '').length,
            pageSpace: (pages + '').length - (page + '').length,
            page,
            start,
            end
        };
    },
    fireEvent() {
        let me = this;
        let node = $('#' + me.id);
        let data = me.updater.get();
        node.trigger({
            type: 'change',
            page: data.page,
            size: data.size
        });
    },
    'toPage<click>' (e) {
        e.preventDefault();
        let me = this;
        me.updater.set({
            page: e.params.page
        });
        me.render();
        me.fireEvent();
    },
    'toPrev<click>' (e) {
        e.preventDefault();
        let me = this;
        me.updater.set({
            page: me.updater.get('page') - 1
        });
        me.render();
        me.fireEvent();
    },
    'toNext<click>' (e) {
        //console.log(e);
        e.preventDefault();
        let me = this;
        me.updater.set({
            page: me.updater.get('page') + 1
        });
        me.render();
        me.fireEvent();
    },
    'changeSize<change>' (e) {
        e.stopPropagation();
        let me = this;
        me.updater.set({
            page: 1,
            size: e.item
        });
        me.render();
        me.fireEvent();
    },
    'prevent<click>' (e) {
        e.preventDefault();
    }
});