import { StatusBar } from 'expo-status-bar';
import React from 'react';

//Importing the App routes
import Routes from './src/routes';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Routes />
    </>
  );
}


