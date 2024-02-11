const Course = require('../models/Coure');
const { mongooseToObject } = require('../../util/mongoose')

class CourseController {
    show(req, res, next){
        Course.findOne({slug: req.params.slug})
            .then(course => {
                res.render('courses/show', { course: mongooseToObject(course) })
            })
       
    }

    create(req, res, next){
        res.render('courses/create')
       
    }

    store(req, res, next){
        const formData = req.body
        formData.img = `https://i.ytimg.com/vi/${req.body.videoId}/hqdefault.jpg`
        const course = new Course(formData)
        course.save()
            .then(() => res.redirect(`/`))
            .catch(error => {
                
            }) 

        
    }
}

module.exports = new CourseController