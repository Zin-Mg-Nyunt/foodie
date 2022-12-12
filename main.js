import './style.scss';
import Typed from 'typed.js';
import ScrollReveal from 'scrollreveal';
import "waypoints/lib/noframework.waypoints"

new Waypoint({
  element: document.getElementById('home-content'),
  handler: function(direction) {
    let oldNavLink = document.querySelector(".nav-link.active");
    oldNavLink.classList.remove('active');
    let currentNavLink = document.querySelector(`[href="#home"]`);
    currentNavLink.classList.add('active');
  },
  offset: 0 
})

let sections = ['about','services','menus','contact'];
sections.forEach(section=>{
  new Waypoint({
    element: document.getElementById(`${section}`),
    handler: function(direction) {
      let oldNavLink = document.querySelector(".nav-link.active");
      oldNavLink.classList.remove('active');
      let currentNavLink = document.querySelector(`[href="#${section}"]`);
      currentNavLink.classList.add('active');
    },
    offset: 0 
  })
})

let menuLists = [
  {
    id: 1,
    img: "public/img/plate1.png",
    title: "Barbecue Salad",
    description: "Sepcial Delicious Dish",
    price: 22.2
  },
  {
    id: 2,
    img: "public/img/plate2.png",
    title: "Salad with fish",
    description: "Sepcial Delicious Dish",
    price: 30.5
  },
  {
    id: 3,
    img: "public/img/plate3.png",
    title: "Spinach Salad",
    description: "Sepcial Delicious Dish",
    price: 50
  }
]

menuLists.forEach(menuList=>{
  let menuRow=document.getElementById("menuRow");
  let div = document.createElement("div");
  div.classList.add("col-8","col-md-4","col-lg-3");
  div.innerHTML=`
      <div class="card to-down mb-4">
      <img src="${menuList.img}" class="w-75 mx-auto my-4 card-img" alt="">
      <div class="card-body">
        <p class="fw-bold">${menuList.title}</p>
        <p class="small text-black-50">${menuList.description}</p>
        <div class="d-flex justify-content-between align-items-center">
          <p class="mb-0">$ ${menuList.price}</p>
          <button class="btn btn-primary">
            <i class="bi bi-cart-plus"></i>
          </button>
        </div>
      </div>
    </div>
  `;
  menuRow.append(div);
});

let options = {
  strings: ['Food...', 'Drink...'],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
  backDelay: 500
};
new Typed('.element', options);

let toDown = {
  distance: '50px',
  origin: 'top',
  interval: 200,
  duration: 300,
  delay: 200,
};
ScrollReveal().reveal('.to-down', toDown);

let toRight = {
  distance: '50px',
  origin: 'left',
  interval: 200,
  duration: 300,
  delay: 200,
};
ScrollReveal().reveal('.to-right', toRight);

let toLeft = {
  distance: '50px',
  origin: 'right',
  interval: 200,
  duration: 300,
  delay: 200,
};
ScrollReveal().reveal('.to-left', toLeft);