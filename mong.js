const mongoose = require('mongoose');

mongoose.connect('mongodb://kocalhost/playground')
.then(()=> console.log('connected to database succesfully'))
.catch((err) => console.log('Could not connect to the database', err));

const courseSchema = new mongoose.schema({
    name: String,
    author: String,
    tags: [String],
    date: { type: Date, default:date.now},
    isPublished: Boolean
});

async function createCourse(){
    
   const Course = mongoose.model('course', courseSchema);
   const course = new Course({
    name: 'Computer',
    author : 'Ede',
    tags: ['node', 'backend'],
    isPublished : true
});

  const result = await course.save();
}

createCourse();
    //COMPARISM QUERY OPERATOR
// async function getCourses(){
//     //eq (equal)
//     // ne (not equal)
//     // gt (greater than)
//     // gte (greater than or equal)
//     // lt(less than)
//     // lte (less than or equal to)
//     //in
//     //nin(not in) 
//    const courses = await Course
//    //.find({author: 'Mosh', isPublished:true})
//   // .find({price: {$gt: 10, $lte:20}})
//     .find({price:{$in:[10, 15, 20]}})
//    .limit(10)
//    .sort({name:1})
//    .select({name:1, tags:1});
//    console.log(courses);
// }

// async function getCourses(){
//     //or //and

//     const courses =await Course
//     //.find({author : 'Mosh', isPublished:true})
//     .find()
//     .or([{author: 'Mosh'}, {isPublished:true}])
//     .and([])
//     .limit(10)
//     .sort({name:1})
//     . select({name:1, tags:1});

//     console.log(courses);
// }

// async function getCourses(){
//     const courses = await Course

//     //start with Mosh
//     .find({author : /^Mosh/})
//     // ends with ede
//     .find({author:/Ede$/i})

//     // contains Mosh
//     .find({author:/.*Mosh.*/i})
// }

//     Count that match this filter
//  async function getCourses(){
//      const courses = await Course
//      .find({author: 'Mosh'})
//      .limit(10)
//      .sort({name:1})
//      .count()
//  }

getCourses();

// // pagination
// async function getCourses(){
//     const pageNumber = 2;
//     const pageSize = 10;
// const courses = await Course
//       .find({author: 'Mosh'})
//       .skip((pageNumber -1) * pageSize)
//       .limit(pageSize)
//       .sort({name:1})
//        .count()
    
// }

// //Update document Query First
// async function updateCourse(id){
//     const course = await Course.findById(id);
//     if(!course) return;

//     course.isPublished = true;
//     course.name = 'Another';
// }

// updateCourse('12344pjdkdjj');

// async function updateCourse(id){
//     const result  = await Course.update({_id: id}, {
//         $set:{
//             author:'Mosh',
//             isPublished:false
//         }
//     })
// }

async function updateCourse(id){
    const course = await Course.findByIdAndUpdate(id, {
        $set:{
            author: 'jack',
            isPublished : true
        }
    }, { new : true});
    console.log(course);

}

async function removeCourse(id){
    // const result = await Course.deleteOne( {_id: id});
        const result = await Course.deleteMany({_id : id});
        const course = await Course.findByIdAndRemove(id);
    
    console.log(result);
       


}

removeCourse('644yudhjdiu');

// mongo validation part

const courseSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required:true,
        minlength: 5,
        maxlength: 255,
         },
    category:{
        type:String,
        required:true,
        enum:['web', 'mobile', 'netwwork'],
        lowercase:true,
        trim:true,
        get: v => Math.round(v),
        set: v => Math.round(v)

    },
    author:{type: String, required: true},
    tags:{type:Array,
          validate:{
              isAsync: true,
              validator: function(v, callback){
                  setTimeout(()=>{
                //Do some Async work
                const result= v&&v.length> 0;
                callback(result);
                  }, 4000);
        

              message: 'A Cousre should have at least one tag.'
          }    
        
    },
    isPublished: {type: boolean, required: true},
    price:{
            type:Number,
            required: function(){
            return this.isPublished;},
            min: 15,
            max : 200
            
           }

});


async function createCourse(){

    const Course = mongoose.model('Course', courseSchema);

    const course = new Course({
        name: 'GameTheory',
        category: '-',
        author: 'Ogunwolu',
        tags: ['node', 'game'],
        isPublished: true,
        price:

    });
    try{
        const result = await course.save();
        console.log(result)
    }
    catch(ex){
        for(field in ex.errors)
        console.log(ex.errors[field].message);
    }
    
}



async function getCourses(){
  const course =  await Course.find({
        name:'raman',
        author: 'ede'
    });
}

