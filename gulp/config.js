var dest = "./build";
var src = './src';

module.exports = {
  bower: {
    src: "./bower_components/**",
    dest: dest + "/bower_components"
  },
  browserSync: {
    server: {
      // Serve up our build folder
      baseDir: dest
    }
  },
  css: {
    src: src + "/styles/*.css",
    dest: dest + "/"
  },
  deploy: {
    files: dest + "/**"
  },
  images: {
    src: src + "/img/**",
    dest: dest + "/img"
  },
  markup: {
    src: src + "/index.html",
    dest: dest
  },
  browserify: {
    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [{
      entries: src + '/cratedigger/index.js',
      dest: dest,
      outputName: 'cratedigger.js',
      // list of externally available modules to exclude from the bundle
      external: ['jquery', 'underscore']
    },{
      entries: src + '/main.js',
      dest: dest,
      outputName: 'main.js'
    }]
  },
  build: {
    cssSrc: dest + '/*.css',
    jsSrc: dest + '/*.js',
    dest: dest
  }
};