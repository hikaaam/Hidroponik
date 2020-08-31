import React, { Component } from 'react';
import {
    Text, View, TouchableOpacity, TouchableHighlight
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import CardView from 'react-native-cardview';
import db from '../auth/DB';
var s = require('../../assets/style');
var head = require('../../assets/header');

export default class Profile extends Component {

    renderText(data) {
        return (
            <Text style={{
                fontSize: 20,
                marginTop: '1%'
            }}>{data}
            </Text>);
    }
    renderTextName(data) {
        return (
            <View style={{
                flexDirection:'row',
                justifyContent:'space-between'
            }}>
                <Text style={{
                    fontSize: 24,
                    fontWeight: 'bold'
                }}>{data}
                </Text>
                <TouchableOpacity
                    style={{
                        width: 30,
                        height: 30,
                        marginRight:20
                    }}
                    onPress={() => {
                       this.props.navigation.replace('editprofile');
                    }}
                >
                    <Icon2 name="pencil-alt" size={30} />
                </TouchableOpacity>

            </View>
        );
    }
    componentDidMount(){
        db.GetAccount();
    }
    render() {
        const { replace } = this.props.navigation;
        return (
            <View style={s.container}>

                <View style={{
                    flex: 1,
                    backgroundColor: '#eee',
                    flexDirection: 'column',
                }}>


                    <View style={{
                        backgroundColor: db.state.IconcolorActive, width: 60, height: 60,
                        borderRadius: 100,
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'absolute',
                        top: 20,
                        left: 15
                    }} >
                        <Text style={{
                            fontSize: 50,
                            color: 'white'
                        }}> {db.state.profile._name.charAt(0)} </Text>
                    </View>

                    <View style={{
                        marginLeft: 90,
                        marginTop: 30
                    }}>
                        {this.renderTextName(db.state.profile._name)}
                        {this.renderText(db.state.profile._email)}
                        {this.renderText(db.state.profile._phone)}
                        {this.renderText(db.state.profile._address)}
                    </View>
                    <TouchableOpacity style={{
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        marginLeft: 90,
                        marginTop: 10

                    }}
                        onPress={() => {
                            db.Logout();
                            this.props.navigation.replace('login');
                        }}
                    >
                        <Icon2 name="power-off" size={37} color='red' />
                        <Text style={{ fontSize: 20, color: 'red', marginLeft: 2, marginTop: 5 }}> Logout</Text>
                    </TouchableOpacity>

                </View>

                <View style={s.bottom}>
                    <TouchableOpacity style={s.IconContainer}
                        onPress={() => {
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
                        onPress={() => {
                            replace('iot')
                        }}
                    >
                        <View style={s.tengah}>
                            <Icon name="tune" size={37} color={db.state.Iconcolor} />
                        </View>
                        <View style={s.tengah}>
                            <Text style={s.bottom_text}>Kontrol</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={s.IconContainer}
                        onPress={() => {
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