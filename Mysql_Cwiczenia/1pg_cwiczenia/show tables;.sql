show tables;
show create table customer_list;
describe actor;
select count(*) from actor;
select * from actor;

select * from actor 
where last_name like "M%";

select first_name,last_name from actor
 where last_name like "M%";

 select count(*) from film;

 select * from film;
 describe film;

 show create table film;
 show create table actor;
 select title,description,release_year,rating, special_features
 from film;

 select title,description,release_year,rating, special_features
 from film limit 100;

 select title,description,release_year,rating, special_features
 from film where rating like "PG";

  select count(*)
 from film where rating like "PG";


