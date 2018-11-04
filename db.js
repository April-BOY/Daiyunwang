const mongoose = require('mongoose');
mongoose.connect('mongodb://47.107.47.190:27017/admin');

let db = {
    "userInfo":{
        username:String,
        password:String
    },
    "bookInfo":{
        username:String,
        productName:String
    }
};

for(let key in db){
    mongoose.model(key,mongoose.Schema(db[key]))
}

module.exports={
    'getModel':function(modelName){
        return mongoose.model(modelName)
    }
};