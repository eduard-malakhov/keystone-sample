var keystone = require('Keystone');

keystone.init({
  'cookie secret': 'secure string goes here',
  'name': 'keystone-sample',
  'user model': 'User',
  'auto update': true,
  'auth': false,
  'connect-mongo': process.env.MONGO_URI || 'mongodb://localhost/keystone-sample.db'
});

keystone.import('models');

keystone.start();   