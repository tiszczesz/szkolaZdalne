/* eslint-disable no-undef */
$(function () {
    $("#tab").append($("<table id='t1'>").append($("<tr>")
        .append("<th>Lp</th><th>Tytuł</th><th>Autor</th><th>Cena</th><th></th>")));
    books.forEach(function (elem,i) {
        console.log(elem, i);
        elem.addRow("t1", i + 1);
    });
    $(".btnAdd").each(function () {
        $(this).click(function () {
            alert($(this).attr("id"));
        });
    })
});

class Book {
    constructor(id, title, author, price) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.price = price;
    }
    addRow(idTable, lp) {
        return $("<tr>")
            .append(`<td>${lp}</td><td>${this.title}</td><td>${this.author}</td>
        <td>${this.price}</td><td><input class='btnAdd' type='button' id='${this.id}' value='Dodaj do koszyka'></td>`)
            .appendTo($("#" + idTable));
    }
}
const books = [new Book(1, "ABC szermierki", "Waleski Tomasz", 45.99),
new Book(2, "Robaki polskie", "Marzec Kamila", 33.99),
new Book(3, "Tychy", "Waleski Tomasz", 34.69),
new Book(7, "Bagna ...", "Waleski Mateusz", 15.99),
new Book(12, "Ryby i odpoczynek", "Waleski Tomasz", 66.99)
];