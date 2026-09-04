const WEDDING_DATE = new Date('2026-12-12T14:30:00-05:00');

function pad(value) { return String(value).padStart(2, '0'); }

const weddingDate = new Date("2026-12-12T15:00:00-05:00").getTime();

    const elements = {
      days: document.getElementById("days"),
      hours: document.getElementById("hours"),
      minutes: document.getElementById("minutes"),
      seconds: document.getElementById("seconds")
    };

    const format = (value, digits = 2) => String(value).padStart(digits, "0");

    function updateCountdown() {
      const distance = weddingDate - Date.now();

      if (distance <= 0) {
        Object.values(elements).forEach((element, index) => {
          element.textContent = index === 0 ? "000" : "00";
        });
        clearInterval(timer);
        return;
      }

      const days = Math.floor(distance / 86_400_000);
      const hours = Math.floor((distance % 86_400_000) / 3_600_000);
      const minutes = Math.floor((distance % 3_600_000) / 60_000);
      const seconds = Math.floor((distance % 60_000) / 1_000);

      elements.days.textContent = format(days, 3);
      elements.hours.textContent = format(hours);
      elements.minutes.textContent = format(minutes);
      elements.seconds.textContent = format(seconds);
    }

    updateCountdown();
    const timer = setInterval(updateCountdown, 1_000);

document.getElementById('rsvpButton')?.addEventListener('click', (event) => {
  event.preventDefault();
  alert('Reemplaza este botón por el enlace de tu formulario de confirmación (Google Forms, WhatsApp u otro).');
});

const revealElements = document.querySelectorAll(".reveal, .reveal-photo");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15
  }
);

revealElements.forEach((element) => {
  observer.observe(element);
});