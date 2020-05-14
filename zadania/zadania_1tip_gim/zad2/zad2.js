class Film {
    constructor(id, title, price, author) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.author = author;
    }
    show(){
        // alert("To jest film: "+this.title+" cena: "+this.price
        // +" reżyser: "+this.author);
        return `Informacja o filmie: tytuł: <span class='title'>${this.title}</span>
               cena: <span class='price'>${this.price}</span> zł reżyser: 
               <span class='author'>${this.author}</span>`;
    }
    filmToOption(selectId){
        let op = new Option(this.title+" cena: "+this.price+" zł",this.id);
        $("#"+selectId).append(op);
    }
}
const films = [new Film(0,"ABC programowania w JS",15.99,"Zenon"),
                new Film(1,"Szeregowiec R.",66.99,"Franek"),
                new Film(2,"Kwiatki w polu",22.99,"Teresa"),
                new Film(3,"Pusto w głowie",10.99,"Zenon"),
                new Film(4,"Ostatni film o...",120.99,"Jerzy")
            ];

$(function(){
    $("#select").html("<select id='sel'></select>");
    films.forEach(function(elem,i){
       // console.log(elem);
       // console.log(i);
        elem.filmToOption("sel");
    });
    $("#sel").change(function(){
        console.log($(this).val());
        //console.log($(this).html());
        let id = $(this).val();
        console.log($("#sel :selected").html());
        let film = films.find(function(elem){
            return elem.id == id;
        })
        $("#info").html(film.show());
    });
})           