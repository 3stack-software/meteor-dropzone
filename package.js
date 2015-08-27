Package.describe({
  version: "0.0.1",
  name: "3stack:dropzone",
  summary: 'A simple package for creating a "dropzone" for files, atop another element.',
  git: 'https://github.com/3stack-software/meteor-dropzone',
  documentation: 'README.md'
});

Package.onUse(function(api){
  api.versionsFrom('METEOR@1.1.0.2');

  api.use([
    'meteor-platform',
    'reactive-var',
    'flemay:less-autoprefixer@1.1.0'
  ], 'client');

  api.addFiles([
    'dropzone.html',
    'dropzone.js',
    'dropzone.less',
    'throttle.js'
  ], 'client');
});
