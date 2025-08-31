// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)
// console.log(9)
// console.log(10)

// for(variable ; condition ; increment/decrement){
//     code ...
// }

var start = 1
var end = 10
for(var i = start ; i <= end ; i++){
    if(i == 8) break;
    else if (i == 4) continue
    // console.log(i)
}

// var p = prompt()


function sum(n1 , n2 = 30){
    console.log(n2)
    var num1 = n1
    var num2 = n2
    // result = num1 + num2
    var result = num1 + num2
    // console.log(result)
    // return "js"
    return result
}
// console.log(result)
// var r = sum(20 , 50)
// console.log(r)
// var r2 = sum(40)
// console.log(r2) // NaN ==> Not a number


// console.log(getFullName(firstName , lastName))

// function getFullName(first , last){
//     return `${first} ${last}`
// }

// var firstName = prompt('enter your first name')
// var lastName = prompt('enter your last name')

function looping(start , end , breakNum , cont ){
    for(var i = start ; i<= end ; i++){
        console.log(i)
    }
    
}

// looping(10 , 20)
// looping(10)
// alert("please enter all numbers")


// function statment
function checkNum(num){
    return num > 100
}

var x = checkNum(10)

// function expression 
var x = function(num){
    return num > 100
}
console.log(x())

// arrow function 
var getResult = (num)=> num > 100

console.log(getResult())


// var firstName = "Nouran"
// var lastName = "Fayez"
// var age = 31
// var address = "Nasr city"


var userInfo  = ["Nouran" , "Fayez" , 31  , "Nasr city"]


console.log(userInfo[2])
userInfo[4] = true

console.log(userInfo.length)

userInfo[userInfo.length] = "Maadi"


userInfo.push("fdcgvg")
userInfo.unshift(234 , "dfghj" , true)

userInfo.pop()
userInfo.shift()

// splice(index , deletedCount , Item/s)
userInfo.splice(5 , 1) // remove item
userInfo.splice(2 , 0 , "Ahmed" , false )

userInfo.splice(3 , 1 , "Javascript")


console.log(userInfo)

console.log(userInfo.includes("dfghjkjbhvh"))