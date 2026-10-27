const navToggle: HTMLButtonElement | null = document.querySelector(".mobile-nav-toggle");
const navIcon: Element | null = document.querySelector("#nav-icon1");
const mobileNav: HTMLElement | null = document.querySelector(".mobile-nav");
const linkClick = mobileNav?.querySelectorAll(".nav-link");

const setNavOpen = (open: boolean) => {
  navIcon?.classList.toggle("open", open);
  mobileNav?.classList.toggle("-translate-x-full", !open);
  if (mobileNav) mobileNav.inert = !open;
  navToggle?.setAttribute("aria-expanded", String(open));
  navToggle?.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
  document.body.classList.toggle("h-svh", open);
  document.body.classList.toggle("overflow-hidden", open);
};

const isNavOpen = () => navToggle?.getAttribute("aria-expanded") === "true";

navToggle?.addEventListener("click", () => setNavOpen(!isNavOpen()));
linkClick?.forEach((link) => {
  link.addEventListener("click", () => setNavOpen(false));
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && isNavOpen()) {
    setNavOpen(false);
    navToggle?.focus();
  }
});
