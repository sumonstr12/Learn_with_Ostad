const switchBtnToggler = document.getElementById("switch-btn-toggler");

// event handler

switchBtnToggler.addEventListener("click", function () {
  var root = document.querySelector(":root");
  var rootStyle = getComputedStyle(root);
  const isWhite = rootStyle.getPropertyValue("--theme-bg");

  if (isWhite === "#e0e0e0") {
    root.style.setProperty("--theme-bg", "#232121");
  } else {
    root.style.setProperty("--theme-bg", "#e0e0e0");
  }
});
