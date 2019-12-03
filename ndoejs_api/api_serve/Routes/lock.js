/**
 * 加密函数
 * 传入初始密码，返回加密后密码
 * */
var crypto = require("crypto");

function lock(initPWD){
	function my_lock(initPWD){
		var lock = crypto.createHash('sha256');
		//创建哈希加密算法，后边可以是md5，sha1,sha256等
		var password = lock.update(initPWD).digest('base64');
		return password;
	}
	return my_lock(my_lock(initPWD));
}
module.exports = lock;