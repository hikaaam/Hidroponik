import React, {Component} from 'react';
import {
    Text, View,TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


import db from '../auth/DB';
var s = require('../../assets/style');
var head= require('../../assets/header');

export default class Profile extends Component{

    render()
       {
        const { replace } = this.props.navigation;
           return(
            <View style={s.container}>

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
                        Profile
                    </Text>

                    </View>
                </View>

            <View style={s.Test}>

                <Text style={s.bottom_text}>
                   This is {db.state.profile._name}'s Profile
                </Text>
                <TouchableOpacity style={{
                    flexDirection:'row',
                    justifyContent:'center',
                    alignItems:'center'
                }} 
                onPress={()=>{db.Logout();
                this.props.navigation.replace('login');
                }}
                >        
                    <Icon name="input" size={37} color='red' />
                    <Text style={{fontSize:20,color:'red',marginLeft:2}}>Logout</Text>
                </TouchableOpacity>

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
                <TouchableOpacity style={s.IconContainer}
                onPress={()=>{
                    replace('iot')
                }}
                >
                    <View style={s.tengah}>
                            <Icon name="tune" size={37} color={db.state.Iconcolor} />
                    </View>
                    <View style={s.tengah}>
                            <Text style={s.bottom_text}>IoT</Text>
                    </View>
                </TouchableOpacity>  
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
                <View style={s.IconContainer}   >
                    <View style={s.tengah}>
                            <Icon name="face" size={37} color={db.state.IconcolorActive} />
                    </View>
                    <View style={s.tengah}>
                            <Text style={s.bottom_text_active}>profile</Text>
                    </View>
                </View>  
                {/* <TouchableOpacity style={s.IconContainer}>
                    <View style={s.tengah}>
                            <Icon name="home" size={37} color={db.state.Iconcolor} />
                    </View>
                    <View style={s.tengah}>
                            <Text style={s.bottom_text}>Home</Text>
                    </View>
                </TouchableOpacity>     */}
            </View>
        </View>
           )
       }
    

}