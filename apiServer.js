/**
 * 后台 api 的实现
 */
const http = require("http");
const url = require("url");
const querystring = require("querystring");

http.createServer((req,res) => {
  let {pathname,query} = url.parse(req.url);
  res.setHeader("Content-Type","text/html;charset=utf8");
  let result = {};
  if(pathname == "/reg"){
    if(req.method != "GET"){
      return;
    }
    // 获取参数
    let {username,password,firstname,lastname,email,telephone,fax,confirm,subscribe,callback} = querystring.parse(query);
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
    if(!callback){
      res.end(result);
    }else{
     res.end(`${callback}(${result})`);
    }
  }
}).listen(8989);