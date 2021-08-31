const obj = { test: "test" };
let obj2 = obj;
var obj3 = obj;
obj3.test='changed';
console.log(obj,obj2,obj3,obj === obj2 && obj === obj3);
// output:
// {test: "changed"} {test: "changed"} {test: "changed"} true