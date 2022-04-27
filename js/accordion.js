function accordion(button) {
  /* Toggle between adding and removing the "active" class,
  to highlight the button that controls the panel */
  button.classList.toggle("active");

  /* Toggle between hiding and showing the active panel */
  var panel = button.nextElementSibling;
  if (panel.style.display === "block") {
    panel.style.display = "none";
  } else {
    panel.style.display = "block";
  }
}

function setAccordion(button) {
  accordion(button)

  const setId = button.getAttribute('data-set-code')
  loadCards(setId)
}

function cardAccordion(button) {
  accordion(button)

  const cardId = button.getAttribute('data-card-id')
  const image = document.getElementById(cardId)
  const zoomImage = function() {
    imageZoom(cardId, `${cardId}-zoom`);
  }

  image.onload = zoomImage;
  window.addEventListener('resize', zoomImage);
}
