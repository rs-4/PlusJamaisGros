import React from 'react';
import {Button, Text, TextInput, View, Image, StyleSheet} from 'react-native';
import styled from 'styled-components';

const Titleprimary = ({ label = ""}) => {
  return (
        <TitleNA>{label} </TitleNA>       
  );
};

const TitleNA = styled.Text`
position:absolute;
top: 50%;
left: 10%;
color: black;
font-family: arial;
font-size:30
;`

export default Titleprimary;
