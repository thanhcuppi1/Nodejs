const Course = require('../models/Coure');
const { mongooseToObject } = require('../../util/mongoose')

class CourseController {
    show(req, res, next){
        Course.findOne({slug: req.params.slug})
            .then(course => {
                res.render('courses/show', { course: mongooseToObject(course) })
            })
            .catch(next)
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
            .catch( 
                
            ) 
    }

    edit(req, res, next){
        Course.findById(req.params.id)
            .then(course => {
                res.render('courses/edit', { course: mongooseToObject(course) })
            })
            .catch(next)
    }

    update(req, res, next){
        Course.updateOne({_id: req.params.id}, req.body )
            .then(() => res.redirect(`/me/stored/courses`))
            .catch(next)
    }

    delete(req, res, next){
        Course.delete({_id: req.params.id} )
            .then(() => res.redirect(`back`))
            .catch(next)
    }

    forcedelete(req, res, next){
        Course.deleteOne({_id: req.params.id} )
            .then(() => res.redirect(`back`))
            .catch(next)
    }

    restore(req, res, next){
        Course.restore({_id: req.params.id},  Course.deleted = false)
            .then(() => res.redirect(`back`))
            .catch(next)
    }

    handleFormAction(req, res, next){
        switch (req.body.action) {
            case 'delete':
                Course.delete({_id: {$in: req.body.courseIds}} )
                    .then(() => res.redirect(`back`))
                    .catch(next)
                break;
        
            default:
                break;
        }
    }

}

module.exports = new CourseController