
let orm = require("../config/orm.js");

const foodie = {
  all: (cb) => {
    orm.all("foodies", (res) => {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: (cols, vals, cb) => {
    orm.create("foodies", cols, vals, (res) => {
      cb(res);
    });
  },
  update: (objColVals, condition, cb) => {
    orm.update("foodies", objColVals, condition, (res) => {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = foodie;


