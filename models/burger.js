// ORM has the queries to the database for each case.
const orm = require("../config/orm.js");

let burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  
  create: function(columns, values, cb) {
    orm.create("burgers", columns, values, function(res) {
      cb(res);
    });
  },
  update: function(condition, cb) {
    orm.update("burgers", condition, function(res) {
      cb(res);
    });
  }
};

// Export these functions for use in the controlller
module.exports = burger;
