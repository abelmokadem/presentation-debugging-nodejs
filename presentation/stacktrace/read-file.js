const fs = require("fs");

module.exports = (jsonPath, cb) => {
  fs.readFile(jsonPath, {encoding : "utf8"}, function (error, contents) {
    cb(error, JSON.parse(contents));
  });
}
