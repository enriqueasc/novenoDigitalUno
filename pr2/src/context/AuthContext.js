import React, { useState, useEffect, createContext } from "react";
//import { AuthContext } from "../context/AuthContext";

import { storageController } from "../api/token";

//export const useAuth = () => useContext(AuthContext);

export const AuthContext = createContext();


export const AuthProvider = (props) => {

    const { children } = props;

    const login = async (token) => {
        try{
            console.log('Obteniendo ', token)
            await storageController.setToken(token);
        }catch(error){
            console.log(error);
        }
    }

    const data = {
        user:null,
        login,// () => console.log('login'),
        logout:() => console.log('logout'),
        upDateUser:()=>console.log('updateUser')
    }
    return(
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )
}

const getSession = async () => {
    const token = await storageController.getToken();
    console.log('token', token);

    useEffect(() => {
        getSession();
    },[])



}

