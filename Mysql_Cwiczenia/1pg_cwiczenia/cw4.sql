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