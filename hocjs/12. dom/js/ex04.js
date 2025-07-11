const liList = document.querySelectorAll("ul li");
liList.forEach((li) => {
  li.addEventListener("click", () => {
    const liActive = document.querySelector(".active");

    li.classList.toggle("active");

    if (liActive) {
      liActive.classList.remove("active");
    }
  });
});
