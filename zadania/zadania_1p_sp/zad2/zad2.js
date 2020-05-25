/* eslint-disable no-undef */
$(function () {
    $("#select").html("<select id='sel'></select>");
    towary.forEach(function(elem){
       // console.log(elem);
        elem.addToSelectById("sel");
    });
    $("#sel").change(function(){
        console.log($(this).val());
        console.log($("#sel :selected").text());
        let id = $(this).val();
        let towar = towary.find(function(elem){
            return id == elem.id;
        })
        console.log(towar);
        $("#info").html(towar.show());
    });

    $("#info").html(towary[$("#sel").val()].show());
});

class Towar {
    constructor(id, nazwa, cena, opis = "domyślny tekst") {
        this.id = id;
        this.nazwa = nazwa;
        this.cena = cena;
        this.opis = opis;
    }
    show() {
        //alert("Towar: " + this.nazwa);
        return `Opis towaru<br>Nazwa: <span class='nazwa'>${this.nazwa}</span>
               cena: <span class='cena'>${this.cena}</span> zł<br>
               opis: <span class='opis'>${this.opis}</span>`;
    }
    addToSelectById(id){
        let op = new Option(this.nazwa+" cena: "+this.cena+" zł",this.id);
        $('#'+id).append(op);
    }
}
const towary = [new Towar(0, "kiełbasa", 23.67),
    new Towar(1, "bułka mała", 0.99,"Wypieczona bułka mała"),
    new Towar(2, "cukierki ...", 12.88,"Słodkie landrynki"),
    new Towar(33, "cukier", 12.67,"cukier kryształ biały"),
    new Towar(4, "szczotka do włosów", 34.99,"Wygodna szczotka dla każdych włosów"),
    new Towar(12, "mąka tortowa", 6.67,"idealna mąka do pieczenia"),];