import {View, Text, Image, Alert,} from 'react-native';
import React from 'react';
import styles from './Login.style';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {Formik} from 'formik';
import usePost from '../../hooks/usePost';
import Config from 'react-native-config';
import {useDispatch} from "react-redux"

const Login = ({navigation}) => {
  const {data,error,loading,post} = usePost()
  const dispatch = useDispatch()

  const handleLogin = (values) => {
    post(Config.API_AUTH_URL +'/login',values)
    console.log(values)
  }

  if(error){
    Alert.alert("Dükkan","Bir hata oluştu!")
  }

  if(data){
    if(data.status === "Error"){
    Alert.alert("Dükkan","Kullanıcı bulunamadı!")
    }
    else{
      dispatch({type:"SET_USER", payload:{user}})
      // navigation.navigate("ProductsPage")
    }
    console.log(data)
  }


  return (
    <View style={styles.container}>
      <View style={styles.logo_container}>
        <Image
          style={styles.logo}
          source={require('../../assets/login-logo.png')}
        />
      </View>

      <Formik initialValues={{username: 'johnd', password: 'm38rmF$'}} onSubmit={handleLogin}>
        {({handleSubmit, handleChange, values}) => (
          <View style={styles.body_container}>
            <Input
              placeholder="Kullanıcı adını giriniz"
              value={values.username}
              onChangeText={handleChange('username')}
              iconName="account"
            />
            <Input
              placeholder="Şifrenizi giriniz"
              value={values.password}
              onChangeText={handleChange('password')}
              iconName="key"
              isSecure={true}
            />
            <Button text="Giriş Yap" onPress={handleSubmit} loading={loading} />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Login;


const user = {
  id:1,
  email:'John@gmail.com',
  username:'johnd',
  password:'m38rmF$',
  name:{
      firstname:'John',
      lastname:'Doe'
  },
  address:{
      city:'kilcoole',
      street:'7835 new road',
      number:3,
      zipcode:'12926-3874',
      geolocation:{
          lat:'-37.3159',
          long:'81.1496'
      }
  },
  phone:'1-570-236-7033'
}