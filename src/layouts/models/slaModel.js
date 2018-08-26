var mongoose = require('mongoose');



var slaSchema = new mongoose.Schema({
  name:String,
  email:String,
  phone:Number
});


module.exports = mongoose.model("Sla", slaSchema);

//Model for DB
