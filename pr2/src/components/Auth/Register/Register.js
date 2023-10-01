import { View, Text } from 'react-native'
import React from 'react'
import { TextInput, Button } from 'react-native-paper';
import { styles } from './Register.styles';
import { globalStyles } from '../../../../styles';
import { authApi } from '../../../api/auth';

import { useFormik } from 'formik';
import * as Yup from 'yup';


export default function Register(props) {

  const { showLogin } = props;
  
  const formik = useFormik({
    initialValues:{
      email:'',
      username:'',
      password:'',
      repeatPassword:''
    },
    validationSchema: Yup.object({
      email: Yup.string().email(true).required(true),
      username: Yup.string().required(true),
      password: Yup.string().required(true).min(7, true),
      repeatPassword: Yup.string().required(true).oneOf([Yup.ref('password')], true),    
    }),
    validateOnChange:false,
    onSubmit: async (formData) => {
      const{ email, username, password } = formData;
      
      /*
      try{
        await Promise.race([registrationPromise, new Promise((resolve, reject) =>{
          setTimeout(() => {
            reject('Tiempo de espera agotado')
          }, timeout);
        })])

        showLogin();

      }catch(error){

        if(error === 'Tiempo de espera agotado'){
          Toast.show('Tiempo de espera agotado', {
            position: Toast.positions.CENTER,
          });
        }

      }*/
      
      
      
      try{
        await authApi.register(email, username, password)
        showLogin();
      }catch(error){
        console.log(error)
      }
      console.log('Formulario ' + email + " "+ username+ " "+ password);
      console.log(formData);
    }
  });


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
            label="Nombre de usuario"
            style={globalStyles.form.input}
            autoCapitalize='none'
            onChangeText={(text)=> formik.setFieldValue('username', text)}
            value={formik.values.username}
            error={formik.errors.username}

        />
         <TextInput 
            label="Contraseña"
            style={globalStyles.form.input}
            autoCapitalize='none'
            secureTextEntry
            onChangeText={(text)=> formik.setFieldValue('password', text)}
            value={formik.values.password}
            error={formik.errors.password}

        />

      <TextInput 
            label="Repetir Contraseña"
            style={globalStyles.form.input}
            autoCapitalize='none'
            secureTextEntry
            onChangeText={(text)=> formik.setFieldValue('repeatPassword', text)}
            value={formik.values.repeatPassword}
            error={formik.errors.repeatPassword}

        />

 


        <Button mode="contained" style={globalStyles.form.buttonSubmit} onPress={formik.handleSubmit} loading={formik.isSubmitting}> Registrarse </Button>
        <Button mode="text"      style={globalStyles.form.buttonText}  onPress={showLogin} > Iniciar sesión </Button>

       



    </View>
  )

}





