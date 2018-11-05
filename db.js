const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/admin');

let db = {
    "userInfo":{
        username:String,
        password:String,
        firstname:String,
        lastname:String,
        email:String,
        telephone:String,
        fax:String,
        confirm:String,
        subscribe:String
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