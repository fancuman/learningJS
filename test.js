function Father (name) {
    this.name = name
}
Father.prototype.showName = function () {
    console.log("name:", this.name)
}


function Child (num, name) {
    this.age = num
    Father.call(this, name)
}
Child.prototype = new Father()
Child.prototype.showAge = function () {
    console.log("age:", this.age)
}
Child.prototype.dump = function () {
    console.log('dump information:----------------------')
    this.showName()
    this.showAge()
}


let c1 = new Child(15, 'child1')
let c2 = new Child(10, 'child2')
// console.log('dump c1:', c1)
// console.log('dump c2:', c2)

// c1.dump()
// c2.dump()

function _new (oFun) {
    let o = {}
    o.__proto__ = oFun.prototype
    oFun.call(o)
    return o
}

function Veicle () {
    this.type = 'Veicle'
}
Veicle.prototype.wheelnum = 4

function Car () {
    this.name = 'X50'
}
Car.prototype = new Veicle()
Car.prototype.show = function () {
    console.log('name:', this.name)
}

c2 = new Car()
c2.show()
c1 = _new(Car)
c1.show()
console.dir(c1.__proto__)
console.dir(c2.__proto__)
console.log(c1.wheelnum)

console.log(Car.prototype.isPrototypeOf(c2))
console.log(c2.__proto__)
console.log(Car.prototype == Veicle.prototype)
console.log(c1)
console.log(Car.prototype)
console.log(Veicle.prototype)


function _isPrototypeOf (proto, instanceObj) {
    let protoVar = instanceObj.__proto__
    while (protoVar) {
        if (proto === protoVar)
            return true
        protoVar = protoVar.__proto__
    }
    return false
}

console.log(_isPrototypeOf(Car.prototype, c1))