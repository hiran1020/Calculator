import React, { useState } from 'react';
import { View, Text, Switch, SafeAreaView } from 'react-native';
import {Style,CommonBtn} from './src/styles/Styles';
import { calcColor } from './src/styles/Colors';
import { ThemeContext } from './src/context/ThemeContext';
import Button from './src/components/Button';
import Keyboard from './src/components/CalcKeyboard';

const App = () => {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={theme}>

    <SafeAreaView style={theme === 'light' ? Style.container : [Style.container, { backgroundColor: "black" }]}>
      <Text style={{ color: calcColor.white }}>App</Text>
      <Switch
        value={theme === 'light'}
        onValueChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        trackColor={{ false: "grey", true: "blue" }} // Example track color change
        thumbColor={theme === 'light' ? "white" : "black"} // Example thumb color change
        />
        <Keyboard />
    </SafeAreaView>
        </ThemeContext.Provider>
  );
}

export default App;
