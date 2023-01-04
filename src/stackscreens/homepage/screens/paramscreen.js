import React from 'react';
import {Button, Text, TextInput, View, Image, StyleSheet, Alert} from 'react-native';
import styled from 'styled-components';
import CardCVCinput from '../../../components/inputs/cvcInput';
import CardDateInput from '../../../components/inputs/cardDateInput';
import CardNumberInput from '../../../components/inputs/cardNumberInput';
import AdressInput from '../../../components/inputs/adressInput';
import { StripeProvider } from '@stripe/stripe-react-native';
import Payment from '../../../components/stripe/payment';




const ParamScreenpage = () => {
  return (
    <View>
  
      <StripeProvider publishableKey='pk_test_SAqr8SzsN6BKtHomDpJix0rU' >
         <Payment/>
      </StripeProvider>

      <AdressInput placeholder=" Addresse de facturation"></AdressInput>
      <CardNumberInput top="100" placeholder="  5531 XXXX XXXX XXXX"></CardNumberInput>
   <CardCVCinput  top="150" left="190"  placeholder=" CVC"></CardCVCinput>
   <CardDateInput top="150" left="10"  placeholder=" 12/26"></CardDateInput>
    <ButtonAnnuler>
       <TexteAnnuler>Annuler</TexteAnnuler>
       </ButtonAnnuler>
    <ButtonValider>
       <TextValider >Valider </TextValider>
           </ButtonValider>
    <FooterImage  source={require('../../../public/footerhome.png')} />
       </View>
  );
};

const FooterImage = styled.Image`
position:absolute
top: 390px;
`

const TexteAnnuler  = styled.Text`
color:white;
left:40px;
top:10px;
`

const ButtonAnnuler = styled.TouchableOpacity`
position:absolute;
top:400;
left :40;
width: 130px;
height: 40px;
border-radius:40;
backgroundColor:#F94141;
`

const TextValider = styled.Text`
color:white;
left:40px;
top:10px;
`
const ButtonValider = styled.TouchableOpacity`
position:absolute;
top:100;
left :200;
width: 130px;
height: 40px;
border-radius:40;
backgroundColor:#FFC93E;`;
;


export default ParamScreenpage;