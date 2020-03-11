import React, { Component } from "react";
import {
    Text, TouchableOpacity, View, Image, ScrollView
} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import DB from '../auth/DB';
var head = require('../../assets/header')
var s = require('../../assets/style');

export default class iot_master extends Component {

    render() {
        const { replace } = this.props.navigation;
        return (<View style={s.container}>
             <View style={ head.Header}>
                    <View style={ head.Drawer }>
                        <TouchableOpacity onPress={()=>{
                            this.props.navigation.openDrawer();
                        }}>
                          <Icon name="reorder" size={35} color="#eee"/>
                          </TouchableOpacity>
                    </View>
                    
                    <View style={
                        {
                            flexDirection:"column",
                            justifyContent:"center"
                        }
                    }>        
                    <Text style={
                        {
                            fontFamily: "serif",
                            fontSize:25,
                            color:"#eee",
                            fontWeight:"700", } }>
                        IoT
                    </Text>

                    </View>
                </View>
            <ScrollView style={s.body}>


            </ScrollView>

        </View>)

    }

}