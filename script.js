// Array.from(document.querySelectorAll
//     (".navigation-button")).forEach((item) => {
//   item.onClick = () => {
//     item.parentElement.parentElement.classList.
//     toggle("change");
//   };
// });

// const color = ['#6495ed', '#7fffd4', '#ffa07a', '#f08080', '#afeeee'];
// let i = 0;
// Array.from(document.querySelectorAll(".nav-link")).forEach((item) => {
// item.getElementsByClassName.cssText = `background-color:${colors[i++]}`
// })

// const container = document.querySelector(".container");

// document.querySelector(".open-navbar-icon").addEventListener("click", () => {
//   container.classList.add("change");
// });

// document.querySelector(".close-navbar-icon").addEventListener("click", () => {
//   container.classList.remove("change");
// });

document.addEventListener("DOMContentLoaded", () => {
  const navbarWrapper = document.querySelector(".navbar-wrapper");
  const openNavbarIcon = document.querySelector(".open-navbar-icon");
  const closeNavbarIcon = document.querySelector(".close-navbar-icon");

  openNavbarIcon.addEventListener("click", () => {
    navbarWrapper.classList.add("change");
  });

  closeNavbarIcon.addEventListener("click", () => {
    navbarWrapper.classList.remove("change");
  });

  // Close navbar when clicking outside of it
  document.addEventListener("click", (event) => {
    const targetElement = event.target;
    if (
      !navbarWrapper.contains(targetElement) &&
      !targetElement.classList.contains("open-navbar-icon")
    ) {
      navbarWrapper.classList.remove("change");
    }
  });
});



let i = 0;

const colors = ["#6495ed", "#7fffd4", "#ffa07a", "#f08080", "#afeeee"];

Array.from(document.querySelectorAll(".nav-link")).forEach((item, index) => {
  item.style.backgroundColor = colors[index % colors.length];
});




Array.from(document.querySelectorAll(".navigation-button")).forEach((item) => {
  item.addEventListener("click", () => {
    item.parentElement.parentElement.classList.toggle("change");
  });
});
