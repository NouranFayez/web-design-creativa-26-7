window.addEventListener('scroll' , (e)=>{
    console.log('scrolling')
    console.log(e.target.documentElement.scrollTop)
    if(e.target.documentElement.scrollTop > 300){
        let topBtn = document.getElementById('topBtn')
        topBtn.classList.remove('d-none')
    }
    else{
         topBtn.classList.add('d-none')
    }
})


let myForm = document.getElementById('myForm')
myForm.addEventListener('input' , (e)=>{
    // console.log(e)
    if(e.target.id == "userName") nameValidation(e.target)
        else if(e.target.id == "userEmail") emailValidation(e.target)

})


let nameValidation = (elemenet)=>{
    let inputValue = elemenet.value.trim()
    console.log(inputValue.length)
   if(inputValue.length < 3) handleError(elemenet , "enter at least 3 characters")
    else handleError(elemenet)
}



let emailValidation=(input)=>{
    // username@domain.subdomain
    // let regExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   console.log(emailRegex.test(input.value));
   (!emailRegex.test(input.value)) 
   ?  handleError(input , 'please eneter a valid email')
    : handleError(input)
}

let handleError = (input , msg = "")=>{
input.nextElementSibling.innerText = msg
}


let setTime = setTimeout(()=>{
    console.log('js')
} , 2000)


let h1 = document.getElementById('counter')
let i = 1


let setInter = setInterval(()=>{
    h1.innerText = i
    console.log('javascript')
    if(i == 100) clearInterval(setInter)
    i++
} , 100)

console.log(setTime)
console.log(setInter)


let d = new Date()
console.log(d)
console.log(d.getFullYear())
console.log(d.getDate())
console.log(d.getMonth())
console.log(d.getHours())
console.log(d.getMinutes())
console.log(d.getSeconds())

console.log(new Date("1-1-2000"))

localStorage.setItem("firstName" , "Nouran")

let users = [
    {name : "Marwa" , age: 20},
    {name : "zein" , age: 20},
    {name : "nouran" , age: 20},
]

console.log(JSON.stringify(users))
localStorage.setItem("users" , JSON.stringify(users))

let usersLocalStorage = JSON.parse(localStorage.getItem('users'))

usersLocalStorage.push({name:"fgh" , age:6})

console.log(localStorage.getItem('lName'))

