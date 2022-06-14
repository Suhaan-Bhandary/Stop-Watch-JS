const rippleButtons = document.querySelectorAll(".ripple-btn");
console.log(rippleButtons);

rippleButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    // Remove the active class
    button.classList.remove("active");

    button.style.setProperty("--x", e.offsetX + "px");
    button.style.setProperty("--y", e.offsetY + "px")

    // Add the active class 
    button.classList.add("active");
  });
});
