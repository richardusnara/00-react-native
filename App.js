import React from 'react';
import theme from './src/shared/constants/theme';
import { ThemeProvider } from './src/shared/contexts/ThemeContext';
import {View, StyleSheet, Text} from "react-native"
import { StatusBar } from 'expo-status-bar';
import useAppFont from './src/shared/hooks/useAppFont';
import MaintContainer from './src/shared/components/MainContainer';
import Welcome from './src/features/Welcome/Welcome';
import Login from './src/features/Login/Login';



export default function App() {
  const fonts = useAppFont()
  if(!fonts){
    return null;

  }
  return (
    <ThemeProvider>
    <MaintContainer>
      <Login/>
    </MaintContainer>
    </ThemeProvider>
  );
}



