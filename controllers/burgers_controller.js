var express = require("express")

var router = express.Router()


var burger = require("../models/burger.js")



router.get("/", function(req, res) {
 
  burger.selectAll(function(data) {
  console.log(data, "result from sel all")
   var hbsObject = {
     burgers: data
    }
    res.render("index", hbsObject)
 
  })
 
})

// Create a New Burger
router.post('/burgers', function(req, res) {
  burger.insertOne([
    'burger_name'
  ], [
    req.body.burger_name
  ], function(data) {
    res.redirect('/');
  });
});


///router.put
router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id
  burger.updateOne({
    devoured: req.body.devoured
  }, condition, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end()
    } else {
      res.status(200).end()
    }
  })
})



module.exports = router