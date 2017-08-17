let gulp = require('gulp');
let combineTool = require('../magix-combine/index');
let watch = require('gulp-watch');
let del = require('del');
let fs = require('fs');

combineTool.config({
    debug: true,
    scopedCss: [
        './tmpl/mx-style/index.less'
    ]
});

gulp.task('cleanSrc', () => {
    return del('./src');
});

gulp.task('combine', ['cleanSrc'], () => {
    return combineTool.combine().then(() => {
        console.log('complete');
    }).catch(ex => {
        console.log('gulpfile:', ex);
    });
});

gulp.task('watch', ['combine'], () => {
    watch('./tmpl/**/*', e => {
        if (fs.existsSync(e.path)) {
            combineTool.processFile(e.path).catch(ex => {
                console.log('ex', ex);
            });
        } else {
            combineTool.removeFile(e.path);
        }
    });
});