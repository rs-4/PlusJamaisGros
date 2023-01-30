import React, { useEffect , useState ,useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Button, Text, TextInput, View, Image, StyleSheet} from 'react-native';
import styled from 'styled-components';
import HomeScreenpage from './screens/homeScreen';
import SeanceScreenpage from './screens/seancesScreen';
import ParamScreenpage from './screens/paymentscreen/index';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../../public/Home.png'
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const Tab = createBottomTabNavigator();

function homeScreen({ navigation }){
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
  <ParamScreenpage/>
    );
}

function Homepage ({ navigation }){

  const onPressDexo = async () => {
    await AsyncStorage.clear()
    navigation.navigate('login');   
  
  };
  
  const [arrayData, setArrayData] = useState({})
  const initData = async () => {

     try {
    
      const firstName = await AsyncStorage.getItem('firstName');
      const objectData = JSON.parse(firstName)
          setArrayData(objectData)
      if (arrayData == null){
        console.log("eee")
          console.log("homepage :")
     setArrayData(objectData)
     console.log(arrayData)
    console.log(arrayData.firstName)
    return "done"
      }
     } catch (error) {
      console.log("nn")

       alert('imposible de recuperer les données du client vous aller etre rediriger pour vous log ')
     }
  }

    //INIT ASYNC STORAGE DATA CLIENT 
      useEffect(() => {
    initData()
    },[]);
   //AFFICHE LA DATE ET HORAIRE DE LA PROCHAINE SÉANCES 
  const [getDay, setDay] = useState("")
  const [getTitle, setTitle] = useState("")

    var days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
    var date =  new Date().getDay();
    var d = new Date(date);
    var dayName = days[d.getDay()];
   
    useEffect(()=>{
     if(dayName=="Lundi"){
      setDay("test")
    } if(dayName=="Mardi"){
      setDay("test")
    } if(dayName=="Mercredi"){
      setDay("test")
    } if(dayName=="Jeudi"){
      setDay("test")
    } if(dayName=="Vendredi"){
      setDay("vendredi") 
    } if(dayName=="Samedi"){
      setDay()
    } if(dayName=="Dimanche"){
      setDay("test")
    }
    },[])
  
  return (

   <NavigationContainer independent={true} FooterImage={'../../public/footerhome.png'}>
           <HeaderImage  source={require('../../public/headerhome.png')} />
           <Picturep onPress={onPressDexo}></Picturep>
           <NameTittle >Bonjour {arrayData.firstName}</NameTittle>
           <NextSeance>prochaine séance le {getDay} </NextSeance>
              <Tab.Navigator
               screenOptions={({ route }) => ({
                 headerShown:false,
                  tabBarStyle:{
                  backgroundColor:'#FFC93E',
                  },
                  tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Acceuil') {
                      iconName = focused
                        ? 'ios-home'
                        : 'ios-home';
                        setTitle("Payement")
                    } else if (route.name === 'Seances') {
                      iconName = focused ? 'ios-list' : 'ios-list-outline';
                      setTitle("Seances")
                    }
                    else if (route.name === 'Payement') {
                    iconName = focused ? 'ios-card' : 'ios-card';
                    setTitle("Home")
                  }
                  return <Ionicons name={iconName} size={size} color={color} />;
                  },
                  tabBarActiveTintColor: 'white',
                  tabBarInactiveTintColor: 'black',
              })}>
                        <Tab.Screen  
                          name='Acceuil' 
                          component={homeScreen} />
                        <Tab.Screen  
                          name='Seances' 
                          component={seanceScreen}/>
                       <Tab.Screen  
                          name='Payement' r
                          component={paramsScreen}/>
              </Tab.Navigator>
    </NavigationContainer>
  );
};



const HeaderImage = styled.Image`
margin-top:-20;
position: absolute;
z-index: 3;
`;

const Title = styled.Text`
position:absolute;
top:170;
left:55px;
font-weight: 400;
font-size: 20px;
line-height: 30px;
z-index: 3;
`

const NextSeance = styled.Text`
position:absolute;
top:100;
left:90px;
color:white;
z-index: 3;
`
const NameTittle = styled.Text`
position:absolute;
top:50;
left:90px;
font-weight: 400;
font-size: 20px;
line-height: 30px;
z-index: 3;
`
const Picturep = styled.TouchableOpacity`
position:absolute;
top:50;
left:10;
width:70px;
height:70px;
background-color:black;
border-radius:50;
z-index: 3;
`



export default Homepage;
