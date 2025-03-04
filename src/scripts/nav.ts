// Handle mobile nav opening/closing
// const burgerIcon: HTMLElement | null = document.querySelector(".burger-icon");
// const mobileNav: HTMLElement | null = document.querySelector(".mobile-nav");

// burgerIcon?.addEventListener("click", () => {
//   mobileNav?.classList.toggle("-translate-x-full");
//   document.body.classList.toggle("height-full");
//   document.body.classList.toggle("overflow-y-hidden");
// });

// const navLinkMobile: NodeList = document.querySelectorAll(".nav-link-mobile");
// navLinkMobile.forEach((link) => {
//   link.addEventListener("click", () => mobileNav?.classList.toggle("-translate-x-full"));
// });

// Handle desktop nav changing color
// const nav: HTMLElement | null = document.querySelector("nav");
// const desktopNav: HTMLElement | null = document.querySelector(".desktop-nav");

// const handleScroll = () => {
//   if (window.innerWidth < 1024) {
//     nav?.classList.add("bg-violet-950");
//     return;
//   }
//   if (scrollY === 0 && !nav?.classList.contains("bg-transparent")) {
//     nav?.classList.remove("bg-violet-950");
//     nav?.classList.add("bg-transparent");
//     desktopNav?.classList.remove("text-violet-50");
//     desktopNav?.classList.add("text-violet-950");
//   } else if (nav?.classList.contains("bg-transparent")) {
//     nav?.classList.add("bg-violet-950");
//     nav?.classList.remove("bg-transparent");
//     desktopNav?.classList.add("text-violet-100");
//     desktopNav?.classList.remove("text-violet-950");
//   }
// };
// handleScroll();
// document.addEventListener("scroll", handleScroll);
// window.addEventListener("resize", handleScroll);
