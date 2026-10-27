const toTrackEls: NodeListOf<Element> = document.querySelectorAll(".animate-scroll");
const prefersReducedMotion: boolean = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const addClassOnScroll: string = "on-scroll:";
const removeClassOnScroll: string = "-on-scroll:"

const classAddAttribute: string = "class-add-scroll";
const classRemoveAttribute: string = "class-remove-scroll";

toTrackEls.forEach((el) => {
  const elClassesArr: string[] = [...el.classList];
  const elClassesToChange = elClassesArr.filter((className) => className.startsWith(addClassOnScroll) || className.startsWith(removeClassOnScroll));

  const classesToAdd = elClassesToChange.filter((className) => !className.startsWith("-"));
  const classesToRemove = elClassesToChange.filter((className) => className.startsWith("-"));


  const classesToAddScrollStr = classesToAdd.map(className => className.replace(addClassOnScroll, "")).join(" ")
  const classesToRemoveScrollStr = classesToRemove.map(className => className.replace(removeClassOnScroll, "")).join(" ")

  el.setAttribute(classAddAttribute, classesToAddScrollStr);
  el.setAttribute(classRemoveAttribute, classesToRemoveScrollStr);
})


const observer: IntersectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const classesToRemoveStr: string | null = entry.target.getAttribute(classRemoveAttribute)
      const classesToAddStr: string | null = entry.target.getAttribute(classAddAttribute)

      const classesToAdd = classesToAddStr?.split(" ").filter(className => className !== "");
      const classesToRemove = classesToRemoveStr?.split(" ").filter(className => className !== "");

      classesToAdd?.forEach((className) => {
        entry.target.classList.add(className);
      })

      classesToRemove?.forEach((className) => {
        entry.target.classList.remove(className);
      })

      observer.unobserve(entry.target);
    }
  });
});
// With reduced motion the CSS already shows everything, so skip the reveal animations
if (!prefersReducedMotion) {
  toTrackEls.forEach((el) => observer.observe(el));
}
