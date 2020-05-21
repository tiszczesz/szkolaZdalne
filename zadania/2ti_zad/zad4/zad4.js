/* eslint-disable no-undef */
$(function(){
    let o = new Obiekt(0,0,"kolo",vx,vy);
    console.log(o);
    moveKolo(o);
});
class Obiekt{
    constructor(x,y,id){
        this.x = x;
        this.y = y;
        this.id = id;
        this.width = $("#"+id).width();
        this.height = $("#"+id).height();
        this.up = true;
        this.left = true;
    }
    getPosition(){
        return {x:this.x,y:this.y};
    }
    move(dx,dy){
        let width = $("#scena").width();
        let height = $("#scena").height();
        if(this.y>height-this.height) this.up = false;
        if(this.y<0) this.up = true;
        if(this.x>width-this.width) this.left = false;
        if(this.x<0) this.left = true;
        this.x = this.left ? this.x+dx:this.x-dx;
        this.y = this.up ? this.y+dy:this.y-dy;
    }
}
function moveKolo(elem){
    setInterval(function(){
        elem.move(3,2);
        let position = elem.getPosition();
        updateElem(position);
    },20);
}
function updateElem(pos){
    $("#kolo").css({left:pos.x,bottom:pos.y});
}