const mongoose = require ('mongoose')

async function connect(){
    try {
        await mongoose.connect('mongodb://127.0.0.1/education_test') 
        console.log('Connected!') 
    } catch (error) {
        console.log('Connect Failure') 
    }
}

module.exports = {connect}