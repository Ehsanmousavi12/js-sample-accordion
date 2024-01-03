document.querySelectorAll(".accordion").forEach((accordion) => {
  accordion.querySelectorAll(".item").forEach((item) => {
    const btn = item.querySelector("button");

    btn.addEventListener("click", () => {
      const isShow = item.classList.contains("show");

      closeAllItems(accordion);

      if (isShow === true) {
        item.classList.remove("show");
      } else {
        item.classList.add("show");
      }
    });
  });
});

function closeAllItems(accordion) {
  accordion.querySelectorAll(".item").forEach((item) => {
    item.classList.remove("show");
  });
}
