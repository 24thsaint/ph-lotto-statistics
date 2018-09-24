// Initializes the `Foo` service on path `/api/foo`
const createService = require('feathers-mongodb');
const hooks = require('./foo.hooks');

module.exports = function (app) {
  const paginate = app.get('paginate');
  const mongoClient = app.get('mongoClient');
  const options = { paginate };

  // Initialize our service with any options it requires
  app.use('/api/foo', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('api/foo');

  mongoClient.then(db => {
    service.Model = db.collection('foo');
  });

  service.hooks(hooks);
};
