/* eslint-disable no-undef */
$(function(){
    let elems = $('.main .item');
    //console.log(elems);
    elems.each(function(i,elem){
        console.log(i,elem);
        $(elem).click(function(){
            //alert("ffff");
           
            $(this).toggleClass('active');
        });
    });
});