document.addEventListener("DOMContentLoaded", function () {
    const signUpBtn = document.getElementById("sign-up-btn");
    const signInBtn = document.getElementById("sign-in-btn");
    const signUpForm = document.querySelector(".sign-up-form");
    const signInForm = document.querySelector(".sign-in-form");
    const leftPanel = document.querySelector(".left-panel");
    const rightPanel = document.querySelector(".right-panel");

  // Mostrar inicialmente el formulario de inicio de sesión y el panel derecho
  signUpForm.style.display = "none";
  signInForm.style.display = "block";
  leftPanel.style.display = "block";
  rightPanel.style.display = "none";

    signUpBtn.addEventListener("click", function () {
        signUpForm.style.display = "block";
        signInForm.style.display = "none";
        leftPanel.style.display = "none";
        rightPanel.style.display = "block";
    });

    signInBtn.addEventListener("click", function () {
        signUpForm.style.display = "none";
        signInForm.style.display = "block";
        leftPanel.style.display = "block";
        rightPanel.style.display = "none";
    });
});