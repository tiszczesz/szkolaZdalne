drop view view_zam;

create view view_zam as SELECT tab1.nazwa,tab1.cena,`zamówienia`.`ilosc`,`zamówienia`.`id` FROM
tab1 INNER JOIN `zamówienia`
on tab1.id = `zamówienia`.`towarId`;