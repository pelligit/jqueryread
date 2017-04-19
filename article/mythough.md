* 代码写法非主流，各种括号与变量之间莫名其妙的空格

> 所有的模块中都充斥着这样的代码，感觉不舒服

```javascript
// ajax.js 124行
( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];

// ajax.js 128行
jQuery.extend( true, target, deep );
```

* 不友好的循环

```javascript
// ajax.js 144行
// Remove auto dataType and get content-type in the process
while ( dataTypes[ 0 ] === "*" ) {
    dataTypes.shift();
    if ( ct === undefined ) {
        ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
    }
}

// ajax.js 210行
current = dataTypes.shift();
// Convert to each sequential dataType
while (current) {
    //......
    current = dataTypes.shift();
    //......
}
```

* 用滥的三元运算

```javascript
// ajax.js 430
// Context for global events is callbackContext if it is a DOM node or jQuery collection
            globalEventContext = s.context &&
                ( callbackContext.nodeType || callbackContext.jquery ) ?
                    jQuery( callbackContext ) :
                    jQuery.event,
```

