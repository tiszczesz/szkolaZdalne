/* eslint-disable no-undef */
$(function(){
    $("#list").append($('<table id="tabBooks">')
    .append("<tr><th>Lp</th><th>Tytuł</th><th>Autor</th><th>Cena</th><th></th></tr>"));
    books.forEach(function(elem,i){
        console.log(elem);
        elem.addToTable("tabBooks",i);
    });
    $('.btnAdd').each(function(i,elem){
        console.log(elem);
       // elem.onclick= <-- tu było onClick :)
        $(elem).click(function(){ //aby zrobic obiekt jQuery $()
            console.log('dddd');
            alert($(this).val()+" towar o id: "+$(this).attr("id"));
        });
    });
});
class Book{
    constructor(id,title,author,price){
        this.id=id;
        this.title=title;
        this.price=price;
        this.author=author;
    }
    addToTable(tableId,lp){
        return $('<tr>')
        .append($('<td>').append(lp+1))
        .append($('<td>').append(this.title))
        .append($('<td>').append(this.author))
        .append($('<td>').append(this.price).attr("class",'price'))
        .append($('<td>').append($('<input>').attr('class','btnAdd').attr('type','button')
                 .attr('id',this.id).val("Dodaj do koszyka")))
        .appendTo($("#"+tableId));
    }
}
const books = [new Book(1,"ABC ogrodnictwa","Jan Nowak",15.99),
                new Book(2,"Zwierzęta świata","Monika Drożdż",7.99),
                new Book(3,"Wędkarstwo","Roman Kowal",4.99),
                new Book(4,"Góry świata","Jan Nowak",15.99),
                new Book(5,"Matematyka przewodnik","Maryla Rod",56.69)];