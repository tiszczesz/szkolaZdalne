window.onload = function(){
    let elems = document.querySelectorAll('.accordion .item');
    //this.console.log(elems);
    for(let i=0;i<elems.length;i++){
        elems[i].onclick = function(){
            let current = this;
            elems.forEach((e,i)=>{
                console.log(i,e);
                if(e==current){
                    e.classList.toggle('active');
                }else{
                    e.classList.remove('active');
                }
            });
           // this.classList.toggle('active');
        }
        
    }
}