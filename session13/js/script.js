// console.log('js')
/////// string , number , boolean , undefined , null 
//// var , let , const 
// camel case
var firstName = "Nouran" , lastName = "Fayez" , middleName = "Ahmed"
// var fullName = firstName+ " " +middleName+ " " +lastName
/// template string 
var fullName = `${firstName} ${middleName} ${lastName}`
// var lastName = "Fayez"
// console.log(FirstName)
// console.log(fullName)
var age = 31
// boolean ==> true / false
var isGraduated = true
// console.log(isGraduated)
var h
h = "text"
// console.log(h)
var x = null
// var p = prompt("enter your name")
// console.log(p)


// Mathmatical operators ==> + - / * ** % ++ --

var x = 30
var y = 10
var sum = x + y
// console.log(sum)

// ++ increment
var h = 10
// console.log(h++) // 10
// console.log(h) // 11
// console.log(++h) // 12

// -- decrement 

var k = 5
// console.log(--k)
// console.log(k--)
// console.log(k)

// Assignment Operators ==> += -= /= *= **= %=

var a = 20
a = a + 5 // 25
a+=5 // 30
// console.log(a)


// comparison operator ==> > , >= < <= == === != !== ==> boolean

var a = 30
var b = 40

// console.log(a > b) // false

var a = 50
var b = 40
var c = 40

// console.log(a > b) // true
// console.log(c > b) // false
// console.log(c >= b) // false

var h = "20"
// console.log(h == 20)// true - value 
// console.log(h === 20)// false - value - data type ==> strict equality


// console.log(h != 20) // value 
// console.log(h !== 20) // value - data type


// unary operator ==> typeof , instanceof

var t = "text"
// console.log(typeof(t))
// console.log(typeof(a))
// console.log(typeof a == 'Number')


var age = 31
var firstName = "Ahmed"

//  logical operator ==> && || !
// console.log(age == 20)
// console.log(firstName == "Ahmed")

// console.log(age == 20 && firstName == "Ahmed" && typeof firstName == 'string' && typeof age == "number")


// console.log(firstName == "Nouran" || age == 20 || typeof age == 'number')

// console.log(!(firstName == "Marwa"))


// (condition) ? true : false


// false & truthy value
var k = 20 ; // true
var k = 0 ; // false
var k = "sdfghjkl" ; // true
var k = "" ; // false
var k = null ; // false
var k  ; // false
var k = -0  ; // false
// console.log('js');
// (k == 20 && firstName== "Ali")
//  ? console.log(`number = 20`) 
//  : console.log('invalid number')

// (k) ? console.log('correct') : console.log('wrong')

// var p = prompt('enter your name');
// (p) ? console.log(`welcome ${p}`) : console.log('invalid user')

// if statment


// if(condition){
//     true
// }
// else {
//     false
// }

var job = prompt('enter your job')

// if(job == "developer" || job == "engineer" || job == "Accountant") 
//     console.log('valid user ')
//     else console.log('invalid user')


if(job != null || job != ""){
    if(job == "developer" || job == "engineer" || job == "Accountant") 
    console.log('valid user ')
    else console.log('invalid user')
}
else {
    console.log('please enter your job')
}





// if(job){
//     if(job == "developer" || job == "engineer" || job == "Accountant") 
//     console.log('valid user ')
//     else console.log('invalid user')
// }
// else {
//     console.log('please enter your job')
// }



if(job == 'developer' || job == 'dev') console.log(`welcome ${job}`)
    else if(job == "accountant") console.log('welcome account')
    else if(job == "engineer") console.log('welcome engineer')

  else console.log('invalid user')    
  
  

  var degree = prompt('enter your degree')
//   > 90 ==> A
//   > 80 < 90 ==> B 
//   > 70 < 80 ==> C
//   < 60 ==> F 

