/* eslint-disable no-undef */
$(function(){
    let elems = $(".accordion .item");
  //  console.log(elems);
    elems.each((i,e)=>{
   //     console.log(e,i);
        $(e).click((event)=>{
            //console.log(event.currentTarget);            
           // $(event.currentTarget).toggleClass('active');
           let current = event.currentTarget;
           elems.each((i,e)=>{
                if(e==current){
                    console.log(e);
                    $(e).toggleClass('active')
                }else{
                   $(e).removeClass('active');
                }
           });

        })
    });
});
