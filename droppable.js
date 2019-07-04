$(document).ready(function () {
    $("#rect1").draggable();
    $("#rect2").droppable();

    $("#rect2").on("drop",function (event,ui) {
       // alert(event);
        $("#rect2").text("drop事件");
    })
})