let name
let age
let address

exports.setName = function(name) {
    this.name = name
}

exports.setAge = function(age) {
    this.age = age
}

exports.showName = function() {
    return this.name
}

exports.showAge = function() {
    return this.age
}