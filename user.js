const express = require("express");
const bodyParser = require("body-parser");
let model = require('./db');
let userInfo = model.getModel('userInfo');

let userRouter = express.Router();

userRouter.post('/reg', bodyParser(), (req, res) => {
	// console.log(req.params);
	console.log(req.body);
	let {
		username,
		password,
		firstname,
		lastname,
		email,
		telephone,
		fax,
		confirm,
		subscribe
	} = req.body;
	userInfo.create({
		username,
		password,
		firstname,
		lastname,
		email,
		telephone,
		fax,
		confirm,
		subscribe
	}, (err, data) => {
		if (err) {
			console.log(err);
			res.json({
				code: 0,
				msg: "后台出错了"
			});
			return;
		}
		if (!data.length) {
			res.json({
				code: 0,
				msg: "用户名信息错误"
			});
			return;
		}

		res.json({
			code: 1
		});
	});
});
userRouter.post('/login', bodyParser(), (req, res) => {
	let {
		username,
		password
	} = req.body;
	userInfo.find({
		username,
		password
	}, (err, data) => {
		if (err) {
			console.log(err);
			res.json({
				code: 0,
				msg: "后台出错了"
			});
			return;
		}
		if (!data.length) {
			res.json({
				code: 0,
				msg: "用户名或者密码错误"
			});
			return;
		}

		res.json({
			code: 1
		});
	});

});
userRouter.get('/modify', (req, res) => {

});

module.exports = {
	userRouter
}
