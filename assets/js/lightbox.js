(function () {
  const dialog = document.createElement('div');
  dialog.className = 'lightbox';
  dialog.setAttribute('role', 'dialog');
  dialog.setAttribute('aria-modal', 'true');
  dialog.setAttribute('aria-label', 'Image preview');
  dialog.innerHTML = '<button class="lightbox-close" type="button" aria-label="Close image">×</button><img alt="">';
  document.body.appendChild(dialog);

  const enlarged = dialog.querySelector('img');
  const closeButton = dialog.querySelector('.lightbox-close');
  let lastFocused;

  function close() {
    dialog.classList.remove('open');
    enlarged.removeAttribute('src');
    if (lastFocused) lastFocused.focus();
  }

  document.querySelectorAll('[data-full]').forEach((image) => {
    image.classList.add('preview-image');
    image.setAttribute('tabindex', '0');
    image.setAttribute('role', 'button');
    image.setAttribute('aria-label', 'Open full-size image');
    const open = () => {
      lastFocused = image;
      enlarged.src = image.dataset.full;
      enlarged.alt = image.alt || 'Full-size image';
      dialog.classList.add('open');
      closeButton.focus();
    };
    image.addEventListener('click', open);
    image.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); open(); }
    });
  });

  closeButton.addEventListener('click', close);
  dialog.addEventListener('click', (event) => { if (event.target === dialog) close(); });
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && dialog.classList.contains('open')) close(); });
}());
