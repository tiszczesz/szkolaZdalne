CREATE DATABASE `cw2_1pg` CHARACTER SET utf8
COLLATE utf8_polish_ci;
show databases;
create table t(id int,nazwa char(10));
drop table t;
show tables;
--------------------------
CREATE TABLE `Towary`(
    id int auto_increment primary key,
    nazwa varchar(50) not null,
    cena decimal(10,2) not null,
    opis varchar(100)
);
--------------------------------
show tables;
describe towary;
drop table Towary;
INSERT INTO Towary(nazwa,cena)
VALUES('Buraki',6.99);
INSERT INTO Towary(nazwa,cena)
VALUES('Ziemniaki',3.59);
SELECT * FROM Towary;