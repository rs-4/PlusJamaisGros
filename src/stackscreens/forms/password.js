/* eslint-disable prettier/prettier */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styled from 'styled-components';
import {Button, Text, TextInput, View,} from 'react-native';

import HeaderForms from '../../components/image/headerforms';
import FooterForms from '../../components/image/footerforms';
import TitleTop from '../../components/title/titleTop';
import TitleUnderlabel from '../../components/title/titleUnderlabel';


function Password ({ navigation }){

  const onPressRegister = () => {
  navigation.navigate('login');
};

const Valider = () => {
 //find by email , send email whit password 
};

  return (
    <View>

      <HeaderForms/>
      <FooterForms/>
      <TitleTop label="PLUS JAMAIS"/>
      <TitleUnderlabel label="GROS"/>
      <TitleH1>Reset password </TitleH1>
            <SwitchNav onPress={onPressRegister}>
             <Text>Déja un compte ? Connecter vous</Text>
            </SwitchNav>
            
        <ButtonConnexion onPress={Valider}>
        <TextLogin>Confirmer</TextLogin>
     </ButtonConnexion>
  <InputEmail placeholder=" example@email.com" />
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
top:350;
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

export default Password;
