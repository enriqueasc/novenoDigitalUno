import { View, Text } from 'react-native';
import React from 'react';
import Toast from 'react-native-root-toast';
import { authApi } from '../../../api/auth.js';
//
import { globalStyles } from '../../../../styles';
import { TextInput, Button } from 'react-native-paper';

import { useFormik } from 'formik';
import * as Yup from 'yup';
//import { Button } from 'react-native-paper';
import { useAuth } from '../../../hooks/useAuth.js';

import { userController } from '../../../api/users.js';




export default function Login(props) {
  const { showRegister } = props;
  const {login } = useAuth();
  
  //const useAuthData = useAuth();
  //console.log(useAuthData);

  const formik = useFormik({
    initialValues:{
      email:'',
      password:'',
    },
    validationSchema: Yup.object({
      email: Yup.string().email(true).required(true),
      password:Yup.string().required(true).min(7, true),
    }),
    validateOnChange:false,
    onSubmit: async (formData)=>{
      try{
        const {email, password} =  formData;
        const response = await authApi.login(email, password);
        login(response.jwt)
        console.log(response);

      }catch(error){
        console.log(error);
        Toast.show('Error al iniciar sesion', {
          position: Toast.positions.CENTER,
        });
      }
    }
  })

  return (
    <View>
      <TextInput 
            label="Correo electronico"
            style={globalStyles.form.input}
            autoCapitalize='none'
            onChangeText={(text)=> formik.setFieldValue('email', text)}
            value={formik.values.email}
            error={formik.errors.email}
        />
         <TextInput 
            label="Contraseño"
            style={globalStyles.form.input}
            secureTextEntry
            onChangeText={(text)=> formik.setFieldValue('password', text)}
            value={formik.values.password}
            error={formik.errors.password}
        />
        
        <Button
          mode="contained"
          style={globalStyles.form.button}
          onPress={formik.handleSubmit}
          loading={formik.isSubmitting}
        >

        Iniciar Sesión
         
        </Button>
        
        <Button
          mode="text"
          style={globalStyles.form.buttonText}
          onPress={showRegister}
        >
        Registrarse

        </Button>
    </View>
  )
}