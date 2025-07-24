const sidebar = document.querySelector(".sidebar");
const lineVertical = document.querySelector(".line-verical");
const content = document.querySelector(".content");

lineVertical.addEventListener("mousedown", () => {
  document.addEventListener("mousemove", handleDrag);
  document.addEventListener("mouseup", () => {
    document.removeEventListener("mousemove", handleDrag);
  });
});

const handleDrag = (e) => {
  const clientX = e.clientX;
  sidebar.style.width = `${clientX}px`;
};
