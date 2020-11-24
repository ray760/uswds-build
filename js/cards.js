// Stored variables
const parentEl = document.querySelector('.grid-row');

// JSON-Server code

const cardData = async () => {
  let uri = 'http://localhost:3000/cards';
  let local_uri = '../data-base/ds.json';

  const response = await fetch(uri);
  const cards = await response.json();

  const data = cards.cards;

  let cardTemplate = '';

  data.forEach( card => {
    cardTemplate += `
    <div class="desktop:grid-col-3 tablet:grid-col-4 mobile-lg:grid-col-6 grid-col-12">
      <h5>${card.title}</h5>
      <p>${card.data}</p>
    </div>
    `

  });

  parentEl.innerHTML = cardTemplate;
}

window.addEventListener('DOMContentLoaded', () => cardData());