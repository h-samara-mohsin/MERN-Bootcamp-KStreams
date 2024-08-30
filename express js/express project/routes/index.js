var express = require('express');
var router = express.Router();

var {getTasks, createTask, updateTask, deleteTask} = require("../controller/indexController");
// var indexController = require("../controller/indexController");

/* GET home page. */
// router.get("/getTasks",indexController.getTasks);
router.get("/getTasks",getTasks);
router.post("/createTask",createTask)
router.put("/updateTask",updateTask)
router.delete("/deleteTask",deleteTask)


module.exports = router; 
