/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'super-rentals',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    firebase: {
      // <script>
        // Initialize Firebase
        // var config = {
      apiKey: "AIzaSyBzDYhkcb-WamkgABuT36APscEyAYhHiGc",
      authDomain: "super-rentals-b41e7.firebaseapp.com",
      databaseURL: "https://super-rentals-b41e7.firebaseio.com",
      storageBucket: "super-rentals-b41e7.appspot.com",
      messagingSenderId: "408338327518"
        // };
        // firebase.initializeApp(config);
      // </script>
    },


    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
