create database cw3ti2020 character set utf8 collate utf8_polish_ci;
show databases;
use cw3ti2020;
show tables;

create table t1(
    id int primary key auto_increment,
    nazwa1 varchar(50) 

);
create table t2(
    id int primary key auto_increment,
    nazwa2 varchar(50) 

);
describe t1;
show create table t1;

alter table t1
add column t2id int ;

alter table t1
add foreign key (t2id) references t2(id);

insert into t1 values(null,"bbbb",null);

select * from t1;

insert into t1 values(null,"ccc",2);

select * from t2;
insert into t2 values(null,"ddddd");
insert into t2 values(null,"fffff");


ALTER TABLE t1
DROP FOREIGN KEY t1_ibfk_1;

insert into t1 values(null,"ggg",3);

alter table t1
add foreign key (t2id) references t2(id)
 ON DELETE CASCADE;

delete from t1 where t2id=3;
delete from t2 where id=1;
delete from t2 where id=2;





