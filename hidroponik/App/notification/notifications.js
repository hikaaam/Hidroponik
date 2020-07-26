import React, { Component } from "react";
import {
    Text, View, TouchableOpacity, ScrollView, Image, Dimensions
} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import Icon3 from 'react-native-vector-icons/FontAwesome5';
import Moment from 'moment';
var s = require('../../assets/style');
var head = require('../../assets/header')
import db from '../auth/DB';
import { notifbox } from "../../assets/style";


export default class notifications extends Component {
    constructor(props){
        super(props);
        this.state = {
                data:[],
                isLoading:false
        };

    
    }
    componentDidMount(){
        console.log(db.state.profile)
        var linklocal = "http://"+db.state.linkLocal+"/hidroponik/api/notifications/"+db.state.profile._uid;
        var link = "http://"+db.state.link+"/hidroponik/api/notifications/"+db.state.profile._uid;
        try {
            fetch(linklocal).then((response)=>response.json()).then((responseJson)=>{
                this.setState({
                    data:responseJson
                })
                console.log(responseJson);
            })
        } catch (error) {
            
        }
    }
    // notifbox(text, judul, date) {
    //     return (
    //         <View style={s.notif}>
    //             <View style={s.notifIcon}>
    //             <Icon name='opacity' size={35} color='green' />
    //             </View>
    //             <View style={s.notifDate}>
    //                  <Text style={s.notifDateText}
    //                  >{date}</Text>
    //             </View>
    //             <View style={s.notifbox}>
    //             <Text style={s.notifTitle}>
    //                 {text}
    //             </Text>
    //             <Text style={s.notifText}>
    //                 {judul}
    //             </Text>
    //             </View>
    //         </View>
    //     );
    // }
    CardViewRender(data) {
        console.log(data.length)
        if(data.length>=1){
        return data.map((value) => {
            var warna = "";
            var link ="";
            if(value.status=="tds"){
                warna="orange";
                link="pupuk";
            }
            else if(value.status=="temp"){
                warna="#a83232";
                link="temperature";
            }
            else if(value.status=="wl"){
                warna=db.state.IconcolorActive;
                link="waterlevel";
            }
            else{
                warna="#32a844"
                link="other";
            }
            return (
                <View style={{
                    flexDirection: 'column',
                    justifyContent: 'center',
                    // marginTop:10,
                    marginHorizontal:8,
                    padding:10,
                    // backgroundColor: warna,
                    borderColor: '#2c3e50',
                    borderRadius: 2,
                    // borderTopWidth:1,
                    borderBottomWidth:1.2,
                    height:110,
                    marginBottom:10
                }}>
                <View style={s.notifIcon}>
                <Icon3 name='seedling' size={35} color={warna} />
                </View>
                <View style={s.notifDate}>
                     <Text style={s.notifDateText}
                     >{Moment(value.created_at).fromNow()}</Text>
                </View>
                <View style={s.notifbox}>
                <Text style={{
                     fontFamily:'Roboto',
                     fontWeight: '700',
                     fontSize:18,
                     bottom:5,
                     color:"black"
                }} >
                    {value.id_prototype} ( {value.status} )
                </Text>
                <Text style={s.notifText}>
                    {value.isi}
                </Text>
                </View>
            </View>
            );
        })
    }
    else{
        return(
        <View style={{
            justifyContent:'center',
            alignItems:'center',
            height:Dimensions.get("screen").height/1.2,
            width:Dimensions.get("window").width
        }}>
              <Text style={{
                  fontSize:30,
                  color:db.state.IconcolorActive,
                  marginBottom:10
              }}>You Have 0 Notifications</Text>
              <Icon2 name="bell" size={70} color={db.state.IconcolorActive}/>
        </View>
        );
    }
    }
    render() {
        const { replace } = this.props.navigation;
    
        return (
            <View style={s.container}>
    
                <ScrollView style={s.body}>
                    <ScrollView style={s.scrollnotif}>
                        {/* {notifbox('Hidroponik', 'You are evaluating javascript with your for loop but you dont have the curly braces around it. I think you could wrap your repeating component into a dumb component','12 Mar, 09:23 PM')}
                        {notifbox('Hidroponik', 'You are evaluating javascript with your for loop but you dont have the curly braces around it. I think you could wrap your repeating component into a dumb component','12 Mar, 09:23 PM')}
                        {notifbox('Hidroponik', 'You are evaluating javascript with your for loop but you dont have the curly braces around it. I think you could wrap your repeating component into a dumb component','12 Mar, 09:23 PM')}
                        {notifbox('Hidroponik', 'You are evaluating javascript with your for loop but you dont have the curly braces around it. I think you could wrap your repeating component into a dumb component','12 Mar, 09:23 PM')}
                        {notifbox('Hidroponik', 'You are evaluating javascript with your for loop but you dont have the curly braces around it. I think you could wrap your repeating component into a dumb component','12 Mar, 09:23 PM')}
                        {notifbox('Hidroponik', 'You are evaluating javascript with your for loop but you dont have the curly braces around it. I think you could wrap your repeating component into a dumb component','12 Mar, 09:23 PM')}
                        {notifbox('Hidroponik', 'You are evaluating javascript with your for loop but you dont have the curly braces around it. I think you could wrap your repeating component into a dumb component','12 Mar, 09:23 PM')}
                        {notifbox('Hidroponik', 'You are evaluating javascript with your for loop but you dont have the curly braces around it. I think you could wrap your repeating component into a dumb component','12 Mar, 09:23 PM')} */}
                        {this.CardViewRender(this.state.data)}
                    </ScrollView>
                </ScrollView>
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
                    <View style={s.IconContainer}>
                        <View style={s.tengah}>
                                <Icon name="chat" size={37} color={db.state.IconcolorActive} />
                        </View>
                        <View style={s.tengah}>
                                <Text style={s.bottom_text_active}>Notifications</Text>
                        </View>
                    </View>  
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
               
            </View>

        );
    }
}