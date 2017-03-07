var express = require('express');
var router = express.Router();
var models = require('../models');


//www.anyaapp.com/todos
router.get('/',function(req,res,next){
	res.json({"message":"Its working"})
});

router.get('/getall', function(req,res,next){
    models.Task.findAll({})
    .then(function(stu){
      res.json(stu);
    }).error(function(error){
      res.json(error);
    })

});

//www.abc.com/todos/add
router.post('/add',function(req,res,next){
	var newTask = models.Task.build(req.body);

	newTask.save()
	.then(function(anotherTask){
		res.json(anotherTask);	
	}).catch(function(error){
			res.json(error);
	});
});

//www.abc.com/todos/update
router.post('/update',function(req,res,next){
	models.Task.update({title:"tejas"},{where : {id:1}})
	.then(function(updatetask){
		res.json(updatetask);
	}).catch(function(error){
		res.json(error);
	});
	
});

//www.abc.com/todos/delete
router.post('/delete', function(req,res,next){
  models.Student.destroy({where: {id:1}});

});

module.exports = router;