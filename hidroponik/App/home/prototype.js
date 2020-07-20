import React, { Component } from "react";
import io from 'socket.io-client';
import {
    TextInput, StyleSheet, Text, View, Platform,
    Image, Button,
    TouchableOpacity,
    FlatList, ScrollView, ImageBackground, Dimensions
} from "react-native";
var head = require('../../assets/header')
import CardView from 'react-native-cardview';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
var s = require('../../assets/style');
import db from "../auth/DB";
var b = require('../../assets/stack/home');
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            suhu: [],
            tds: [],
            wl: [],
            hum:[]
        };
    }
    CardViewRender(data) {

        return (
            <CardView style={{ height: 200, width: Dimensions.get('window').width - 30, marginLeft: 15, marginVertical: 10, justifyContent: 'space-between' }}
                cardElevation={2}
                cardMaxElevation={2}
                cornerRadius={5}
            >
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    height: '20%'
                }}>
                    <View style={{
                        height: "100%",
                        width: "40%",
                        borderRadius: 5,
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        marginTop: '2%',
                        marginLeft: '2%',

                    }}>

                    </View>
                    <View style={{
                        width: '30%',
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                        marginTop: '2%',
                        marginRight: '2%',
                        alignItems: 'center'
                    }}>
                        <Icon2 name='seedling' size={25} color="green" style={{
                            marginRight: '2%',
                        }} />

                    </View>

                </View>

                <View style={{
                    height: '60%',
                    flexDirection: 'column',

                }}>
                    <Text style={b.TextMode}>test</Text>
                    {/* <View style={{ flexDirection: 'row', height: '100%', alignItems: 'flex-end' }}>
                   
                    </View> */}
                </View>
            </CardView>
        );

    }
    componentDidMount() {
        db.GetAccount();
        let id = this.props.route.params.id;

        let local = "http://" + db.state.linkLocal + ":4000";
      
        let host = "http://ta2020.xyz:4000";
        this.socket = io(local);
        this.socket.on('connect', function (data) {
            // io("http://192.168.43.47:4000").emit('new user', db.state.profile._email );
            this.emit('new user', id);
        });
        // this.socket.emit('findId','milos@gmail.com')
        this.socket.on("temp", msg => {
            // console.log(msg);
            this.setState({
                suhu: [msg['_val'], msg['_msg']]
                
            })
            this.check
        });
        this.socket.on("tds", msg => {
            this.setState({
                tds: [msg['_val'], msg['_msg']]
            })
        });
        this.socket.on("wl", msg => {
            this.setState({
                wl: [msg['_val'], msg['_msg']]
            })
        });
        this.socket.on("hum", msg => {
            this.setState({
                hum: [msg['_val'], msg['_msg']]
            })
        });
        console.log(this.state.suhu.length);
       this.check();
    }
  
check(){
    // if(this.state.suhu.length >=1){
        try {
         
            fetch('https://'+db.state.linkLocal+"/api/Login/"+id, {
                method: 'PUT',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    hum: this.state.hum,
                    tds: this.state.tds,
                    wl: this.state.tds,
                    temp: this.state.suhu
                })
            });
        } catch (error) {
            console.log(error);
        }
    // }
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

                    {/* {this.CardViewRender()} */}

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

                                {this.state.hum}%
                            </Text>
                            <Text style={b.TextMode}>
                                Humidity
                    </Text>
                        </ImageBackground>
                    </TouchableOpacity>

                </ScrollView>
            </View>
        );
    }

}
