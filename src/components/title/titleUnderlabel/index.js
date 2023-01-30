import React from 'react';
import {Button, Text, TextInput, View, Image, StyleSheet} from 'react-native';
import styled from 'styled-components';

const TitleUnderlabel = ({ label = ""}) => {
  return (    
        <TitleFAT>{label}</TitleFAT> 
    
  );
};

const TitleFAT = styled.Text`
position: absolute;
top: 20%;
left: 5%;
font-family: arial;
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 30px;
`;

export default TitleUnderlabel;
