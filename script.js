// /////////////////////////////////////////
// //Smooth-scroll'as
// document.querySelectorAll('a[href^="#"]').forEach($anchor => {
//   $anchor.addEventListener('click', function (e){
//     e.preventDefault();
//     document.querySelector(this.getAttribute('href')).scrollIntoView({
//       behaviour:'smooth',
//       block: 'start'
//     })
//   })
// })

///////////////////////////////
//Responisve navigacija
function myFunction() {
  let x = document.getElementById("myTopnav");
  if (x.className === "menu") {
    x.className += " responsive";
  } else {
    x.className = "menu";
  }
}


// ////////////////////////////////////
// //Swiper Features skiltyje

let mySSwiper = new Swiper ('.swiper-container-interactive', {
  direction: 'horizontal',
  loop: false,
  slidesPerView: 1,
  })

let tabs = document.querySelectorAll(".tab");
//ciklas kuriame zymimi mygtuku ir slide'u active'ai
  for (let i = 0; i < tabs.length; i++) {

    // kas vyksta paspaudus
    tabs[i].addEventListener("click", function() {

      // Nuimami visi active'ai
      for (let j = 0; j < tabs.length; j++){
        tabs[j].classList.remove("active");
      }

      // uzdedamas active and pirmo mygtuko
      this.classList.add("active");

      // keiciami slaidai naudojantis atributais "data-slide" kurie yra html'e ant mygtuku
      let slideNumber = this.getAttribute("data-slide");
      mySSwiper.slideTo(slideNumber-1, 500);
    })
  }

  //cia kai keiciasi slide'as keiciasi ir mygtukas, vice versa
  mySSwiper.on("slideChange", function () {
    //susiejamas mygtuko ir slide'o indexai
    let slideIndex = mySSwiper.activeIndex;
    //nuimami active'ai nuo mygtuku kurie nera paspausti
    for (let j = 0; j < tabs.length; j++){
     tabs[j].classList.remove("active");
    }
    //uzdedamas active'as ant mygtuko kuris paspaustas
    tabs[slideIndex].classList.add("active");
   });


   

 //////////////////////////////////////////
//Swiper reviews skiltyje
let swiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    725: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    // when window width is <= 480px
    1000: {
      slidesPerView: 2,
      spaceBetween: 20,
    }
  }
});

