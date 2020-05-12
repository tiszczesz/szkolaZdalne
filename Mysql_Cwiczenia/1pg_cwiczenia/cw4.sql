select * from towary;
--tworzymy tabelę kategorie 1 do wiele
create table kategorie(
    id int primary key auto_increment,
    nazwa varchar(50) not null,
    opis varchar(150)
);
show tables;

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