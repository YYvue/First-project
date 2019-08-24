//引入express
const express=require('express');
//引入连接池
const pool=require('../pool.js');
//创建express创建空的路由器
var router=express.Router();
//1 测试服务器接收
router.get("/ajaxDemo",(req,res)=>{
	console.log('第一个ajax程序');
	res.send('success');
});
// 2.测试带参数的get登录请求
router.get('/ajaxDemo1',(req,res)=>{
	var $uname=req.query.uname;
	var $upwd=req.query.upwd;
	if(!$uname){
		res.send('用户名未接受到');
		return ;
	}
	if(!$upwd){
		res.send('密码未接受到');
		return;
	}
	//res.send("用户为"+$uname+",密码为"+$upwd);
	pool.query('select * from bbt_user where uname=? and upwd=?',[$uname,$upwd],
		function(err,result){if(err){throw err;};
		//判断数据的长度是否大于0
		if(result.length>0){res.send('登陆成功');}
		else{res.send('登陆失败');};
	});
});
//3查询商品
router.get('/ajaxDemo2',(req,res)=>{
	var $lid=req.query.lid;
	if(!$lid){res.send('编号未能接收');return;}
	pool.query('select * from bbt_laptop where lid=?',[$lid],
		function(err,result){if(err){throw err;};
	if(result.length>0){res.send(result);}
		else{res.send('查询失败');};
	});
});
//4post登录接口
router.post('/ajaxDemo3',(req,res)=>{
	var $uname=req.body.uname;
	var $upwd=req.body.upwd;
	if(!$uname){
		res.send('用户名未接受到');
		return ;
	}
	if(!$upwd){
		res.send('密码未接受到');
		return;
	}
	//res.send("用户为"+$uname+",密码为"+$upwd);
	pool.query('select * from bbt_user where uname=? and upwd=?',[$uname,$upwd],
		function(err,result){if(err){throw err;};
		//判断数据的长度是否大于0
		if(result.length>0){res.send('登陆成功');}
		else{res.send('用户名或密码错误');};
	});
});
//查询用户
router.get('/ajaxDemo4',(req,res)=>{
 pool.query('select *from bbt_user',[],function(err,result){if(err){throw err;};
	if(result.length>0){res.send(result);}
		else{res.send('查询用户失败');};
 });
});





router.post("/ajaxDemo5",(req,res)=>{
	var $uname=req.body.uname;
	var $upwd=req.body.upwd;
	var $phone=req.body.phone;
	var $email=req.body.email;
		pool.query("insert into bbt_user values(?,?,?,?,?,?,?,?)",[null,$uname,$upwd,$email,$phone,null,null,null],function(err,result){
		if(err){throw err;};
		console.log(result);
		//判断是否注册成功
		if(result.affectedRows>0){
			res.send("注册成功");
		};
	});
});

var a='';


router.post("/ajaxDemo6",(req,res)=>{
	
	var $uphone=req.body.uphone;
	res.send('收到手机号'+$uphone+'发送验证码');
	return a=123;
	
		
});









//"uname=123&upwd=123&email=123&phone=123"







//导出路由器
module.exports=router;

