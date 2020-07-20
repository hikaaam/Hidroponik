import React, { Component } from 'react';
import { View, Text, Alert } from 'react-native';
import CardView from 'react-native-cardview';
import Icon from 'react-native-vector-icons/FontAwesome5';
import db from '../auth/DB';
import { Button } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import io from 'socket.io-client';

class tds extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: 'Offline!!',
            isOn: false,
            socket: [],
            name:'tds',
            extensi:'PPM',
            title:'Pupuk Cair',
            icon:'tint'
        };
    }
    componentDidMount() {
        var id = this.props.route.params.data;
        let local = "http://" + db.state.linkLocal + ":4000";
        this.socket = io(local);
        this.socket.on('connect', function (data) {
            // io("http://192.168.43.47:4000").emit('new user', db.state.profile._email );
            this.emit('new user', id);
        });
        this.socket.on(this.state.name, msg => {
            this.setState({
                socket: [msg['_val'], msg['_msg']],
                data: [msg['_val']] + this.state.extensi
            })
        });


    }
    render() {
        return (
            <View style={{
                flex: 1,
                backgroundColor: '#eee',
                margin: 10,
                justifyContent: "center"
            }}>
                <CardView style={{
                    marginTop: '7%',
                    height: '50%',
                    // backgroundColor:'#1ca3ec',
                    flexDirection: "column",
                    alignItems: "center",
                    borderRadius: 20,
                    borderColor: 'black',
                    borderWidth: 0.5,
                    marginBottom: '5%'
                }}>
                    <View style={{
                        flexDirection: 'row',
                        marginTop: '10%'
                    }}>
                        <Text style={{ color: db.state.IconcolorActive, fontSize: 35, fontWeight: 'bold' }}> {this.state.title} </Text>
                        <Icon style={{ marginTop: 0, marginHorizontal: '5%' }} color={db.state.IconcolorActive} name={this.state.icon} size={50} />
                    </View>

                    <Text style={{
                        // position:'absolute',
                        fontSize: (this.state.data == "Offline!!") ? 100 : 60,
                        color: (this.state.data == "Offline!!") ? 'red' : 'black',
                        textShadowColor: 'blue',
                        textShadowOffset: {
                            width: 2,
                            height: 2
                        },
                        marginTop: 40,
                        textShadowRadius: 1
                    }}> {this.state.data} </Text>
                </CardView>
                <CardView style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingVertical: 30,
                    marginBottom: '10%'

                }}>
                    <Text style={{
                        color: db.state.IconcolorActive,
                        fontSize: 16,
                        fontWeight: 'bold',
                        marginBottom: 15,
                    }}>Click To Turn On Relay</Text>
                    <TouchableOpacity onPress={() => {
                        console.log(this.state.isOn)
                        if (this.state.isOn) {
                            this.socket.emit("r"+this.state.name,false);
                            this.setState({
                                isOn: false
                            })
                        }
                        else {
                            if (this.state.data == "Offline!!") {
                                Alert.alert("Error!!", "Protoype Offline");
                            }
                            else {
                                this.socket.emit("r"+this.state.name,true);
                                Alert.alert("Info", "Relay is On");
                                this.setState({
                                    isOn: true
                                })
                            }

                        }
                    }} >
                        <Icon name="power-off" size={80} color={this.state.isOn ? 'red' : 'green'} />
                    </TouchableOpacity>
                </CardView>
            </View>
        );
    }
}

export default tds;
