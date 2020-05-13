class Film {
    constructor(id, title, price, author) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.author = author;
    }
    show(){
        alert("To jest film: "+this.title+" cena: "+this.price
        +" reżyser: "+this.author);
    }
}
let f1 = new Film(1,"abc..",25.99,"zenon");
console.log(f1);
f1.show();