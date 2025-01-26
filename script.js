// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Select the card and the button
    const card = document.querySelector('.card');
    const button = document.querySelector('.click-button');
  
    // Add a click event to the button for flipping the card
    button.addEventListener('click', (event) => {
      // Prevent the click from bubbling up to the card itself
      event.stopPropagation();
  
      // Toggle the flip class to flip the card to the opposite side
      card.classList.toggle('flip');
    });
  
    // Add a click event to the card to flip back to the original side
    card.addEventListener('click', (event) => {
      // If the card is flipped (has the 'flip' class), remove it to go back to the front
      if (card.classList.contains('flip')) {
        card.classList.remove('flip');
      }
    });
  });
  