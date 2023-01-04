

import React from 'react';
import {Button, Text, TextInput, View, Image, StyleSheet} from 'react-native';
import styled from 'styled-components';

const SessionInput = ({left=0,top=0,placeholder=""}) =>  {

    const SessionContainer  = styled.TextInput`
position: absolute;
borderColor: gray;
borderWidth: 1 ;
borderRadius:11;
marginLeft:10;
marginTop:${top};
height:40;
width:340;
`;

  return (
   <SessionContainer placeholder={placeholder}></SessionContainer>
  );
  
};


export default SessionInput;