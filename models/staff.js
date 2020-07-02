const mongoose = require('mongoose');

var staffSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    MSNV: String,
    Name: String,
    urlImg: String,
    Information: String    
} , { collection: 'staffs' } );

var Staff = mongoose.model('staffs', staffSchema);

module.exports = Staff;