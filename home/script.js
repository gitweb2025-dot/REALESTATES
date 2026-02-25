gsap.registerPlugin(ScrollTrigger);

// LOADER JS
window.addEventListener("load", () => {
  const loader = document.getElementById("re-loader");

  gsap
    .timeline({
      delay: 2.3,
      onComplete: homeAnimation,
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
  backgroundColor: "white",
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
  trigger: "#home",
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
      backgroundColor: "white",
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
gsap.set(".dream-title", { opacity: 0, y: 60 });
gsap.set(".dream-desc", { opacity: 0, y: 40 });
gsap.set(".dream-btn", { opacity: 0, y: 30 });
gsap.set(".dream-stats", { opacity: 0, y: 40 });
gsap.set(".dream-img", { opacity: 0, scale: 0.8 });

function homeAnimation() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".dream-section",
      start: "top 80%",
    },
    defaults: { ease: "power3.out" },
  });

  gsap.to(".navbar", {
    y: 0,
    opacity: 1,
    duration: 1.2,
    ease: "power3.out",
  });

  tl.to(".dream-title", { y: 0, opacity: 1, duration: 1 })
    .to(".dream-desc", { y: 0, opacity: 1, duration: 0.8 }, "-=0.6")
    .to(".dream-btn", { y: 0, opacity: 1, duration: 0.6 }, "-=0.5")
    .to(".dream-stats", { y: 0, opacity: 1, duration: 0.8 }, "-=0.4");

  gsap.to(".dream-img", {
    scrollTrigger: {
      trigger: ".dream-img",
      start: "top 85%",
    },
    scale: 1,
    opacity: 1,
    duration: 1.2,
  });

  gsap.utils.toArray(".dream-counter").forEach((counter) => {
    let target = +counter.dataset.target;

    gsap.fromTo(
      counter,
      { innerText: 0 },
      {
        innerText: target,
        duration: 2,
        snap: { innerText: 1 },
        scrollTrigger: {
          trigger: ".dream-stats",
          start: "top 85%",
        },
        onUpdate: function () {
          counter.innerText = Math.floor(counter.innerText) + "+";
        },
      },
    );
  });
}

// WHO WE

const t3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".who-section",
    start: "top 80%",
  },
  defaults: { ease: "power3.out" },
});

t3.from(".who-img", { y: 60, opacity: 0, stagger: 0.2, duration: 1 })
  .from(".who-exp", { scale: 0.8, opacity: 0, duration: 0.6 }, "-=0.6")
  .from(".who-rating", { y: 40, opacity: 0, duration: 0.8 }, "-=0.5");

t3.from(".who-label", { y: 20, opacity: 0, duration: 0.5 }, "-=0.3")
  .from(".who-title", { y: 60, opacity: 0, duration: 1 }, "-=0.3")
  .from(".who-desc", { y: 40, opacity: 0, duration: 0.8 }, "-=0.5")
  .from(".who-btn", {
    scale: 0.9,
    opacity: 0,
    stagger: 0.2,
    duration: 0.6,
  });

// ABOUT GSAP

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".about-section",
    start: "top 80%",
  },
  defaults: { ease: "power3.out" },
});

tl.from(".about-img-left", {
  x: -80,
  opacity: 0,
  duration: 1.2,
}).from(
  ".about-img-right",
  {
    x: 80,
    opacity: 0,
    duration: 1.2,
  },
  "-=1",
);

tl.from(
  ".about-title-card",
  {
    y: 60,
    opacity: 0,
    duration: 0.9,
  },
  "-=0.6",
)

  .from(
    ".about-desc-card",
    {
      y: 60,
      opacity: 0,
      duration: 0.9,
    },
    "-=0.6",
  )

  .from(
    ".about-btn",
    {
      scale: 0.9,
      opacity: 0,
      duration: 0.6,
    },
    "-=0.5",
  );

// SERVICES
const t2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".services-section",
    start: "top 80%",
  },
  defaults: { ease: "power3.out" },
});

t2.from(".services-label", { y: 20, opacity: 0, duration: 0.6 })
  .from(".services-title", { y: 60, opacity: 0, duration: 1 }, "-=0.3")
  .from(".services-desc", { y: 40, opacity: 0, duration: 0.8 }, "-=0.5")
  .from(".services-btn", { scale: 0.9, opacity: 0, duration: 0.6 });

gsap.from(".service-card", {
  scrollTrigger: {
    trigger: ".services-cards",
    start: "top 85%",
  },
  y: 80,
  opacity: 0,
  stagger: 0.2,
  duration: 1,
});

gsap.from(".service-icon", {
  scrollTrigger: {
    trigger: ".services-cards",
    start: "top 85%",
  },
  scale: 0,
  stagger: 0.2,
  duration: 0.6,
});

// PROJECTS

const t4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".project-section",
    start: "top 80%",
  },
  defaults: { ease: "power3.out" },
});

t4.from(".project-label", { y: 20, opacity: 0, duration: 0.6 })
  .from(".project-title", { y: 60, opacity: 0, duration: 1 }, "-=0.3")
  .from(".project-desc", { y: 40, opacity: 0, duration: 0.8 }, "-=0.5")
  .from(".project-btn", { scale: 0.9, opacity: 0, duration: 0.6 });

gsap.from(".project-card", {
  scrollTrigger: {
    trigger: ".project-grid",
    start: "top 85%",
  },
  y: 80,
  opacity: 0,
  stagger: 0.2,
  duration: 1,
});

gsap.from(".project-img", {
  scrollTrigger: {
    trigger: ".project-grid",
    start: "top 85%",
  },
  scale: 1.1,
  opacity: 0,
  stagger: 0.15,
  duration: 1.2,
});

// TEAMS

const t5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".team-section",
    start: "top 80%",
  },
  defaults: { ease: "power3.out" },
});

t5.from(".team-label", { y: 20, opacity: 0, duration: 0.6 })
  .from(".team-title", { y: 60, opacity: 0, duration: 1 }, "-=0.3")
  .from(".team-desc", { y: 40, opacity: 0, duration: 0.8 }, "-=0.5")
  .from(".team-btn", { scale: 0.9, opacity: 0, duration: 0.6 });

gsap.from(".team-card", {
  scrollTrigger: {
    trigger: ".team-grid",
    start: "top 85%",
  },
  y: 80,
  opacity: 0,
  stagger: 0.2,
  duration: 1,
});

gsap.from(".team-img", {
  scrollTrigger: {
    trigger: ".team-grid",
    start: "top 85%",
  },
  scale: 1.1,
  opacity: 0,
  stagger: 0.2,
  duration: 1.2,
});

// PRICING
const t6 = gsap.timeline({
  scrollTrigger: {
    trigger: ".pricing-section",
    start: "top 80%",
  },
  defaults: { ease: "power3.out" },
});

t6.from(".pricing-label", { y: 20, opacity: 0, duration: 0.6 })
  .from(".pricing-title", { y: 60, opacity: 0, duration: 1 }, "-=0.3")
  .from(".pricing-desc", { y: 40, opacity: 0, duration: 0.8 }, "-=0.5")
  .from(".pricing-btn", { scale: 0.9, opacity: 0, duration: 0.6 });

gsap.from(".pricing-card", {
  scrollTrigger: {
    trigger: ".pricing-grid",
    start: "top 85%",
  },
  y: 80,
  opacity: 0,
  scale: 0.95,
  stagger: 0.2,
  duration: 1,
});

// CONTACT

gsap.from(".support-content > *", {
  scrollTrigger: {
    trigger: ".support-section",
    start: "top 80%",
  },
  y: 60,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  ease: "power3.out",
});

gsap.from(".support-form", {
  scrollTrigger: {
    trigger: ".support-form",
    start: "top 85%",
  },
  y: 100,
  opacity: 0,
  duration: 1,
  ease: "power3.out",
});

// FORM VALIDATION
const form = document.getElementById("contactForm");
const errorText = document.getElementById("formError");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const first = document.getElementById("firstName").value.trim();
  const last = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();

  errorText.classList.add("hidden");

  if (!first || !last || !email || !phone || !message) {
    errorText.textContent = "All fields are required.";
    errorText.classList.remove("hidden");
    return;
  }

  if (!email.endsWith("@gmail.com")) {
    errorText.textContent = "Enter Gmail Only";
    errorText.classList.remove("hidden");
    return;
  }

  form.reset();

  window.location.href = "./404.html";
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

// BLOGS

const t7 = gsap.timeline({
  scrollTrigger: {
    trigger: ".blog-section",
    start: "top 80%",
  },
  defaults: { ease: "power3.out" },
});

t7.from(".blog-label", { y: 20, opacity: 0, duration: 0.6 })
  .from(".blog-title", { y: 60, opacity: 0, duration: 1 }, "-=0.3")
  .from(".blog-desc", { y: 40, opacity: 0, duration: 0.8 }, "-=0.5")
  .from(".blog-btn", { scale: 0.9, opacity: 0, duration: 0.6 });

gsap.from(".blog-card", {
  scrollTrigger: {
    trigger: ".blog-grid",
    start: "top 85%",
  },
  y: 80,
  opacity: 0,
  stagger: 0.2,
  duration: 1,
});

gsap.from(".blog-img", {
  scrollTrigger: {
    trigger: ".blog-grid",
    start: "top 85%",
  },
  scale: 1.1,
  opacity: 0,
  stagger: 0.15,
  duration: 1.2,
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