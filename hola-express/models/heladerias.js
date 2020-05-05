var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

var heladieriasSchema= new Schema({
    id:{type: String},
    lat:{type: String},
    name:{type: String},
    description:{type: String},
    

})