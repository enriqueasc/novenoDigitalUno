import { ENV } from '../utils/constans'

async function register(email,username, password){

    try{
        const url = `${ENV.API_URL}/${ENV.ENDPOINTS.RESGISTER}`
        const params = {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                email,
                password
            })
        }
        //console.log('Ok')

        const response = await fetch(url, params)

        if(response.status != 200) throw response

        return response.json()

    }catch(error){
        throw error
    }
}




async function login(email, password){

    try{
        const url = `${ENV.API_URL}/${ENV.ENDPOINTS.LOGIN}`
        const params = {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                identifier: email,
                password
            })
        }
        //console.log('Ok')

        const response = await fetch(url, params)

        if(response.status != 200) throw response

        return await response.json()

    }catch(error){
        throw error
    }
}


export const authApi ={

    register,
    login

}