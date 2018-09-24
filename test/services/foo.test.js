const assert = require('assert');
const app = require('../../src/app');

describe('\'Foo\' service', () => {
  it('registered the service', () => {
    const service = app.service('api/foo');

    assert.ok(service, 'Registered the service');
  });
});
