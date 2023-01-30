import React from 'react';
import { useEffect , useState } from 'react';
import {Button, Text, TextInput, View, Image, StyleSheet} from 'react-native';
import styled from 'styled-components';
import SessionInput from "../../../../components/inputs/sessionInput"
import ButtonValider from '../../../../components/button/validerButton';
import ButtonAnnuler from '../../../../components/button/annnulerButton';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FooterHome from '../../../../components/image/footerHomepage';


const SeanceScreenpage = () => {

  const [arrayData, setArrayData] = useState({})
  const [inputs, setInputs] = React.useState({
    lundi: "",
    mardi: "",
    mercredi: "",
    jeudi: "",
    vendredi: "",
    samedi: "",
    dimanche: "",
  });

  const updateDate = async () => {


const firstName = await AsyncStorage.getItem('firstName');
console.log(firstName)
const objectData = JSON.parse(firstName)
    setArrayData(objectData)
  axios({
    method: 'post',
    url: `http://localhost:3001/api/v1/user/update`,
    data: {
    email:arrayData.email,
    lundi:inputs.lundi,
    mardi:inputs.mardi,
    mercredi:inputs.mercredi,
    jeudi:inputs.jeudi,
    vendredi:inputs.vendredi,
    samedi:inputs.samedi,
    dimanche:inputs.dimanche
    },
  }) .then(async response => {
    console.log(response)
    alert("Date update")
  })   .catch(error => {
    alert("Cant add data")
    console.log(error);
  });
}
   const data = async () =>{

const firstName = await AsyncStorage.getItem('firstName');
console.log(firstName)
const objectData = JSON.parse(firstName)
setArrayData(objectData)
 console.log(arrayData)
 console.log(arrayData.mercredi)
      //  inputs.lundi = arrayData.lundi
      //  inputs.mardi = arrayData.mardi
      //  inputs.mercredi = arrayData.mercredi
      //  inputs.jeudi = arrayData.jeudi
      //  inputs.vendredi = arrayData.vendredi
      //  inputs.samedi = arrayData.samedi
      //  inputs.dimanche = arrayData.dimanche
   }

   useEffect(() => {

  },[]);
  return (
    <View>
      <Textseances>Séances</Textseances>
        <SessionInput  placeholder=" Lundi exemple :18-19h" top="280"
            value={inputs.lundi} 
            onChangeText={text => setInputs({...inputs, lundi: text})}></SessionInput>
        <SessionInput  placeholder=' Mardi exemple :18-19h' top="330"
            value={inputs.mardi} 
            onChangeText={text => setInputs({...inputs, mardi: text})}></SessionInput>
            <Text></Text>
        <SessionInput  placeholder=' Mercredi exemple :18-19h' top="380"
            value={inputs.mercredi} 
            onChangeText={text => setInputs({...inputs, mercredi: text})}>{inputs.mercredi}</SessionInput>
        <SessionInput  placeholder=' Jeudi exemple :18-19h' top="430"
            value={inputs.jeudi} 
            onChangeText={text => setInputs({...inputs, jeudi: text})}></SessionInput>
        <SessionInput  placeholder=' Vendredi exemple :18-19h' top="480"
            value={inputs.vendredi} 
            onChangeText={text => setInputs({...inputs, vendredi: text})}></SessionInput>
        <SessionInput  placeholder=' Samedi exemple :18-19h' top="530"
            value={inputs.samedi} 
            onChangeText={text => setInputs({...inputs, samedi: text})}></SessionInput>
        <SessionInput  placeholder=' Dimanche exemple :18-19h' top="580"
            value={inputs.dimanche} 
            onChangeText={text => setInputs({...inputs, dimanche: text})}></SessionInput>
    <ButtonAnnuler/>
    <ButtonValider onPress={updateDate}/>
    
    <FooterHome  />
 </View>
  );
};



const Textseances = styled.Text`
position:absolute;
margin-top: 50%;
left:60;
font-weight: 400;
font-size: 20px;
line-height: 30px;
`



export default SeanceScreenpage;