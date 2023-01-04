import React from 'react';
import {Button, Text, TextInput, View, Image, StyleSheet} from 'react-native';
import styled from 'styled-components';

const CardDateInput = ({top=0,placeholder}) =>  {
    const CardNumberInput  = styled.TextInput`
    position: absolute;
    borderColor: gray;
    borderWidth: 1 ;
    borderRadius:11;
    marginLeft:10;
    marginTop:${top};
    height:40;
    width:160;
    `;
    
      return (
       <CardNumberInput placeholder={placeholder}></CardNumberInput>
      );
    }


export default CardDateInput;
