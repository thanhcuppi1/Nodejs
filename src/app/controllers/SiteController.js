const Course = require('../models/Coure');
const { multipleMongooseToObject } = require('../../util/mongoose')

class SiteController {
    index(req, res, next){
        Course.find({})
            .then(Courses =>  {
                res.render("home", {Courses: multipleMongooseToObject(Courses)}) 
            })
            .catch(next)
       
    }

    search(req, res){
        res.render("search")
    }
}

module.exports = new SiteController