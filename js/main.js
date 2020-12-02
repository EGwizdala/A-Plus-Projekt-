// HAMBURGER & MENU

const burger = document.querySelector(".burger");
const hamburger = document.querySelector(".hamburger");
const menuList = document.querySelector(".menu");


const menuPopUp = (blur, display, color, opacity) => {
   document.querySelectorAll("section").forEach(item => item.style.filter = blur);
   document.querySelector("header").style.filter = blur;
   menuList.style.display = display;
   burger.style.backgroundColor = color;
   burger.style.opacity = opacity;
}

const menu = () => {
   if (hamburger.className === "hamburger hamburger--spring") {
      hamburger.classList.add("is-active");
      menuPopUp("blur(3px)", "block", "whitesmoke", 0.7);}

  
    else {
      hamburger.className = "hamburger hamburger--spring";
      menuPopUp("none", "none", "inherit", "null");
   }

  
}

burger.addEventListener("click", menu)



// SECTIONS POSITION
const header = document.querySelector(".header");
const main = document.querySelector(".main");
const stage = document.querySelector(".stage");
const projects = document.querySelector(".projects");
const studio = document.querySelector(".studio");
const opinions = document.querySelector(".opinions");
const address = document.querySelector(".location");
const contact = document.querySelector(".contact");

const menuListItems = [...document.querySelectorAll(".menu>a")];

const sectonLi = [header, main, stage, projects, studio, opinions, address, contact]

let topPosition = [];

function getPosition(element) {
   element.offsetTop
};

sectonLi.forEach((section) => {
   topPosition.push(getPosition(section))
})


const movetopPosition = () => {
   
   for (let i = 0; i < menuListItems.length; i++) {
      let flag = false;
      if ( flag===false) {
         menuListItems[i].addEventListener("click", (event) => {
            document.documentElement.scrollTop = topPosition[i]-80 ;
            flag = true;
         })
      }
      else {
       
         document.documentElement.scrollTop = document.documentElement.scrollTop
       
      }
   }
}
movetopPosition()


function checkScrollPosision(section, item, classEl) {
    
   const topPosScroll = [];
   topPosScroll.length = 0

   section.forEach((section) => {
      topPosScroll.push(Math.floor(section.getBoundingClientRect().top));
   })

   let flag = false;
   
   for (i = 0; i < topPosScroll.length; i++) {
      if (flag === false && topPosScroll[i] >= -5) {
       item[i].classList.add(classEl);
         flag = true;
      } else {
       item[i].classList.remove(classEl);
      }
   }
}

// ARROW

const arrowHDown = document.querySelector(".arrowH i ")


function onArrow(e) {
   e.target.style.animation = "arrowDown 3s infinite";
   
}

function offArrow(e) {
   e.target.style.animation = "arrowDown 0s infinite";
   
}
arrowHDown.addEventListener("mouseover",onArrow);
arrowHDown.addEventListener("mouseout",offArrow);

 const intro = document.querySelector(".intro")


 //UP ARROW

 const upArrow = document.querySelector(".upArrow");
 let upArrowOffset = upArrow.offsetTop;
 const mainOffset = main.offsetTop;

 

 function addUpArrow() {
 
   if (window.pageYOffset + window.innerHeight>= mainOffset) {
      addClass (upArrow, "sticky")
    }

    else {
       removeClass(upArrow, "sticky")
    }
 }



//IMG FADE 

const bckgImgs = [document.querySelector(".background.arch"), document.querySelector(".background.landscape"), document.querySelector(".background.energy")]

function fadeEffect(imgs, classEl) {
  
   const topPos = [];
   const bottomPos = [];
   
   let scrollTop = window.pageYOffset;
 
   topPos.length = 0;
   bottomPos.length = 0;

   imgs.forEach((img) => {
      topPos.push(Math.floor(img.offsetTop));
      bottomPos.push(Math.floor(img.offsetTop));
   })

   // console.log(topPos, bottomPos)
  
   // console.log(window.innerHeight+ scrollTop)
   // console.log( scrollTop)
   // console.log(window.innerHeight)
   for (i = 0; i < topPos.length; i++) {        
      if (topPos[i] +(window.innerHeight*0.4) < window.innerHeight+ scrollTop && topPos[i]> scrollTop) {
         imgs[i].classList.remove(classEl);
         
      }
      else {
       imgs[i].classList.add(classEl);
      }
   }
}

window.onscroll = function () {
   fadeEffect(bckgImgs,"fade");
   checkScrollPosision(sectonLi, menuListItems, "actualPosition");
   addUpArrow()
}


window.onresize = function() {
   if ( window.innerWidth > 1100 ) {
      console.log(window.innerWidth)
    menuList.style.display = "flex";
   }
   else {
      menuList.style.display = "none"
   }


   
}

// ELEMENTS SLIDE





// ARROW ROTATE & LIST DROPDOWN

const arrowDown = [...document.querySelectorAll(".arrow")];

function stageDropDown (element) {
   let srcEl= element.target;
   let content = element.target.parentNode.querySelector(".content");
   let underline = element.target.parentNode.querySelector(".underline");
     
  if ( srcEl.className === "icon-down-open-big arrow arrowRotateUP"){
      removeClass(srcEl, "arrowRotateUP" );
      removeClass(content, "showContent");
      removeClass(underline, "showContent" )
   }

   else if (srcEl.className === "icon-down-open-big arrow" ) {
      addClass(srcEl, "arrowRotateUP" );
      addClass(content, "showContent");
      addClass(underline, "showContent");
   }
   
}

arrowDown.forEach(arrow => arrow.addEventListener("click",  stageDropDown))


// SUBMENU
const arrowMenu = document.querySelector(".arrowMenu");
const submenu = document.querySelector(".submenu");



function showSubmenu () {
   
   
   if ( arrowMenu.className === "icon-down-open-big arrowMenu arrowRotateUP"){
      removeClass(arrowMenu, "arrowRotateUP" );
      removeClass(submenu, "showContent");
      submenu.style.display = "";
      submenu.style.order = ""
     
      
   }

   else if (arrowMenu.className === "icon-down-open-big arrowMenu" ) {
      addClass(arrowMenu, "arrowRotateUP" );
      addClass(submenu, "showContent");
      if (window.innerWidth > 1100) {
         submenu.style.display = "flex";
         submenu.style.order = "8";
      }
     
     
   }

}

//nav2 

const showMenu = () => {
   if (submenu.style.display === "none")
  { submenu.style.display = "flex";
   submenu.style.order = "8";}
   else {
      submenu.style.display === "none"
   }
}


arrowMenu.addEventListener("click", showSubmenu)

// if (window.innerWidth > 1100) {
//    console.log(menuListItems.length)
//    arrowMenu.addEventListener ("click", showMenu)
  
   

// }







// SLIDER

const slideList = [
   {
   img:"img/slides/Koleczkowo1.jpg",
   text: "Dom w Koleczkowie"
},
{
   img:"img/slides/MalkowoFront.jpg",
   text: "Dom w Małkowie"
},
{
   img:"img/slides/Wiczlino.jpg",
   text: "Dom w Wiczlinie"
},
{
   img:"img/slides/StaraKiszewaFront.jpg",
   text: "Urząd Gminy w Starej Kiszewie"
}
]


const arrowL = document.querySelector(".arrowL");
const arrowR = document.querySelector(".arrowR");
const image = document.querySelector(".sliderImg");
const text = document.querySelector(".textImg");
const dots = [...document.querySelectorAll(".dots span")];

const time = 4000;
let active = 0;


const changeDot = () => {
   const activeDot = dots.findIndex(dot => dot.classList.contains("active"));
   dots[activeDot].classList.remove('active');
   dots[active].classList.add("active");
}



const changeSlideUp = () =>{
   if (image.className === "sliderImg fadeElement") {
      removeClass(image, "fadeElement");

   }
   else {
      active++;
      if(active === slideList.length) {
          active = 0;
      }
  
      image.src = slideList[active].img;
      text.textContent = slideList[active].text;
      changeDot();

      addClass (image, "fadeElement");
   }
   

}

const changeSlideDown = () =>{
   if (image.className === "sliderImg fadeElement") {
      removeClass(image, "fadeElement");

   }

   else {
      active--;
      if(active < 0) {
         active = slideList.length-1;
      }
      image.src = slideList[active].img;
      text.textContent = slideList[active].text;
      changeDot();

      addClass (image, "fadeElement");
   }
  

}

let sliderEffect = setInterval(changeSlideUp, time)

const arrowChangeSlideDown = () => {
   clearInterval(sliderEffect);
   changeSlideDown ();
   sliderEffect = setInterval(changeSlideUp, time);
}

const arrowChangeSlideUp = () => {
   clearInterval(sliderEffect);
   changeSlideUp ();
   sliderEffect = setInterval(changeSlideUp, time);
}

arrowL.addEventListener('click', arrowChangeSlideDown);
arrowR.addEventListener('click', arrowChangeSlideUp);


// SLIDER OPINIONS


const opinionList = [
   {
   project:"Dom w Małkowie",
   content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad atque aliquid officiis natus nostrum reprehenderit ab quis eos ullam praesentium nobis eius delectus unde, impedit libero a nesciunt facere! Eius!",
   person: "Pani Katarzyna"
},
{
   project:"Dom w Wiczlinie",
   content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad atque aliquid officiis natus nostrum reprehenderit ab quis eos ullam praesentium nobis eius delectus unde, impedit libero a nesciunt facere! Eius!",
   person: "Pan Stefan"
},
{
   project:"Dom w Rębiechowie",
   content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad atque aliquid officiis natus nostrum reprehenderit ab quis eos ullam praesentium nobis eius delectus unde, impedit libero a nesciunt facere! Eius!",
   person: "Pani Zofia"
},
{
   project:"Dom w Borowie",
   content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad atque aliquid officiis natus nostrum reprehenderit ab quis eos ullam praesentium nobis eius delectus unde, impedit libero a nesciunt facere! Eius!",
   person: "Pan Antoni"
}
]

const project = document.querySelector(".containerOpinion h3");
const content = document.querySelector(".containerOpinion article");
const person = document.querySelector(".containerOpinion p");


let number = 0;
const changeOpinion = () =>{
      if (content.className === "fadeElement") {
      removeClass(content, "fadeElement");
   }
   else {
      number++;
      if(number === opinionList.length) {
          number = 0;
      }
      project.textContent = opinionList[number].project;
   
      content.textContent = opinionList[number].content;
      person.textContent = opinionList[number].person;
   
     
      
      addClass (content, "fadeElement");
     
   }
  
}

setInterval(changeOpinion, time);

// FORM

const name = document.querySelector("#nameSurname");
const email = document.querySelector("#email");
const subject = document.querySelector("#subject");
const submitBtn = document.querySelector("form .btn");
const alert = document.querySelector(".alert");

const emialiValid = (email) => {
   return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}


function getValues() {
  return {
     name: name.value,
     email: email.value,
     subject:  subject.value,
   }
 }


function checkValidity () {
   if (name.value ==="" || emialiValid(email.value) === false|| email.value ===""  || subject.value === "") {
      alertTextAdd()
       }
   else {
      alertTextRemove()
      
      getValues();
      modalActive();
   }
}

function alertTextAdd() {
   alert.innerText = "Uzupełnij brakujące pola"
}

function alertTextRemove() {
   alert.innerText = ""
}

function alertUnvalid() {
  if (name.value === "") {
      addClass (name, "invalid");
   }
   else {
      removeClass (name, "invalid");
    }

   if (subject.value === "") {
      addClass (subject, "invalid");

   }
   else {
      removeClass (subject, "invalid");
    }

   if (email.value === "" || emialiValid(email.value) === false) {
      addClass (email, "invalid")
   }
   else {
      removeClass (email, "invalid");
    }
}

function submit() {
   alertUnvalid();
  
   checkValidity () 


}

submitBtn.addEventListener("click", submit);

// MODAL

const modal = document.querySelector(".modal");

const closeBtn = document.getElementsByClassName("close")[0];



function modalActive() {
   modal.style.display = "block";

}

closeBtn.onclick = function() {
   modal.style.display = "none";
 };

 window.onclick = function(event) {
   if (event.target == modal) {
     modal.style.display = "none";
   }
 } 


