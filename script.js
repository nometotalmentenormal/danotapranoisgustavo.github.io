document.addEventListener('DOMContentLoaded', () => {
  // Project details modal (Vessel of Regret)
  const modal = document.getElementById('project-modal');
  const modalCloseElements = modal ? modal.querySelectorAll('[data-close]') : [];
  let lastActiveElement = null;

  function openModal() {
    if (!modal) return;
    lastActiveElement = document.activeElement;
    modal.classList.add('show');
    modal.setAttribute('aria-hidden', 'false');
    // focus close button
    const closeBtn = modal.querySelector('.modal-close');
    if (closeBtn) closeBtn.focus();
    document.addEventListener('keydown', handleKeyDown);
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('show');
    modal.setAttribute('aria-hidden', 'true');
    document.removeEventListener('keydown', handleKeyDown);
    if (lastActiveElement && typeof lastActiveElement.focus === 'function') lastActiveElement.focus();
  }

  function handleKeyDown(e) {
    if (e.key === 'Escape') closeModal();
  }

  // attach close handlers
  modalCloseElements.forEach(el => el.addEventListener('click', closeModal));

  // open modal when clicking the vessel project's CTA
  const vesselBtn = document.querySelector('[data-project="vessel"]');
  if (vesselBtn) {
    vesselBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  }

  // About modal
  const aboutModal = document.getElementById('about-modal');
  const aboutCloseElements = aboutModal ? aboutModal.querySelectorAll('[data-close]') : [];

  function openAboutModal() {
    if (!aboutModal) return;
    lastActiveElement = document.activeElement;
    aboutModal.classList.add('show');
    aboutModal.setAttribute('aria-hidden', 'false');
    const closeBtn = aboutModal.querySelector('.modal-close');
    if (closeBtn) closeBtn.focus();
    document.addEventListener('keydown', handleAboutKeyDown);
  }

  function closeAboutModal() {
    if (!aboutModal) return;
    aboutModal.classList.remove('show');
    aboutModal.setAttribute('aria-hidden', 'true');
    document.removeEventListener('keydown', handleAboutKeyDown);
    if (lastActiveElement && typeof lastActiveElement.focus === 'function') lastActiveElement.focus();
  }

  function handleAboutKeyDown(e) {
    if (e.key === 'Escape') closeAboutModal();
  }

  aboutCloseElements.forEach(el => el.addEventListener('click', closeAboutModal));

  // open about modal from nav and hero
  const navAbout = document.getElementById('nav-about');
  const learnMore = document.getElementById('learn-more');
  if (navAbout) navAbout.addEventListener('click', (e) => { e.preventDefault(); openAboutModal(); });
  if (learnMore) learnMore.addEventListener('click', (e) => { e.preventDefault(); openAboutModal(); });

  // Contact modal
  const contactModal = document.getElementById('contact-modal');
  const contactCloseElements = contactModal ? contactModal.querySelectorAll('[data-close]') : [];
  const contactForm = document.getElementById('contact-form');

  function openContactModal() {
    if (!contactModal) return;
    lastActiveElement = document.activeElement;
    contactModal.classList.add('show');
    contactModal.setAttribute('aria-hidden', 'false');
    const closeBtn = contactModal.querySelector('.modal-close');
    if (closeBtn) closeBtn.focus();
    document.addEventListener('keydown', handleContactKeyDown);
  }

  function closeContactModal() {
    if (!contactModal) return;
    contactModal.classList.remove('show');
    contactModal.setAttribute('aria-hidden', 'true');
    document.removeEventListener('keydown', handleContactKeyDown);
    if (lastActiveElement && typeof lastActiveElement.focus === 'function') lastActiveElement.focus();
  }

  function handleContactKeyDown(e) {
    if (e.key === 'Escape') closeContactModal();
  }

  contactCloseElements.forEach(el => el.addEventListener('click', closeContactModal));

  // open contact modal from nav and hero
  const navContact = document.getElementById('nav-contact');
  const heroContact = document.getElementById('hero-contact');
  if (navContact) navContact.addEventListener('click', (e) => { e.preventDefault(); openContactModal(); });
  if (heroContact) heroContact.addEventListener('click', (e) => { e.preventDefault(); openContactModal(); });

  // handle form submit by opening mailto: with encoded fields
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = contactForm.elements['name'].value.trim();
      const message = contactForm.elements['message'].value.trim();
      const subject = encodeURIComponent('Contato — Death Whisper');
      const body = encodeURIComponent(`Nome: ${name}\n\n${message}`);
      // open the user's email client
      window.location.href = `mailto:deathwhisper@rnicrosoft.com?subject=${subject}&body=${body}`;
      // close modal after attempt
      closeContactModal();
    });
  }
});