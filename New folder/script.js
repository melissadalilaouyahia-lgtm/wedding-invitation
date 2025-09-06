function openEnvelope() {
  document.querySelector('.flap').classList.add('open');
  const card = document.querySelector('.card');
  card.classList.remove('hidden');
  card.classList.add('visible');
  document.getElementById('bgMusic').play();
  createConfetti();
}

function createConfetti() {
  for (let i = 0; i < 30; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = `${Math.random() * 100}%`;
    confetti.style.animationDelay = `${Math.random() * 2}s`;
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 5000);
  }
}
