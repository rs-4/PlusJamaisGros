import React from 'react';
import {Button, Text, TextInput, View, Image, StyleSheet} from 'react-native';
import styled from 'styled-components';

const AdressInput = ({top=370,placeholder}) =>  {
    const CardNumberInput  = styled.TextInput`
    position: absolute;
    border-color: gray;
    border-width: 1 ;
    border-radius:11;
    margin-left:10;
    margin-top:${top};
    height:40;
    width:340;
    `;
    
      return (
       <CardNumberInput placeholder={placeholder}></CardNumberInput>
      );
      }
export default AdressInput;
