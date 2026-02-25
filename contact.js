// LOADER JS
window.addEventListener("load", () => {
  const loader = document.getElementById("re-loader");

  gsap
    .timeline({
      delay: 2.3,
      onComplete: runContactAnimations,
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

// NAVBAR

gsap.registerPlugin(ScrollTrigger);

const toggle = document.getElementById("homeToggle");
const menu = document.getElementById("homeMenu");
const items = menu.querySelectorAll(".home-item");
const caret = document.getElementById("homeCaret");

let isOpen = false;

gsap.set(menu, { autoAlpha: 0, y: -10, display: "none" });
gsap.set(items, { opacity: 0, y: -8 });

toggle.addEventListener("click", (e) => {
  e.stopPropagation();

  if (!isOpen) {
    menu.classList.remove("hidden");

    gsap.to(menu, {
      autoAlpha: 1,
      y: 0,
      display: "block",
      duration: 0.35,
      ease: "power3.out",
    });

    gsap.to(items, {
      opacity: 1,
      y: 0,
      duration: 0.35,
      ease: "power3.out",
      stagger: 0.08,
      delay: 0.05,
    });

    gsap.to(caret, {
      rotate: 180,
      duration: 0.3,
      ease: "power2.out",
    });

    isOpen = true;
  } else {
    closeMenu();
  }
});

function closeMenu() {
  gsap.to(items, {
    opacity: 0,
    y: -8,
    duration: 0.2,
    stagger: 0.05,
    ease: "power2.in",
  });

  gsap.to(menu, {
    autoAlpha: 0,
    y: -10,
    duration: 0.25,
    ease: "power2.in",
    onComplete: () => menu.classList.add("hidden"),
  });

  gsap.to(caret, {
    rotate: 0,
    duration: 0.25,
  });

  isOpen = false;
}

document.addEventListener("click", () => {
  if (isOpen) closeMenu();
});

const mobileToggle = document.getElementById("mobileHomeToggle");
const mobileMenu = document.getElementById("mobileHomeMenu");
const mobileItems = mobileMenu.querySelectorAll(".mobile-home-item");
const mobileCaret = document.getElementById("mobileCaret");

let isMobileOpen = false;

gsap.set(mobileMenu, {
  autoAlpha: 0,
  y: -10,
  display: "none",
});

gsap.set(mobileItems, {
  opacity: 0,
  y: -12,
});

mobileToggle.addEventListener("click", (e) => {
  e.stopPropagation();

  if (!isMobileOpen) {
    mobileMenu.classList.remove("hidden");

    gsap.to(mobileMenu, {
      autoAlpha: 1,
      y: 0,
      display: "block",
      duration: 0.35,
      ease: "power3.out",
    });

    gsap.to(mobileItems, {
      opacity: 1,
      y: 0,
      duration: 0.4,
      stagger: 0.1,
      ease: "power3.out",
      delay: 0.05,
    });

    gsap.to(mobileCaret, {
      rotate: 180,
      duration: 0.3,
      ease: "power2.out",
    });

    isMobileOpen = true;
  } else {
    closeMobileMenu();
  }
});

function closeMobileMenu() {
  gsap.to(mobileItems, {
    opacity: 0,
    y: -12,
    duration: 0.25,
    stagger: 0.06,
    ease: "power2.in",
  });

  gsap.to(mobileMenu, {
    autoAlpha: 0,
    y: -10,
    duration: 0.25,
    ease: "power2.in",
    onComplete: () => mobileMenu.classList.add("hidden"),
  });

  gsap.to(mobileCaret, {
    rotate: 0,
    duration: 0.25,
    ease: "power2.in",
  });

  isMobileOpen = false;
}

document.addEventListener("click", () => {
  if (isMobileOpen) closeMobileMenu();
});

const navbar = document.getElementById("navbar");

let lastScroll = 0;
let isHidden = false;

gsap.set(navbar, {
  margin: "1.5rem",
  borderRadius: "9999px",
  color: "black",
  backgroundColor: "transparent",
});

window.addEventListener("scroll", () => {
  let current = window.scrollY;

  if (current > lastScroll && current > 120 && !isHidden) {
    gsap.fromTo(
      navbar,
      { yPercent: -100, duration: 2.3, ease: "power2.out" },
      { yPercent: 0, duration: 2.3, ease: "power2.out" },
    );
    isHidden = true;
  }

  if (current < lastScroll && isHidden) {
    gsap.to(navbar, { y: 0, duration: 2.3, ease: "power2.out" });
    isHidden = false;
  }

  lastScroll = current;
});

ScrollTrigger.create({
  trigger: "#contact",
  start: "top top",

  onEnter: () => {
    gsap.to(navbar, {
      margin: 0,
      borderRadius: 0,
      color: "black",
      backgroundColor: "white",
      duration: 0.5,
    });
  },

  onLeaveBack: () => {
    gsap.to(navbar, {
      margin: "1.5rem",
      borderRadius: "9999px",
      color: "black",
      backgroundColor: "transparent",
      duration: 0.5,
    });
  },
});

gsap.set(".menu-link", {
  opacity: 0,
  y: 30,
});

$(".ham-icon").click(function () {
  $("body").addClass("overflow-hidden");
  $(".mobile-menu").removeClass("translate-x-full").addClass("translate-x-0");

  gsap.to(".menu-link", {
    opacity: 1,
    y: 0,
    duration: 0.6,
    ease: "power3.out",
    stagger: 0.15,
    delay: 0.3,
  });
});

$(".close-menu").click(function () {
  $("body").removeClass("overflow-hidden");
  gsap.to(".menu-link", {
    opacity: 0,
    y: 30,
    duration: 0.4,
    ease: "power3.in",
    stagger: 0.1,
  });

  setTimeout(() => {
    $(".mobile-menu").removeClass("translate-x-0").addClass("translate-x-full");
  }, 400);
});

// NAV HOVER
document.querySelectorAll(".nav-hover").forEach((link) => {
  let text = link.querySelector("span");

  link.addEventListener("mouseenter", () => {
    gsap.to(text, { y: "-100%", duration: 0.3 });
  });

  link.addEventListener("mouseleave", () => {
    gsap.to(text, { y: "0%", duration: 0.3 });
  });
});

// CONTENT GSAP
gsap.set(".navbar", { opacity: 0, y: -100 });
gsap.set(".contact-title", { opacity: 0, y: 60 });
gsap.set(".contact-sub", { opacity: 0, y: 60 });
gsap.set(".contact-card", { opacity: 0, y: 60 });
gsap.set(".contact-left", { opacity: 0, y: 60 });
gsap.set(".contact-form-wrap", { opacity: 0, y: 60 });
function runContactAnimations() {
  gsap.to(".navbar", {
    y: 0,
    opacity: 1,
    duration: 1.2,
    ease: "power3.out",
  });

  gsap.to(".contact-title", {
    opacity: 1,
    y: 0,
    duration: 0.6,
    ease: "power3.out",
  });

  gsap.to(".contact-sub", {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power3.out",
  });

  gsap.to(".contact-card", {
    scrollTrigger: {
      trigger: ".contact-cards",
      start: "top 85%",
    },
    y: 0,
    opacity: 1,
    stagger: 0.2,
    duration: 1,
  });

  gsap.to(".contact-left", {
    scrollTrigger: {
      trigger: ".contact-left",
      start: "top 85%",
    },
    y: 0,
    opacity: 1,
    duration: 1,
  });

  gsap.to(".contact-form-wrap", {
    scrollTrigger: {
      trigger: ".contact-form-wrap",
      start: "top 85%",
    },
    y: 0,
    opacity: 1,
    duration: 1,
  });
}

// FORM VALIDATION

const form = document.querySelector(".contact-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let isValid = true;

  document
    .querySelectorAll(".error-msg")
    .forEach((el) => el.classList.add("hidden"));
  document.querySelector(".error-email").classList.add("hidden");

  document.querySelectorAll(".form-input").forEach((input) => {
    if (!input.value.trim()) {
      input.nextElementSibling.classList.remove("hidden");
      isValid = false;
    }
  });

  const email = document.querySelector(".form-email");
  const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

  if (!gmailRegex.test(email.value)) {
    document.querySelector(".error-email").classList.remove("hidden");
    isValid = false;
  }

  if (isValid) {
    form.reset();

    window.location.href = "./404.html";
  }
});

// FAQ
gsap.from(".faq-item", {
  scrollTrigger: {
    trigger: ".faq-grid",
    start: "top 85%",
  },
  y: 60,
  opacity: 0,
  stagger: 0.15,
  duration: 0.8,
  ease: "power3.out",
});

document.querySelectorAll(".faq-answer").forEach((el) => {
  gsap.set(el, { height: 0, overflow: "hidden" });
});

let activeItem = null;

document.querySelectorAll(".faq-question").forEach((btn) => {
  btn.addEventListener("click", () => {
    const item = btn.parentElement;
    const answer = item.querySelector(".faq-answer");
    const icon = item.querySelector(".faq-icon");

    if (activeItem && activeItem !== item) {
      gsap.to(activeItem.querySelector(".faq-answer"), {
        height: 0,
        duration: 0.4,
      });
      gsap.to(activeItem.querySelector(".faq-icon"), {
        rotate: 0,
        duration: 0.3,
      });
    }

    if (activeItem === item) {
      gsap.to(answer, { height: 0, duration: 0.4 });
      gsap.to(icon, { rotate: 0, duration: 0.3 });
      activeItem = null;
    } else {
      gsap.to(answer, { height: "auto", duration: 0.5, ease: "power2.out" });
      gsap.to(icon, { rotate: 180, duration: 0.3 });
      activeItem = item;
    }
  });
});

// FOOTER

gsap.from(".footer-title", {
  scrollTrigger: {
    trigger: ".main-footer",
    start: "top 80%",
  },
  y: 80,
  opacity: 0,
  duration: 1.2,
  ease: "power3.out",
});

gsap.from(".footer-social .social-circle", {
  scrollTrigger: {
    trigger: ".main-footer",
    start: "top 80%",
  },
  y: 40,
  opacity: 0,
  stagger: 0.15,
  duration: 0.8,
  ease: "power2.out",
});

gsap.from(".footer-col", {
  scrollTrigger: {
    trigger: ".footer-columns",
    start: "top 85%",
  },
  y: 70,
  opacity: 0,
  stagger: 0.2,
  duration: 1,
  ease: "power3.out",
});

const footForm = document.getElementById("foot-form");
const footError = document.getElementById("footError");

footForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const footEmail = document.getElementById("foot-email").value.trim();

  footError.classList.add("hidden");

  if (!footEmail.endsWith("@gmail.com")) {
    footError.textContent = "Enter Gmail Only";
    footError.classList.remove("hidden");
    return;
  }

  footForm.reset();

  window.location.href = "./404.html";
});

// SCROLL TO TOP

const btn = document.querySelector(".scroll-top-btn");
const progressRing = document.querySelector(".progress-ring");

const radius = 26;
const circumference = 2 * Math.PI * radius;

progressRing.style.strokeDasharray = circumference;
progressRing.style.strokeDashoffset = circumference;

function updateScrollProgress() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollTop / docHeight;

  const offset = circumference - progress * circumference;
  progressRing.style.strokeDashoffset = offset;

  if (scrollTop > 300) {
    gsap.to(btn, { opacity: 1, pointerEvents: "auto", duration: 0.3 });
  } else {
    gsap.to(btn, { opacity: 0, pointerEvents: "none", duration: 0.3 });
  }
}

window.addEventListener("scroll", updateScrollProgress);

btn.addEventListener("click", () => {
  gsap.to(window, {
    scrollTo: 0,
    duration: 2.5,
    ease: "power3.out",
  });
});

// SMOOTH SCROLL

const lenis = new Lenis({
  duration: 1,
  easing: (t) => 1 - Math.pow(1 - t, 4),
  smoothWheel: true,
  smoothTouch: false,
});

lenis.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(document.body, {
  scrollTop(value) {
    return arguments.length
      ? lenis.scrollTo(value, { immediate: true })
      : lenis.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

ScrollTrigger.addEventListener("refresh", () => lenis.resize());
ScrollTrigger.refresh();

//FOOT YEAR
document.getElementById("year").textContent = new Date().getFullYear();
