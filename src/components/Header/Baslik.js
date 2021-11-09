import React, { Component } from 'react'
import { Text, View } from "react-native";

import {baslikStyles} from './Style_baslik';
import { bgRenkler } from '../../config/colors';
import { renkler } from '../../config/colors';

export default class Baslik extends React.Component {
    render() {
        return (
        <View style={baslikStyles.container}>
            <Text style={{ backgroundColor: bgRenkler.bgBirinci, color: renkler.yazi_color}}>BAŞLIK SAYFASI</Text>
            <Text style={baslikStyles.subtitle}>Hangi Ülkeyi Merak Ediyorsun</Text>
            <View style={baslikStyles.boslukVer}></View>
            <Text style={baslikStyles.title}>COUNTRIES</Text>
        </View>
        )
    }
}
