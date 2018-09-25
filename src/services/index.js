const foo = require('./foo/foo.service.js');
const lotto = require('./lotto/lotto.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(foo);
  app.configure(lotto);
};
