import React from 'react';
import {Button, Text, TextInput, View, Image, StyleSheet} from 'react-native';
import styled from 'styled-components';

const FooterHome = () =>  {
  return (
    <FooterImage source={require('../../../public/footerhome.png')} />
  );
};

const FooterImage = styled.Image`
position:absolute;
margin-top: 170%;
`
export default FooterHome;