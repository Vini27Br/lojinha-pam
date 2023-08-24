import React from "react";
import {View, Dimensions, Image, StyleSheet, Text } from "react-native";

import UnoTopo from "../../../assets/UnoTopo.jpg"

const width = Dimensions.get('screen').width;

export default function Catalogo() {

    return <>
    <Image source={ UnoTopo } />
    

    </>


}

const estilos = StyleSheet.create({ 



})