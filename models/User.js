const mongoose = require('mongoose');
const {Schema} = mongoose;

// creating schema design
const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role:{
        enum:['admin', 'user']
    },
    blogs:[
        {
            type: Schema.Types.ObjectId,
            ref: 'Blog'
        }
    ]

})

// creating model design
const User = mongoose.model('User', userSchema);

module.exports = User;