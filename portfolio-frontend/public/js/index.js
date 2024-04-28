// window.addEventListener("load", () => {
//   var loader = document.querySelector(".loader");

//   loader.classList.add("loader-hidden");

//   loader.addEventListener("transitionend", () => {
//     loader.style.display = "none";
   
//   });
// });

// const scrollElements = document.querySelectorAll(".js-scroll");

// const elementInView = (el, dividend = 1) => {
//   const elementTop = el.getBoundingClientRect().top;

//   return (
//     elementTop <=
//     (window.innerHeight || document.documentElement.clientHeight) / dividend
//   );
// };

// const elementOutofView = (el) => {
//   const elementTop = el.getBoundingClientRect().top;

//   return (
//     elementTop > (window.innerHeight || document.documentElement.clientHeight)
//   );
// };

// const displayScrollElement = (element) => {
//   element.classList.add("scrolled");
// };

// const hideScrollElement = (element) => {
//   element.classList.remove("scrolled");
// };

// const handleScrollAnimation = () => {
//   scrollElements.forEach((el) => {
//     if (elementInView(el, 0.9)) {
//       displayScrollElement(el);
//     } else if (elementOutofView(el)) {
//       hideScrollElement(el);
//     }
//   });
// };

// window.addEventListener("scroll", () => {
//   handleScrollAnimation();
// });