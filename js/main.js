const toggle = document.querySelector("#header .toggle-btn");
const collapse = document.querySelectorAll("#header .collapse")

toggle.addEventListener('click',() =>{
    collapse.forEach(col=>col.classList.toggle("collapse-toggle"))
});

 // STICKY NAVIGATION
window.onscroll = function(){scrolled()};
  //get the current value
  let navbar = document.getElementById('header')
  //get navbar position
  let sticky = navbar.offsetTop;
  // sticky function
  function scrolled(){
    if(window.pageYOffset >= sticky){
      navbar.classList.add("sticky");
    }else{
      navbar.classList.remove("sticky");
    };
  };
  

// with mansonry
new Masonry( '#posts .grid', {
    itemSelector:'.grid-item',
    gutter:20
});




// swiper library init
let swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView:5,
    autoplay:{
        delay:3000
    },

    breakpoints:{
        '@0':{
          slidesPerView: 2
        },
        //888px
        '@1.00':{
          slidesPerView: 3
        },
        //1110px
        '@1.25':{
          slidesPerView: 4
        },
        //1330px
        '@1.50':{
          slidesPerView: 5
        },
      }
  });

// footer copyrights current year
const year = document.getElementById('year');

const currentYear = new Date().getFullYear()
const newYear = new Date('01 january{currentYear +1} 00:00:00');

year.innerText = currentYear;








