import React from 'react';
import {Button, Text, TextInput, View, Image, StyleSheet} from 'react-native';
import styled from 'styled-components';
import SessionInput from "../../../components/inputs/sessionInput"

const SeanceScreenpage = () => {
  return (
    <View>
        <SessionInput  placeholder=" Lundi example :18-19h" top="0"></SessionInput>
        <SessionInput  placeholder=' Mardi example :18-19h' top="50"></SessionInput>
        <SessionInput  placeholder=' Mercredi example :18-19h' top="100"></SessionInput>
        <SessionInput  placeholder=' Jeudi example :18-19h' top="150"></SessionInput>
        <SessionInput  placeholder=' Vendredi example :18-19h' top="200"></SessionInput>
        <SessionInput  placeholder=' Samedi example :18-19h' top="250"></SessionInput>
        <SessionInput  placeholder=' Dimanche example :18-19h' top="300"></SessionInput>
    <ButtonAnnuler>
   <TexteAnnuler>Annuler</TexteAnnuler>
   </ButtonAnnuler>
<ButtonValider>
   <TextValider>Valider </TextValider>
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
left:35px;
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
top:400;
left :200;
width: 130px;
height: 40px;
border-radius:40;
backgroundColor:#FFC93E;
`;


export default SeanceScreenpage;