window.onload = function(){
    let elems = document.querySelectorAll('.accordion .item');
    this.console.log(elems);
    for(let i=0;i<elems.length;i++){
        elems[i].onclick = function(){
            this.classList.toggle('active');
        }
        
    }
}