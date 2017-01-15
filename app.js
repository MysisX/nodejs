const foo = require("./foo")

foo.setName("guile")
foo.setAge(12)
foo.setAddr("China")

console.log(foo.showAge(), foo.showName(), foo.showAddr())