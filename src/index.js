import React, {Component} from 'react';
import {StatusBar, Text, View} from 'react-native';

import Routes from './routes';

export default function App() {
  return (
      <>
        <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />
        <Routes />
      </>    
  );
}
