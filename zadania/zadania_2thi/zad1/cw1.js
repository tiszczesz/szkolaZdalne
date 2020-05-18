/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
$(function () {
    // alert("hello");
    // $("#hide").click(function () {
    //     $("#k1").hide(2000, function () {
    //         $("#k2").html("WYKONANO!!!");
    //     });
    // })
    // $("#show").click(function () {
    //     $("#k1").show(1000, function () {
    //         $("#k2").html("");
    //     });
    // })
    // $("#toggle").click(function () {
    //     $("#k1").toggle("slow");
    // });
    // $("#fadeOut").click(function () {
    //     $("#k1").fadeOut(2000);
    // });
    // $("#fadeIn").click(function () {
    //     $("#k1").fadeIn(2000);
    // });
    // $("#fadeTo").click(function () {
    //     $("#k1").fadeTo(2000, 0.2);
    // });
    // $("#fadeToggle").click(function () {
    //     $("#k1").fadeToggle(2000);
    // });
    // $("#slideUp").click(function () {
    //     $("#k1").slideUp(2000);
    // });
    // $("#slideDown").click(function () {
    //     $("#k1").slideDown(2000);
    // });
    // $("#slideToggle").click(function () {
    //     $("#k1").slideToggle(2000, function () {
    //         alert("Skończyło się!!!");
    //     });
    // });
    // $("#animate").click(function () {
    //     $("#k2").animate({ opacity: 0.5, left: 200,height:"-5" }, 2000);
    // });
    $("input[type=button]").each(function(){
        let value = $(this).val();
       // console.log(value);
        switch(value){
            case "hide": $(this).click(function(){$("#k1").hide(2000)});break;
            case "show": $(this).click(function(){$("#k1").show(2000)});break;
            case "toggle": $(this).click(function(){$("#k1").toggle(2000)});break;
            case "fadeIn": $(this).click(function(){$("#k1").fadeIn(2000)});break;
            case "fadeOut": $(this).click(function(){$("#k1").fadeOut(2000)});break;
            case "fadeTo": $(this).click(function(){$("#k1").fadeTo(2000,0.3)});break;
            case "fadeToggle": $(this).click(function(){$("#k1").fadeToggle(2000)});break;
            case "slideUp": $(this).click(function(){$("#k1").slideUp(2000)});break;
            case "slideDown": $(this).click(function(){$("#k1").slideDown(2000)});break;
            case "slideToggle": $(this).click(function(){$("#k1").slideToggle(2000)});break;
            case "animate":$(this).click(function(){$("#k1")
                      .animate({ opacity: 0.5, left: 600,height:30 }, 2000)});break;
            case "stop" : $(this).click(function(){$("#k1").stop()}); break;
            default: console.log("error");        
        }
    })
});