//收集的function

// 检测是否是commonJs或者和commonJS相近的环境。
function isModule(){
    return typeof module === "object" && typeof module.exports === "object";
}