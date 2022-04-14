export default {
    Query: {
        users: (_, {userId}, { read }) =>{
            return read("users").filter(user => userId ?  user.user_id == userId : true)
        }
    },

    User: {
        userId: (parent) => parent.user_id,
        orders: (parent, _, {read}) => {
            return read("orders").filter(order => order.user_id == parent.user_id)
        }
    },



    Mutation: {
        createUser: (_, {username, contact}, {read, write}) => {
            const users = read("users")

            if(!(username && contact)){
                return {
                    status: 400,
                    message: "username and contact are required",
                    data: null 
                }
            }

            if(/^[a-zA-Z0-9](_(?!(\.|_))|\.(?!(_|\.))|[a-zA-Z0-9]){6,18}[a-zA-Z0-9]$/.test(username) == false){
                return {
                    status: 400,
                    message: "username must be between 6 and 18 characters long and can only contain alphanumeric characters",
                    data: null
                }
            }

            if(users.find(user => user.username == username)){
                return {
                    status: 400,
                    message: "username already exists",
                    data: null
                }
            }

            if(/^998[389][012345789][0-9]{7}$/.test(contact) == false){
                return {
                    status: 400,
                    message: "contact must be a valid mobile number",
                    data: null
                }
            }


            const newUser = {
                user_id: users.length ? users[users.length - 1].user_id + 1 : 1,
                username,
                contact
            }

            users.push(newUser)

            write("users", users)

            return {
                status: 201,
                message: "User created successfully",
                data: newUser
            }
        },

        updateUser: (_, {userId, username, contact}, {read, write}) => {
            const users = read("users")

            if(!(username && contact)){
                return {
                    status: 400,
                    message: "username and contact are required",
                    data: null 
                }
            }

            if(/^[a-zA-Z0-9](_(?!(\.|_))|\.(?!(_|\.))|[a-zA-Z0-9]){6,18}[a-zA-Z0-9]$/.test(username) == false){
                return {
                    status: 400,
                    message: "username must be between 6 and 18 characters long and can only contain alphanumeric characters",
                    data: null
                }
            }

            if(/^998[389][012345789][0-9]{7}$/.test(contact) == false){
                return {
                    status: 400,
                    message: "contact must be a valid mobile number",
                    data: null
                }
            }

            const user = users.find(user => user.user_id == userId)

            if(!user){
                return {
                    status: 404,
                    message: "User not found",
                    data: null
                }
            }

            user.username = username
            user.contact = contact

            write("users", users)

            return {
                status: 200,
                message: "User updated successfully",
                data: user
            }
        },

        deleteUser: (_, {userId}, {read, write}) => {
            const users = read("users")

            const user = users.find(user => user.user_id == userId)

            if(!user){
                return {
                    status: 404,
                    message: "User not found",
                    data: null
                }
            }

            users.splice(users.indexOf(user), 1)

            write("users", users)

            return {
                status: 200,
                message: "User deleted successfully",
                data: user
            }
        }
    }
    
}