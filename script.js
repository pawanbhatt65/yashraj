"use strict";

// document.addEventListener("DOMContentLoaded", function () {
//   const itemsElm = document.querySelectorAll(".item");
//   const hiddenBoxElm = document.querySelectorAll(".hidden-box");
//   const radiosElm = document.querySelectorAll(".input input[type='radio']");

//   // when we click any items
//   itemsElm.forEach((item) => {
//     item.addEventListener("click", function (event) {
//       event.stopPropagation()
//       // console.log(event.target)
//       // removed all the items active class
//       itemsElm.forEach((elm) => {
//         elm.classList.remove("active-radio");
//         // console.log("class removed")
//       });
//       // active class removed also child box
//       hiddenBoxElm.forEach((elm) => {
//         elm.classList.remove("active");
//       });
//       // remove all radio button check flag
//       radiosElm.forEach((elm) => {
//         elm.checked = false;
//       });

//       // add active class in clicked item
//       item.classList.add("active-radio");
//       // console.log("class added")
//       item.querySelector(".hidden-box").classList.add("active");
//       item.querySelector(".input input[type='radio']").checked = true;
//     });
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  const containerElm = document.querySelector(".items"); // Parent container
  const hiddenBoxElm = document.querySelectorAll(".hidden-box");

  containerElm.addEventListener("click", function (event) {
    if (event.target.closest(".item")) {
      const item = event.target.closest(".item");
      const radiosElm = item.querySelector(".input input[type='radio']");

      // Remove active classes from all items
      containerElm.querySelectorAll(".item").forEach((elm) => {
        elm.classList.remove("active-radio");
      });

      // Remove active class from hidden boxes
      hiddenBoxElm.forEach((elm) => {
        elm.classList.remove("active");
      });

      // Add active class to clicked item
      item.classList.add("active-radio");
      item.querySelector(".hidden-box").classList.add("active");

      // Mark the radio button as checked
      radiosElm.checked = true;
    }
  });
});

