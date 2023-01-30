/* eslint-disable prettier/prettier */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styled from 'styled-components';
import {View,} from 'react-native';
import axios from 'axios';

import HeaderForms from '../../../components/image/headerForms/index';
import FooterForms from '../../../components/image/footerFroms/index';
import TitleTop from '../../../components/title/titleTop/index';
import Titleprimary from '../../../components/title/titlePrimary';
import TitleUnderlabel from '../../../components/title/titleUnderlabel';
import SwitchFormsScreen from '../../../components/inputs/switchFormsScreen';
import PrimaryButton from '../../../components/button/primaryButton';

function Password ({ navigation }){

  const onPressRegister = () => {
  navigation.navigate('login');
};

const [inputs, setInputs] = React.useState({
  email: '',
});

const Valider = async () => {
  console.log("valider")
 //find by email , send email whit password 
 const req = axios({
  method: 'post',
  url: 'http://localhost:3001/api/v1/user/password',
  data: {
    email:inputs.email,
  }
}).then(response => {
  alert(`un email a été envoyé a ${inputs.email}`)
  navigation.navigate('login')
}) .catch(error => {
  alert(`${inputs.email} n'est pas un email connue`)
});
console.log(req)
}

  return (
    <View>
        <HeaderForms/>
            <FooterForms/>
              <TitleTop label="PLUS JAMAIS"/>
                 <TitleUnderlabel label="GROS"/>
                   <Titleprimary label='Mdp oublié'/>
                 <SwitchFormsScreen top="160%"  
                 left="20%"  
                 onPress={onPressRegister} 
                 label="Déja un compte ? Connecter vous"/>
             <PrimaryButton 
             onPress={Valider} 
             label="Confirmer"/>
        <InputEmail placeholder="Example@email.com"
                   value={inputs.email}
                   onChangeText={text => setInputs({...inputs, email: text})} />
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
top:90%;
height:60px;
width:85%;
`;

export default Password;
