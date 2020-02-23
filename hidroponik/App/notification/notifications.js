import React, { Component } from "react";
import {
    Text, View, TouchableOpacity, ScrollView, Image
} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
var s = require('../../assets/style');


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
                {/* <View style={s.header}>
                    <Icon name="chat" size={40} color="#ecf0f1" />
                    <Text style={s.textHeader}>
                        Inbox
                    </Text>
                    <TouchableOpacity onPress={()=>{
                    alert('setting!');
                    }}
                    >
                    <Icon name="settings" color="#ecf0f1" size={38} />
                    </TouchableOpacity>
                </View> */}
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
                <View style={s.bottom}>
                    <TouchableOpacity style={s.bottom_icons} onPress={() => { replace('iot') }}>
                        <Icon name='build' size={40} style={s.bottom_icon} />
                        <Text style={s.bottom_text}>IoT</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        replace('status')
                    }} style={s.bottom_icons}>
                        <View style={s.monitorbtm}>
                            <Text style={s.bottom_text}>STATUS</Text>
                            <Icon name='timeline' size={40} style={s.bottom_icon} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        replace('home')
                    }} style={s.bottom_icons}>
                        <View style={s.monitorbtm}>
                            <Text style={s.bottom_text}>HOME</Text>
                            <Icon name='home' size={40} style={s.bottom_icon} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        null;
                    }} style={s.bottom_icons}>
                        <Icon name='chat' size={40} style={s.bottom_icon} />
                        <Text style={s.bottom_text} > 2</Text>
                    </TouchableOpacity>
                </View>
            </View>

        );
    }
}