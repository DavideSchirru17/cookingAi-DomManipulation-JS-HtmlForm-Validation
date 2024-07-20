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

// document.addEventListener("DOMContentLoaded", function() {

const itemForm = document.getElementById("commentForm");
const commentsList = document.getElementById("commentsList");
// Initialize an empty array to store comments
const commentsBox = [];

itemForm.addEventListener("submit", function (e) {
  // Prevent the form from submitting normally
  e.preventDefault();

  const nameVal = e.target.name.value;
  const commentVal = e.target.comment.value;

  if (nameVal !== "" && commentVal !== "") {
    commentsBox.push({
      name: nameVal,
      comment: commentVal,
      timestamp: new Date().toLocaleDateString("en-GB"),
    });
    // Call function to render comments
    renderComments();
    // RESET THE FORM FIELDS
    e.target.reset();
  } else {
    alert("Please fill in all fields");
  }
});

function renderComments() {
  commentsList.innerHTML = ""; // Clear the existing comments list

  commentsBox.forEach(function (comment) {
    const commentItem = document.createElement("li");
    commentItem.classList.add("comments");

    // 2 Create div for avatar wrap
    const boxAvatar = document.createElement("div");
    boxAvatar.classList.add("wrap-avatar");

    // 3 creo img inside avatar
    const imageAvatar = document.createElement("img");
    imageAvatar.classList.add("comments__image-avatar");
    imageAvatar.src = "./assets/images/Seadas.jpg"; // Set a default avatar image
    imageAvatar.alt = "avatar";
    boxAvatar.appendChild(imageAvatar); // Append image to avatar wrap

    // 2 Create div for the right box containing the title and text boxes
    const boxRight = document.createElement("div");
    boxRight.classList.add("comments__box-right");

    // 3. dentro box right create title-box div
    const titleBox = document.createElement("div");
    titleBox.classList.add("comments__title-box");

    // 4. Create div for the name
    const subTitle = document.createElement("div");
    subTitle.classList.add("comments__subsection-title");
    subTitle.textContent = comment.name;

    // 4 Create div for the timestamp
    const time = document.createElement("div");
    time.classList.add("comments__time");
    time.textContent = comment.timestamp;

    titleBox.appendChild(subTitle); // Append name to title box
    titleBox.appendChild(time); // Append timestamp to title box

    // 3. Create text box div
    const textBox = document.createElement("div");
    textBox.classList.add("comments__text-box");
    textBox.textContent = comment.comment;

    // append 3 on 2
    boxRight.appendChild(titleBox); // Append title box to the right box
    boxRight.appendChild(textBox); // Append text box to the right box

    // append 2 on 1
    commentItem.appendChild(boxAvatar); // Append avatar wrap to the comment item
    commentItem.appendChild(boxRight); // Append right box to the comment item

    // appned the comment item to the comment list
    commentsList.appendChild(commentItem);
  });
}
// Initial call to render comments if any

renderComments();
