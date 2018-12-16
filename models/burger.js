var orm = require("../config/orm.js")

//selectall

var burger = {
  selectAll: function(cb) {
    console.log ("select all")
    orm.selectAll("burgers", function(res) {
      cb(res)
   })
  },

  //insertOne
  insertOne: function(cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function(res) {
      cb(res)
    })
  },

  ///updateOne
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function(res) {
      cb(res)
    })
  }
}

module.exports = burger