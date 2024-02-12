const Course = require('../models/Coure');
const { multipleMongooseToObject } = require('../../util/mongoose')

class MeController {
    storedCourses(req, res, next){
        Course.find({})
            .then(Courses =>  {
                res.render('me/stored-courses', {Courses: multipleMongooseToObject(Courses)}) 
            })
            .catch(next)
           
        }
}

module.exports = new MeController