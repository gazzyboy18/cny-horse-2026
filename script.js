const audio = document.getElementById('cny-audio');
const btn = document.getElementById('play-btn');

audio.volume = 0.7;
audio.play().catch(() => {});

btn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    btn.textContent = 'Pause Music';
  } else {
    audio.pause();
    btn.textContent = 'Play Music';
  }
});
