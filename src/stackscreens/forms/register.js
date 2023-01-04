/* eslint-disable prettier/prettier */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios';
import {Button, Text, TextInput, View, Image, StyleSheet} from 'react-native';
import styled from 'styled-components';

 
import HeaderForms from     '../../components/image/headerforms';
import FooterForms from     '../../components/image/footerforms';
import TitleTop from        '../../components/title/titleTop';
import TitleUnderlabel from '../../components/title/titleUnderlabel';
import { AnimatedRegion } from 'react-native-maps';
import AsyncStorage from '@react-native-async-storage/async-storage';



function Register ({ navigation }){

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
  console.log(AsyncStorage.getItem('token'))
  })
  .catch(error => {
    console.log(error);
    alert
  
    alert("Impossible d'inscrire votre compte" )
    return;
  });

  }

  const onPressLogin = () => {
  navigation.navigate('login');
};


  return (

    <View>
      
          <HeaderForms/>
          <FooterForms/>
          <TitleTop label="PLUS JAMAIS"/>
          <TitleUnderlabel label="GROS"/>
          <TitleH1>Inscription</TitleH1>
          <SwitchNav onPress={onPressLogin}><Text>Déja un compte ? Connecter vous </Text></SwitchNav>
          <ButtonConnexion onPress={registerMe}>
            <TextLogin>Inscription</TextLogin>
            </ButtonConnexion>

      <InputEmail    
       placeholder=" example@jhj.com"
       value={inputs.email}  
       onChangeText={text => setInputs({...inputs, email: text})}/>
      <InputFirstname 
      placeholder=" firstName"  
      value={inputs.firstname}  
      onChangeText={text => setInputs({...inputs, firstname: text})}/>
      <InputPassword  
      placeholder=" password"
      value={inputs.password} 
      onChangeText={text => setInputs({...inputs, password: text})}/>
      <InputLastname  
      placeholder=" lastName"
      value={inputs.lastname} 
      onChangeText={text => setInputs({...inputs, lastname: text})}/>

    </View>
  );
};

 
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
top:380;
height:60;
width:340;
placeholder: example@email.com;
`;

const InputPassword = styled.TextInput`
position: absolute;
height: 40;
borderColor: gray;
borderWidth: 1 ;
borderRadius:11;
left:20;
top:460;
height:60;
width:340;
placeholder: example@email.com;
`;

const InputFirstname = styled.TextInput`
position:absolute;
height: 40;
borderColor: gray; 
borderWidth: 1 ;
borderRadius:11;
left:190;
top:300;
height:60;
width:170;
placeholder:example@email.com;
`;

const InputLastname = styled.TextInput`
position:absolute;
height: 40;
borderColor: gray; 
borderWidth: 1;
borderRadius:11;
left:20;
top:300;
height:60;
width:160;
placeholder:example@email.com;
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
left :80;
`



export default Register;
