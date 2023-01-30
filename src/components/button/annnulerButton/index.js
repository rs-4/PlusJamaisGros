import React from 'react';
import {Button, Text, TextInput, View, Image, StyleSheet} from 'react-native';
import styled from 'styled-components';

const ButtonAnnuler = () =>  {
  return (
    <ButtonAnnule>
        <TexteAnnuler > Annuler </TexteAnnuler>
    </ButtonAnnule>
  );
};
const TexteAnnuler  = styled.Text`
color:white;
text-align: center;
vertical-align: middle;
top:25%;
`

const ButtonAnnule = styled.TouchableOpacity`
position:absolute;
top:680;
left :10%;
width: 130px;
height: 40px;
border-radius:40;
background-color:#F94141;
z-index: 10;
`


export default ButtonAnnuler;
