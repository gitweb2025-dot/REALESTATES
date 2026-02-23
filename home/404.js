// LOADER JS
window.addEventListener("load", () => {
  const loader = document.getElementById("re-loader");

  gsap
    .timeline({
      delay: 2.3,
      onComplete: runErrorAnimation,
    })
    .to(loader, {
      opacity: 0,
      duration: 1.6,
      ease: "power2.out",
    })
    .set(loader, { display: "none" });
});

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

//404 PAGE

function goBack() {
  window.history.back();
}

gsap.set(".error-label", { y: 20, opacity: 0 });
gsap.set(".error-code", { y: 80, opacity: 0 });
gsap.set(".error-title", { y: 40, opacity: 0 });
gsap.set(".error-desc", { y: 40, opacity: 0 });
gsap.set(".error-actions", { y: 30, opacity: 0 });
function runErrorAnimation() {
  const tl = gsap.timeline({
    defaults: { ease: "power3.out" },
  });

  tl.to(".error-label", { y: 0, opacity: 1, duration: 0.6 })
    .to(".error-code", { y: 0, opacity: 1, duration: 1 }, "-=0.3")
    .to(".error-title", { y: 0, opacity: 1, duration: 0.8 }, "-=0.6")
    .to(".error-desc", { y: 0, opacity: 1, duration: 0.8 }, "-=0.5")
    .to(".error-actions", { y: 0, opacity: 1, duration: 0.8 }, "-=0.5");

  return tl;
}

gsap.to(".skyline-line", {
  strokeDasharray: 1000,
  strokeDashoffset: -1000,
  duration: 20,
  repeat: -1,
  ease: "none",
});
