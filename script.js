const icons = document.querySelectorAll('.active-icon');

// Loop through each icon and add event listener
icons.forEach((icon, index) => {
  let collapse = document.getElementById(`collapse${index + 1}`);
  let active = false;

  icon.addEventListener('click', () => {
    if (!active) {
      icon.src = "./assets/images/icon-minus.svg";
      collapse.classList.add("show");
    } else {
      icon.src = "./assets/images/icon-plus.svg";
      collapse.classList.remove("show");
    }
    active = !active;
  });
});