/*
    Getting the data from the users table and the orders table
    query{
        users{
            userId,
            username,
            contact,
            orders{
                orderId,
                foodId,
                count
            }
        }

    }

    Getting the data from the orders table and the food table
    query{
        orders{
            orderId,
            userId,
            foodId,
            count
            foods{
                foodId,
                foodName,
                foodImg
            }
        }
    }
*/