const Course = require('../models/Coure');
const { multipleMongooseToObject } = require('../../util/mongoose')
const { mongooseToObject } = require('../../util/mongoose')

class MeController {
    storedCourses(req, res, next){

        Promise.all([Course.find({}),  Course.countDocumentsWithDeleted({deleted: true})])
            .then(([Courses, deletedCount]) => 
                res.render('me/stored-courses', {
                    deletedCount,
                    Courses: multipleMongooseToObject(Courses)
                })
            )
            .catch(next) 
            
        // Course.countDocumentsWithDeleted({deleted: true})
        //     .then((deletedCount) => {
        //         console.log(deletedCount)
        //     })

        // Course.find({})
        //     .then(Courses =>  {
        //         res.render('me/stored-courses', {Courses: multipleMongooseToObject(Courses)}) 
        //     })
        //     .catch(next)
           
    }

    trashCourses(req, res, next){
        Course.findWithDeleted({deleted: true})    
            .then(Courses =>  {
                res.render('me/trash', {Courses: multipleMongooseToObject(Courses)}) 
            })
            .catch(next)    
           
    }
}

module.exports = new MeController