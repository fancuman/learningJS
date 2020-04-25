function _new (oFun) {
    let o = {}
    o.__proto__ = oFun.prototype
    oFun.call(o)
    return o
}

function _isPrototypeOf (proto, instanceObj) {
    let protoVar = instanceObj.__proto__
    while (protoVar) {
        if (proto === protoVar)
            return true
        protoVar = protoVar.__proto__
    }
    return false
}