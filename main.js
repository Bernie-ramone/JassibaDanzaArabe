const parallax = document.getElementById("parallax");
//const videoWrapper = document.getElementById("videoWrapper");

window.addEventListener("scroll", function () {
  let offset = window.pageYOffset;
  parallax.style.backgroundPositionY = offset * 0.7 + "px";
});

// window.addEventListener("scroll", function () {
//   let offset = window.pageYOffset;
//   console.log(videoWrapper);
//   videoWrapper.style.backgroundPositionY = offset * 0.7 + "px";
// });