import React, { Component } from "react";
import {
    Text, TouchableOpacity, View, Image, ScrollView
} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import db from '../auth/DB';
var head = require('../../assets/header')
var s = require('../../assets/style');

export default class iot_master extends Component {

    render() {
        const { replace } = this.props.navigation;
        return (<View style={s.container}>
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
                        IoT
                    </Text>

                    </View>
                </View>
                
     <View style={s.Test}>

        <Text style={s.bottom_text}>
        This is IoT
        </Text>

     </View>

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
                    <View style={s.IconContainer}>
                        <View style={s.tengah}>
                                <Icon name="tune" size={37} color={db.state.IconcolorActive} />
                        </View>
                        <View style={s.tengah}>
                                <Text style={s.bottom_text_active}>IoT</Text>
                        </View>
                    </View>  
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
        </View>)

    }

}