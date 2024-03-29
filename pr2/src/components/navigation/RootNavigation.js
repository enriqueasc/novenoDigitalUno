import React from 'react'
import AppNavigation from './AppNavigation'
import AuthScreen from '../../screen/Auth/AuthScreen'
import { useAuth } from '../../hooks/useAuth'



export default function RootNavigation() {
    const { user } = useAuth();
    return user ? <AppNavigation /> : <AuthScreen />
}




/*
const RootNavigation = () => {
    const user = null;
    return user ? <AppNavigation /> : <AuthScreen />
}

export default RootNavigation
*/