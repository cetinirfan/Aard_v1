const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const University = new Schema({
    universityName:{
        type:String
    },
    universityPhoto:{
        type:String,
        default:'uploads/default/university.png',
    },
    faculty:[],
    favorites:[],
    universityCreated:{
        type:Date,
        default:Date.now()
    }
});

module.exports = mongoose.model('University', University);
