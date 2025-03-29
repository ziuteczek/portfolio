const navIcon: Element | null = document.querySelector("#nav-icon1");
const mobileNav: Element | null = document.querySelector(".mobile-nav");
const linkClick = mobileNav?.querySelectorAll(".nav-link");

const handleNavClick = () => {
  navIcon?.classList.toggle("open");
  mobileNav?.classList.toggle("-translate-x-full");
  document.body.classList.toggle("h-svh")
  document.body.classList.toggle("overflow-hidden")
};

navIcon?.addEventListener("click", handleNavClick);
linkClick?.forEach((link) => {
  link.addEventListener("click", handleNavClick);
});
