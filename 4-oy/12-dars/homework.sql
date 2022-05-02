/*
    filter 1:
        yoshi 10 ga va 30ga teng emas userlarni chiqarish
    filter 2:
        familiyasi yoq userlarni chiqarish
    filter 3:
        distinct firstname, familiyas boyicha sortlash
    filter 4:
        yoshi katta erkak userlarni chiqarish kerak
*/

-- filter 1(yoshi 10ga va 30ga teng emas userlarni chiqarish)
SELECT
    *
FROM users
WHERE age BETWEEN 10 AND 30;


-- filter 2(familiyasi yoq userlarni chiqarish)
SELECT
    * 
FROM users
WHERE last_name ILIKE "";


-- filter 3(distinct firstname, familiyas boyicha sortlash)
SELECT DISTINCT ON(first_name, last_name)
    *
FROM users
ORDER BY last_name ASC;


-- filter 4(yoshi katta erkak userlarni chiqarish kerak)
SELECT
    *
FROM users
WHERE age > 30 AND gender ILIKE "male";


