import React, { Component } from "react";
import {
    TextInput, StyleSheet, Text, View, Platform,
    Image, Button,
    TouchableOpacity,
    FlatList, ScrollView, ImageBackground
} from "react-native";
var head = require('../../assets/header')
import Icon from 'react-native-vector-icons/MaterialIcons';
var s = require('../../assets/style');
import db from "../auth/DB";
var b = require('../../assets/stack/home');
export default class Home extends Component {


    render() {
          
        const { replace } = this.props.navigation;
        return (
            <View style={s.container}>
                <View style={head.Header}>
                    <View style={head.Drawer}>
                        <TouchableOpacity onPress={() => {
                            this.props.navigation.push('Setting') }}>
                            <Icon name="settings" size={35} color="#eee" />
                        </TouchableOpacity>
                    </View>
                    <View style={
                        {
                            flexDirection: "column",
                            justifyContent: "center"
                        }
                    }>
                        <Text style={
                            {
                                fontFamily: "serif",
                                fontSize: 25,
                                color: "#eee",
                                fontWeight: "700",
                            }}>
                            Home
                    </Text>
                    </View>
                </View>
    
                <ScrollView style={b.bodyContainer}>
                    
                    <TouchableOpacity>
                    <ImageBackground style={b.bodyItem} imageStyle={b.imageItem}
                    source={require('../../assets/image/temperatur.png')} >  
                    <Text style={b.TextItem}>
                        30°c
                    </Text>
                    <Text style={b.TextMode}>
                        Mode: Auto
                    </Text>
                    </ImageBackground>
                    </TouchableOpacity>

                    <TouchableOpacity>
                    <ImageBackground style={b.bodyItem} imageStyle={b.imageItem}
                    source={require('../../assets/image/humidity.png')} >  
                      <Text style={b.TextItem}>
                        75%
                    </Text>
                    <Text style={b.TextMode}>
                        Condition : Good 
                    </Text>
                    </ImageBackground>
                    </TouchableOpacity>

                    <TouchableOpacity>
                    <ImageBackground style={b.bodyItem} imageStyle={b.imageItem}
                    source={require('../../assets/image/phmeter.png')} >  
                      <Text style={b.TextItem}>
                        20%
                    </Text>
                    <Text style={b.TextMode}>
                        Condition : Good 
                    </Text>
                    </ImageBackground>
                    </TouchableOpacity>

                    <TouchableOpacity>
                    <ImageBackground style={b.bodyItem} imageStyle={b.imageItem}
                    source={require('../../assets/image/humidity.png')} >  
                      <Text style={b.TextItem}>
                     ```
                    </Text>
                    <Text style={b.TextMode}>
                        Okay
                    </Text>
                    </ImageBackground>
                    </TouchableOpacity>

                </ScrollView>

                <View style={s.bottom}>
                    <View style={s.IconContainer}>
                        <View style={s.tengah}>
                                <Icon name="home" size={37} color={db.state.IconcolorActive} />
                        </View>
                        <View style={s.tengah}>
                                <Text style={s.bottom_text_active}>Home</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={s.IconContainer}
                    onPress={()=>{
                        replace('iot')
                    }}
                    >
                        <View style={s.tengah}>
                                <Icon name="tune" size={37} color={db.state.Iconcolor} />
                        </View>
                        <View style={s.tengah}>
                                <Text style={s.bottom_text}>IoT</Text>
                        </View>
                    </TouchableOpacity>  
                    <TouchableOpacity style={s.IconContainer}
                      onPress={()=>{
                        replace('notifications')
                    }}
                    >
                        <View style={s.tengah}>
                                <Icon name="chat" size={37} color={db.state.Iconcolor} />
                        </View>
                        <View style={s.tengah}>
                                <Text style={s.bottom_text}>Notifications</Text>
                        </View>
                    </TouchableOpacity>  
                    <TouchableOpacity style={s.IconContainer}
                      onPress={()=>{
                        replace('profile')
                    }}
                    >
                        <View style={s.tengah}>
                                <Icon name="face" size={37} color={db.state.Iconcolor} />
                        </View>
                        <View style={s.tengah}>
                                <Text style={s.bottom_text}>profile</Text>
                        </View>
                    </TouchableOpacity>  
                    {/* <TouchableOpacity style={s.IconContainer}>
                        <View style={s.tengah}>
                                <Icon name="home" size={37} color={db.state.Iconcolor} />
                        </View>
                        <View style={s.tengah}>
                                <Text style={s.bottom_text}>Home</Text>
                        </View>
                    </TouchableOpacity>     */}
                </View>
            </View>
        );
    }

}
