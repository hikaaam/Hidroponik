import React, { Component } from "react";
import {
    Text, View, TouchableOpacity, ScrollView, Image
} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
var s = require('../../assets/style');
var head = require('../../assets/header')


export default class notifications extends Component {
    render() {
        const { replace } = this.props.navigation;
        function notifbox(text, judul) {
            return (
                <View style={s.notif}>
                    <Text style={s.notifText}>
                        {text}
                    </Text>
                    <Text style={s.bottom_text}>
                        {judul}
                    </Text>
                </View>
            );
        }
        return (
            <View style={s.container}>
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
                        Notifications
                    </Text>

                    </View>
                </View>
                <ScrollView style={s.body}>
                    <ScrollView style={s.scrollnotif}>
                        {notifbox('Hidroponik', 'You are evaluating javascript with your for loop but you dont have the curly braces around it. I think you could wrap your repeating component into a dumb component')}
                        {notifbox('Hidroponik', 'You are evaluating javascript with your for loop but you dont have the curly braces around it. I think you could wrap your repeating component into a dumb component')}
                        {notifbox('Hidroponik', 'You are evaluating javascript with your for loop but you dont have the curly braces around it. I think you could wrap your repeating component into a dumb component')}
                        {notifbox('Hidroponik', 'You are evaluating javascript with your for loop but you dont have the curly braces around it. I think you could wrap your repeating component into a dumb component')}
                        {notifbox('Hidroponik', 'You are evaluating javascript with your for loop but you dont have the curly braces around it. I think you could wrap your repeating component into a dumb component')}
                        {notifbox('Hidroponik', 'You are evaluating javascript with your for loop but you dont have the curly braces around it. I think you could wrap your repeating component into a dumb component')}
                        {notifbox('Hidroponik', 'You are evaluating javascript with your for loop but you dont have the curly braces around it. I think you could wrap your repeating component into a dumb component')}
                    </ScrollView>
                </ScrollView>
               
            </View>

        );
    }
}