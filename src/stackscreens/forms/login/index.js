/* eslint-disable prettier/prettier */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios';
import {View} from 'react-native';
import styled from 'styled-components';

import AsyncStorage from '@react-native-async-storage/async-storage';
import HeaderForms from '../../../components/image/headerForms/index';
import FooterForms from '../../../components/image/footerFroms/index';
import TitleTop from '../../../components/title/titleTop/index';
import TitleUnderlabel from '../../../components/title/titleUnderlabel/index'
import Titleprimary from '../../../components/title/titlePrimary';
import SwitchFormsScreen from '../../../components/inputs/switchFormsScreen';
import PrimaryButton from '../../../components/button/primaryButton';

function Login ({ navigation }){

  const [inputs, setInputs] = React.useState({
      email: '',
      password: '',
    });

  const logMeIn = async () => {

    if (inputs.password.length < 8) {
      
      alert('Password must be at least 8 characters long or missing'); // Reqct native flash message
      return;
    }
    if (inputs.email.length < 8) {
      
      alert('Email invalid  or missing'); // Reqct native flash message
      return;
    }
  
    axios({
      method: 'post',
      url: `http:/localhost:3001/api/v1/auth/login`,
      data: {
        email:inputs.email,
        password: inputs.password,
      },
    }) .then(async response => {
      const jsonValue = JSON.stringify(response.data)
     await 
     AsyncStorage.setItem('firstName',jsonValue)
    const firstName = await AsyncStorage.getItem('firstName');
    
      navigation.navigate('homepage');
    })   .catch(error => {
      alert("This account doesn't exist")
      console.log(error);
    });
    }

  const onPressRegister = () => {
  navigation.navigate('register');   
};

const onPressPassword = () => {
  navigation.navigate('password');
};

  return (
    <View>
     <HeaderForms/>
          <TitleTop label="PLUS JAMAIS"/>
            <TitleUnderlabel label="GROS"/>
              <Titleprimary label="Connexion"></Titleprimary>
                  <InputEmail
                     placeholder="Example@email.com"
                     value={inputs.email} 
                     onChangeText={text => setInputs({...inputs, email: text})}
                       />
                   <InputPassword 
                    secureTextEntry={true}
                    placeholder="Password"
                    value={inputs.password} 
                    onChangeText={text => setInputs({...inputs, password: text})}
                       />
                   <SwitchFormsScreen top="120%" left="30%" onPress={onPressPassword} label="mot de passe oublié"/>
             <PrimaryButton onPress={logMeIn} label ="Connnexion"/>
        <SwitchFormsScreen top="160%" left="20%" onPress={onPressRegister} label="Pas de compte? Créer votre compte "/>
        <FooterForms/>
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
top:75%;
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
top:95%;
height:60px;
width:85%;
`;

export default Login;
