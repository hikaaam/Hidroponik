import React, { Component } from "react";
import {
    Text, View, TouchableOpacity, ScrollView
} from "react-native";
var s = require('../../assets/style');
import Icon from 'react-native-vector-icons/MaterialIcons';
export default class status extends Component {
    render() {
        const { replace } = this.props.navigation;
        return (
            <View style={s.container}>
                {/* <View style={s.header}>
                    <Icon name="chat" size={40} color="#ecf0f1" />
                    <Text style={s.textHeader}>
                        Notifications
                    </Text>
                    <TouchableOpacity onPress={() => {
                        alert('setting!');
                    }}
                    >
                        <Icon name="settings" color="#ecf0f1" size={38} />
                    </TouchableOpacity>
                </View> */}
                <ScrollView style={s.body}>
                    <View style={s.notif}>

                    </View>
                </ScrollView>
                <View style={s.bottom}>
                    <TouchableOpacity style={s.bottom_icons} onPress={() => { replace('iot') }}>
                        <Icon name='build' size={40} style={s.bottom_icon} />
                        <Text style={s.bottom_text}>IoT</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {

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
            </View>
        )
    }
}