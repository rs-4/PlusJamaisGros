import React from 'react';
import {Button, Text, TextInput, View, Image, StyleSheet} from 'react-native';
import styled from 'styled-components';

const SessionInput = ({left=0,top=0,placeholder="",value}) =>  {

    const SessionContainer  = styled.TextInput`
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
   <SessionContainer placeholder={placeholder}></SessionContainer>
  );
  
};


export default SessionInput;