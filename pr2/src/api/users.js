import { ENV } from "../utils/constans";

const getMe = async (token) => {
    try{
        const response = await fetch(`${ENV.API_URL}/${ENV.ENDPOINTS.USERS_ME}`, {
            method: 'GET',
            headers:{
                Authorization: `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiaWF0IjoxNjk2MTIxNjY4LCJleHAiOjE2OTg3MTM2Njh9.Prij3VmN77y7JzmQfVEB2lgwhO431jF8arPZ1kLqLDA'}`
            }
        })
        const result = await response.json();
        return result;

        
    }catch(error){
       console.log(error);
       return null;
    }

    



}

export const userController = {
    getMe
}