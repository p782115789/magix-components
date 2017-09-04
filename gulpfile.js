let gulp = require('gulp');
let combineTool = require('../magix-combine/index');
let watch = require('gulp-watch');
let del = require('del');
let fs = require('fs');
let pkg = require('./package.json');

combineTool.config({
    debug: true,
    addTmplViewsToDependencies: true,
    multiBind: true,
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

gulp.task('one', ['cleanSrc'], () => {
    combineTool.processFile('./tmpl/mx-form/__test__/index.js');
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

gulp.task('ver', () => {
    combineTool.walk('./tmpl', file => {
        if (/\.js$/.test(file)) {
            let c = combineTool.readFile(file);
            c = c.replace(/\/\*\s+ver:\d+\.\d+\.\d+\s+\*\/\s*/g, '');
            c = `/*\r\nver:${pkg.version}\r\n*/\r\n${c}`;
            combineTool.writeFile(file, c);
        }
    });
});

gulp.task('release', ['combine', 'ver'], () => {
    let cs = fs.readFileSync('./src/__test__/all.js').toString();
    let index = fs.readFileSync('./index.html').toString();
    cs = cs.replace(/\$/g, '$$$$');
    index = index.replace(/<script id="test">[\s\S]*?<\/script>/, '<script id="test">' + cs + '</script>');
    fs.writeFileSync('./index.html', index);
});