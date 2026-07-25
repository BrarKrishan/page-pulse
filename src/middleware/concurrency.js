const pLimit = require("p-limit");

const limit = pLimit(5);

module.exports = (fn) => limit(fn);