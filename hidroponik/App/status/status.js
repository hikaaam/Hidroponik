import React, { Component } from "react";
import {
    Text, View, TouchableOpacity, ScrollView
} from "react-native";
var head = require('../../assets/header');
var s = require('../../assets/style');
import Icon from 'react-native-vector-icons/MaterialIcons';
export default class status extends Component {
    render() {
        const { replace } = this.props.navigation;
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
                        Status
                    </Text>

                    </View>
                </View>
                <ScrollView style={s.body}>
                    <View style={s.notif}>

                    </View>
                </ScrollView>
      
            </View>
        )
    }
}