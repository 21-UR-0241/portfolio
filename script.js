function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

  function toggleDescription(button) {
    const description = button.parentElement.previousElementSibling;
    if (description.style.display === "none") {
      description.style.display = "block";
      button.textContent = "Hide Description";
    } else {
      description.style.display = "none";
      button.textContent = "Read Description";
    }
  }
