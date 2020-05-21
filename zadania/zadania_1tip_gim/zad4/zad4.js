/* eslint-disable no-undef */
$(function(){
    let k = new Kolo(0,0,"kolo");
    console.log(k);
    console.dir(k);
    moveKolo(k);
});
class Kolo{
    constructor(x,y,id){
        this.x=x;
        this.y=y;
        this.id = id;
        this.width = $("#"+id).width();
        this.height = $("#"+id).height();
        this.left = true;
        this.up = true;
    }
    getPosition(){ // getPostion = () => {return {x:this.x,y:this.y};}
        return {x:this.x,y:this.y};
    }
    move(dx,dy){
        let height = $("#scena").height();
        let width = $("#scena").width();
        if(this.y>height-this.height) this.up = false;
        if(this.y<0) this.up = true;
        if(this.x>width-this.width) this.left=false;
        if(this.x<0) this.left = true;
        this.x = this.left ? this.x+dx : this.x-dx;
        this.y = this.up ? this.y+dy:this.y-dy;
    }
}
function moveKolo(elem){
    setInterval(function(){
        elem.move(2,3);
        position = elem.getPosition();
        updateObject(position);
       console.log(position);
    },20);
}
function updateObject(pos){
    $("#kolo").css({left:pos.x,bottom:pos.y})
}