$(document).ready(function () {
    $("#btn").button();
    $("#selector").selectable();

    $("#btn").on("click",function () {
        if($("#right").hasClass("ui-selected")){
            alert("答对了");
        }
    })
})