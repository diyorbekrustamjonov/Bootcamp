create database look;

drop table if exists users cascade;
create table users (
    user_id serial primary key,
    username character varying(30) not null unique,
    user_created_at timestamptz default current_timestamp
);

drop table if exists contacts cascade;
create table contacts (
    contact_id int generated always as identity not null,
    contact_body character varying(200) not null,
    contact_type smallint not null default 1,
    user_id int not null references users (user_id),
    contact_created_at timestamptz default current_timestamp
);


drop table if exists foods cascade;
create table foods (
    food_id serial primary key,
    food_name character varying(100) not null,
    food_img text not null,
    food_created_at timestamptz default current_timestamp
);

drop table if exists orders cascade;
create table orders (
    order_id serial primary key,
    user_id int not null references users (user_id),
    food_id int not null references foods (food_id),
    order_count int not null default 1,
    order_created_at timestamptz default current_timestamp
);


insert into users (username) values
('ali'),
('nosir'),
('hikmat');


insert into contacts (user_id, contact_type, contact_body) values
(1, 1, '998941024578'),
(1, 1, '998975674589'),
(1, 2, 'ali@gmail.com'),
(2, 2, 'nosir@gmail.com'),
(3, 2, 'hikmat@gmail.com'),
(3, 1, '998943216578');


insert into foods (food_name, food_img) values
('lavash', 'lavash.jpg'),
('burger', 'burger.jpg'),
('osh', 'osh.jpg'),
('chuchvara', 'chuchvara.jpg');


insert into orders (user_id, food_id, order_count) values
(1, 1, 2),
(1, 2, 1),
(2, 4, 1),
(3, 3, 1),
(3, 4, 4);


SELECT
    contact_id,
    contact_body,
    CASE
        WHEN contact_type = 1 THEN 'contact'
        WHEN contact_type = 2 THEN 'email'
    END AS contact_type
FROM contacts;

SELECT 
    u.user_id,
    u.username,
    count(c.contact_body) AS contacts_count
FROM users u
INNER JOIN contacts c ON c.user_id = u.user_id
GROUP BY u.user_id
;


// remove default colums and join with users table
SELECT
    o.order_id,
    u.username,
    f.food_name,
    o.order_count,
    o.order_created_at
FROM orders as o
LEFT JOIN users as u ON u.user_id = o.user_id
LEFT JOIN foods as f ON f.food_id = o.food_id
;
--users                       contacts

--user_id | username          contact_id | contact_body     | user_id      
--1          ali                1            54651651          1
--1          ali                2            546556651651      1
--2          nosir
--3          hikmat




--create table foods ();
--create table orders ();