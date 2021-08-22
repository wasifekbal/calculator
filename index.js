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

function toggle_theme() {
  if (toggle_btn_state === light_img) {

    // changing the button from sun to moon.
    toggle_btn.setAttribute("src", dark_img);
    toggle_btn_state = dark_img;

    // changing the color of the last column buttons
    for (let btn of btn_last) {
        btn.setAttribute("style", "background-color: #4f79dc;");
    }

    // changin the color of "+" button
    document
      .querySelector(".last_row")
      .lastElementChild.setAttribute("style", "background-color: #4f79dc;");
    
    // Changing the color of "=" button
      document
      .querySelector(".last_row")
      .children[2].setAttribute("style", "background-color: #0048F2;");

  } else {
    // changing the button from sun to moon.
    toggle_btn.setAttribute("src", light_img);
    toggle_btn_state = light_img;
    
    // changing the color of the last column buttons
    for (let btn of btn_last) {
      btn.removeAttribute("style");
    }

    // changin the color of "+" button
    document
      .querySelector(".last_row")
      .lastElementChild.removeAttribute("style");
    
      // Changing the color of "=" button
      document.querySelector(".last_row").children[2].removeAttribute("style");
  }

  // toggling the color of whole body.
  body.classList.toggle("dark_mode");

  // toggling colors of calculator header.
  heading.classList.toggle("dark_mode");
  logo.classList.toggle("logo_dark");
  display.classList.toggle("display_dark");

  // toggling button of first row buttons.
  for (let btn in btn_r1) {
    btn.classList.toggle("btn_r1_dark");
  }
}

toggle_btn.addEventListener("click", toggle_theme);
