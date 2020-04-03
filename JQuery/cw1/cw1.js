$(document).ready(function () {
    $("#wynik").click(function () {
        //zmiana tekstu po kliknięciu akapitu
        let text = $(this).html(); //odpowiednik innerHTML
        let wynik = "Hello from jQuery!!!";
        if (text != wynik) {
            $(this).html(wynik).css("background-color", "blue");

        } else {
            $(this).html("Tutaj się zmieni po kliknięiu na tekście")
                .css("background-color", "brown");
        }
        //możliwośc używania css po kropce w wywołaniu łancuchowym poniważ
        //każde użycie $() zwraca obiekt na, którym pracujemy (akapit)
        //nie należy mieszać instrukcji czystego JS i jQuery!!! (np innerHTML - html())
    });
    jQuery("#wynik").html("aaaaa");
});