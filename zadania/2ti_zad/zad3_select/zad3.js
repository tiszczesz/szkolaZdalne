/* eslint-disable no-undef */
class Game {
    constructor(id, titile, price, description) {
        this.id = id;
        this.titile = titile;
        this.price = price;
        this.description = description;
    }
    show() {
        //alert("To jest gra: " + this.titile + " cena: " + this.price);
        return `Wybrana gra: ${this.titile} cena: ${this.price}
                          zł opis: ${this.description}`;
    }
    addToSelect(id){
        let op = new Option(this.titile+" cena: "+this.price+" zł",this.id);
        $("#"+id).append(op);
    }
}
const games = [new Game(0, 'wiedźmin 3', 45.00, "gra rpg"),
                new Game(1, 'GTA IV', 66.00, "gra inna"),
                new Game(45, 'Diablo 4', 145.00, "gra rpg"),
                new Game(3, 'Jakaś gra', 66.00, "gggg gggggg"),
                new Game(34, 'Coś nowego', 50.00, "bbbb") ];
$(function () {
    $("#select").html("<select id='sel'></select>");
    games.forEach(function(elem){
      //  console.log(elem);
        elem.addToSelect("sel");
    });
    $("#sel").change(function(){
        console.log($(this).val());
        //console.log($(this).text());
        console.log($("#sel :selected").text());
        let id = $(this).val();
        let game = games.find(function(elem){
            return id == elem.id;
        });
        $("#info").html(game.show());
    });

    //todo
});