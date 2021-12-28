"use strict"


let menuTrigger = document.getElementById("mobile-menu-trigger");
let mobileMenu = document.querySelector("header nav");

menuTrigger.addEventListener('click', function() {
  this.classList.toggle("active");
  mobileMenu.classList.toggle("active");
});


const tabNavigationElements = document.querySelectorAll(".about .tab-navigation li");
const tabContentElements = document.querySelectorAll(" .tab-content"); 
function removeActiveClassesFromElements(elements) {
    for (let element of elements) {
        element.classList.remove("active");
    }
}
for (let tabElement of tabNavigationElements) {
    tabElement.addEventListener("click", function() {
        const target = this.dataset.target; 
        removeActiveClassesFromElements(tabNavigationElements);
        this.classList.add("active");
        removeActiveClassesFromElements(tabContentElements);
        document.querySelector('.tab-content[data-tab="'+target+'"]').classList.add('active');
    });
}



const swiper = new Swiper('.reviews-swiper', {

    
    speed: 900,
    slidesPerView: 1,
    spaceBetween: 50,
    slidesPerGroup: 1,
    
   

    autoHeight: true,
    loop: true,
    autoplay: {
        delay: 3000, 
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    breakpoints: {
        800: {
          slidesPerView: 3,
          spaceBetween: 120
        }
      }
});




const url = `https://api.openweathermap.org/data/2.5/weather?q=vilnius&units=metric&appid=af1409639ececf4c3bd84a31fc54f5ae`;
const weatherElement = document.getElementById("weather-in-celsius");
function getCurrentWeatherInCelsius() {
    const http = new XMLHttpRequest();
    http.open("GET", url);
    http.addEventListener('load', function() {
        const response = JSON.parse(http.response);
        const temperature = response.main.temp;

        if (temperature > 0) {
            weatherElement.innerText = "+" + temperature.toFixed(0);
        } else {
            weatherElement.innerText = temperature.toFixed(0);
        }
    })
    http.send();
}
window.addEventListener('load', getCurrentWeatherInCelsius)




const name1 = document.getElementById("name1");
const lastname1 = document.getElementById("lastname1");
const number1 = document.getElementById("number1");
const form1 = document.getElementById("form1");
const errorElement = document.getElementById("error");

form1.addEventListener("submit", (e) =>{
    let messages = []
    if(name1.value ==="" || name1.value == null){

        messages.push('Name is mandatory')
        
    }

    if(lastname1.value ==="" || lastname1.value == null){

        messages.push('Last Name is mandatory')
        
    }
    if(number1.value ==="" || number1.value == null){

        messages.push('Number is mandatory')
        
    }

    if(messages.length >0){
        e.preventDefault()
        errorElement.innerText = ('Please fill out all fields')
    }
})


const name2 = document.getElementById("name2");
const lastname2 = document.getElementById("lastname2");
const number2 = document.getElementById("number2");
const form2 = document.getElementById("form2");
const errorElement2 = document.getElementById("error2");

form2.addEventListener("submit", (e) =>{
    let messages2 = []
    if(name2.value ==="" || name2.value == null){

        messages2.push('Name is mandatory')
        
    }

    if(lastname2.value ==="" || lastname2.value == null){

        messages2.push('Last Name is mandatory')
        
    }
    if(number2.value ==="" || number2.value == null){

        messages2.push('Number is mandatory')
        
    }

    if(messages2.length >0){
        e.preventDefault()
        errorElement2.innerText = ('Please fill out all fields')
    }
})

