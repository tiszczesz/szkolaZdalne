/* eslint-disable no-undef */
$(function(){
    let k = new Kolo(0,0,"kolo");
    console.log(k);
    move(k);
});

class Kolo{
    constructor(x,y,id){
        this.x=x;
        this.y=y;
        this.id=id;
        this.height=$("#"+id).height();
        this.width=$("#"+id).width();
        this.up = true;
        this.left = true;
    }
    moveBy(dx,dy){
        let width = $("#scena").width();
        let height = $("#scena").height();
        if(this.y > height - this.height) this.up = false;
        if(this.y < 0 ) this.up = true;
        if(this.x > width - this.width) this.left = false;
        if(this.x < 0 ) this.left = true;
        this.x = this.left ? this.x+dx:this.x-dx;
        this.y = this.up ? this.y+dy : this.y-dy;
    }
    getPosition(){
        return {x:this.x,y:this.y};
    }
}
function move(k){
    setInterval(function(){
        k.moveBy(1,2);
        let actual = k.getPosition();
        console.log(actual.x,actual.y);
        updateKolo(actual.x,actual.y);
    },5)
}
function updateKolo(x,y){
    $("#kolo").css({left:x,bottom:y});
}