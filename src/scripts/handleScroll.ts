const toTrackEls: NodeListOf<Element> = document.querySelectorAll(".animate-scroll");
const aboutMeSectionEl: Element | null = document.querySelector("#about-me");
const headerEl: Element | null = document.querySelector("header");

const addClassOnScroll: string = "on-scroll:";
const removeClassOnScroll: string = "-on-scroll:"

toTrackEls.forEach((el, i) => {
  const elClassesArr: string[] = [...el.classList];
  const elClassesToChange = elClassesArr.filter((className) => className.startsWith(addClassOnScroll) || className.startsWith(removeClassOnScroll));

  const classesToAdd = elClassesToChange.filter((className) => !className.startsWith("-"));
  const classesToRemove = elClassesToChange.filter((className) => className.startsWith("-"));

  const classesToAddScrollStr = classesToAdd.map(className => className.replace(addClassOnScroll, "")).join(" ")
  const classesToRemoveSCrollStr = classesToRemove.map(className => className.replace(removeClassOnScroll, "")).join(" ")

  toTrackEls[i].setAttribute("class-add-scroll", classesToAddScrollStr);
  toTrackEls[i].setAttribute("class-Remove-scroll", classesToRemoveSCrollStr);
})


const observer: IntersectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const classesToRemoveStr: string | null = entry.target.getAttribute("class-add-scroll")
      const classesToAddStr: string | null = entry.target.getAttribute("class-add-scroll")

      const classesToAdd = classesToAddStr?.split(" ");
      const classesToRemove = classesToRemoveStr?.split(" ");

      classesToAdd?.forEach((className) => {
        entry.target.classList.add(className);
      })

      classesToRemove?.forEach((className) => {
        entry.target.classList.remove(className);
      })

    } else {
      const classesToAddStr: string | null = entry.target.getAttribute("class-add-scroll")
      const classesToRemoveStr: string | null = entry.target.getAttribute("class-add-scroll")

      const classesToAdd = classesToAddStr?.split(" ");
      const classesToRemove = classesToRemoveStr?.split(" ");

      classesToAdd?.forEach((className) => {
        entry.target.classList.remove(className);
      })

      classesToRemove?.forEach((className) => {
        entry.target.classList.add(className);
      })
    }
  });
});
toTrackEls.forEach((el) => observer.observe(el));
