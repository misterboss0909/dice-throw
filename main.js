function roll() {
  return Math.floor(Math.random() * 6 + 1);
}
function toggleDice(diceNumber) {
  const dots = document.querySelectorAll('.dot');

  for (let i = 0; i < dots.length; i++) {
    if (dots[i].classList.contains(`dot-${diceNumber}`)) {
      dots[i].classList.add('dot-visible');
      dots[i].classList.add('dice-animation');
    } else {
      dots[i].classList.remove('dot-visible');
      dots[i].classList.remove('dice-animation');
    }
  }
}

async function rollDice() {
  document.getElementById('dice-roll').textContent = `rolling`;
  let diceNumber = roll();

  for (let i = 0; i < 20; i++) {
    diceNumber = roll();

    toggleDice(diceNumber);
    await new Promise((resolve) => setTimeout(resolve, 50));
  }

  if (diceNumber < 6)
    document.getElementById(
      'dice-roll'
    ).textContent = `You rolled ${diceNumber}.`;
  else {
    document.getElementById(
      'dice-roll'
    ).textContent = `You rolled ${diceNumber}, excellent!`;
  }
}
