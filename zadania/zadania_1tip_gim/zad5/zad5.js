/* eslint-disable no-undef */
$(function(){
    $("#list").append($('<table id="tab1">')
    .append("<tr><th>Lp</th><th>Tytuł</th><th>Autor</th><th>Cena</th><th></th></tr>"));
    $("#card").append($("<ul id='lista'>"))
    books.forEach(function(elem,i){
       // console.log(elem,i);
        elem.addToTable('tab1',i);
    })
    
    //console.log($(".btnAdd"));
    $(".btnAdd").each(function(i,elem){
       // console.log(i,elem);
       $(elem).click(function(){
        //alert($(this).attr("id"));
        card.addToCard($(this).attr("id"));
       });
      // elem.onclick = function(){....}
    });
});


class Book{
    constructor(id,title,author,price){
        this.id=id;
        this.title=title;
        this.author=author;
        this.price=price;
    }
    addToTable(idTable,lp){
        $('<tr>')
        .append($('<td>').append(lp+1))
        .append($('<td>').append(this.title))
        .append($('<td>').append(this.author))
        .append($('<td>').append(this.price).attr("class","price"))
        .append($('<td>').append($('<button>').attr("id",this.id).attr("class","btnAdd")
        .append($('<img>').attr("src","shop1.png"))))
        .appendTo($('#'+idTable));
    }
}
const books= [new Book(1,"ABC jQuery","Antoni Moni",56.99),
            new Book(3,"Robaki polskie","Franciszek Fryk",15.99),
            new Book(5,"Wędkarsto klasyczne","Tomasz Bomasz",33.56),
            new Book(6,"Mapa Polski","zbiorow",7.99),
            new Book(7,"Kucharze świata","Antoni Moni",26.99),
            new Book(12,"Lasy tropikalne","Anna Wanna",17.99)];
class Card{
    constructor(){
        this.items = [];
    }
    addToCard(id){
        let book = books.find((elem)=>{return elem.id==id});
        //console.log(book);
        this.items.push(book);
        this.addLine('lista',book);
        console.log(this.items);
        console.log(this.getTotal());
    }
    getTotal(){
        let total = 0;
        this.items.forEach(function(elem){
            total+=elem.price;
        })
        return total;
    }
    addLine(idList,book){
        $("#"+idList).append(`<li>${book.title} ${book.price} zł</li>`);
        $("#total").html('Cena za towary w koszyku: <span class="total">'+this.getTotal()+'</span>')
    }
}
let card = new Card();