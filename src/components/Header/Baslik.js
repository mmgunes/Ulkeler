import React, { Component } from 'react'
import { Text, View } from "react-native";

import {baslikStyles} from './Style_baslik';

export default class Baslik extends React.Component {
    render() {
        return (
        <View style={baslikStyles.container}>
            <Text >BAŞLIK SAYFASI</Text>
            <Text style={baslikStyles.subtitle}>Hangi Ülkeyi Merak Ediyorsun</Text>
            <Text style={baslikStyles.title}>COUNTRIES</Text>
        </View>
        )
    }
}
