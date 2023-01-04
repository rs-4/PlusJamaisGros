import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {Button, Text, TextInput, View, Image, StyleSheet} from 'react-native';
import styled from 'styled-components';
import HomeScreenpage from './screens/homescreen';
import SeanceScreenpage from './screens/seancescreen';
import ParamScreenpage from './screens/paramscreen';
import MapView from 'react-native-maps';
import { CardField } from '@stripe/stripe-react-native';

const Tab = createBottomTabNavigator();

function homeScreen(){
    return (
    <HomeScreenpage/>
    );
}


function seanceScreen(){
    return (
    <SeanceScreenpage/>
    );
}

function paramsScreen(){
    return (
    
    <CardField
    postalCodeEnabled={true}
    placeholders={{
      number: '4242 4242 4242 4242',
    }}
    cardStyle={{
      backgroundColor: '#FFFFFF',
      textColor: '#000000',
    }}
    style={{
      width: '100%',
      height: 50,
      marginVertical: 30,
    }}
    onCardChange={(cardDetails) => {
      console.log('cardDetails', cardDetails);
    }}
    onFocus={(focusedField) => {
      console.log('focusField', focusedField);
    }}
  />
    );
}

function Homepage ({ navigation }){

  return (

   <NavigationContainer independent={true} FooterImage={'../../public/footerhome.png'}>

           <HeaderImage  source={require('../../public/headerhome.png')} />
           <Picturep></Picturep>
           <NameTittle>Bonjour </NameTittle>
           <NextSeance>prochaine séance dans : 00:00:00</NextSeance>
           <Title>Accueil</Title>

              <Tab.Navigator
                  screenOptions={{
                    headerShown:false,
                     tabBarStyle:{
                     backgroundColor:'#FFC93E',
                  }}} >
                        <Tab.Screen  
                          name='accueil' 
                          component={homeScreen}/>

                        <Tab.Screen  
                          name='seances' 
                          component={seanceScreen}/>

                       <Tab.Screen  
                          name='parametress' 
                          component={paramsScreen}/>
              </Tab.Navigator>
    </NavigationContainer>

  );
};

const HeaderImage = styled.Image`
top:-50px
`;



const Title = styled.Text`
position:absolute;
top:170;
left:55px;
font-weight: 400;
font-size: 20px;
line-height: 30px;
`

const NextSeance = styled.Text`
position:absolute;
top:100;
left:90px;
color:white;
`

const NameTittle = styled.Text`
position:absolute;
top:50;
left:90px;
font-weight: 400;
font-size: 20px;
line-height: 30px;
`


const Picturep = styled.TouchableOpacity`
position:absolute;
top:50;
left:10;
width:70px;
height:70px;
backgroundColor:black;
border-radius:50;
`



export default Homepage;
