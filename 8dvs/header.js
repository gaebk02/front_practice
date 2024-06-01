window.onload = function () {
  infiniteSlide();
};

function infiniteSlide() {
  var slide = document.getElementById("infinite-slide");
  var slideWidth = slide.offsetWidth;
  var windowWidth = window.innerWidth;

  var numSlides = Math.ceil(windowWidth / slideWidth) + 30; // 화면 너비를 넘어서는 만큼 추가로 반복할 횟수 계산
  var newContent = "";

  for (var i = 0; i < numSlides; i++) {
    newContent += slide.innerHTML; // 문구 반복해서 newContent에 추가
  }

  slide.innerHTML = newContent; // 반복된 문구를 요소에 설정
}
