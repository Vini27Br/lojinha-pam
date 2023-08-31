import React from "react";
import {View, Dimensions, Image, StyleSheet, Text } from "react-native";

import UnoTopo from "../../../assets/UnoTopo.jpg"

import unoescada from "../../../assets/unoescada.jpg"

import oitorodas from "../../../assets/8rodas.jpg"

const width = Dimensions.get('screen').width;

export default function Catalogo() {

    return <>
    <Image source={ UnoTopo } style={estilos.topo} />
    
    <Text style={estilos.titulo}>ESCOLHA O SEU CARRO E APOSTE</Text>


    <View>

    <Text >ESCOLHA SEU CARRO</Text>

    <Text style={estilos.corredortitulo} > Trovão </Text>
    <Image source={ unoescada } style={estilos.corredor}/>

    <Text style={estilos.corredortitulo} > Alavanche </Text>
    <Image source={ oitorodas } style={estilos.corredor}/>

    </View>
    </>


}

const estilos = StyleSheet.create({ 

    corredor: {
        width: 300,
        height: 150

    },
    corredortitulo: {
        fontSize: 18,
        marginTop: 5

    },


    topo: {
        width: "100%",
        height: 578 / 768 * width,
    },
    titulo: {
        width: "100%",
        position: "absolute",
        color: "black",
        textAlign: "center",
        fontSize: 24,
        lineHeight: 26,
        padding: 16,
        
    },





})