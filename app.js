const Joi = reqiure('joi');
const express = require('express');
 const app = express();

 app.use(express.json());

 app.use(function(req, res, next){
    console.log('I am Logging');
    next();
 });

 app.get('/', (req, res)=>{
     res.send('Hello world');
 });

 const courses = [
     {id: 1, name: 'Courses1'},
     {id: 2, name: 'Courses2'},
     {id: 3, name: 'Courses3'}
 ]

 app.get('/api/courses', (req, res) =>{
     res.send(courses)
 });

 app.get('/api/courses/:id', (req, res) =>{
        res.send(req.params.id);
 });

 app.get('/api/courses/:year/month', (req, res)=>{
     res.send(req.params);
 });

 app.get('/api/courses/:id', (req, res)=>{

    const course = courses.find(c => c.id === parseInt(req.url.params.id));
        if(!course) return  res.status(404).send('The given course  was not found');
        res.send(cousre);
 });


 app.post('./api/courses', (req, res)=>{

  
      const {error} = validateCourse(req.body);

         if(error)

    return  res.status(400).send(error.details[0].message);
        const course = {
            id: courses.length + 1,
            name: req.body.name
        };
        courses.push(course);
        res.send(course);
          
 });

 app.put('/api/courses:id', (req, res)=>{
   const course= courses.find(c => c.id == parse.int(req.params.id));
   if(!course)   return  res.status(404).send('The course with the given id was not found');
  
   
   
    res.send(course);

    // const result  = validateCourse(req.body);
    const {error} = validateCourse(req.body);
    if(error)  return res.status(400).send(error.details[0].message);
    
    course.name = req.body.name;
   res.send(cousre);

  });

  app.delete('/api/courses:id',(req, res)=>{
    const course =courses.find(c => c.id === parse.int(req.params.id));
    if(!course) return res.status(404).send('The course with the given Id was not found');

        
   const index = courses.indexOf(course);

    courses.splice(index, 1);

    res.send(course);
  });


    function validateCourse(course){
        const schema = {
            name: Joi.string().min(3).required()
        };
        return  Joi.validate(course, schema);








 const port = process.env.PORT||3000;

 app.listen(port, ()=>console.log(`Listening on port ${port}`));



//   const schema = {
//         name: Joi.string().min(3).required()
//     };

//     const result = Joi.validate(req.body, schema);

//     if(result.error){
//         res.status(400).send(result.error.details[0].message);
//     }
//         if(!req.body.name || req.body.name < 3 ){
//             res.status(400).send('Name is required and should not be less than 3');
//             return;
//         }