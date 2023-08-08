var carouselItems = document.querySelectorAll("#myCarousel #carousel-item");

carouselItems.forEach(function (item) {
  var minPerSlide = 6;
  var next = item.nextElementSibling;

  if (!next) {
    next = item.parentNode.querySelector("#carousel-item:first-child");
  }

  item.appendChild(next.firstElementChild.cloneNode(true));

  for (var i = 0; i < minPerSlide - 1; i++) {
    next = next.nextElementSibling;

    if (!next) {
      next = item.parentNode.querySelector("#carousel-item:first-child");
    }

    item.appendChild(next.firstElementChild.cloneNode(true));
  }
});
