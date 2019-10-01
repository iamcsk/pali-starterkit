'use strict'

const User = use('App/Models/User');

class AuthController {

    async register({request, auth, response}) {

        console.log(' CSK trying to register user ');

        // let user = await User.create(request.all())

        // let token = await auth.generate(user)

        // Object.assign(user, token)

        // return response.json(user)
        return "OKAY CSK"

    }

    async login({request, auth, response}){

        let { email , password } = request.all();

        try {

            if(await auth.attempt(email, password)){

                let user = await User.findBy('email', email)
                let token = await auth.generate(user)

                Object.assign(user, token)
                return response.json(user)
            }

        } catch (error) {

            console.log(error)
            return response.json({message: 'You are not registered!'})
            
        }

    }
}

module.exports = AuthController
