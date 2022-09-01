let serachIcon = document.getElementById("search-now");
let searchPopup = document.getElementById("search-pop");
let closePopup = document.getElementById("close-pop");

function displayAndHide() {
  if (this === serachIcon) {
    searchPopup.classList.add("active");
  } else searchPopup.classList.remove("active");
}
serachIcon.onclick = displayAndHide;
closePopup.onclick = displayAndHide;

// change bullets active class on click
let bullets = document.querySelectorAll(".bullet");
bullets.forEach((e) => {
  e.onclick = (a) => {
    bullets.forEach((r) => {
      r.classList.remove("active");
    });
    a.currentTarget.classList.add("active");
  };
});

// change portfolio active class on click
let tabItems = document.querySelectorAll(".tab-item");
tabItems.forEach((e) => {
  e.onclick = (a) => {
    tabItems.forEach((r) => {
      r.classList.remove("active");
    });
    a.currentTarget.classList.add("active");
  };
});
