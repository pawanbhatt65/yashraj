"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const itemsElm = document.querySelectorAll(".item");
  const hiddenBoxElm = document.querySelectorAll(".hidden-box");
  const radiosElm = document.querySelectorAll(".input input[type='radio']");

  // when we click any item
  itemsElm.forEach((item) => {
    item.addEventListener("click", function (event) {
      // console.log(event.target)
      // removed all the items active class
      itemsElm.forEach((elm) => {
        elm.classList.remove("active-radio");
        // console.log("class removed")
      });
      // active class removed also child box
      hiddenBoxElm.forEach((elm) => {
        elm.classList.remove("active");
      });
      // remove all radio button check flag
      radiosElm.forEach((elm) => {
        elm.checked = false;
      });

      // add active class in clicked item
      item.classList.add("active-radio");
      // console.log("class added")
      item.querySelector(".hidden-box").classList.add("active");
      item.querySelector(".input input[type='radio']").checked = true;
    });
  });
});
