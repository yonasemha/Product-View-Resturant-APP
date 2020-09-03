const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// creating the items format

const Comment = new Schema({
    name: {
        type:String,
        required: true
    },
    comment:{
        type:String,
        required: true
    }
})

module.exports=mongoose.model('Comments', Comment);