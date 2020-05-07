show tables;
describe towary;
select * from towary;
insert into towary 
    values(null,'Ogórki',4.89,null);
insert into towary(nazwa,cena) 
    values('Cebula',5.99);
insert into towary(nazwa) 
    values('Ryż');
insert into towary(cena) 
    values(4.88);
delete from towary where id=7;
update towary
set opis = 'nowy opis'
update towary
set opis = 'inny opis'
where id>3;
insert into towary values(null,'Koperek',34.99,null);
delete from towary where nazwa='';
delete from towary where opis is null;
update towary
set opis = 'jeszcze inny opis'
where opis is not null;
update towary
set cena = 22.99,opis = 'pyszny ryż'
where nazwa like 'Ryż';
update towary
set cena = 'rrr',opis = 45
where nazwa like 'Ryż';

