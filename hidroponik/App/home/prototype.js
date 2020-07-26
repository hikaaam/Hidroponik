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
            suhu: ['offline!!'],
            tds: ['offline!!'],
            wl: ['offline!!'],
            hum: ['offline!!']
        };
    }
    CardViewRender(data, nama,Ikon,ukuran,warna) {

        return (
            <CardView style={{
                backgroundColor: warna, height: 180, width: Dimensions.get('window').width - 30, marginLeft: 15, marginVertical: 4, justifyContent: 'center',
                alignItem: 'center'
            }}
                cardElevation={2}
                cardMaxElevation={2}
                cornerRadius={5}
            >
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '10%'
                }}>
                    <View style={{
                        height: "100%",
                        width: "100%",
                        borderRadius: 5,
                        justifyContent: 'center',
                        alignItems: 'center',
                        // marginTop: '2%',
                        // marginLeft: '2%',

                    }}>
                        <Text style={{
                            fontSize: 50,
                            color: '#eee',
                            fontWeight: '700',
                            fontFamily: 'serif',
                            // position:'absolute',
                            // top:60,

                        }}> {data} </Text>
                    </View>
                    <View style={{
                        width: '30%',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                        alignItems: 'flex-end',
                        position: 'absolute',
                        marginTop: '3%',
                        marginRight: '3%',
                        right: 0,
                        bottom: '5%'
                    }}>
                        <Icon2 name='seedling' size={30} color="#eee" style={{
                            marginRight: '2%',
                        }} />  
                        <Icon2 name={Ikon} size={ukuran} color="#eee" style={{
                            marginRight: '2%',
                            top:"30%"
                        }} />            
                    </View>
            

                </View>

                <View style={{
                    // height: '60%',
                    flexDirection: 'column',
                    position: 'absolute',
                    bottom: '2%'

                }}>
                    <Text style={{
                        color: '#eee',
                        position: 'absolute',
                        fontWeight: 'bold',
                        left: 10,
                        bottom: 10,
                        fontSize: 20
                    }}> {nama} </Text>
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
                suhu: [msg['_val']+"°c", msg['_msg']]

            })
            this.check
        });
        this.socket.on("tds", msg => {
            this.setState({
                tds: [msg['_val']+"-ppm", msg['_msg']]
            })
        });
        this.socket.on("wl", msg => {
            this.setState({
                wl: [msg['_val']+"%", msg['_msg']]
            })
        });
        this.socket.on("hum", msg => {
            this.setState({
                hum: [msg['_val']+"%", msg['_msg']]
            })
        });
        console.log(this.state.suhu.length);

    }


    render() {

        const { replace } = this.props.navigation;
        return (
            <View style={s.container}>


                <ScrollView style={b.bodyContainer}>

                    {/* <TouchableOpacity>
                        <ImageBackground style={b.bodyItem} imageStyle={b.imageItem}
                            source={require('../../assets/image/temperatur.png')} >
                            <Text style={b.TextItem}>
                                {this.state.suhu[0]}°c
                    </Text>
                            <Text style={b.TextMode}>
                                Temperature: {this.state.suhu[1]}
                            </Text>
                        </ImageBackground>
                    </TouchableOpacity> */}

                    {this.CardViewRender(this.state.suhu[0], "Temperature","thermometer-half",50,"#a83232")}
                    {this.CardViewRender(this.state.wl[0], "Water Level","water",30,db.state.IconcolorActive)}
                    {this.CardViewRender(this.state.hum[0], "Humidity","cloud",30,"#32a844")}
                    {this.CardViewRender(this.state.tds[0], "Tds","tint",50,"#a87932")}
                    
                    {/* <TouchableOpacity>
                        <ImageBackground style={b.bodyItem} imageStyle={b.imageItem}
                            source={require('../../assets/image/humidity.png')} >
                            <Text style={b.TextItemtds}>
                                {this.state.tds[0]}PPM
                    </Text>
                            <Text style={b.TextMode}>
                                Tds: {this.state.tds[1]}
                            </Text>
                        </ImageBackground>
                    </TouchableOpacity> */}
{/* 
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
                        <ImageBackground style={b.bodyItem} imageStyle={b.imageItem}
                    source={require('../../assets/image/phmeter.png')} >  
                      <Text style={b.TextItem}>
                        20%
                    </Text>
                    <Text style={b.TextMode}>
                        Condition : Good 
                    </Text>
                    </ImageBackground>
                    </TouchableOpacity> */}

                    {/* <TouchableOpacity>
                        <ImageBackground style={b.bodyItem} imageStyle={b.imageItem}
                            source={require('../../assets/image/humidity.png')} >
                            <Text style={b.TextItem}>

                                {this.state.hum}%
                            </Text>
                            <Text style={b.TextMode}>
                                Humidity
                    </Text>
                        </ImageBackground>
                    </TouchableOpacity> */}

                </ScrollView>
            </View>
        );
    }

}
