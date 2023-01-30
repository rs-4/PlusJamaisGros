import React from 'react';
import {Button, Text, TextInput, View, Image, StyleSheet} from 'react-native';
import styled from 'styled-components';

const SwitchFormsScreen = ({top="",left="",label="",onPress=""}) =>  {

    const SwitchNav = styled.TouchableOpacity`
    position:absolute;
    top:${top};
    left:${left};
    `
  return (
   <SwitchNav onPress={onPress}>
    <Text>{label}</Text>
   </SwitchNav>
  );
  
};


export default SwitchFormsScreen;