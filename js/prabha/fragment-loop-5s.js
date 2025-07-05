Reveal.addEventListener("fragmentshown", function (event) {
  if (event.fragment.dataset.fragmentIndex === "1") {
    const fragment = event.fragment;
    fragment.classList.add(".loopingBox.visible");

    // Stop animation after 5 seconds
    setTimeout(() => {
      fragment.classList.remove(".loopingBox.visible");
    }, 2000);
  }
});
