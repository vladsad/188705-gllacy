var link = document.querySelector(".address__btn");
var popup = document.querySelector(".modal.feedback");
var popup__overlay = document.querySelector(".modal__overlay");
var close = popup.querySelector(".feedback__close");

var form = popup.querySelector(".feedback__form");
var Name = popup.querySelector("[id=feedback-name]");
var msg = popup.querySelector(".feedback__input--textarea");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("feedback--show");
  popup__overlay.classList.add("modal__overlay--show");
  Name.focus();
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("feedback--show");
  popup.classList.remove("feedback--error");
  popup__overlay.classList.remove("modal__overlay--show");
  msg.classList.remove("feedback__input--error");
});

form.addEventListener("submit", function (evt) {
  if (!msg.value) {
    evt.preventDefault();
    popup.classList.remove("feedback--error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("feedback--error");
    msg.classList.add("feedback__input--error");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    popup.classList.toggle("feedback--show",false);
    popup.classList.remove("feedback--error");
    popup__overlay.classList.remove("modal__overlay--show");
    msg.classList.remove("feedback__input--error");
  }
});