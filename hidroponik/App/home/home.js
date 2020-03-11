import React, { Component } from "react";
import {
    TextInput, StyleSheet, Text, View, Platform,
    Image, Button,
    TouchableOpacity,
    FlatList
} from "react-native";
var head = require('../../assets/header')
import Icon from 'react-native-vector-icons/MaterialIcons';
var s = require('../../assets/style');
import DB from '../auth/DB';

export default class Home extends Component {


    render() {

        const { replace } = this.props.navigation;
        return (
            <View style={s.container}>
                <View style={head.Header}>
                    <View style={head.Drawer}>
                        <TouchableOpacity onPress={() => {
                            this.props.navigation.openDrawer(); }}>
                            <Icon name="reorder" size={35} color="#eee" />
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
    
                <View style={s.body}>

                    <Text>
                        Welcome {DB.state.profile._name}
                    </Text>

                </View>

            </View>
        );
    }

}
