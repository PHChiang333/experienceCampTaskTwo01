// 用ready()確認document有載入
// .ready(function(event){要執行的動作})
$(document).ready(function () {
  $(".menuBtn").click(function (event) {
    //     當滑鼠click的時候要執行動作{]

    $(".menuBtn").toggleClass("active");
    //     設定.btn狀態是在active還是非active
    $(".hamburger").toggleClass("close");
    //     漢堡格線在.active的時候消失(.close屬性)
    $(".closure").toggleClass("close");
    //     closure圖標在沒有.active的時候消失(.close屬性)
  });
});
