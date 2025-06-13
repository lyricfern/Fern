window.addEventListener('scroll', function () {
  const content = document.getElementById('Content');
  const scrollY = window.scrollY;
  const zoomLevel = 100 + scrollY * 0.1; // You can change 0.1 to adjust zoom speed
  content.style.backgroundSize = `${zoomLevel}%`;
});
