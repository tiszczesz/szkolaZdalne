$(function(){
    // $("#hide").click(function(){
    //     //alert("klik");
    //     $("#kolo").hide(2000);
    // });
    // $("#show").click(function(){
    //     //alert("klik");
    //     $("#kolo").show(1000,function(){
    //         $("#inny").css("color","red");
    //     });
    // });
    // $("#toggle").click(function(){
    //     $("#kolo").toggle("slow");
    // })
    // $("#fadeIn").click(function(){
    //     $("#kolo").fadeIn("slow");
    // })
    // $("#fadeOut").click(function(){
    //     $("#kolo").fadeOut("slow");
    // })
    // $("#fadeTo").click(function(){
    //     $("#kolo").fadeTo("slow",0.2);
    // })
    // $("#fadeToggle").click(function(){
    //     $("#kolo").fadeToggle("slow");
    // })
    // $("#slideUp").click(function(){
    //     $("#kolo").slideUp(4000);
    // });
    // $("#slideDown").click(function(){
    //     $("#kolo").slideDown("slow");
    // });
    // $("#slideToggle").click(function(){
    //     $("#kolo").slideToggle("slow");
    // });

    ////////////////////////////////////////////
    
    $("input[type=button]").each(function(i){
        //console.log(i+": "+$(this));
        $(this).click(function(){
            //alert($(this).val());
            switch($(this).val()){
                case "hide": $("#kolo").hide(3000);break;
                case "show": $("#kolo").show(3000);break;
                case "toggle": $("#kolo").toggle(3000);break;
                case "fadeIn": $("#kolo").fadeIn(3000);break;
                case "fadeOut": $("#kolo").fadeOut(3000);break;
                case "fadeTo": $("#kolo").fadeTo(3000,0.3);break;
                case "fadeToggle": $("#kolo").fadeToggle(3000);break;
                case "slideUp": $("#kolo").slideUp(3000);break;
                case "slideDown": $("#kolo").slideDown(3000);break;
                case "slideToggle": $("#kolo").slideToggle(3000);break;
                case "animate": $("#kolo").animate({left:300,opacity:0.3},3000);break;
                case "stop": $("#kolo").stop();break;
                default: console.log("error");
            }
        });
    });
});