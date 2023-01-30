import React from 'react';
import {Button, Text, TextInput, View, Image, StyleSheet} from 'react-native';
import styled from 'styled-components';

const TitleTop = ({ label = ""}) => {
  return (
        <TitleNA>{label} </TitleNA>       
  );
};

const TitleNA = styled.Text`
position:absolute;
top: 15%;
left: 5%;
color: white;
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 30px;
`;

export default TitleTop;
