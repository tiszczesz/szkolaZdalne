--  https://www.mysqltutorial.org/mysql-stored-function/
--  https://www.mysqltutorial.org/mysql-sample-database.aspx



show tables;
select * from customers;

DELIMITER $$

CREATE FUNCTION CustomerLevel(
	credit DECIMAL(10,2)
) 
RETURNS VARCHAR(20)
DETERMINISTIC
BEGIN
    DECLARE customerLevel VARCHAR(20);

    IF credit > 50000 THEN
		SET customerLevel = 'PLATINUM';
    ELSEIF (credit >= 50000 AND 
			credit <= 10000) THEN
        SET customerLevel = 'GOLD';
    ELSEIF credit < 10000 THEN
        SET customerLevel = 'SILVER';
    END IF;
	-- return the customer level
	RETURN (customerLevel);
END$$
DELIMITER ;

SHOW FUNCTION STATUS 
WHERE db = 'classicmodels';

SELECT 
    customerName, 
    CustomerLevel(creditLimit)
FROM
    customers
ORDER BY 
    customerName;

select concat(left(contactFirstName,1),'. ',
   contactLastName,': ',creditLimit) from customers;
describe customers;


-----------------------
DELIMITER $$

CREATE FUNCTION ConcatAll(
    first varchar(50),
    last varchar(50),
	credit DECIMAL(10,2)
) 
RETURNS VARCHAR(120)
DETERMINISTIC
BEGIN
    
	-- return the customer level
	RETURN (concat(left(first,1),'. ',last,': ',credit));
END$$
DELIMITER ;

select ConcatAll(contactFirstName,contactLastName,creditLimit) 
 from customers;

select ConcatAll('Piotr','Nowak',4567.67);