const express = require('express');
const xtpl = require('xtpl');
const app = express();

// 读取文件中间件
app.set('views','./public');
app.set('view engine','html');
app.engine('html',xtpl.renderFile);
// 静态资源中间件
app.use('/static',express.static('./public'));
app.use('/static',express.static('./node_modules'));
/* app.use('/css',express.static('./public/css'));
app.use('/js',express.static('./public/js')); */

app.get('/index.html',(req,res)=>{
    res.render('index',{})
});
app.get('/reg.html',(req,res) => {
  res.render('reg',{});
});
app.use('/user',require('./user').userRouter);
app.listen(7777);