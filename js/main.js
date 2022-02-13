'use strict';
// Varables
var sideNavStatus = 0;
console.log(sideNavStatus)



// Constants
const sideMenu = document.getElementById("sideMenu");
const sideMenuInnerContent = document.getElementById("sideMenuInnerContent");
const bar = document.querySelector('.menuBar');
const barOne = document.querySelector('.bar-1');
const barTwo = document.querySelector('.bar-2');
const barThree = document.querySelector('.bar-3');
const barFour = document.querySelector('.bar-4');


// Functions

function sideNav() {
  var screenwidth = $(window).width();
  if (sideNavStatus == 1) {
    bar.style.transform = "";
    barOne.style.transform = "";
    barTwo.style.transform = "";
    barThree.style.transform = "";
    barFour.style.transform = "";
    sideMenu.style.width = "5%";
    sideMenuInnerContent.style.opacity = "0"
    window.sideNavStatus = 0;
    console.log(sideNavStatus)
    return;
  }
  if (screenwidth < 720 && sideNavStatus == 0) {
    bar.style.transform = "translate(-5px)";
    barOne.style.transform = "rotate(45deg) translate(12.5px, 5px)";
    barTwo.style.transform = "translate(5px)";
    barThree.style.transform = "rotate(-45deg) translate(12.5px, -5px)";
    barFour.style.transform = "rotate(90deg) translate(-23px, -5px)";
    sideMenu.style.width = "100%";
    sideMenuInnerContent.style.opacity = "1";
    window.sideNavStatus = 1;
    console.log(sideNavStatus)
    return;
  }
  if (screenwidth > 720 && sideNavStatus == 0) {
    bar.style.transform = "translate(-5px)";
    barOne.style.transform = "rotate(45deg) translate(12.5px, 5px)";
    barTwo.style.transform = "translate(5px)";
    barThree.style.transform = "rotate(-45deg) translate(12.5px, -5px)";
    barFour.style.transform = "rotate(90deg) translate(-23px, -5px)";
    sideMenuInnerContent.style.opacity = "1";
    window.sideNavStatus = 1;
    console.log(sideNavStatus)
    return;
  }
}

// Event Listeners
