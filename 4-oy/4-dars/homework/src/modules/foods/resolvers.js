export default {
    Query: {
        foods: (_, {foodId}, { read }) =>{
            return read("foods").filter(food => foodId ?  food.food_id == foodId : true)
        }
    },


    Food: {
        foodId: (parnet) => parnet.food_id,
        foodName: (parnet) => parnet.food_name,
        foodImg: (parnet) => parnet.food_img,
    },


    
    Mutation: {
        createFood: (_, {foodName, foodImg}, {read, write}) => {
            const foods = read("foods")

            if(!(foodName && foodImg)){
                return {
                    status: 400,
                    message: "foodName and foodImg are required",
                    data: null 
                }
            }

            if(foods.find(food => food.food_name == foodName)){
                return {
                    status: 400,
                    message: "foodName already exists",
                    data: null
                }
            }

            const newFood = {
                food_id: foods.length ? foods[foods.length - 1].food_id + 1 : 1,
                food_name: foodName,
                food_img: foodImg
            }

            foods.push(newFood)

            write("foods", foods)

            return {
                status: 200,
                message: "food created successfully",
                data: newFood
            }
        },

        updateFood: (_, {foodId, foodName, foodImg}, {read, write}) => {
            const foods = read("foods")

            if(!(foodId && foodName && foodImg)){
                return {
                    status: 400,
                    message: "foodId, foodName and foodImg are required",
                    data: null 
                }
            }

            if(!foods.find(food => food.food_id == foodId)){
                return {
                    status: 400,
                    message: "foodId does not exist",
                    data: null
                }
            }

            const newFood = {
                food_id: foodId,
                food_name: foodName,
                food_img: foodImg
            }

            foods.push(newFood)

            write("foods", foods)

            return {
                status: 200,
                message: "food updated successfully",
                data: newFood
            }
        },

        deleteFood: (_, {foodId}, {read, write}) => {
            const foods = read("foods")

            if(!foodId){
                return {
                    status: 400,
                    message: "foodId is required",
                    data: null 
                }
            }

            if(!foods.find(food => food.food_id == foodId)){
                return {
                    status: 400,
                    message: "foodId does not exist",
                    data: null
                }
            }

            const thisFood = foods.find(food => food.food_id == foodId)

            foods.splice(foods.findIndex(food => food.food_id == foodId), 1)

            write("foods", foods)

            return {
                status: 200,
                message: "food deleted successfully",
                data: thisFood
            
            }
        }
    }

}