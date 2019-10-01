const User = use('App/Models/User')


const resolvers = {

    Query: {
        async allUsers (){

            const users = await User.all()
            return users.toJSON()

        },

        async user (_, { id }){
            const iser = await User.find(id)
            return this.user.toJSON()
        }
    },

    Mutation: {

        /* Login attempt with email and password */

        async login (_, { email, password }, { auth }) {

            try {
                const { token }  = await auth.attempt( email, password)
                return token        
            } catch (error) {
                return {message:'username and password did not match'}
            }

        },

        /* Create user account */ 

        async createUser (_, { username, email, password}) {

            try {
                return await User.create({ username, email, password })
            } catch (error) {
               return error                 
            }
            
        }

    }

}

module.exports = resolvers;