drop database demo_db;
create database demo_db;

drop table if exists users;
create table users (
	user_id INT,
	first_name VARCHAR(50),
	last_name VARCHAR(50),
	email VARCHAR(50),
	gender VARCHAR(50),
	birth_date DATE,
	age INT
);


insert into users (user_id, first_name, last_name, email, gender, birth_date, age) values (1, 'Marylinda', 'Jubert', 'mjubert0@lycos.com', 'Female', '14/03/2002', 73);
insert into users (user_id, first_name, last_name, email, gender, birth_date, age) values (2, 'Ellary', 'Sawdy', 'esawdy1@twitter.com', 'Male', '25/10/2001', 39);
insert into users (user_id, first_name, last_name, email, gender, birth_date, age) values (3, 'Sam', 'Croote', 'scroote2@java.com', 'Female', '19/07/2013', 19);
insert into users (user_id, first_name, last_name, email, gender, birth_date, age) values (4, 'Harcourt', 'Shale', 'hshale3@mlb.com', 'Male', '06/08/2002', 77);
insert into users (user_id, first_name, last_name, email, gender, birth_date, age) values (5, 'Claiborne', 'Boatwright', 'cboatwright4@apple.com', 'Male', '11/06/2001', 74);
insert into users (user_id, first_name, last_name, email, gender, birth_date, age) values (6, 'Nikoletta', 'Finker', 'nfinker5@howstuffworks.com', 'Female', '12/06/1994', 19);
insert into users (user_id, first_name, last_name, email, gender, birth_date, age) values (7, 'Madelin', 'Rizzetti', 'mrizzetti6@goo.ne.jp', 'Female', '19/02/1996', 56);
insert into users (user_id, first_name, last_name, email, gender, birth_date, age) values (8, 'Leilah', 'Badman', 'lbadman7@paginegialle.it', 'Female', '03/04/2014', 89);
insert into users (user_id, first_name, last_name, email, gender, birth_date, age) values (9, 'Margalo', 'Westcot', 'mwestcot8@com.com', 'Female', '05/07/2017', 70);
insert into users (user_id, first_name, last_name, email, gender, birth_date, age) values (10, 'Mile', 'Dell Casa', 'mdellcasa9@ebay.com', 'Male', '10/01/2016', 79);
insert into users (user_id, first_name, last_name, email, gender, birth_date, age) values (11, 'Linoel', 'Dumbelton', 'ldumbeltona@nymag.com', 'Male', '10/12/1992', 63);
insert into users (user_id, first_name, last_name, email, gender, birth_date, age) values (12, 'Cointon', 'Ryder', 'cryderb@latimes.com', 'Male', '02/08/2002', 44);





-- USERS LIST



DROP TABLE IF EXISTS teachers;
CREATE TABLE teachers(
	teacher_id int,
	teacher_name varchar(255),
	teacher_qulification varchar(255)
);


DROP TABLE IF EXISTS administrations;
CREATE TABLE administrations(
	administrator_id int,
	administrator_name varchar(255),
	administrator_permission varchar(255)
);


DROP TABLE IF EXISTS assistants;
CREATE TABLE assistants (
	assistant_id int,
	assistant_name varchar(255),
	assistant_gender varchar(255)
);


INSERT INTO teachers (teacher_id, teacher_name, teacher_qulification) VALUES 
(1, 'Ali', 'nodeJS'),
(2, 'Nosir', 'Front-end'),
(3, 'Hikmat', 'SMM'),
(4, 'G''anisher', 'Flutter');

INSERT INTO administrations (administrator_id, administrator_name, administrator_permission) VALUES 
(1, 'Elshod', 'root'),
(2, 'Muhammad', 'checker'),
(3, 'Hikmat', 'root'),
(4, 'G''anisher', 'model');


INSERT INTO assistants (assistant_id, assistant_name, assistant_gender) VALUES 
(1, 'Ahror', 'male'),
(2, 'ali', 'male'),
(3, 'Muhammad', 'male'),
(4, 'Nosir', 'male');



