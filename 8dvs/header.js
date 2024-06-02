window.onload = function () {
  infiniteSlide();
};

function infiniteSlide() {
  let slideContents = document.getElementsByClassName(
    "infinite-slider-content"
  );
  for (let i = 0; i < slideContents.length; i++) {
    let slide = slideContents[i];
    let numSlides = 30;
    let newContent = "";
    for (let i = 0; i < numSlides; i++) {
      newContent += slide.innerHTML;
    }
    slide.innerHTML = newContent;
  }
}
