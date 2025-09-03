
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



// $(document).ready(function(){
//   $(".owl-carousel").owlCarousel(
//     {
//         items : 5,
//         nav : true,
//         navText : ['<i class="fa-solid fa-chevron-left bg-light text-danger"></i>' , '<i class="fa-solid fa-chevron-right"></i>']
//     }
//   );
// });


//  <div class="col-3">
//             <div class="card">
//                 <img class="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQykzoZeCE0p7LeuyHnLYCdPP2jju9d5PaMeA&s" alt="">
//                 <div class="card-body">
//                     <h2>Lorem, ipsum dolor.</h2>
//                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex omnis recusandae reiciendis, quae inventore minus necessitatibus adipisci quo fugiat quos veritatis ea? Unde autem eum aliquam, libero officiis nulla fugit!</p>
//                 </div>
//             </div>
//            </div> 


let cardsContainer = document.getElementById('cards-container')
let btn = document.getElementById('add-btn')


let posts = [
    {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
        "userId": 1,
        "id": 3,
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
]
btn.addEventListener("click", () => {

    posts.forEach((item , index )=>{
        console.log(item)
        let div = document.createElement('div')
        let h2 = document.createElement('h4')
        h2.classList.add('text-primary')
        h2.innerText = item.title
        div.classList.add('alert', 'alert-primary')
    
        div.append(h2)
        cardsContainer.append(div)
    
        console.log(div)
    })

})


