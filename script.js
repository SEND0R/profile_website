// =================== mobile menu =============================

bar_btn = document.querySelector(".bar-btn");
close_btn = document.querySelector(".close-btn");
nav_box = document.querySelectorAll(".nav-box");
console.log(nav_box);

bar_btn.addEventListener("click", function () {
  nav_box.forEach(function (el) {
    el.classList.add("show");
  });
});
close_btn.addEventListener("click", function () {
  nav_box.forEach(function (el) {
    el.classList.remove("show");
  });
});
////////////////////////////////
// ===================== change text ============================================
let real_text = "web developer";
let change_text = document.getElementById("change-text");
let ind = 1;
function text_write() {
  change_text.innerText = real_text.slice(0, ind);
  ind = ind + 1;
  if (ind > real_text.length) {
    ind = 0;
  }
}
setInterval(text_write, 200);

////////////////////////////////////////////////////////////////////////////////
// ========================contact copy=============================================

function ecopy() {
  let email_text = document.querySelector(".ce").innerText;
  let input_element = document.createElement("input");
  input_element.setAttribute(value, email_text);
  document.body.appendChild(input_element);
  input_element.select();
  navigator.clipboard.writeText(input_element.value);
  input_element.parentNode.removeChild(input_element);
}
///////// form ///////////////////////////////////////////////////////////////////
