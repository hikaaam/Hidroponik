import React, { Component } from "react";
import {
    Text, TouchableOpacity, View, Image, ScrollView
} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

var s = require('../../assets/style');

export default class iot_master extends Component {

    render() {
        const { replace } = this.props.navigation;
        return (<View style={s.container}>
            {/* <View style={s.header}>
                <Icon name="build" size={40} color="#ecf0f1" />
                <Text style={s.textHeader}>
                    IoT
                </Text>
                <TouchableOpacity onPress={() => {
                    alert('setting!');
                }}
                >
                    <Icon name="settings" color="#ecf0f1" size={38} />
                </TouchableOpacity>
            </View> */}
            <ScrollView style={s.body}>


            </ScrollView>
            <View style={s.bottom}>
                <TouchableOpacity style={s.bottom_icons} >
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
                    replace('inbox')
                }} style={s.bottom_icons}>
                    <Icon name='chat' size={40} style={s.bottom_icon} />
                    <Text style={s.bottom_text} > 2</Text>
                </TouchableOpacity>
            </View>
        </View>)

    }

}