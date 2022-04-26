let match = [0,0];
let totalRounds = 0;
let form = null;

window.onload = () => {
  document.forms[0].onsubmit = startPlaying; 
}

function startPlaying (e) {
  e.preventDefault();
  
  const playerNameInput = e.target[0].value || 'Héroe sin capa';
  const totalRoundsInput = Number(e.target[1].value) || 0; 
  totalRounds = totalRoundsInput;
  
  const contentHtml = `<label for="jugada"></label><select name="jugada" id="jugada" required><option value="0" disabled selected>Elegir opción</option><option value="1">Piedra</option><option value="2">Papel</option><option value="3">Tijeras</option></select>`;
  const selector = document.createElement('main');
  selector.innerHTML = contentHtml;
  const form = document.forms[0];
  const formParent = form.parentNode;
  formParent.replaceChild(selector, form)

  selector.addEventListener('change', selectorHandler);

}



function playAgain () { 
  const playAgain = document.createElement('button');
  const playAgainText = document.createTextNode('Jugar de nuevo');
  playAgain.classList.add('play-again');
  playAgain.appendChild(playAgainText);
  document.body.prepend(playAgain);
}