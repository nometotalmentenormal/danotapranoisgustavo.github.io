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
});