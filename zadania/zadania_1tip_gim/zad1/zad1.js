$(function(){
    //#region 
    // $("#show").click(function(){
    //     $("#k1").show(2000,function(){
    //         $("#k2").html("pokazano");
    //     });
    // });
    // $("#hide").click(function(){
    //     $("#k1").hide(3000,function(){
    //         $("#k2").html("ukryto")
    //     });
    // });
    // $("#toggle").click(function(){
    //     $("#k1").toggle(1000);
    // });
    // $("#fadeOut").click(function(){
    //     $("#k1").fadeOut(2000);
    // });
    // $("#fadeIn").click(function(){
    //     $("#k1").fadeIn(4000);
    // });
    // $("#fadeTo").click(function(){
    //     $("#k1").fadeTo(2000,0.4);
    // });
    // $("#fadeToggle").click(function(){
    //     $("#k1").fadeToggle(3000);
    // });
    // $("#slideUp").click(function(){
    //     $("#k1").slideUp(3000);
    // });
    // $("#slideDown").click(function(){
    //     $("#k1").slideDown(3000);
    // });
    // $("#slideToggle").click(function(){
    //     $("#k1").slideToggle(3000);
    // });
    //#endregion
    $("input[type=button]").each(function(i){
        //console.log(i+" elem: "+$(this));
        $(this).click(function(){
            //alert($(this).val());
            switch($(this).val()){
                case "show":$("#k1").show(3000);break;
                case "hide":$("#k1").hide(3000);break;
                case "toggle":$("#k1").toggle(3000);break;
                case "fadeIn":$("#k1").fadeIn(3000);break;
                case "fadeOut":$("#k1").fadeOut(3000);break;
                case "fadeTo":$("#k1").fadeTo(3000,0.4);break;
                case "fadeToggle":$("#k1").fadeToggle(3000);break;
                case "slideDown":$("#k1").slideDown(3000);break;
                case "slideUp":$("#k1").slideUp(3000);break;
                case "slideToggle":$("#k1").slideToggle(3000);break;
                case "animate":$("#k1").animate({left:"+=100px"});break;
                case "stop":$("#k1").stop();break;
                default: console.log("error");
            }
        });
    });

});