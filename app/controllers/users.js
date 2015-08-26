// ======= ======= ======= CONTROLLER users.js ======= ======= =======
var express = require("express");
var router = express.Router();
var User = require("../../db/connection").models.User;

function error(response, message){
  response.status(500);
  response.json({error: message});
}

router.get("/users", function(req, res){
  User.findAll().then(function(users){
    res.json(users);
  });
});

router.post("/users", function(req, res){
  User.create(req.body).then(function(users){
    res.json(users);
  });
});

router.get("/users/:id", function(req, res){
  User.findById(req.params.id).then(function(user){
    if(!user) return error(res, "not found");
    res.json(user);
  });
});

router.patch("/users/:id", function(req, res){
  User.findById(req.params.id).then(function(user){
    if(!user) return error(res, "not found");
    user.updateAttributes(req.body).then(function(updatedUser){
      res.json(updatedUser);
    });
  });
});

router.delete("/users/:id", function(req, res){
  User.findById(req.params.id).then(function(user){
    if(!user) return error(res, "not found");
    user.destroy().then(function(){
      res.json({success: true});
    });
  });
});

module.exports = router;
