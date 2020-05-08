$(function(){
    //alert("dddd");
    // $("#hide").click(function(){
    //     $("#k1").hide(2000,function(){
    //         $("#k2").html("koniec");
    //     });
    // });
    // $("#show").click(function(){
    //     $("#k1").show(2000,function(){
    //         $("#k2").html("pokazano");
    //     });
    // });
    // $("#toggle").click(function(){
    //     $("#k1").toggle("slow");
    // });

    // $("#fadeOut").click(function(){
    //     $("#k1").fadeOut(2000);
    // });
    // $("#fadeIn").click(function(){
    //     $("#k1").fadeIn(2000);
    // });
    // $("#fadeTo").click(function(){
    //     $("#k1").fadeTo(2000,0);
    // });
    // $("#fadeToggle").click(function(){
    //     $("#k1").fadeToggle();
    // });
    // $("#slideUp").click(function(){
    //     $("#k1").slideUp(4000);
    // });
    // $("#slideDown").click(function(){
    //     $("#k1").slideDown(4000);
    // });

    // $("#slideToggle").click(function(){
    //     $("#k1").slideToggle(4000);
    // });

    $("input[type=button]").each(function(i){
        $(this).click(function(){
            switch($(this).val()){
                case "hide": $("#k1").hide(3000);break;
                case "show": $("#k1").show(3000);break;
                case "toggle": $("#k1").toggle(3000);break;
                case "fadeIn": $("#k1").fadeIn(3000);break;
                case "fadeOut": $("#k1").fadeOut(3000);break;
                case "fadeTo": $("#k1").fadeTo(3000,0.3);break;
                case "fadeToggle": $("#k1").fadeToggle(3000);break;
                case "slideUp": $("#k1").slideUp(3000);break;
                case "slideDown": $("#k1").slideDown(3000);break;
                case "slideToggle": $("#k1").slideToggle(3000);break;
                case "animate": $("#k1").animate({
                    left:300,
                    opacity:0.3
                },3000);break;
                case "stop" : $("#k1").stop();
                //todo
                default: console.log("error");
            }
        });
    });
});