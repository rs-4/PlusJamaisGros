import React from 'react';
import {Button, Text, TextInput, View, Image, StyleSheet} from 'react-native';
import styled from 'styled-components';

const CardCVCinput = ({top=0,left=40,placeholder}) =>  {
    const CardNumberInput  = styled.TextInput`
    position: absolute;
    borderColor: gray;
    borderWidth: 1 ;
    borderRadius:11;
    marginLeft:${left};
    marginTop:${top};
    height:40;
    width:160;
    `;
    
      return (
       <CardNumberInput placeholder={placeholder}></CardNumberInput>
      );
    }

export default CardCVCinput;