show tables;
describe address;
select count(*) from address;
select * from address limit 100;
select address,address2 from address
limit 100;
select address,address2 from address 
where address2 is not null;
select count(*) from address 
where address2 is not null;
select address from address 
 where address like '7%';
 select address from address 
 where address like '%Mo%';
 describe actor;
 select * from actor limit 100;
 select concat(first_name,' ',last_name)
 from actor;
 select concat(left(first_name,1),'. ',last_name)
 from actor;
 select right(first_name,2) from actor;
 select lower(right(first_name,2)) from actor;
 select concat(left(first_name,1),
    lower(substr(first_name,2))),first_name from actor;
select replace(first_name,'A','x') from actor;