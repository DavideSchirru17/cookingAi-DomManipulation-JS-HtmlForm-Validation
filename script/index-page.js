// if page is Index.html
// oject item border button solid white 2px

// if (window.location.pathname.endsWith("index.html")) {
//   let light = document.getElementById("bio");
//   let bookingHover = document.getElementById("book");

//   light.addEventListener("mouseenter", function () {
//     light.style.borderColor = "black";
//   });

//   light.addEventListener("mouseleave", function () {
//     light.style.borderColor = "initial";
//   });

//   bookingHover.addEventListener("mouseenter", function () {
//     light.style.borderColor = "transparent";
//   });

//   bookingHover.addEventListener("mouseleave", function () {
//     light.style.borderColor = "initial";
//   });
// }

if (window.location.pathname.endsWith("index.html")) {
  const light = document.getElementById("bio");
  const bookingHover = document.getElementById("book");

  const setBorderColor = (color) => (light.style.borderColor = color);
  light.addEventListener("mouseenter", () => setBorderColor("black"));
  light.addEventListener("mouseleave", () => setBorderColor("initial"));
  bookingHover.addEventListener("mouseenter", () =>
    setBorderColor("transparent")
  );
  bookingHover.addEventListener("mouseleave", () => setBorderColor("initial"));
}

// ADD BOLT WEIGHT TO THE SECTION PARAGRAPH

const bolt = document.querySelector(".food__bold-js");
const boldRx = document.querySelector(".food__bold-right");
bolt.addEventListener("mouseover", () => {
  bolt.style.fontWeight = "600";
});
bolt.addEventListener("mouseleave", () => {
  bolt.style.fontWeight = "initial";
});
boldRx.addEventListener("mouseover", () => {
  boldRx.style.fontWeight = "600";
});
boldRx.addEventListener("mouseleave", () => {
  boldRx.style.fontWeight = "initial";
});
