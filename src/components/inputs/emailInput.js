import React from 'react';
import {Button, Text, TextInput, View, Image, StyleSheet} from 'react-native';
import styled from 'styled-components';

const emailInput = () =>  {
  return (
    <FooterImage source={require('../../public/footer.png')} />
  );
};

const FooterImage = styled.Image`
top: 435px;
width: 390px;
height: 220px;
`;

export default emailInput;