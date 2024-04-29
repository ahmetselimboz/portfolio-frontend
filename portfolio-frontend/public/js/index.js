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

// const ratings = document.querySelectorAll(".rating");

// // Iterate over all rating items
// ratings.forEach((rating) => {
//   // Get content and get score as an int
//   const ratingContent = rating.innerHTML;

// //   var yuzdeIndex = ratingHTML.indexOf('%'); // "%" karakterinin indeksini bul
// // var ratingContent = ratingHTML.slice(yuzdeIndex + 1);


//   const ratingScore = parseInt(ratingContent, 10);

//   // Define if the score is good, meh or bad according to its value
//   const scoreClass =
//     ratingScore < 40 ? "bad" : ratingScore < 76 ? "meh" : "good";

//   // Add score class to the rating
//   rating.classList.add(scoreClass);

//   // After adding the class, get its color
//   const ratingColor = window.getComputedStyle(rating).backgroundColor;

//   // Define the background gradient according to the score and color
//   const gradient = `background: conic-gradient(${ratingColor} ${ratingScore}%, transparent 0 100%)`;

//   // Set the gradient as the rating background
//   rating.setAttribute("style", gradient);

//   // Wrap the content in a tag to show it above the pseudo element that masks the bar
//   rating.innerHTML = `<span>${ratingScore} ${
//     ratingContent.indexOf("%") >= 0 ? "<small>%</small>" : ""
//   }</span>`;
// });
