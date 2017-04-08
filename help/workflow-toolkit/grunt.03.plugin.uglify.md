# grunt-uglify

```javascript
npm install grunt-contrib-uglify --save-dev
```

```javascript
grunt.loadNpmTasks('grunt-contrib-uglify');
```

```javascript
uglify : {
    options : {
        banner : '顶部注释',
    },
    mangle : {

    },
    compress : {

    },
    beautify : false,//false,true
    expression : false,//false,true
    report : 'min',//'none','min','gzip'
    sourceMapName : undefined,//function(){console.log(12333);}
    sourceMapIn : undefined,//function(){}
    sourceMapIncludeSources : false,//false,true
    sourceMapRoot : undefined,//'string'
    sourceMapUrl : undefined,//'string'
    enclose : undefined,//{}
    wrap : undefined,//'string'
    maxLineLen : 32000,//Limit the line in symbols.pass maxxLineLen=0,,,,,,
    ASCIIOnly : false,//false,true
    exportAll : false,/false,true
    preserveComments : undefined,//false,'all','some'
    banner : '',//string
    footer : '',//string
    screwIE8 : true,
    mangleProperties : false,//
    reserveDOMProperties : false,//
    exceprionsFiles : [],//
    nameCache : '',
    quoteStyle : 0
}
```


