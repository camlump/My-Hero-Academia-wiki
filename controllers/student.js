let express = require('express');

let studentRouter = express.Router();

const student = require('../models/Students');


studentRouter.get('/', (req, res)=>{
    student.find().then((students)=>{
        console.log(students);
        res.render('student/index', { students });
    });
});

studentRouter.get('/newStudent', (req, res)=>{
    res.render('student/newStudent')
});

studentRouter.post('/', (req, res)=>{
    student.create(req.body).then(()=>{
        res.redirect('/')

    }).catch((err)=>{
        console.log(err)
    })
})


studentRouter.get('/:id', (req, res)=>{
    student.findById(req.params.id).then((student)=>{
        console.log(student)
        res.render('student/show', { student });
    });
});

studentRouter.get('/:id/edit', (req, res)=> {
    student.findById(req.params.id).then((student)=>{
        res.render('student/editStudentForm', { student });
    });
});


module.exports = studentRouter;