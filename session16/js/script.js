// var str = "        lorem lorem         "

// var num = 20
// console.log(isNaN(str))
// console.log(isNaN(num))


// DOM ==> document object model

// var h1Elements = document.getElementsByTagName("h1")
// // console.log(h1Elements)

// for(var i = 0 ;  i < h1Elements.length ; i++){
//     // console.log(h1Elements[i])
//     h1Elements[i].innerText = "Javascript"
// }

// var tagsByClass = document.getElementsByClassName('custom-tag')
// console.log(tagsByClass)



// var h3Element = document.getElementById('h3_id')
// h3Element.innerText = "Web design"
// console.log(h3Element)


// var tagByCssSelector = document.querySelector('.card .custom-tag')
// tagByCssSelector.innerText = "Bootstrap"
// console.log(tagByCssSelector)

// var tagsByCssSelector = document.querySelectorAll('.card .custom-tag')
// console.log(tagsByCssSelector)


// var h1 = document.querySelector('#h1_element')

// h1.style.color = "red"
// h1.style.backgroundColor = "lightgray"
// h1.style.padding = "10px"

// h1.className = "text-danger"

// h1.classList.add("text-danger" , 'p-3' , 'w-50' , 'mx-auto')
// h1.classList.remove("border-primary")
// h1.classList.toggle("border-primary")


var btns = document.getElementsByTagName('button')
console.log(btns)

function handleImgChange() {
    var img = 
    document.getElementById('img_id')
    console.log(img.src)
    img.src = 'images/2.jpg'
}
