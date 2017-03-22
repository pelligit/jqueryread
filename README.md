> 
> 该项目的所有的内容都围绕着jQuery源码的阅读。  
> 有关于其他的知识，在help文件夹下会有大略的介绍，详细内容请自行查找资料。  
> 源码阅读过程会总结源码中各个模块的的function，最终归纳在result文件夹下的function.js文件中  
> 阅读源码过程中会总结源码相关的各种名词，并归纳在result网文件夹下words.md中  
> 

### 项目的目录结构  
```
|--- jqueryread/  ____源码阅读根目录
|   |--- article/  ____源码阅读文章所在目录
|   |   |--- img/  ____文章相关的图片资料文件夹
|   |   |   |--- article-1/  ____文章article-1.md的图片资料文件夹
|   |   |   |   |--- ....png
|   |   |   |   |--- ....jpg
|   |   |   |   |--- ....png
|   |   |   |   |--- ....png
|   |   |   |--- ...  
|   |   |   |--- article-n/  ____文章article-n.md的图片资料文件夹
|   |   |--- article-1.md  ____文章article-1
|   |   |--- ...
|   |   |--- ...
|   |   |--- article-n.md  ____文章article-n
|   |   |--- README.md  ____说明
|   |--- demo/  ____示例所在文件夹
|   |   |--- article/  ____文章示例所在文件夹
|   |   |   |--- article-1/  ____文章article-1的示例
|   |   |   |--- ...
|   |   |   |--- ...
|   |   |   |--- ...
|   |   |   |--- article-n/  ____文章article-n的示例
|   |   |--- help/  
|   |   |--- libs/  
|   |   |--- word/  
|   |--- function/  
|   |   |--- ajax.js
|   |   |--- attr.js
|   |   |--- css.js
|   |   |--- ...
|   |   |--- ...
|   |   |--- jquery.function.js
|   |   |--- README.md
|   |--- help/  
|   |   |--- 模块化/
|   |   |   |--- AMD  
|   |   |   |--- CMD  
|   |   |   |--- UMD  
|   |   |   |--- Commonjs  
|   |   |--- 前端工程化/
|   |   |   |--- grunt
|   |   |   |--- gulp
|   |   |   |--- fis
|   |   |   |--- webpack
|   |   |--- ...  
|   |   |--- ...  
|   |   |--- ...  
|   |   |--- ...  
|   |   |--- node/  
|   |--- result/  
|   |   |--- jquery.function.js  
|   |   |--- word.js  
|   |   |--- word.md  
|   |--- README.md
|   |--- .gitignore
```






目录

* jQuery介绍  
	* 前端发展历程
	* jQuery历史  
	* jQuery团队  
	* jQuery在前端发展中的意义
* jQuery代码示例  
* 源码阅读准备工作  
	* nodejs
	* npm  
	* git和github  
	* markdown  
	* 构建工具
		* 什么是项目构建  
		* grunt
		* gulp
		* fis
		* webpack
	* 代码测试  
		* 什么是测试？
	* 模块化  
		* 什么是模块化
		* requirejs
		* seajs
		* bower
* jQuery目录结构
* 项目搭建
* jQuery接口分析
* src目录分析  
* 源码分析开始  
* 
* test目录分析  






名词解释
	构建工具
	测试
	模块化




**相关说明**

**本项目中的根路径**

> 本项目中的根路径指的是jQuery源码阅读项目的根路径。  
> 不是相对于操作系统的根路径。  
> 比如：  
> 项目中的article文件夹，就在根路径下。  
> demo文件夹，也是在根路径下。  
> 还有描述这段文字的README.md文件，也就是你正在阅读的这个文件，也是在根路径下。