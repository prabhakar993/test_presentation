function adjustTopOffset() {
  const menubar = document.querySelector(".menubar");
  const offsetElements = document.querySelectorAll(".below-menubar");

  if (menubar) {
    const menuHeight = menubar.getBoundingClientRect().height;

    offsetElements.forEach((el) => {
      el.style.top = `${menuHeight + 1}px`; // 10px space after menu
    });
  }
}

Reveal.on("ready", adjustTopOffset);
Reveal.on("slidechanged", adjustTopOffset);
window.addEventListener("resize", adjustTopOffset);
