
var items = document.getElementsByClassName("item");//图片
var goPreBtn = document.getElementById("goPre")
var goNextBtn = document.getElementById("goNext");
var index = 0;//index表示第几张图片，第几张图片就会有active这个类名
var points = document.getElementsByClassName("point");//点
var clearActive = function () {
    for (var i = 0; i < items.length; i++) {
        items[i].className = "item";
        points[i].className = "point";
    }
}
var goIndex = function () {
    clearActive();
    items[index].className = "item active";
    points[index].className = "point active";
}
var goNext = function () {
    if (index < 4) {
        index++;
    }
    else {
        index = 0;
    }
    goIndex();
}
var goPre = function () {
    if (index > 0) {
        index--;
    } else {
        index = 4;
    }
    goIndex();
}
//为什么外部引用添加不了句柄
goNextBtn.addEventListener("click", goNext);
goPreBtn.addEventListener("click", goPre);
for (var i = 0; i < points.length; i++) {
    points[i].addEventListener("click", function () {
        index = this.getAttribute("data-index");
        console.log(index)
        goIndex();
    })
}