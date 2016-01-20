var gulp                     = require('gulp')
var path                     = require('path')
var join                     = path.join
var cfg                      = require('./build.json')

var rootDir                  = path.resolve(__dirname, "../")
process.chdir(rootDir)


require('meanair-build')(gulp, cfg).configure({
  dirs: dirs => {
    for (var name in dirs) dirs[name] = join(rootDir, dirs[name])
  },
  clean: clean => {
    clean.dirs = clean.dirs.map(name=>cfg.dirs[name])
  },
  less: less => {
    Object.assign(less, {
      src:     join(cfg.dirs.web, less.src, '*.less'),
      dest:    join(cfg.dirs.web, less.dest),
      imports: less.imports.map(p => join(cfg.dirs.web, p, '**/*.less'))
    })
  },
  nodemon: nodemon => {
    nodemon.config.script = join(cfg.dirs['server'],nodemon.config.script)
    nodemon.config.watch = nodemon.dirs.map(dir => join(rootDir,dir))
  },
  browserify: browserify => {
    browserify.src = join(rootDir, browserify.src)
    // if (cmd.indexOf('dist') == 0)
    //   browserify.dest = cfg.dirs.dist
    // else
    browserify.dest = join(cfg.dirs.web, browserify.dest)
    browserify.watch = cmd.match(/(watch|dev)/i) != null ||
                       cmd == 'default' || cfg.default.indexOf('watch') != -1
    browserify.dist = cmd.match(/dist/i) != null
  },
  watch: watch => {
    watch.path.less = cfg.less.imports
    watch.path.browserify = [
      join(cfg.dirs.web, 'js', '**/*.js'),
      join(cfg.dirs.web, 'js', '**/*.html')
    ]
    watch.path.livereload = watch.path.livereload.map(path => join(rootDir, path))
  },
  dist: dist => {
    dist.src = cfg.dirs.web
    dist.dest = cfg.dirs.dist
  }
}).run()

