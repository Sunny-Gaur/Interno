function handlenav(){
    console.log("done");
    let smnav=document.getElementById("sm-nav");
    let bars=document.getElementById("bars");
    let cross=document.getElementById("cross");
    cross.classList.remove("hidden");
    bars.classList.add("hidden");
    smnav.classList.toggle("show");
}

function handlenav2(){
    bars.classList.remove("hidden");
    cross.classList.add("hidden");

    let smnav=document.getElementById("sm-nav");
    smnav.classList.toggle("show");

}

let col1="#CEC3BC";
let navdata=document.getElementById("navdata");

let allimg=document.querySelectorAll("#one");
let mainimg=document.getElementById("do");
allimg.forEach((e)=>{
    e.addEventListener("click",()=>{
    
    let backurl=e.style.backgroundImage;
  
       mainimg.style.backgroundImage=backurl;

    })
})

// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     direction: 'vertical',
//     loop: true,
  
//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//     },
  
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
  
//     // And if we need scrollbar
//     scrollbar: {
//       el: '.swiper-scrollbar',
//     },
//   });


  let smnav=document.querySelector("#sm-nav");
  smnav.addEventListener("click",(e)=>{
    smnav.classList.toggle("show");
    cross.classList.add("hidden");
    bars.classList.remove("hidden");



  })


  // current location 

  