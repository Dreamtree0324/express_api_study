//mongoose 모듈 추가
const mongoose = require("mongoose");

//mongoose 스키마 추가
let userSchema = mongoose.Schema({
	
	id: mongoose.Schema.Types.ObjectId,
	name : {type:String, require: true},
	age : {type: int32, require: true},
})

let User = mongoose.model('user', userSchema);

module.exports = User;