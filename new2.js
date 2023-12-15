
var menu = document.querySelector("#menu");
var header   = document.querySelector(".header")

menu.addEventListener("click", ()=>{
    header.classList.add("open")
});

var clos = document.querySelector("#close-menu")

clos.addEventListener("click", ()=>{
    header.classList.remove("open")
});
//------------------------------------------

var body = document.querySelector("body");
var search = document.querySelector("#search");
var CloseSearch = document.querySelector("#close-search");

search.addEventListener("click", ()=>{
    body.classList.add("open-search")
});

CloseSearch.addEventListener("click", ()=>{
    body.classList.remove("open-search")
});
//------------------------------------------

window.onscroll = ()=>{
    header.classList.remove("here");

    if(window.scrollY > 400 ){
        header.classList.add("here")
    }
    else{
        header.classList.remove("here")
    }
};

window.onload = ()=>{
   
    if(window.scrollY > 400 ){
        header.classList.add("here")
    }
    else{
        header.classList.remove("here")
    }
};
//------------------------------------------

var btn1 = document.querySelector(".About-btn1");
var btn2 = document.querySelector(".About-btn2");
var btn3 = document.querySelector(".About-btn3");
var btn4 = document.querySelector(".About-btn4");
var closee1= document.querySelector("#close-ReadMore1")
var closee2= document.querySelector("#close-ReadMore2")
var closee3= document.querySelector("#close-ReadMore3")
var closee4= document.querySelector("#close-ReadMore4")

var box = document.querySelector(".box-container");


btn1.addEventListener("click", ()=>{ box.classList.add("ReadMore1") })
btn2.addEventListener("click", ()=>{ box.classList.add("ReadMore2") })
btn3.addEventListener("click", ()=>{ box.classList.add("ReadMore3") })
btn4.addEventListener("click", ()=>{ box.classList.add("ReadMore4") })

closee1.addEventListener("click", ()=>{  box.classList.remove("ReadMore1",)   })
closee2.addEventListener("click", ()=>{  box.classList.remove("ReadMore2",)   })
closee3.addEventListener("click", ()=>{  box.classList.remove("ReadMore3",)   })
closee4.addEventListener("click", ()=>{  box.classList.remove("ReadMore4",)   });


//------------------------------------------

var swiper = new Swiper(".home-slider", {
    loop:true,
    grabCursor:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    pagination: {
        el: ".swiper-pagination",
        clickable:true,
    },
});

//----------------------------------------

var swiper = new Swiper(".products-slider", {
    loop:false,
    spaceBetween: 1,
    navigation: {
    },

    pagination: {
        el: ".swiper-pagination",
        clickable:true,
        dynamicBullets: true,
      },
      breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween:100,
        },  
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween:5,
        },
    },
        
});
//-------------------------------------------

var swiper = new Swiper(".review-slider", {
  
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      clickable:true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            
        },  
        850:{
          slidesPerView: 2,

        },
        1050: {
          slidesPerView: 3,
        },

    }
});
//-----------------------------------

var swiper = new Swiper(".blogs-slider", {
  
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable:true,
  },
  breakpoints: {
      0: {
          slidesPerView: 1,
          
      },  
      840:{
        slidesPerView: 2,

      },
      1050: {
        slidesPerView: 3,
      },

  }
});
//---------------------------------------
var swiper = new Swiper(".clients-slider", {
  loop:true,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable:true,
  },
  breakpoints: {
      0: {
          slidesPerView: 1,
          
      },  
      840:{
        slidesPerView: 3,

      },
      1050: {
        slidesPerView: 4,
      },

  }
});

//      Done 