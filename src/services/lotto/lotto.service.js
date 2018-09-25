// Initializes the `lotto` service on path `/api/lotto`
const createService = require('feathers-mongodb');
const hooks = require('./lotto.hooks');

module.exports = function (app) {
  const mongoClient = app.get('mongoClient');

  // Initialize our service with any options it requires
  app.use('/api/lotto', createService({}));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('api/lotto');

  mongoClient.then(db => {
    service.Model = db.collection('lotto');
  });

  service.hooks(hooks);
};
