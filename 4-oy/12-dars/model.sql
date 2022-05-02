-- Familiyasi yoq userlarni chiqarish
SELECT
    * 
FROM users
WHERE last_name = NULL


-- Familiyasi yoqlarni chiqarish
SELECT 
    *
FROM users 
WHERE last_name IS NULL;

-- Familoyasi borlarni chiqarish
SELECT
    *
FROM users
WHERE last_name IS NOT NULL;


/*
    limit | fetch->    malumot chiqishiga limit berish!
    offset ->   nechta malumotni tashab otishini chiqaradi!

    limit <count> offset<count>

    offset <count> [rows | row] fetch [first | last] <count> [rows | row] 
*/

-- 2ta tashab otib ketib 10ta chiqarish
SELECT
    *
FROM users
LIMIT 10
OFFSET 2;

-- pagination qilish har bitta page da 4tadan malumot chiqarish
SELECT
    *
FROM users
LIMIT 4
OFFSET 4 * 2;



-- fetch orqali malumotlarni chiqarish
SELECT 
    *
FROM users
OFFSET 2 ROWS FETCH FIRST 2 ROWS ONLY;


-- yoshi katta 10ta userni chiqarish
SELECT
    *
FROM users
ORDER BY age DESC
LIMIT 10;



-- yoshi katta 10ta userni tashab otib ketish subquery qilish!
SELECT 
    *
FROM users
WHERE user_id NOT IN (
    SELECT
        user_id
    FROM users
    ORDER BY age DESC
    LIMIT 10
) 
ORDER BY user_id DESC;










/*
    JOINLAR
    1.fhxsjndv]ds]m
*/

