document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('.card');
    const button = document.querySelector('.click-button');
  
    button.addEventListener('click', (event) => {
      event.stopPropagation();
  
      card.classList.toggle('flip');
    });
  
    card.addEventListener('click', (event) => {
      if (card.classList.contains('flip')) {
        card.classList.remove('flip');
      }
    });
  });
  
