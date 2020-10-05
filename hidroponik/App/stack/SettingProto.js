import React, { Component } from 'react';
import {
    Text, TouchableOpacity, View, Picker, Alert
} from 'react-native';

import db from '../auth/DB';
import Icon from 'react-native-vector-icons/FontAwesome5';
import io from 'socket.io-client';
import { TextInput, ActivityIndicator } from 'react-native-paper';
import moment from 'moment';

var s = require('../../assets/style');


export default class SettingProto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOtomatis: true,
            NilaiWl: '!?',
            NilaiTemp: '!?',
            NilaiTds: '!?',
            NilaiHum: '!?',
            id: '',
            JenisTanaman: '',
            datacat: '',
            NamaTanaman: '',
            Panen: '',
            isLoading: true
        }
    }
    componentDidMount() {
        var id = this.props.route.params.id;
        this.setState({
            id: id
        })
        let link = "http://" + db.state.linkLocal + "/hidroponik/api/cat/" + id;
        console.log(link)
        fetch(link).then((js) => js.json()).then((data) => {
            console.log("*********************")
            console.log(data['cat'])
            let currentTanaman = data['cat']-1;
            this.setState({
                JenisTanaman: data['cat'],
                datacat: data['data'],
                CurrCat:data['data'][currentTanaman],
                NamaTanaman: data['nama'],
                isLoading: false,
                Panen: data['panen']
            })
            console.log("*********************")
        }).catch((err) => {
            console.log(err)
        })
        let local = "http://" + db.state.linkLocal + ":4000";
        console.log(id);
        this.socket = io(local);
        this.socket.on('connect', function (data) {
            // io("http://192.168.43.47:4000").emit('new user', db.state.profile._email );
            this.emit('new user', id);
            this.emit("checkmode", id);
            this.emit("setting", id);
        });
        this.socket.on("checkmode", msg => {
            // var bool = '';
            // if(msg == "true"){
            //     bool = true;
            // }
            // else{
            //     bool = false;
            // }
            this.setState({
                isOtomatis: msg
            })
        });
        this.socket.on("setting", data => {
            console.log(data)
            this.setState({
                NilaiWl: data.Wl.toString(),
                NilaiTemp: data.Temp.toString(),
                NilaiTds: data.Tds.toString(),
                NilaiHum: data.Hum.toString(),
            })

        });
    }
    PickerItem(data) {
        return data.map((item) => {
            return (

                <Picker.Item style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: db.state.IconcolorActive
                }} label={item.nama} value={item.id} />

            );
        })
    }
    refresh(id) {
        this.setState({
            isLoading: true
        });
        let link = "http://" + db.state.linkLocal + "/hidroponik/api/cat/" + id;
        console.log(link)
        fetch(link).then((js) => js.json()).then((data) => {
            console.log("*********************")
            console.log(data['cat'])
            let currentTanaman = data['cat']-1;
            this.setState({
                JenisTanaman: data['cat'],
                datacat: data['data'],
                CurrCat:data['data'][currentTanaman],
                NamaTanaman: data['nama'],
                isLoading: false,
                Panen: data['panen']
            })
            console.log("*********************")
        }).catch((err) => {
            console.log(err)
        })
    }
    render() {
        if (this.state.isLoading) {
            return (
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignContent: 'center'
                }}>
                    <ActivityIndicator animating size="large" color={db.state.IconcolorActive} />
                </View>
            );
        } else {
            return (
                <View style={{
                    backgroundColor: '#eee',
                    flex: 1
                }}>
                    <View style={{
                        // height: "0%",
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        borderBottomWidth: 1.2,
                        borderBottomColor: "#333333",
                        backgroundColor: '#eee',
                        alignItems: 'flex-start',
                        padding: 10
                    }}>
                        <Text style={{
                            fontSize: 18,
                            fontWeight: 'bold',
                            color: db.state.IconcolorActive,
                        }}>Nama Prototype</Text>
                        <TextInput
                            style={{
                                width: '100%',
                                fontSize: 20,
                                backgroundColor: '#eee',
                                borderBottomColor: '#333',
                                borderBottomWidth: 0.8,
                                fontWeight: 'bold',
                                color: db.state.IconcolorActive,
                                marginRight: 5
                            }}
                            multiline={false}
                            returnKeyType="send"
                            value={this.state.NamaTanaman}
                            keyboardType="default"
                            onChangeText={(Text) => {
                                this.setState({
                                    NamaTanaman: Text
                                })
                            }}
                            onSubmitEditing={() => {
                                this.socket.emit("Tanaman", { _id: this.state.id, value: this.state.NamaTanaman, nama: 'nama' });
                            }}
                        />
                    </View>

                    <View style={{
                        height: "10%",
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        borderBottomWidth: 1.2,
                        borderBottomColor: "#333333",
                        backgroundColor: '#eee',
                        alignItems: 'center',
                        padding: 10
                    }}>
                        <View style={{
                            justifyContent: 'space-evenly',
                        }}>
                            <Text style={{
                                fontSize: 18,
                                fontWeight: 'bold',
                                color: db.state.IconcolorActive,
                            }}>Waktu Menuju Panen</Text>
                            <Text style={{
                                fontSize: 15,
                                fontWeight: 'bold'
                            }}>
                                {moment(this.state.Panen).from(moment(this.state.Panen).subtract(this.state.CurrCat.panen,'days').format("YYYY-MM-DD"))}
                            </Text>
                        </View>

                        <TouchableOpacity onPress={() => {
                            Alert.alert("Info!!", "Reset Waktu Panen ??", [
                                {
                                    text: "Cancel",
                                },
                                {
                                    text: "OK",
                                    onPress: () => {
                                        this.socket.emit("Tanaman", { _id: this.state.id, value: 0, nama: 'reset' });
                                        this.refresh(this.state.id)
                                    }
                                },

                            ])

                        }}>
                            <View style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'row',
                                backgroundColor: db.state.IconcolorActive,
                                padding: 12,
                                borderRadius: 10,
                            }}>
                                <Icon name="redo-alt" size={20} color="#eee" />
                                <Text style={{
                                    color: "#eee",
                                    fontWeight: 'bold',
                                    marginLeft: 10
                                }}>Reset Waktu</Text>
                            </View>

                        </TouchableOpacity>
                    </View>

                    <View style={{
                        // height: "0%",
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        borderBottomWidth: 1.2,
                        borderBottomColor: "#333333",
                        backgroundColor: '#eee',
                        alignItems: 'flex-start',
                        padding: 10
                    }}>
                        <Text style={{
                            fontSize: 18,
                            fontWeight: 'bold',
                            color: db.state.IconcolorActive,
                        }}>Jenis Tanaman</Text>
                        <Picker
                            selectedValue={this.state.JenisTanaman}
                            style={{
                                width: '100%',
                                fontSize: 20,
                                fontWeight: 'bold',
                                marginRight: 5,
                                color: db.state.IconcolorActive,
                            }}
                            onValueChange={(itemValue, itemIndex) => {

                                this.setState({
                                    JenisTanaman: itemValue
                                });

                                this.socket.emit("Tanaman", { _id: this.state.id, value: itemValue, nama: 'jenis' });
                                this.refresh(this.state.id);
                            }
                            }
                        >
                            {this.PickerItem(this.state.datacat)}
                        </Picker>
                        {/* <Text style={{
                            fontSize: 18,
                            fontWeight: 'bold',
                            color: db.state.IconcolorActive,
                        }}>Jenis Tanaman</Text>
                         <TextInput
                                style={{
                                    width: '100%',
                                    fontSize: 20,
                                    backgroundColor: '#eee',
                                    borderBottomColor: '#333',
                                    borderBottomWidth: 0.8,
                                    fontWeight: 'bold',
                                    color: db.state.IconcolorActive,
                                    marginRight: 5
                                }}
                                
                                value={this.state.JenisTanaman.toString()}
                                keyboardType="decimal-pad"
                                onChangeText={(Text) => {
                                    this.setState({
                                        JenisTanaman: Text
                                    })
                                }}
                                onSubmitEditing={() => {
                                    this.socket.emit("Tanaman", { _id: this.state.id, value: this.state.JenisTanaman,nama:'jenis' });
                                }}
                            /> */}
                    </View>

                    <View style={{
                        height: "10%",
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        borderBottomWidth: 1.2,
                        borderBottomColor: "#333333",
                        backgroundColor: '#eee',
                        alignItems: 'center',
                        padding: 10
                    }}>
                        <Text style={{
                            fontSize: 18,
                            fontWeight: 'bold',
                            color: db.state.IconcolorActive,
                        }}>Automatic Prototype</Text>
                        <TouchableOpacity onPress={() => {
                            if (this.state.isOtomatis) {
                                this.socket.emit("Mode", { _id: this.props.route.params.id, _val: "false" });
                                console.log(this.state.isOtomatis);
                            }
                            else {
                                this.socket.emit("Mode", { _id: this.props.route.params.id, _val: "true" });
                                console.log(this.state.isOtomatis);
                            }
                        }}>
                            <Icon name={this.state.isOtomatis ? "toggle-on" : "toggle-off"} size={40} color={this.state.isOtomatis ? "green" : db.state.Iconcolor} />
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        height: "10%",
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        borderBottomWidth: 1.2,
                        borderBottomColor: "#333333",
                        backgroundColor: '#eee',
                        alignItems: 'center',
                        padding: 10
                    }}>
                        <Text style={{
                            fontSize: 18,
                            fontWeight: 'bold',
                            color: db.state.IconcolorActive,
                        }}>Persentase Water Pump Menyala</Text>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '20%',
                            marginRight: '2%'
                        }}>
                            <TextInput
                                style={{
                                    width: '80%',
                                    fontSize: 20,
                                    backgroundColor: '#eee',
                                    borderBottomColor: '#333',
                                    borderBottomWidth: 0.8,
                                    fontWeight: 'bold',
                                    color: db.state.IconcolorActive,
                                    marginRight: 5
                                }}
                                keyboardType="decimal-pad"
                                multiline={false}
                                returnKeyType="send"
                                value={this.state.NilaiWl}
                                onChangeText={(Text) => {
                                    this.setState({
                                        NilaiWl: Text
                                    })
                                }}
                                onSubmitEditing={() => {
                                    this.socket.emit("NilaiWl", { _id: this.state.id, _val: this.state.NilaiWl });
                                }}
                            />
                            <Text style={{
                                fontSize: 20,
                                fontWeight: 'bold',
                                color: db.state.IconcolorActive,
                            }}>%</Text>
                        </View>
                    </View>


                    <View style={{
                        height: "10%",
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        borderBottomWidth: 1.2,
                        borderBottomColor: "#333333",
                        backgroundColor: '#eee',
                        alignItems: 'center',
                        padding: 10
                    }}>
                        <Text style={{
                            fontSize: 18,
                            fontWeight: 'bold',
                            color: db.state.IconcolorActive,
                        }}>Batas Mengirim Notif Hum</Text>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '20%',
                            marginRight: '2%'
                        }}>
                            <TextInput
                                style={{
                                    width: '80%',
                                    fontSize: 20,
                                    backgroundColor: '#eee',
                                    borderBottomColor: '#333',
                                    borderBottomWidth: 0.8,
                                    fontWeight: 'bold',
                                    color: db.state.IconcolorActive,
                                    marginRight: 5
                                }}

                                value={this.state.NilaiHum}
                                multiline={false}
                                returnKeyType="send"
                                keyboardType="decimal-pad"
                                onChangeText={(Text) => {
                                    this.setState({
                                        NilaiHum: Text
                                    })
                                }}
                                onSubmitEditing={() => {
                                    this.socket.emit("NilaiHum", { _id: this.state.id, _val: this.state.NilaiHum });
                                }}
                            />
                            <Text style={{
                                fontSize: 20,
                                fontWeight: 'bold',
                                color: db.state.IconcolorActive,
                            }}>%</Text>
                        </View>
                    </View>

                    <View style={{
                        height: "10%",
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        borderBottomWidth: 1.2,
                        borderBottomColor: "#333333",
                        backgroundColor: '#eee',
                        alignItems: 'center',
                        padding: 10
                    }}>
                        <Text style={{
                            fontSize: 18,
                            fontWeight: 'bold',
                            color: db.state.IconcolorActive,
                        }}>Batas Temperatur Menyala</Text>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '20%',
                            marginRight: '2%'
                        }}>
                            <TextInput
                                style={{
                                    width: '80%',
                                    fontSize: 20,
                                    backgroundColor: '#eee',
                                    borderBottomColor: '#333',
                                    borderBottomWidth: 0.8,
                                    fontWeight: 'bold',
                                    color: db.state.IconcolorActive,
                                    marginRight: 5
                                }}

                                value={this.state.NilaiTemp}
                                multiline={false}
                                returnKeyType="send"
                                keyboardType="decimal-pad"
                                onChangeText={(Text) => {
                                    this.setState({
                                        NilaiTemp: Text
                                    })
                                }}
                                onSubmitEditing={() => {
                                    this.socket.emit("NilaiTemp", { _id: this.state.id, _val: this.state.NilaiTemp });
                                }}
                            />
                            <Text style={{
                                fontSize: 28,
                                fontWeight: 'bold',
                                color: db.state.IconcolorActive,
                            }}>°C</Text>
                        </View>
                    </View>

                    <View style={{
                        height: "10%",
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        borderBottomWidth: 1.2,
                        borderBottomColor: "#333333",
                        backgroundColor: '#eee',
                        alignItems: 'center',
                        padding: 10
                    }}>
                        <Text style={{
                            fontSize: 18,
                            fontWeight: 'bold',
                            color: db.state.IconcolorActive,
                        }}>Batas Mengirim Notif Tds</Text>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '20%',
                            marginRight: '2%'
                        }}>
                            <TextInput
                                style={{
                                    width: '80%',
                                    fontSize: 20,
                                    backgroundColor: '#eee',
                                    borderBottomColor: '#333',
                                    borderBottomWidth: 0.8,
                                    fontWeight: 'bold',
                                    color: db.state.IconcolorActive,
                                    marginRight: 5
                                }}

                                value={this.state.NilaiTds}
                                multiline={false}
                                returnKeyType="send"
                                keyboardType="decimal-pad"
                                onChangeText={(Text) => {
                                    this.setState({
                                        NilaiTds: Text
                                    })
                                }}
                                onSubmitEditing={() => {
                                    this.socket.emit("NilaiTds", { _id: this.state.id, _val: this.state.NilaiTds });
                                }}
                            />
                            <Text style={{
                                fontSize: 17,
                                fontWeight: 'bold',
                                color: db.state.IconcolorActive,
                            }}>PPM</Text>
                        </View>
                    </View>



                </View>
            );
        }

    }
}