// CURSOR JS FOR HOVER
jQuery(document).ready(function ($) {
  const cursor = $(".cursor");

  $(document).on("mousemove", function (e) {
    cursor.css({
      top: e.clientY,
      left: e.clientX,
    });
  });

  $("a").on("mouseenter", function () {
    cursor.addClass("hovered");
  });

  $("a").on("mouseleave", function () {
    cursor.removeClass("hovered");
  });
  $("i").on("mouseenter", function () {
    cursor.addClass("hovered");
  });

  $("i").on("mouseleave", function () {
    cursor.removeClass("hovered");
  });
  $("button").on("mouseenter", function () {
    cursor.addClass("hovered");
  });

  $("button").on("mouseleave", function () {
    cursor.removeClass("hovered");
  });
});

// LOADER JS
window.addEventListener("load", () => {
  const loader = document.getElementById("re-loader");

  gsap
    .timeline({
      delay: 2.3,
    })
    .to(loader, {
      opacity: 0,
      duration: 1.6,
      ease: "power2.out",
    })
    .set(loader, { display: "none" });
});

// FORGOT JS
const forgotForm = document.getElementById("reForgotForm");
const emailInput = document.getElementById("reForgotEmail");
const emailError = document.getElementById("forgotEmailError");
const successMsg = document.getElementById("forgotSuccess");

forgotForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const emailValue = emailInput.value.trim();
  let isValid = true;

  if (!emailValue.endsWith("@gmail.com")) {
    emailError.classList.remove("hidden");
    successMsg.classList.add("hidden");
    isValid = false;
  } else {
    emailError.classList.add("hidden");
  }

  if (isValid) {
    successMsg.classList.remove("hidden");

    setTimeout(() => {
      forgotForm.reset();
      window.location.href = "./404.html";
    }, 2000);
  }
});
