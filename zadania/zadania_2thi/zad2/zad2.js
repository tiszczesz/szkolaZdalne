/* eslint-disable no-undef */
$(function(){
    $("#select").html("<select id='sel'></select>");
    books.forEach(function(elem){
        elem.optionToSelect("sel");
    });
    // for(let i=0;i<books.length;i++){
    //     books[i].optionToSelect("sel");
    // }
    $("#sel").change(function(){
        //alert($("#sel :selected").text());
        let id = $(this).val();
        $("#info").html(books[id].show());
    });
});



class Book{
    constructor(id,title,author,price){
        this.id=id;
        this.title=title;
        this.author=author;
        this.price=price;
    }
    show(){
        //alert("książka: "+this.title+" autor: "+this.author);
        return "Informacja książce: "+this.title+" autor: "+this.author
            +" cena: "+this.price+" zł";
    }
    optionToSelect(id){
        let op = new Option(this.title+" cena: "+this.price+" zł",this.id);
        $("#"+id).append(op);
    }
}
// let b1 = new Book(1,"ABC spania","Jurek Ogórek",45,99);
// console.log(b1);
// b1.show();
let books = [new Book(0,'Wstęp do jQuery',"Zawadzki Jan",34.99),
            new Book(1,'W góry',"Anonim",22.99),
            new Book(2,'Wakacje 2020 - inaczej',"Turecki Adam",12.99),
            new Book(3,'Franek Dzbanek',"Franek Dzbanek",11.99),
            new Book(4,'Kwiaty polskie',"Danek Anna",34.99)];
