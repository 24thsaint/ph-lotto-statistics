const assert = require('assert');
const app = require('../../src/app');

describe('\'lotto\' service', () => {
  it('registered the service', () => {
    const service = app.service('api/lotto');

    assert.ok(service, 'Registered the service');
  });
});
