import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import Styled from 'styled-components';
import Routes from './src/config/routes';


const App = () => {
  return <Routes />;
};

const StyledText = Styled.Text`
  color: red;
`;

export default App;
