import * as React from 'react';
//import React, { Component } from 'react'
import {View, Text} from 'react-native';

import Baslik from './components/Header/Baslik';
import Home from "./screens/Home";

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
           <Home />
           <Baslik />
      </View>
    );
  }
}
