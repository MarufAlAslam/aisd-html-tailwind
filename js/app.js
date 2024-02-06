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
    const leftContent = document.getElementById("left"+buttonText);
    const rightContent = document.getElementById("right"+buttonText);

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