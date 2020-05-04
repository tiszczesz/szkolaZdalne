$(function () {
    // alert("hello");
    $("#hide").click(function () {
        $("#k1").hide(2000, function () {
            $("#k2").html("WYKONANO!!!");
        });
    })
    $("#show").click(function () {
        $("#k1").show(1000, function () {
            $("#k2").html("");
        });       
    })
    $("#toggle").click(function () {
        $("#k1").toggle("slow");
    });
    $("#fadeOut").click(function(){
        $("#k1").fadeOut(2000);
    });
    $("#fadeIn").click(function(){
        $("#k1").fadeIn(2000);
    });
    $("#fadeTo").click(function(){
        $("#k1").fadeTo(2000,0.2);
    });
    $("#fadeToggle").click(function(){
        $("#k1").fadeToggle(2000);
    });
});