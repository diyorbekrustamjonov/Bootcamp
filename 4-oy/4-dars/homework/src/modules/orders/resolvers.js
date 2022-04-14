export default {
    Query: {
        orders: (_, {orderId}, { read }) =>{
            return read("orders").filter(order => orderId ?  order.order_id == orderId : true)
        }
    },

    Order: {
        orderId: (parnet) => parnet.order_id,
        userId: (parnet) => parnet.user_id,
        foodId: (parnet) => parnet.food_id,
        count: (parnet) => parnet.count,    
        foods: (parent, _, {read}) => {
            return read("foods").filter(food => food.food_id == parent.food_id)
        }    
    },


    
    Mutation: {
        createOrder: (_, {userId, foodId, count}, {read, write}) => {
            const orders = read("orders")

            if(!(userId && foodId && count)){
                return {
                    status: 400,
                    message: "userId, foodId and count are required",
                    data: null 
                }
            }

            if(orders.find(order => order.user_id == userId && order.food_id == foodId)){
                return {
                    status: 400,
                    message: "order already exists",
                    data: null
                }
            }

            if(count > 10){
                return {
                    status: 400,
                    message: "count cannot be greater than 10",
                    data: null
                }
            }

            const newOrder = {
                order_id: orders.length ? orders[orders.length - 1].order_id + 1 : 1,
                user_id: userId,
                food_id: foodId,
                count: count
            }

            orders.push(newOrder)

            write("orders", orders)

            return {
                status: 200,
                message: "order created successfully",
                data: newOrder
            }
        },

        updateOrder: (_, {orderId, userId, foodId, count}, {read, write}) => {
            const orders = read("orders")

            if(!(orderId && userId && foodId && count)){
                return {
                    status: 400,
                    message: "orderId, userId, foodId and count are required",
                    data: null 
                }
            }

            if(!orders.find(order => order.order_id == orderId)){
                return {
                    status: 400,
                    message: "order does not exist",
                    data: null
                }
            }

            if(count > 10){
                return {
                    status: 400,
                    message: "count cannot be greater than 10",
                    data: null
                }
            }

            const updatedOrder = {
                order_id: orderId,
                user_id: userId,
                food_id: foodId,
                count: count
            }

            const index = orders.findIndex(order => order.order_id == orderId)

            orders[index] = updatedOrder

            write("orders", orders)

            return {
                status: 200,
                message: "order updated successfully",
                data: updatedOrder
            }
        },

        deleteOrder: (_, {orderId}, {read, write}) => {
            const orders = read("orders")

            if(!orderId){
                return {
                    status: 400,
                    message: "orderId is required",
                    data: null 
                }
            }

            if(!orders.find(order => order.order_id == orderId)){
                return {
                    status: 400,
                    message: "order does not exist",
                    data: null
                }
            }

            const thisOrder = orders.find(order => order.order_id == orderId)

            const index = orders.findIndex(order => order.order_id == orderId)

            orders.splice(index, 1)

            write("orders", orders)

            return {
                status: 200,
                message: "order deleted successfully",
                data: thisOrder
            }
        }
    }
}