document.addEventListener('DOMContentLoaded', () => {
  const formInput = document.querySelector('#new-char-form');
  formInput.addEventListener('submit', handleFormSubmit);

  const deleteButton = document.querySelector('#delete-button');
  deleteButton.addEventListener('click', handleDelete);
});

handleFormSubmit = function(event) {
  event.preventDefault();
  const charName = this.charName.value;
  const charClass = this.charClass.value;
  const charRace = this.charRace.value;
  //this gets the array of active/disabled that you need to loop through to get their 'checked' value
  const contentTitle = document.querySelector('#content-title');
  const charStatus = document.querySelectorAll('.charStatus');
  const players = document.querySelector('#player-list');
  const playerLink = newElement('a', players);
  getUniqueId(playerLink, players);
  playerLink.addEventListener('click', showDetails);
  const playerDiv = newElement('div', playerLink);
  playerDiv.classList.add('player-item');
  const playerName = newElement('h2', playerDiv);
  playerName.textContent = `${charName.toUpperCase()}`;
  const playerClass = newElement('h3', playerDiv);
  playerClass.textContent = `Class: ${charClass}`;
  playerClass.classList.add(`${charClass}`);
  playerClass.classList.add('plClass');
  const playerRace = newElement('h3', playerDiv);
  playerRace.textContent = `Race: ${charRace}`;
  const playerStatus = newElement('p', playerDiv);
  printStatus(playerStatus, charStatus);
  const formInput = document.querySelector('#new-char-form');
  formInput.reset();
};

newElement = function (tagName, parentName) {
  const newElem = document.createElement(tagName);
  parentName.appendChild(newElem);
  return newElem;
};

printStatus = function (nodeName, radioInput) {
  if (radioInput[0].checked === true) {
    return nodeName.textContent = "Playing";
  }
  else {
    nodeName.textContent = "Not playing";
  };
};

let uniqId = 0;
getUniqueId = function (elem, parent) {
  elem.id = `dnd${uniqId++}`;
}

showDetails = function (event) {
  const playerDiv = event.target.parentNode.parentNode;
  playerDiv.href = "resources/playerDetails.html";
  // console.log(playerDiv);
};

handleDelete = function () {
  const players = document.querySelector('#player-list');
  players.textContent = '';
};
