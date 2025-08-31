
// console.log(courses[0])
// console.log(courses[1])
// console.log(courses[2])
// console.log(courses[3])
// console.log(courses[4])

var courses = ["Html" , "css" ,
     "bootstrap" , "Js" , "ts" , "Angular"]
for(var i = 0 ; i < courses.length ; i++){
    // console.log(courses[i])
}

courses.forEach((element , index , arr)=>{
    // console.log(element)
})

courses.forEach((item , i , array)=>{
    // console.log(i)
    // console.log(array)
    // console.log('js')
    if(item == "Js") console.log(i)
})


var nums = [10 , 5, 20 , 100]
nums.forEach((ele , i )=>{
if(ele > 20) console.log(`${ele} - ${i}`)
})

var element = nums.find((ele)=> ele > 20)
var element = nums.find((ele)=> ele > 200)
var index = nums.findIndex((ele)=> ele > 20)
var index = nums.findIndex((ele)=> ele > 200)
console.log(element)
console.log(index)


var nums = [3, 10 ,50 ,100 , 150] // 50 - 200

// var p = prompt('enter number')

// var n = nums.find(ele => ele > p )
// if(n == undefined) nums.push(Number(p))

    // console.log(nums)

var newArray = nums.filter(ele => ele > 50)
var newArray = nums.filter(ele => ele > 500)

// console.log(newArray)

// var y = (num)=> num > 20

// map()
// concate()
// toString() ==> 1, 2,3,4,5
// join()
// indexof()

// var a = []

// function addElement(){

//     var p = prompt()
//     a.push(p)
// }

// addElement()
// addElement()
// addElement()
// addElement()
// addElement()

// console.log(a)



// var userInfo = ["Ahmed" , "Mohamed" , true , 20] 

var firstName = "Mai"
var lastName = " ahmed"
var userObj = {
    firstName : "Ahmed" , 
    lastName : "Mohamed" ,
    isGraduated : true ,
    age : 20 ,
    fullName : function(){
        return `${userObj.firstName} ${this.lastName}`
    },
    addresses : function(){
        return {
            homeAddress : 'Nasr city',
            OfficeAddress : 'October'
        }
    }
}

console.log(userObj.age)
console.log(userObj.fullName())
console.log(userObj.addresses().OfficeAddress)

var user1 ={
    name : 'Nouran',
    age : 31
}
var user2 = {
    name : 'Ahmed',
    age : 10
}
var user3 = {
    name : 'Marwa',
    age : 20
}

// var users = {
//     user1 , user2
// }

var users = [
    {
    name : 'Nouran',
    age : 31
} ,
{
    name : 'Ahmed',
    age : 10
} ,
{
    name : 'Marwa',
    age : 20
}

]

console.log(users)


// function numberOfUsers() numberOfUsers 
// function addUser() name , id , balance
// function editUserBalanceById() id , newBalance
// function deleteUserById() id 
