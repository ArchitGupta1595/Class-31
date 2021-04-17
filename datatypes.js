var ob1="hello world"
var ob2="1200"
var ob3=1200
var ob4={
    "name":"Archit",
    "age":13
    
}
var ob5
console.log(ob1 +"="+typeof(ob1))
console.log(ob2 +"="+typeof(ob2))
console.log(ob3 +"="+typeof(ob3))
console.log(ob4 +"="+typeof(ob4))
console.log(ob5 +"="+typeof(ob5))

var a=[10,20,"green", 45.5]
console.log(a +"="+typeof(a))

a.push(10000)
a.push(1000000)
console.log(a[2])
console.log("length="+a.length)
console.log(a)
a.pop();
console.log(a)
for(var i= 0; i<a.length; i++){
    console.log(a[i])
}
a= [[10,30,20], [1,2,3,4], 66, 55]
console.log(a[0][2])
