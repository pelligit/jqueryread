events (事件)
给监听器传入参数与 this
异步与同步
只处理事件一次
错误事件
EventEmitter 类
'newListener' 事件
'removeListener' 事件
EventEmitter.listenerCount(emitter, eventName)
EventEmitter.defaultMaxListeners
emitter.addListener(eventName, listener)
emitter.emit(eventName[, ...args])
emitter.eventNames()
emitter.getMaxListeners()
emitter.listenerCount(eventName)
emitter.listeners(eventName)
emitter.on(eventName, listener)
emitter.once(eventName, listener)
emitter.prependListener(eventName, listener)
emitter.prependOnceListener(eventName, listener)
emitter.removeAllListeners([eventName])
emitter.removeListener(eventName, listener)
emitter.setMaxListeners(n)