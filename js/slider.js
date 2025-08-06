function scrollCarousel(direction) {
  const track = document.getElementById("carousel-track");
  const scrollAmount = track.clientWidth; // scroll by visible width
  track.scrollLeft += direction * scrollAmount;
}
