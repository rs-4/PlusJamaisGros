import React from 'react';
import {Button, Text, TextInput, View, Image, StyleSheet, Alert} from 'react-native';
import styled from 'styled-components';
import AdressInput from '../../../../components/inputs/adressInput/index';
import { CardField , StripeProvider} from '@stripe/stripe-react-native';
import Payment from '../../../../components/stripe/payment/index';
import ButtonAnnuler from '../../../../components/button/annnulerButton';
import FooterHome from '../../../../components/image/footerHomepage/index';



const ParamScreenpage = () => {


  const [inputs, setInputs] = React.useState({
    prix: 0,
    nombreSeance: 0,
  });


  return (
    <View style={{zIndex:2}}>
      <Textprix>Payement</Textprix>
      <AdressInput placeholder="Adresse de facturation" ></AdressInput>
      <SessionForgot>Nombre de séances rater :</SessionForgot>
      <NbrSeance
       value={inputs.nombreSeance}  
       onChangeText={text => setInputs({...inputs, nombreSeance: text})}
      ></NbrSeance>
      <StripeProvider publishableKey='pk_test_SAqr8SzsN6BKtHomDpJix0rU' >

        <Payment nombreSeance={inputs.nombreSeance} prix={inputs.prix}/>
      </StripeProvider>
       <Prixseance
            value={inputs.prix}  
            onChangeText={text => setInputs({...inputs, prix: text})}></Prixseance>
       <Prix>Prix de la séance : </Prix>   
        <ButtonAnnuler/>
    <FooterHome  />
       </View>
  );
};

const SessionForgot = styled.Text`
position: absolute;
margin-top: 20;
top:300;
left:5%;
`

const Prix = styled.Text`
position: absolute;
margin-top: 140;
top:300;
left:5%;
`


const Textprix = styled.Text`
position:absolute;
margin-top: 50%;
left:60;
font-weight: 400;
font-size: 20px;
line-height: 30px;
`


const NbrSeance = styled.TextInput`
position: absolute;
    border-color: gray;
    border-width: 1 ;
    border-radius:11;
    margin-top:310;
    height:40;
    width:40%;
    left:50%;
`

const Prixseance = styled.TextInput`
position: absolute;
    border-color: gray;
    border-width: 1 ;
    border-radius:11;
    margin-top:430;
    height:40;
    width:50%;
    left:40%;
`



export default ParamScreenpage;