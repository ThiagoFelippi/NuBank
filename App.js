import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { StatusBar } from 'react-native'

import Home from './src/Home'

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#8B10AE" />
      <Home />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
