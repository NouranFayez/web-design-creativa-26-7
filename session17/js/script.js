
// var ==> global / function scope
// let , const ==> block scope
// window ==> BOM = Browser object model


// console.log(firstName)
// var firstName = "ahmed"
// var firstName = "Marwa"
// firstName = "Zein"


// console.log(lastName)
// let lastName = "Mohamed"
// lastName = "Tamer"
// let lastName = "Zein"

// const x = 30
// const x = "Marwa"
// x = "30"

// console.log(lastName)
// console.log(x)



// function getName(){
//     if(true){
//         var fName = "Marwa"
//         let lName = "Mohamed"
//     }
//     console.log(fName)
//     console.log(lName)
// }

// getName()

// document.querySelector('.owl-carousel')



$(document).ready(function(){
  $(".owl-carousel").owlCarousel(
    {
        items : 5,
        nav : true,
        navText : ['<i class="fa-solid fa-chevron-left bg-light text-danger"></i>' , '<i class="fa-solid fa-chevron-right"></i>']
    }
  );
});