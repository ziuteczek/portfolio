const toTrackEls: NodeListOf<Element> = document.querySelectorAll(".animate-scroll");
const aboutMeSectionEl: Element | null = document.querySelector("#about-me");
const headerEl: Element | null = document.querySelector("header");

const applyScrollEffectPrefix = "on-scroll:";

const observer: IntersectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const entryClasses: string[] = [...entry.target.classList];
    const entryClassesToChange: string[] = entryClasses.filter((className) =>
      className.startsWith(applyScrollEffectPrefix)
    );
    const entryClassesTrimmed: string[] = entryClassesToChange.map((className) =>
      className.replace(applyScrollEffectPrefix, "")
    );
    const entryClassesRemove: string[] = entryClassesTrimmed
      .filter((className) => className.startsWith("-"))
      .map((className) => className.replace("-", ""));
    const entryClassesAdd: string[] = entryClassesTrimmed.filter(
      (className) => !className.startsWith("-")
    );

    if (entry.isIntersecting) {
      entryClassesAdd.forEach((className) => {
        entry.target.classList.add(className);
      });
      entryClassesRemove.forEach((className) => {
        entry.target.classList.remove(className);
      });
    } else {
      entryClassesAdd.forEach((className) => {
        entry.target.classList.remove(className);
      });
      entryClassesRemove.forEach((className) => {
        entry.target.classList.add(className);
      });
    }
  });
});
toTrackEls.forEach((el) => observer.observe(el));