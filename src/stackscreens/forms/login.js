/* eslint-disable prettier/prettier */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios';
import {Button, Text, TextInput, View, Image, StyleSheet} from 'react-native';
import styled from 'styled-components';
import { useFonts } from 'expo-font';
import FlashMessage from "react-native-flash-message";
import AsyncStorage from '@react-native-async-storage/async-storage';
import HeaderForms from '../../components/image/headerforms';
import FooterForms from '../../components/image/footerforms';
import TitleTop from '../../components/title/titleTop';
import TitleUnderlabel from '../../components/title/titleUnderlabel';

function Login ({ navigation }){

  const [inputs, setInputs] = React.useState({
      email: '',
      password: '',
    });

  const logMeIn = async () => {

    if (inputs.password.length < 8) {
      
      alert('Password must be at least 8 characters long'); // Reqct native flash message
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
      console.log(response.headers['token']);
     
     console.log(response)
      navigation.navigate('homepage');
    })
    .catch(error => {
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
             <FooterForms/>
             <TitleTop label="PLUS JAMAIS"/>
             <TitleUnderlabel label="GROS"/>
             <TitleH1>Connexion</TitleH1>
                  <SwitchNav onPress={onPressRegister}>
                    <Text>Pas de compte? Créer votre compte  </Text>
                  </SwitchNav>
         <ButtonConnexion onPress={logMeIn}>
          <TextLogin>Connexion</TextLogin>
          </ButtonConnexion>
     <Mdp onPress={onPressPassword}>mot de passe oublié ?</Mdp>
            <InputEmail
                     placeholder=" example@email.com"
                     value={inputs.email} 
                    onChangeText={text => setInputs({...inputs, email: text})}/>
          <InputPassword 
                    placeholder=" password"
                    value={inputs.password} 
                    onChangeText={text => setInputs({...inputs, password: text})}/>
    </View>
  );
};

const TitleNA = styled.Text`
position:absolute;
top: 55;
left: 20;
color: white;
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 30px;
font-family:'Poppins Regular'
`;

const TitleFAT = styled.Text`
position: absolute;
top: 80;
left: 20;
fontFamily: arial;
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 30px;
`;

const TitleH1 = styled.Text`
position: absolute;
top: 210;
left: 40;
fontFamily: arial;
fontSize:30
`;

const InputEmail = styled.TextInput`
position: absolute;
height: 40;
borderColor: gray;
borderWidth: 1 ;
borderRadius:11;
left:20;
top:300;
height:60;
width:340;
`;

const InputPassword = styled.TextInput`
position: absolute;
height: 40;
borderColor: gray;
borderWidth: 1 ;
borderRadius:11;
left:20;
top:380;
height:60;
width:340;
`;

const ButtonConnexion = styled.TouchableOpacity`
position:absolute;
top:565;
left :40;
width: 291px;
height: 58px;
border-radius:40;
backgroundColor:#FFC93E;
`

const TextLogin = styled.Text`
position: absolute;
width: 127px;
height: 30px;
left:100;
top:15;
color:white;
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 30px;
`


const SwitchNav = styled.TouchableOpacity`
position:absolute;
top:700;
left :70;
`

const Mdp = styled.Text`
position:absolute;
top:500;
left :120;
`

export default Login;
