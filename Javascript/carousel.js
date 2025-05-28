window.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.carousel-track');
  const prevBtn = document.querySelector('.carousel-button.prev');
  const nextBtn = document.querySelector('.carousel-button.next');

  if (!track || !prevBtn || !nextBtn) return; // Safety check

  const items = Array.from(track.children);
  const itemWidth = items[0].offsetWidth;

  let currentIndex = 0;

  function moveToIndex(index) {
    const maxIndex = items.length - 1;
    currentIndex = Math.max(0, Math.min(index, maxIndex));
    track.style.transform = `translateX(-${itemWidth * currentIndex}px)`;
  }

  prevBtn.addEventListener('click', () => {
    moveToIndex(currentIndex - 1);
  });

  nextBtn.addEventListener('click', () => {
    moveToIndex(currentIndex + 1);
  });
});
