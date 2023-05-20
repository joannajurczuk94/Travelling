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
