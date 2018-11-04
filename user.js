const express = require("express");
const bodyParser = require("body-parser");
let model = require('./db');
let userInfo = model.getModel('userInfo');

let userRouter = express.Router();

userRouter.post('/reg',(req,res) =>{
  // console.log(req.params);
  console.log(req.body);
  // let {username,password,firstname,lastname,email,telephone,fax,confirm,subscribe,callback} = req.body;
  if(1){
  	// 如果被注册，注册失败
  	result = {code:0,mag:"用户名已被注册，注册失败"};
  }
  if(0){
  	// 如果没有注册，存入数据库
  	result = {code:1};
  }
  result = JSON.stringify(result);
  /**
  * http://localhost:8989/register?callback=fn
  */
  /* if(!callback){
  	res.end(result);
  }else{
  res.end(`${callback}(${result})`);
  } */
});
userRouter.post('/login',(req,res) =>{
  let {username,password }= req.body;
  userInfo.find({username,password},(err,data)=>{
  	if(err){
  		console.log(err);
  		res.json({code:0,msg:"后台出错了"});
  		return;
  	}
  	if(!data.length){
  		res.json({code:0,msg:"用户名或者密码错误"});
  		return;
  	}
  
    res.json({code:1});
  });
  
});
userRouter.get('/modify',(req,res) =>{
  
});

module.exports = {
  userRouter
}