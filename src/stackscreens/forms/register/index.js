/* eslint-disable prettier/prettier */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios';
import {View} from 'react-native';
import styled from 'styled-components';
import HeaderForms from '../../../components/image/headerForms/index';
import FooterForms from '../../../components/image/footerFroms/index';
import TitleTop from '../../../components/title/titleTop/index';
import TitleUnderlabel from '../../../components/title/titleUnderlabel/index'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Titleprimary from '../../../components/title/titlePrimary';
import SwitchFormsScreen from '../../../components/inputs/switchFormsScreen';
import PrimaryButton from '../../../components/button/primaryButton';


function Register ({ navigation , }){

  const [inputs, setInputs] = React.useState({
    email: '',
    password: '',
    firstname: '',
    lastname: '',
  });
  const registerMe = async () => {

  if (inputs.password.length < 8) {
    alert('Password must be at least 8 characters long');
    return;
  }

  axios({
    method: 'post',
    url: `http:/localhost:3001/api/v1/auth/register`,
    data: {
      firstName: inputs.firstname,
      lastName:inputs.lastname,
      email:inputs.email,
      password: inputs.password,

    },
  }) .then(async response => {
    await AsyncStorage.setItem('token', response.data.firstName);
    console.log(response.headers['x-access-token']);
   console.log(response.data) 
   alert("Compte créer")
   navigation.navigate('login')

  })
  .catch(error => {
    console.log(error);
    alert
  
    alert("Impossible d'inscrire votre compte" )
    return;
  });
}

  const onPressLogin = () => {navigation.navigate('login');
};

  return (
    <View>
      <HeaderForms/>
        <FooterForms/>
            <TitleTop label="PLUS JAMAIS"/>
               <TitleUnderlabel label="GROS"/>
                  <Titleprimary label='Inscription'/>
                    <SwitchFormsScreen 
                        top="160%"  
                        left="20%"   
                        onPress={onPressLogin} 
                        label="Déja un compte ? Connecter vous"/>
          <PrimaryButton onPress={registerMe} label="Inscription"/>
      <InputEmail
       placeholder="Example@email.com"
       value={inputs.email}  
       onChangeText={text => setInputs({...inputs, email: text})}/>
      <InputFirstname 
      placeholder="FirstName"  
      value={inputs.firstname}  
      onChangeText={text => setInputs({...inputs, firstname: text})}/>
      <InputPassword  
      secureTextEntry={true}
      placeholder="Password"
      value={inputs.password} 
      onChangeText={text => setInputs({...inputs, password: text})}/>
      <InputLastname  
      placeholder="LastName"
      value={inputs.lastname} 
      onChangeText={text => setInputs({...inputs, lastname: text})}/>
    </View>
  );
};


const InputEmail = styled.TextInput`
position: absolute;
height: 40px;
border-color: gray; 
border-width: 1px;
border-radius:11px;
left:5%;
top:93%;
height:60px;
width:85%;
`;

const InputPassword = styled.TextInput`
position: absolute;
height: 40px;
border-color: gray; 
border-width: 1px;
border-radius:11px;
left:5%;
top:113%;
height:60px;
width:85%;
`;

const InputLastname = styled.TextInput`
position:absolute;
height: 40px;
border-color: gray; 
border-width: 1px;
border-radius:11px;
left:50%;
top:73%;
height:60px;
width:40%;
`;

const InputFirstname = styled.TextInput`
position:absolute;
height: 40;
border-color: gray; 
border-width: 1px;
border-radius:11px;
left:5%;
top:73%;
height:60px;
width:40%;
`;


export default Register;
