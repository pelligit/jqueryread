// 全局变量
var globalVal = typeof window !== "undefined" ? window;

// 主要功能
function main(window,noGlobal){
    "use strict";
    // 所有的功能代码
    return Main;
}

(function( global, factory ) {
    "use strict";
    // 检测执行环境
    if ( typeof module === "object" && typeof module.exports === "object" ) {
        module.exports = global.document ?
            factory( global, true ) :
            function( w ) {
                if ( !w.document ) {
                    throw new Error( "Main requires a window with a document" );
                }
                return factory( w );
            };
    } else {
        factory( global );
    }
})(globalVal, main);


