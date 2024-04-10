// product
var mainImg = document.getElementById("main-pic");
var smallPic = document.getElementsByClassName("sm-pic");
smallPic[0].onclick = function () {
  mainImg.src = smallPic[0].src;
};
smallPic[1].onclick = function () {
  mainImg.src = smallPic[1].src;
};
smallPic[2].onclick = function () {
  mainImg.src = smallPic[2].src;
};
smallPic[3].onclick = function () {
  mainImg.src = smallPic[3].src;
};
