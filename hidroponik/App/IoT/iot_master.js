import React, { Component } from "react";
import {
    Text, TouchableOpacity, View, Image, ScrollView, Dimensions
} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import db from '../auth/DB';
import CardView from 'react-native-cardview';
import Moment from 'moment';
var head = require('../../assets/header')
var s = require('../../assets/style');

export default class iot_master extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Dataset: []
        };
    }
    componentDidMount() {
        let id = db.state.profile._uid;
        let linkLocal = 'http://'+db.state.linkLocal+'/hidroponik/api/Prototype/' + id;
        let link = '';
        fetch(linkLocal).then((response) => response.json()).then((responseJson) => {
            this.setState({
                Dataset: responseJson.data
            })
        });
    }
    CardViewRender(data) {
        return data.map((value) => {
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
                            <Text style={{
                                fontWeight: 'bold',
                                fontFamily: 'monospace',
                                fontSize: 16,
                                color: db.state.IconcolorActive
                            }}> {value.prototype_id} </Text>
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
                            <Text style={{
                                fontSize: 18
                            }}>{Moment(value.created_at).fromNow()}</Text>
                        </View>
                    </View>

                    <View style={{
                        height: '60%',
                        flexDirection: 'column',

                    }}>
                        <View style={{ flexDirection: 'row', height: '100%', alignItems: 'flex-end' }}>
                            {this.IconRender('water', db.state.IconcolorActive, 'Water Level', 'waterlevel', value.prototype_id)}
                           
                            {this.IconRender('thermometer-half', db.state.IconcolorActive, 'Temperature', 'temp', value.prototype_id)}
   
                        </View>
                    </View>
                </CardView>
            );
        })
    }
    IconRender(__name, __color, __text, _link, _id) {
        return (
            <TouchableOpacity style={{
                width: '50%',
                height: '80%',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                // borderColor:'black',
                // borderWidth:1
            }}
                onPress={() => { this.props.navigation.navigate(_link, { data: _id }) }}
            >
                <Icon2 name={__name} color={__color} size={60} />
                <Text style={{
                    fontSize:20,
                    marginVertical:10
                }}>{__text}</Text>
            </TouchableOpacity>
        )
    }
    render() {
        const { replace } = this.props.navigation;
        return (<View style={s.container}>
            <View style={{
                marginHorizontal: 15,
                marginVertical: 10,
                height: Dimensions.get('screen').height / 14
            }}>
                <CardView style={{ height: '100%' }} >
                    <View style={{ height: '100%', width: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Icon2 name="robot" size={30} color={db.state.IconcolorActive} style={{
                            marginHorizontal: '2%'
                        }} />
                        <Text style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                            color: db.state.IconcolorActive
                        }}>You Have {this.state.Dataset.length} Prototype . . .</Text>
                    </View>
                </CardView>
            </View>

            <ScrollView>
                {this.CardViewRender(this.state.Dataset)}
            </ScrollView>

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
                <View style={s.IconContainer}>
                    <View style={s.tengah}>
                        <Icon name="tune" size={37} color={db.state.IconcolorActive} />
                    </View>
                    <View style={s.tengah}>
                        <Text style={s.bottom_text_active}>IoT</Text>
                    </View>
                </View>
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
                <TouchableOpacity style={s.IconContainer}
                    onPress={() => {
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

            </View>
        </View>)

    }

}