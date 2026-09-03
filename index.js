const WEDDING_DATE = new Date('2026-12-12T14:30:00-05:00');

function pad(value) { return String(value).padStart(2, '0'); }

function updateCountdown() {
  const diff = Math.max(0, WEDDING_DATE.getTime() - Date.now());
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor(diff / 3600000) % 24;
  const minutes = Math.floor(diff / 60000) % 60;
  const seconds = Math.floor(diff / 1000) % 60;

  document.getElementById('days').textContent = pad(days);
  document.getElementById('hours').textContent = pad(hours);
  document.getElementById('minutes').textContent = pad(minutes);
  document.getElementById('seconds').textContent = pad(seconds);
}

updateCountdown();
setInterval(updateCountdown, 1000);

document.getElementById('rsvpButton')?.addEventListener('click', (event) => {
  event.preventDefault();
  alert('Reemplaza este botón por el enlace de tu formulario de confirmación (Google Forms, WhatsApp u otro).');
});
