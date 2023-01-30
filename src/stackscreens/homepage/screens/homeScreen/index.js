import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {Button, Text, TextInput, View, Image, StyleSheet, Dimensions} from 'react-native';
import styled from 'styled-components';
//import MapView , {PROVIDER_GOOGLE} from 'react-native-maps'
//import Constants from "expo-constants"
import { useState , useEffect } from 'react';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import PrimaryButton from '../../../../components/button/primaryButton';
import { request, PERMISSIONS, RESULT } from "react-native-permissions";
import Geolocation from "react-native-geolocation-service"
import FooterHome from '../../../../components/image/footerHomepage';



const HomeScreenpage = () => {

  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  useEffect(() => { 
    getLocation()
    },[]);

  const getLocation = () => {
    request(PERMISSIONS.IOS.LOCATION_ALWAYS).then((result) => {
      switch (result) {
        case RESULTS.UNAVAILABLE:
          console.log(
            "This feature is not available (on this device / in this context)"
          );
          break;
        case RESULTS.DENIED:
          console.log(
            "The permission has not been requested / is denied but requestable"
          );
          break;
        case RESULTS.LIMITED:
          console.log("The permission is limited: some actions are possible");
          break;
        case RESULTS.GRANTED:
          console.log("The permission is granted");
          getUserLocation();
          break;
        case RESULTS.BLOCKED:
          console.log("The permission is denied and not requestable anymore");
          break;
      }
    });
       Geolocation.getCurrentPosition(
          position => {
            console.log("test")
            console.log(position);
            setLongitude(position.coords.longitude)
            setLatitude(position.coords.latitude)
          },
          error => {
            console.log(error, error.message);
          },
          {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
        );
}
 
  return (
    <View >
       <View style={styledd.container}>
       <GooglePlacesAutocomplete
placeholder='Search'
styles={{ 
container: { position:'absolute', top:200,left:50,width:"80%", zIndex: 2 },
  listView: { backgroundColor: "white" }}}
debounce={400}
query={{
  key:"",
  language:'en',
}}

onPress={item => {console.log(item);}}
/>
       <MapView style={styles.map}
    provider={MapView.PROVIDER_GOOGLE}
    initialRegion={{
      latitude: latitude,
      longitude: longitude,
    }}
    >
<Marker
//SA MARCHE PTNNN
    coordinate={{
      latitude : latitude,
      longitude: longitude 
    } }
   
   style={{zIndex:0}}
    />
    </MapView>
    <PrimaryButton onPress={{getLocation}}/>
    </View>
    <FooterHome  />
</View>     
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top:-1,
    zIndex:10
  },
  map: {
    width: '300%',
    height: '100%',
    top:160,
    zIndex:1
  },
});



const styledd = StyleSheet.create({
  container: {
    top:0,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    zIndex:1,
  },
  searchContainer: {
    position: "absolute",
    width: "90%",
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
    padding: 8,
    borderRadius: 8,
  },
  input: {
    borderColor: "#888",
    borderWidth: 1,
  },


});

export default HomeScreenpage;
