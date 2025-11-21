document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('bottom-btn');
  const msg = document.getElementById('message');

  btn.addEventListener('click', () => {
    const isShown = msg.classList.toggle('show');
    btn.setAttribute('aria-expanded', String(isShown));
    msg.setAttribute('aria-hidden', String(!isShown));
    // change text if you want:
    // msg.textContent = 'Your custom text here.';
  });
});