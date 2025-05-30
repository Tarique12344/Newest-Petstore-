document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carousel-track");
  const items = Array.from(track.children);
  const prevBtn = document.querySelector(".carousel-button.prev");
  const nextBtn = document.querySelector(".carousel-button.next");

  let currentIndex = 0;

  // Calculate item width including margin
  const itemStyle = getComputedStyle(items[0]);
  const itemWidth = items[0].offsetWidth + parseInt(itemStyle.marginRight);

  const maxIndex = items.length - Math.floor(track.parentElement.offsetWidth / itemWidth);

  function moveTo(index) {
    currentIndex = Math.max(0, Math.min(index, maxIndex));
    const distance = itemWidth * currentIndex;
    track.style.transform = `translateX(-${distance}px)`;
  }

  nextBtn.addEventListener("click", () => {
    if (currentIndex >= maxIndex) {
      moveTo(0); // Loop to start
    } else {
      moveTo(currentIndex + 1);
    }
  });

  prevBtn.addEventListener("click", () => {
    if (currentIndex <= 0) {
      moveTo(maxIndex); // Loop to end
    } else {
      moveTo(currentIndex - 1);
    }
  });

  // Initial position
  moveTo(0);
});
