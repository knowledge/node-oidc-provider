const url = require('url');
const { equal, ok } = require('assert');

module.exports = {
  isHttpsUri(uri) {
    try {
      const { protocol } = url.parse(uri);
      equal(protocol, 'https:');
    } catch (err) {
      return false;
    }
    return true;
  },
  isWebUri(uri) {
    try {
      const { protocol } = url.parse(uri);
      ok(['https:', 'http:'].includes(protocol));
    } catch (err) {
      return false;
    }
    return true;
  },
};
