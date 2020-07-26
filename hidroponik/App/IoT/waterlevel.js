import React, { Component } from 'react';
import { View, Text, Alert } from 'react-native';
import CardView from 'react-native-cardview';
import Icon from 'react-native-vector-icons/FontAwesome5';
import db from '../auth/DB';
import { Button } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import io from 'socket.io-client';

class waterlevel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: 'Offline!!',
            socket: [],
            name: 'wl',
            ID: "P" + this.props.route.params.data,
            resName: "resWl",
            check: "checkwl",
            isOn: '',
            judul: "Water Level",
            Icon: "water",
            isOtomatis: ''
        };
    }
    componentDidMount() {
        var nama = this.state.name;
        console.log(nama)
        var id = this.props.route.params.data;
        let local = "http://" + db.state.linkLocal + ":4000";
        console.log(id);
        this.socket = io(local);
        this.socket.on('connect', function (data) {
            // io("http://192.168.43.47:4000").emit('new user', db.state.profile._email );
            this.emit('new user', id);
            this.emit("checkwl", id);
            this.emit("checkmode", id);
        });
        this.socket.on("checkmode", msg => {
            // var bool = '';
            // if (msg == "otomatis") {
            //     bool = true;
            // }
            // else {
            //     bool = false;
            // }
            this.setState({
                isOtomatis: msg
            })
        });
        this.socket.on(nama, msg => {
            this.setState({
                socket: [msg['_val'], msg['_msg']],
                data: [msg['_val']] + "%"
            })
        });
        this.socket.on(this.state.resName, msg => {
            console.log(msg);
            this.setState({
                isOn: msg
            })
        });
        this.socket.on("checkwl", msg => {
            console.log("test : "+msg);
            this.setState({
                isOn: msg
            })
            console.log("status button : " + msg)
        });

    }
    statuscheck(){
        if(this.state.data == "Offline!!"){
            return "device offline";
        }
        else{
            if(this.state.isOn){
                return "Pompa Air Menyala !! ";
            }
            else{
                return "Pompa Air Mati !! ";
            }
        }
    }
    render() {
        console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];
        console.disableYellowBox = true;
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
                        <Text style={{ color: db.state.IconcolorActive, fontSize: 35, fontWeight: 'bold' }}> {this.state.judul} </Text>
                        <Icon style={{ marginTop: 0, marginHorizontal: '5%' }} color={db.state.IconcolorActive} name={this.state.Icon} size={50} />
                    </View>

                    <Text style={{
                        // position:'absolute',
                        fontSize: (this.state.data == "Offline!!") ? 100 : 80,
                        color: (this.state.data == "Offline!!") ? 'red' : 'black',
                        textShadowColor: 'blue',
                        textShadowOffset: {
                            width: 2,
                            height: 2
                        },
                        marginTop: 40,
                        textShadowRadius: 1
                    }}> {this.state.data} </Text>
                     <Text style={{
                        marginTop:30,
                        fontWeight:"bold",
                        fontSize:20,
                        color:db.state.IconcolorActive
                    }}> {this.statuscheck()} </Text>
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
                    }}>Click To Turn {this.state.isOn ? 'Off' : 'On'} Relay</Text>
                    <TouchableOpacity onPress={() => {
                        console.log(this.state.isOtomatis)
                        if (this.state.isOtomatis) {
                            Alert.alert("Info", "Silahkan matikan mode otomatis untuk melakukan IoT");
                        }
                        else {

                            if (this.state.isOn) {
                                this.socket.emit("r" + this.state.name, { _id: this.state.ID, _val: false });
                            }
                            else {
                                if (this.state.data == "Offline!!") {
                                    Alert.alert("Error!!", "Protoype Offline");
                                }
                                else if (this.state.data.substr(0, 2) >= 91) {

                                    Alert.alert("Alert!!", "Your Water Level is Above 90%");
                                }
                                else {
                                    this.socket.emit("r" + this.state.name, { _id: this.state.ID, _val: true });
                                    // Alert.alert("Info", "Relay Is On");

                                }

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

export default waterlevel;
