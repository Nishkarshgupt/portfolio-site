// ============================================================
// creating a cursor
// ============================================================

const cursorDot = document.querySelector("[data-cursor-dot]"); 
const cursorOutline = document.querySelector("[data-cursor-outline]");

window.addEventListener("mousemove", function(e){

  const posX = e.clientX;
  const posY = e.clientY;

  // Small dot follows instantly
  cursorDot.style.left = `${posX}px`;
  cursorDot.style.top = `${posY}px`;
  
  //   cursorOutline.style.left = `${posX}px`;
  //   cursorOutline.style.top = `${posY}px`;
  

  // Outline follows with slight delay
  cursorOutline.animate({
    left: `${posX}px`,
    top: `${posY}px`
  }, {duration: 600, fill: "forwards"});
})






// ============================================================
// creating a Dark moode 
// ============================================================
const toggleButton = document.getElementById("theme-toggle");
const body = document.body;

// ✅ Page load hote hi theme apply ho jaye (No Delay)
if (localStorage.getItem("theme") === "dark") {
    enableDarkMode();
} else {
    disableDarkMode();  // Ye line add ki taaki transition proper ho
}

// ✅ Button Click -> Instant Theme Switch with Smooth Effect
toggleButton.addEventListener("click", () => {
    if (body.classList.contains("dark-mode")) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
});

// ✅ Function to Enable Dark Mode
function enableDarkMode() {
    body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark");
    toggleButton.innerHTML = "☀️ Light Mode";
}

// ✅ Function to Disable Dark Mode
function disableDarkMode() {
    body.classList.remove("dark-mode");
    localStorage.setItem("theme", "light");
    toggleButton.innerHTML = "🌙 Dark Mode";
}







// ============================================================
// creating a portfolio tabbed component
// ============================================================

const mobile_nav = document.querySelector(".mobile-navbar-btn");
const headerElem = document.querySelector(".header");

mobile_nav.addEventListener('click', () => {
  headerElem.classList.toggle("active");
})


// ============================================================
// creating a portfolio tabbed component
// ============================================================

const p_btns = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const p_img_elem = document.querySelectorAll(".img-overlay");

p_btns.addEventListener("click", (e) => {
  const p_btn_clicked = e.target;
  console.log(p_btn_clicked);

  if (!p_btn_clicked.classList.contains("p-btn")) return;

  p_btn.forEach((curElem) => curElem.classList.remove("p-btn-active"));

  p_btn_clicked.classList.add("p-btn-active");

  //to find 
  const btn_num = p_btn_clicked.dataset.btnNum;
  console.log(btn_num);

  const img_active = document.querySelectorAll(`.p-btn--${btn_num}`)

  p_img_elem.forEach((curElem) => curElem.classList.add("p-image-not-active"));

  img_active.forEach((curElem) => curElem.classList.remove("p-image-not-active"));

});


// swiper js code
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

//responsive-testomonial

const myJsmedia = (widthSize) => {
  if(widthSize.matches) {
    new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
    });
  }else{
    new Swiper(".mySwiper", {
      slidesPerView: 2,
      spaceBetween: 30,
    });
  }

};

const widthSize = window.matchMedia("(max-width: 780px)");
//call listner function at run time
myJsmedia(widthSize);
//Attach listner function on stage changes
widthSize.addEventListener("change", myJsmedia);


// scroll to top button

const heroSection = document.querySelector(".section-hero");
const footerElem = document.querySelector(".section-footer")

const scrollElement = document.createElement("div");
scrollElement.classList.add("scrollTop-style");

scrollElement.innerHTML = `<ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>`;

footerElem.after(scrollElement);


const scrollTop = () => {
  heroSection.scrollIntoView({behavior: "smooth"});
};

scrollElement.addEventListener("click", scrollTop);


// animate number counter

const counterNum = document.querySelectorAll(".counter-numbers");

const speed = 200;

counterNum.forEach((curElem) => {
  const updateNumber = () => {
    const targetNumber = parseInt(curElem.dataset.number);
    // console.log(targetNumber);
    const initialNum = parseInt(curElem.innerText);
    // console.log(initialNum); 

    const incrementNumber = Math.trunc(targetNumber / speed);
    // console.log(incrementNumber); 

    if(initialNum < targetNumber){
      curElem.innerText = `${initialNum + incrementNumber}+`;
      setTimeout(updateNumber, 10);
    }
  };

  updateNumber();
});

// lazy loading images

const imgRef = document.querySelector("img[data-src]");

const lazyImg = (entries) => {
  const [entry] = entries;
  console.log(entry);
  if(!entry.isIntersecting) return;
  entry.target.src = imgRef.dataset.src;
};

const imgObserver = new IntersectionObserver(lazyImg, {
  root: null,
  threshold: 0,
});

imgObserver.observe(imgRef);