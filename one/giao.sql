SET NAMES UTF8;
DROP DATABASE IF EXISTS bbt;
CREATE DATABASE bbt CHARSET=UTF8;
USE bbt;

CREATE TABLE bbt_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(32),
  upwd VARCHAR(32),
  email VARCHAR(64),
  phone VARCHAR(16),

  avatar VARCHAR(128),        #头像图片路径
  user_name VARCHAR(32),      #用户名，如王小明
  gender INT  #性别  0-女  1-男


);


INSERT INTO  bbt_user  VALUES('1','tom','123456','96118233@qq.com','15606584923','1','1','0');