var mongoose = require('mongoose');

var studentSchema = mongoose.Schema({
	name: String,
	phone: String,
	email: String,
	studentId: Number
});

var Student = mongoose.model('student', studentSchema);

module.exports = function(app){
	
	app.get('/students', function(req,res){

		Student.find({}, function(err, students){
			if(err)
				res.status(500).send("Error while getting students - " + err.message);
			else
				res.status(200).send(students);
		})

	});

	app.post('/students', function(req, res){
		Student.create(req.body.student, function(err, newStudent){
			if(err)
				res.status(500).send("Error while creating student - " + err.message);
			else
				res.status(200).send(newStudent);
		})
	})
}