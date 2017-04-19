http
http.Agent 类
new Agent([options])
agent.createConnection(options[, callback])
agent.destroy()
agent.freeSockets
agent.getName(options)
agent.maxFreeSockets
agent.maxSockets
agent.requests
agent.sockets
http.ClientRequest 类
'abort' 事件
'aborted' 事件
'connect' 事件
'continue' 事件
'response' 事件
'socket' 事件
'upgrade' 事件
request.abort()
request.aborted
request.end([data][, encoding][, callback])
request.flushHeaders()
request.setNoDelay([noDelay])
request.setSocketKeepAlive([enable][, initialDelay])
request.setTimeout(timeout[, callback])
request.write(chunk[, encoding][, callback])
http.Server 类
'checkContinue' 事件
'checkExpectation' 事件
'clientError' 事件
'close' 事件
'connect' 事件
'connection' 事件
'request' 事件
'upgrade' 事件
server.close([callback])
server.listen(handle[, callback])
server.listen(path[, callback])
server.listen([port][, hostname][, backlog][, callback])
server.listening
server.maxHeadersCount
server.setTimeout(msecs, callback)
server.timeout
http.ServerResponse 类
'close' 事件
'finish' 事件
response.addTrailers(headers)
response.end([data][, encoding][, callback])
response.finished
response.getHeader(name)
response.headersSent
response.removeHeader(name)
response.sendDate
response.setHeader(name, value)
response.setTimeout(msecs, callback)
response.statusCode
response.statusMessage
response.write(chunk[, encoding][, callback])
response.writeContinue()
response.writeHead(statusCode[, statusMessage][, headers])
http.IncomingMessage 类
'aborted' 事件
'close' 事件
message.destroy([error])
message.headers
message.httpVersion
message.method
message.rawHeaders
message.rawTrailers
message.setTimeout(msecs, callback)
message.statusCode
message.statusMessage
message.socket
message.trailers
message.url
http.METHODS
http.STATUS_CODES
http.createClient([port][, host])
http.createServer([requestListener])
http.get(options[, callback])
http.globalAgent
http.request(options[, callback])