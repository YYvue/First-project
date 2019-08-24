const mysql=require('mysql');
//创建连接chi
var pool=mysql.createPool({
	host:'127.0.0.1',
	port:'3306',
	user:'root',
	password:'',
	database:'bbt',
	connectionlimit:20 //设置连接池的大小
});
module.exports=pool;