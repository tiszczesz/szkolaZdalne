/* eslint-disable no-undef */
$(function(){
    $("#list").append($('<table id="tabBooks">')
    .append("<tr><th>Lp</th><th>Tytuł</th><th>Autor</th><th>Cena</th><th></th></tr>"));
    books.forEach(function(elem,i){
        //console.log(elem);
        elem.addToTable("tabBooks",i);
    });
    $('.btnAdd').each(function(i,elem){
       // console.log(elem);
       // elem.onclick= <-- tu było onClick :)
        $(elem).click(function(){ //aby zrobic obiekt jQuery $()
           // console.log('dddd');
            //alert($(this).val()+" towar o id: "+$(this).attr("id"));
            card.addToCard($(this).attr("id"));
            card.updateList();
            console.log(card);
        });
    });
    $("#list").slideDown(500);
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
                new Book(5,"Matematyka przewodnik","Maryla Rod",56.69),
                new Book(9,"nowa książka","Maryla Rod",12.69)];

class Card{
    constructor(){
        this.items = []
    }
    addToCard(id){
        
        let book = books.find((elem)=>{return elem.id==id});
        console.log(this.isInItems(id))
        if(this.isInItems(id)){
            let index = this.items.findIndex((item)=>{
                return item[0].id==id;
            });
            console.log(index);
            let newValue = this.items[index][1]+1;
            this.items[index][1]=newValue;
        }else{
            this.items.push([book,1]);
        }
    }
    updateList(){
        $("#orders").html("");
        let html = "";
        this.items.forEach((elem)=>{
            html += `<li>${elem[0].title} cena: ${elem[0].price} zł ilość: ${elem[1]}</li>`;
        })
        $('#orders').append($("<ul>")
        .append((html)));
    }
    isInItems(id){       
        for(let i=0;i<this.items.length;i++){
            if(this.items[i][0].id==id){
                return true;
            }
        }
        return false;
    }
}
let card = new Card();