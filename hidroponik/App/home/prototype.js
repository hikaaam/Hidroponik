import React, { Component } from "react";
import io from 'socket.io-client';
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
    constructor(props) {
        super(props);
        this.state = {
            suhu:[],
            tds:[],
            wl:[]
        };
      }
    componentDidMount(){
        db.GetAccount();
        let id = this.props.route.params.id;
        console.log(id);
        let local = "http://"+db.state.linkLocal+":4000";
        let host = "http://ta2020.xyz:4000";
        this.socket = io(local);
        this.socket.on('connect', function (data) {
            // io("http://192.168.43.47:4000").emit('new user', db.state.profile._email );
            this.emit('new user', id);
        });
        // this.socket.emit('findId','milos@gmail.com')
        this.socket.on("temp", msg => {
            console.log(msg);
            this.setState({
                suhu: [msg['_val'],msg['_msg']]
            })
        });
        this.socket.on("tds", msg => {
            this.setState({
                tds: [msg['_val'],msg['_msg']]
            })
        });
        this.socket.on("wl", msg => {
            this.setState({
                wl: [msg['_val'],msg['_msg']]
            })
        });
    
    }

    render() {
          
        const { replace } = this.props.navigation;
        return (
            <View style={s.container}>
              
    
                <ScrollView style={b.bodyContainer}>
                    
                    <TouchableOpacity>
                    <ImageBackground style={b.bodyItem} imageStyle={b.imageItem}
                    source={require('../../assets/image/temperatur.png')} >  
                    <Text style={b.TextItem}>
                        {this.state.suhu[0]}°c
                    </Text>
                    <Text style={b.TextMode}>
                       Temperature: {this.state.suhu[1]}
                    </Text>
                    </ImageBackground>
                    </TouchableOpacity>

                    <TouchableOpacity>
                    <ImageBackground style={b.bodyItem} imageStyle={b.imageItem}
                    source={require('../../assets/image/humidity.png')} >  
                      <Text style={b.TextItemtds}>
                        {this.state.tds[0]}PPM
                    </Text>
                    <Text style={b.TextMode}>
                        Tds: {this.state.tds[1]}
                    </Text>
                    </ImageBackground>
                    </TouchableOpacity>

                    <TouchableOpacity>
                    <ImageBackground style={b.bodyItem} imageStyle={b.imageItem}
                    source={require('../../assets/image/temperatur.png')} >  
                    <Text style={b.TextItem}>
                        {this.state.wl[0]}%
                    </Text>
                    <Text style={b.TextMode}>
                        Water Level: {this.state.wl[1]}
                    </Text>
                    </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    {/* <ImageBackground style={b.bodyItem} imageStyle={b.imageItem}
                    source={require('../../assets/image/phmeter.png')} >  
                      <Text style={b.TextItem}>
                        20%
                    </Text>
                    <Text style={b.TextMode}>
                        Condition : Good 
                    </Text>
                    </ImageBackground> */}
                    </TouchableOpacity>

                    <TouchableOpacity>
                    <ImageBackground style={b.bodyItem} imageStyle={b.imageItem}
                    source={require('../../assets/image/humidity.png')} >  
                      <Text style={b.TextItem}>
                   ...
                    </Text>
                    <Text style={b.TextMode}>
                        Okay
                    </Text>
                    </ImageBackground>
                    </TouchableOpacity>

                </ScrollView>
            </View>
        );
    }

}
