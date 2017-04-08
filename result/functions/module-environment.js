// 检测是否是模块化环境：AMD,CMD,UMD,
function moduleEnv(){
	return typeof module === "object" && typeof module.exports === "object";
}