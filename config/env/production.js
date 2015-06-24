'use strict';

module.exports = {
  db: process.env.MONGOHQ_URL || process.env.MONGOLAB_URI ||
  'mongodb://' + (process.env.DB_1_PORT_27017_TCP_ADDR || 'localhost') + '/codeaux',
  port: process.env.PORT || 80,

  assets: {
    lib: {
      css: [
        'public/lib/bootstrap/dist/css/bootstrap.min.css',
        'public/lib/bootstrap/dist/css/bootstrap-theme.min.css',
        'public/lib/bootstrap-social/bootstrap-social.css',
        'public/lib/font-awesome/css/font-awesome.min.css'
      ],
      js: [
        'public/lib/angular/angular.min.js',
        'public/lib/angular-animate/angular-animate.min.js',
        'public/lib/angular-bootstrap/ui-bootstrap-tpls.min.js',
        'public/lib/angular-cookies/angular-cookies.min.js',
        'public/lib/angular-messages/angular-messages.min.js',
        'public/lib/angular-resource/angular-resource.min.js',
        'public/lib/angular-sanitize/angular-sanitize.min.js',
        'public/lib/angular-touch/angular-touch.min.js',
        'public/lib/angular-ui-router/release/angular-ui-router.min.js',
        'public/lib/angular-ui-utils/ui-utils.min.js'
      ]
    },
    css: 'public/dist/application.min.css',
    js: 'public/dist/application.min.js'
  }
};
