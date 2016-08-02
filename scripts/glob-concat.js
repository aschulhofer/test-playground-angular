//jshint strict: false
var fs = require('fs');
var glob = require('glob');
var loadJsonFile = require('load-json-file');

function concat(options) {
    var fileList = options.src;
    var distPath = options.dest;

    fileList = fileList.map(function(path) {
      return glob.sync(path);
    });

    fileList = Array.prototype.concat.apply([], fileList);

    console.log(fileList, distPath);

    var output = fileList.map(function(filePath) {
        return fs.readFileSync(filePath).toString();
    });
    fs.writeFileSync(distPath, output.join('\n'));
}

loadJsonFile('build.conf.json').then(function(buildConfig) {
  // Concat JS files
  concat({
      src: buildConfig.js.src,
      dest: buildConfig.js.dest,
  });

  // Concat CSS files
  concat({
      src: buildConfig.css.src,
      dest: buildConfig.css.dest,
  });
});
