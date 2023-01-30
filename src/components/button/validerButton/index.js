import React from 'react';
import styled from 'styled-components';

const ButtonValider = ({onPress}) =>  {
  return (
    <Buttonvalid onPress={onPress}>
        <TextValider >Valider </TextValider>
    </Buttonvalid>
  );
};

const TextValider = styled.Text`
color:white;
text-align: center;
top:25%;
z-index: 10;
`
const Buttonvalid = styled.TouchableOpacity`
position:absolute;
top: 680;
left :50%;
width: 130px;
height: 40px;
border-radius:40;
z-index: 10;
background-color:#FFC93E;`;


export default ButtonValider;

