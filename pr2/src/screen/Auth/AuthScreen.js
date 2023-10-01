
import  { View, Text, StyleSheet, KeyboardAvoidingView, Platform, Image} from 'react-native';
import React, { useEffect, useState} from 'react';
import Login from '../../components/Auth/Login/Login';
import Register from '../../components/Auth/Register/Register';
import { styles } from './AuthScreen.styles';
import logo from '../../assets/3_rgb.jpg';



export default function AuthScreen() {

  const [showLogin, setshowLogin] = useState(true);

  const showLoginRegister = ()=>{
    setshowLogin(prevState => !prevState)
  }


  return (
    <View style = { styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? "padding" : "height"}>
       <Image  source = {logo} style = { styles.image}/>
        
          {showLogin ? <Login showRegister={showLoginRegister} /> : <Register showLogin={showLoginRegister}/>}

        </KeyboardAvoidingView>

    </View>
  )
}



