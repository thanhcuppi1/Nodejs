const mongoose = require ('mongoose')
const slug = require('mongoose-slug-generator')
const mongooseDelete = require('mongoose-delete')

const Schema = mongoose.Schema


const Course = new Schema({
    name: {type: String, require: true},
    description: {type: String},
    img: {type: String},
    videoId: {type: String, require: true},
    slug: { type: String, slug: ['name', 'videoId']}
  }, {
    timestamps: true
  })

  mongoose.plugin(slug)
  Course.plugin(mongooseDelete)

  module.exports = mongoose.model('Course', Course);