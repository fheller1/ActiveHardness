document.querySelectorAll('.paper-slideshow').forEach((slideshow) => {
  const slides = Array.from(slideshow.querySelectorAll('.paper-slide'));
  const controls = slideshow.querySelector('.paper-slideshow-controls');
  const status = slideshow.querySelector('.paper-slide-status');
  let current = 0;

  function showSlide(index) {
    const focusOnSlide = slides.some((slide) => slide.contains(document.activeElement));
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => {
      slide.hidden = slideIndex !== current;
    });
    status.textContent = `${current + 1} / ${slides.length}`;
    if (focusOnSlide) slideshow.focus({ preventScroll: true });
  }

  controls.querySelectorAll('[data-slide-step]').forEach((button) => {
    button.addEventListener('click', () => {
      showSlide(current + Number(button.dataset.slideStep));
    });
  });

  slideshow.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      showSlide(current + (event.key === 'ArrowRight' ? 1 : -1));
    }
  });

  showSlide(0);
  controls.hidden = false;
});
