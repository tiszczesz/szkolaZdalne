select * from towary;
--tworzymy tabelę kategorie 1 do wiele
create table kategorie(
    id int primary key auto_increment,
    nazwa varchar(50) not null,
    opis varchar(150)
);
show tables;
use cw2_1pg;
describe kategorie;

insert into kategorie(nazwa,opis)
values("warzywa","to da się zjeść");

select * from kategorie;

insert into kategorie(nazwa,opis)
values("pieczywo","całkiem chrupkie");

insert into kategorie(nazwa,opis)
values("spożywcze",null);

describe towary;

alter table towary
add kategoriaId int;

update towary
set kategoriaId = 1
where id<>5;

update towary
set kategoriaId=5
where kategoriaId is null;

alter table kategorie
modify column opis varchar(50);


-------------------- klucze obce
describe towary;
select * from towary;
select * from kategorie;
insert into towary(nazwa,cena,kategoriaId)
values("testowy",9.99,5);

Alter table towary
add FOREIGN key (kategoriaId) references kategorie(id);
delete from towary where id=10;
describe towary;

create table rodzaje(
    id int primary key auto_increment,
    nazwa varchar(50) not null
)
create table filmy(
    id int primary key auto_increment,
    tytul varchar(50) not null,
    cena decimal(10,2),
    rodzajId int,
    CONSTRAINT FK_rodzaj_film FOREIGN KEY (rodzajId)
    REFERENCES rodzaje(id)
)
insert into filmy(tytul,cena,rodzajId)
values("kwakwa",34.99,null);
select * from filmy;
drop table filmy;
--tworze ....
create table filmy(
    id int primary key auto_increment,
    tytul varchar(50) not null,
    cena decimal(10,2),
    rodzajId int not null,
    CONSTRAINT FK_rodzaj_film FOREIGN KEY (rodzajId)
    REFERENCES rodzaje(id)
)
insert into rodzaje(nazwa) values ("wojenny");
insert into rodzaje(nazwa) values ("komediowy");
insert into rodzaje(nazwa) values ("obyczajowy");
insert into rodzaje(nazwa) values ("kryminalny");
select * from rodzaje;
insert into filmy(tytul,cena,rodzajId)
values("kwakwa",34.99,1);
select * from filmy;
show create table filmy;
---------------------
show create table rodzaje;
describe rodzaje;
select * from rodzaje;

insert into filmy values(null,"nowy fajny film",55.90,3);
delete from rodzaje where id=3;
delete from rodzaje where id=4;

alter table filmy
drop CONSTRAINT FK_rodzaj_film;
insert into rodzaje values(null,"obyczajowy");

update filmy set rodzajId=5 where rodzajId=3;

alter table filmy
add CONSTRAINT FK_rodzaj_film
FOREIGN KEY(rodzajId) REFERENCES rodzaje(id)
on delete cascade;

insert into filmy values(null,"ale film",45.90,5);
insert into filmy values(null,"abc",45.90,1);
insert into filmy values(null,"rtyu",45.90,1);
insert into filmy values(null,"12345",45.90,5);

delete from rodzaje where id=5;

alter table filmy
drop CONSTRAINT FK_rodzaj_film;

alter table filmy
add CONSTRAINT FK_rodzaj_film
FOREIGN KEY(rodzajId) REFERENCES rodzaje(id)
on delete set null;

select * from filmy;
select * from rodzaje;

delete from rodzaje where id=1;
