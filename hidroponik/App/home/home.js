import React, { Component } from "react";
import {
    TextInput, StyleSheet, Text, View, Platform,
    Image, Button,
    TouchableOpacity,
    FlatList
} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
var s = require('../../assets/style');
const styles = StyleSheet.create(
    {
        container: {
            padding: 20,

        },
        logo: {
            width: 420,
            height: 408,
            alignContent: "center",
            padding: 20,
            marginTop: 100
        },
        splashtext: {
            fontFamily: 'cursive',
            fontSize: 40,
            color: '#86B23A',
        }
    }
);

export default class Home extends Component {

    render() {

const {replace} = this.props.navigation;
        return (

            <View style={s.container}>
                {/* <View style={s.header}>
                    <Icon name="home" size={40} color="#ecf0f1" />
                    <Text style={s.textHeader}>
                        Home
                    </Text>
                    <TouchableOpacity onPress={() => {
                        alert('setting!');
                    }}
                    >
                        <Icon name="settings" color="#ecf0f1" size={38} />
                    </TouchableOpacity>
                </View> */}
                <View style={s.body}>
                    <Image style={styles.logo} source={require('../../assets/image/logo.png')} />

                </View>

                <View style={s.bottom}>
        <TouchableOpacity style={s.bottom_icons} onPress={()=>{replace('iot')}}>
              <Icon name='build' size={40} style={s.bottom_icon} /> 
              <Text style={s.bottom_text}>IoT</Text>               
          </TouchableOpacity>  
           <TouchableOpacity onPress={()=>{
             replace('status')
           }} style={s.bottom_icons}>
               <View style={s.monitorbtm}>
               <Text style={s.bottom_text}>STATUS</Text> 
               <Icon name='timeline' size={40} style={s.bottom_icon} />    
               </View>               
          </TouchableOpacity>  
          <TouchableOpacity  onPress={()=>{
              null;
          }} style={s.bottom_icons} >
               <View  style={s.monitorbtm}>
               <Text style={s.bottom_text} >HOME</Text>  
              <Icon  name='home' size={40} style={s.bottom_icon} />                
              </View>             
          </TouchableOpacity>  
          <TouchableOpacity onPress={()=>{
           replace('inbox')
          }} style={s.bottom_icons}>
              <Icon name='chat' size={40} style={s.bottom_icon} /> 
              <Text  style={s.bottom_text} > 2</Text>          
          </TouchableOpacity>  
        </View>
            </View>
        );
    }

}
