import React from 'react';
import {Button, Text, TextInput, View, Image, StyleSheet, Dimensions} from 'react-native';
import styled from 'styled-components';
import MapView from 'react-native-maps';


const HomeScreenpage = () => {
  return (
    <View>
      <MapView style={styles.map}/>
    <Text >sds</Text>
         <Text>test</Text>
              <Text>test</Text>
                   <Text>test</Text>
         <Text>test</Text>
    <FooterImage  source={require('../../../public/footerhome.png')} />
</View>     
  );

};
const styles = StyleSheet.create({
  map:{
    position:"absolute",
    color: "red",
    width : Dimensions.get("window").width,
    heigth : Dimensions.get("window").height
  }
})

const FooterImage = styled.Image`
position:absolute
top: 390px;
`;


export default HomeScreenpage;
