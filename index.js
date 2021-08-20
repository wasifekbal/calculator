const dark_img = "./img/dark-theme.svg";
const light_img = "./img/light.svg";
const toggle_btn = document.getElementById("theme_toggle_button");
var toggle_btn_state = toggle_btn.getAttribute("src");

const body = document.getElementById("calculator");
const heading = document.getElementById("heading");
const logo = document.querySelector(".logo");
const display = document.querySelector(".display");
const btn_r1 = document.querySelectorAll(".btn_r1");
const btn_last = document.querySelectorAll(".btn_last");

function toggle_header() {
  heading.classList.toggle("dark_mode");
  logo.classList.toggle("logo_dark");
  display.classList.toggle("display_dark");
}

function toggle_btns() {
  for (let i = 0; i < btn_r1.length; i++) {
    btn_r1[i].classList.toggle("btn_r1_dark");
  }
}

function toggle_theme() {
  if (toggle_btn_state === light_img) {
    toggle_btn.setAttribute("src", dark_img);
    toggle_btn_state = dark_img;
    for (let i = 0; i < btn_last.length; i++) {
      btn_last[i].setAttribute("style", "background-color: #4f79dc;");
    }
    document
      .querySelector(".last_row")
      .lastElementChild.setAttribute("style", "background-color: #4f79dc;");
    document
      .querySelector(".last_row")
      .children[2].setAttribute("style", "background-color: #0048F2;");
  } else {
    toggle_btn.setAttribute("src", light_img);
    toggle_btn_state = light_img;
    for (let i = 0; i < btn_last.length; i++) {
      btn_last[i].removeAttribute("style");
    }
    document
      .querySelector(".last_row")
      .lastElementChild.removeAttribute("style");
    document.querySelector(".last_row").children[2].removeAttribute("style");
  }
  body.classList.toggle("dark_mode");
  toggle_header();
  toggle_btns();
}

toggle_btn.addEventListener("click", toggle_theme);
