var mongoose = require('mongoose');
var usersSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        lowercase: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    level: {
        type: String,
        default: 1
    },
    address1: {
        type: String,
    },
    address2: {
        type: String
    },
    token: {
        type: String
    },
    gender: String,
    phone: String,
    last_edited: {
        type: Date,
        default: Date.now
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});
// userSchema.methods.comparePassword = function(password) {
//     return bcrypt.compareSync(password, this.hash_password);
//   };
module.exports = mongoose.model('Users', usersSchema);