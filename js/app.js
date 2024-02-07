const navigatorButtons = document.querySelectorAll(".navigator button");

navigatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // remove active class from all buttons
    navigatorButtons.forEach((button) => {
      button.classList.remove("active");
    });

    // add active class to the clicked button
    button.classList.add("active");

    // get button's text
    const buttonText = button.textContent;

    // get left and right divs with id #leftContent and #rightContent
    const leftContent = document.getElementById("left" + buttonText);
    const rightContent = document.getElementById("right" + buttonText);

    // remove active class from all divs
    const allContents = document.querySelectorAll(".content");
    allContents.forEach((content) => {
      content.classList.remove("active");
    });

    // make active
    leftContent.classList.add("active");
    rightContent.classList.add("active");
  });
});

const tabBtns = document.querySelectorAll(".tab-btn");

tabBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // remove active class from all buttons
    tabBtns.forEach((btn) => {
      btn.classList.remove("active");
    });

    // add active class to the clicked button
    btn.classList.add("active");

    // get button's text
    const btnText = btn.textContent;

    const title = document.getElementById("title");
    title.textContent = btnText;
  });
});

const items = document.querySelectorAll(".item");

const removeActive = () => {
  items.forEach((item) => {
    item.classList.remove("active");
  });
};

const item1 = document.getElementById("item1");
const item2 = document.getElementById("item2");
const item3 = document.getElementById("item3");
const item4 = document.getElementById("item4");
const item5 = document.getElementById("item5");
const circle = document.getElementById("circle");

item1.addEventListener("click", () => {
  circle.style.left = "0";
  removeActive();
  item1.classList.add("active");
});

item2.addEventListener("click", () => {
  circle.style.left = "25%";
  circle.style.transform = "translateX(-25%) translateY(-50%)";
  removeActive();
  item2.classList.add("active");
});

item3.addEventListener("click", () => {
  circle.style.left = "50%";
  circle.style.transform = "translateX(-50%) translateY(-50%)";
  removeActive();
  item3.classList.add("active");
});

item4.addEventListener("click", () => {
  circle.style.left = "75%";
  circle.style.transform = "translateX(-75%) translateY(-50%)";
  removeActive();
  item4.classList.add("active");
});

item5.addEventListener("click", () => {
  circle.style.left = "100%";
  circle.style.transform = "translateX(-100%) translateY(-50%)";
  removeActive();
  item5.classList.add("active");
});


const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
});


const pillsBnb = document.getElementById("pills-bnb");
const pillsUsdt = document.getElementById("pills-usdt");

const BNB = document.getElementById("BNB");
const BNBUSDT = document.getElementById("BNBUSDT");

pillsBnb.addEventListener("click", () => {
  BNB.classList.add("active");
  BNBUSDT.classList.remove("active");
})

pillsUsdt.addEventListener("click", () => {
  BNB.classList.remove("active");
  BNBUSDT.classList.add("active");
})