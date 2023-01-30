import React from 'react';
import {Button, Text, TextInput, View, Image, StyleSheet} from 'react-native';
import styled from 'styled-components';

const FooterForms = () =>  {
  return (
    <FooterImage source={require('../../../public/footer.png')} />
  );
};

const FooterImage = styled.Image`

top:109%;
width:390;
height: 222;
position: relative;
z-index: -1;
`;

export default FooterForms;