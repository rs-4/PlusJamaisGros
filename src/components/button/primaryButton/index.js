import React from 'react';
import styled from 'styled-components';

const PrimaryButton = ({onPress,label=""}) =>  {
  return (
    <ButtonP onPress={onPress}>
        <Textprimary >{label}</Textprimary>
    </ButtonP>
  );
};

const ButtonP = styled.TouchableOpacity`
position:absolute;
top:138%;
left: 10%;
width: 291px;
height: 58px;
border-radius:40;
background-color:#FFC93E;
`

const Textprimary = styled.Text`

width: 127px;
// A CHANGER C DEGEULASE
height: 30px;
left:32%;
top:25%;
color:white;
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 30px;
`

export default PrimaryButton;
