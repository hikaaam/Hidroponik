import React, { Component } from "react";
import {
    Text, View, TouchableOpacity, ScrollView, Image
} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
var s = require('../../assets/style');
var head = require('../../assets/header')
import db from '../auth/DB';


export default class notifications extends Component {
    render() {
        const { replace } = this.props.navigation;
        function notifbox(text, judul, date) {
            return (
                <View style={s.notif}>
                    <View style={s.notifIcon}>
                    <Icon name='opacity' size={35} color='green' />
                    </View>
                    <View style={s.notifDate}>
                         <Text style={s.notifDateText}
                         >{date}</Text>
                    </View>
                    <View style={s.notifbox}>
                    <Text style={s.notifTitle}>
                        {text}
                    </Text>
                    <Text style={s.notifText}>
                        {judul}
                    </Text>
                    </View>
                </View>
            );
        }
        return (
            <View style={s.container}>
      <View style={ head.Header}>
                    <View style={ head.Drawer }>
                        <TouchableOpacity onPress={()=>{
                            this.props.navigation.push('Setting')
                        }}>
                          <Icon name="settings" size={35} color="#eee"/>
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
                        {notifbox('Hidroponik', 'You are evaluating javascript with your for loop but you dont have the curly braces around it. I think you could wrap your repeating component into a dumb component','12 Mar, 09:23 PM')}
                        {notifbox('Hidroponik', 'You are evaluating javascript with your for loop but you dont have the curly braces around it. I think you could wrap your repeating component into a dumb component','12 Mar, 09:23 PM')}
                        {notifbox('Hidroponik', 'You are evaluating javascript with your for loop but you dont have the curly braces around it. I think you could wrap your repeating component into a dumb component','12 Mar, 09:23 PM')}
                        {notifbox('Hidroponik', 'You are evaluating javascript with your for loop but you dont have the curly braces around it. I think you could wrap your repeating component into a dumb component','12 Mar, 09:23 PM')}
                        {notifbox('Hidroponik', 'You are evaluating javascript with your for loop but you dont have the curly braces around it. I think you could wrap your repeating component into a dumb component','12 Mar, 09:23 PM')}
                        {notifbox('Hidroponik', 'You are evaluating javascript with your for loop but you dont have the curly braces around it. I think you could wrap your repeating component into a dumb component','12 Mar, 09:23 PM')}
                        {notifbox('Hidroponik', 'You are evaluating javascript with your for loop but you dont have the curly braces around it. I think you could wrap your repeating component into a dumb component','12 Mar, 09:23 PM')}
                        {notifbox('Hidroponik', 'You are evaluating javascript with your for loop but you dont have the curly braces around it. I think you could wrap your repeating component into a dumb component','12 Mar, 09:23 PM')}
                    </ScrollView>
                </ScrollView>
                <View style={s.bottom}>
                    <TouchableOpacity style={s.IconContainer}
                      onPress={()=>{
                        replace('home')
                    }}
                    >
                        <View style={s.tengah}>
                                <Icon name="home" size={37} color={db.state.Iconcolor} />
                        </View>
                        <View style={s.tengah}>
                                <Text style={s.bottom_text}>Home</Text>
                        </View>
                    </TouchableOpacity>
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
                    <View style={s.IconContainer}>
                        <View style={s.tengah}>
                                <Icon name="chat" size={37} color={db.state.IconcolorActive} />
                        </View>
                        <View style={s.tengah}>
                                <Text style={s.bottom_text_active}>Notifications</Text>
                        </View>
                    </View>  
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