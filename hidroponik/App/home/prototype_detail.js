import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native';
import io from 'socket.io-client';
import db from '../auth/DB';
import moment from 'moment';
import CardView from 'react-native-cardview';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native-gesture-handler';

class prototype_detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sensor: "",
            ext: "",
            data: ["offline!!"],
            id: "",
            color: "",
            height: Dimensions.get("window").height,
            width: Dimensions.get("window").width,
            Time: '00:00:00 AM',
            name: ''
        };
    }
    getTime() {
        this.setState({
            Time: moment(new Date()).format('HH:mm:ss A')
        })
    }
    async componentDidMount() {
        let data = this.props.route.params;
        console.log(data)
        let sensor = data.sensor;
        var nama = "";
        if (sensor == "temp") {
            nama = "Temperature";
        }
        else if (sensor == "wl") {
            nama = "Water Level";
        }
        else if (sensor == "hum") {
            nama = "Humidity";
        }
        else {
            nama = "Tds";
        }

        console.log(nama)
        this.setState({
            sensor: data.sensor,
            ext: data.ext,
            id: data.id,
            color: data.color,
            name: nama,
            icon:data.icon,
            data:data.val
        })
        let local = "http://" + db.state.linkLocal + ":4000";
        // try {
        //     this.socket = io(local);
        //     this.socket.on('connect', function (data) {
        //         this.emit('new user', data.id);
        //     });
        //     this.socket.on(data.sensor, msg => {
        //         console.log(msg)
        //         this.setState({
        //             data: [msg['_val'], msg['_msg']]
        //         })
        //     });
        // } catch (error) {
        //     console.log(error)
        // }
        this.ticking = setInterval(() => {
            this.getTime();
        }, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.ticking);
    }
    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: "column",
                alignItems: 'center',
                backgroundColor: "#eee"
            }}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    backgroundColor: db.state.IconcolorActive,
                    height: this.state.height / 3.5,
                    width: this.state.width,
                    borderBottomStartRadius: 30,
                    borderBottomEndRadius: 30
                }}
                >
                    <View style={{
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        height: "100%",
                        width: "50%"
                    }}>
                        <View style={{
                            marginLeft: "15%",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            height: "95%",
                        }}>
                            <Text style={{
                                color: "white",
                                fontSize: this.state.width / 20,
                                marginTop: "15%",
                                marginBottom: "8%"
                            }}>{moment(new Date()).format('D MMM')}</Text>
                            <Text style={{
                                color: "white",
                                fontSize: this.state.width / 20,
                                marginBottom: "8%"
                            }}>{this.state.Time}</Text>
                            <Text style={{
                                color: "white",
                                fontSize: this.state.width / 24,
                                marginBottom: "10%"
                            }}>Sensor : {this.state.name} </Text>
                        </View>
                    </View>
                    <View style={{
                        width: "50%",
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                        marginBottom: "12%"
                    }}>
                        <View style={{
                            width: this.state.height / 5,
                            height: this.state.height / 5,
                            borderRadius: this.state.height / 3.8 / 2,
                            borderWidth: 2,
                            borderColor: "white",
                            flexDirection: 'column',
                            justifyContent: 'center',
                            marginRight: "8%",
                            alignItems: 'center',
                            position: 'relative',
                            shadowColor: 'white',
                            shadowRadius: 1,
                            shadowOpacity: 1,
                            elevation: 5,
                            shadowOffset: { width: 10, height: 10 }
                        }}>
                            <Text
                                style={{
                                    color: "white",
                                    fontSize: (this.state.data[0]=="offline!!") ? this.state.width/16 : this.state.width / 8 
                                }}
                            >{this.state.data[0]}</Text>
                            <Text style={{
                                position: 'absolute',
                                bottom: "5%",
                                color: "white",
                                fontSize: this.state.width / 24
                            }}>
                                {(this.state.data[0]=="offline!!") ?"":this.state.ext}
                            </Text>
                        </View>
                    </View>
                </View>


                <View style={{
                    // height: this.state.height,
                    backgroundColor: "#eee",
                    borderTopStartRadius: 15,
                    borderTopEndRadius: 15,
                    position: 'relative',
                    top: "-5%",
                    width: this.state.width / 1.18,

                }}>
                    <ScrollView style={{
                        // paddingHorizontal: this.state.width / 20,
                        // position: 'relative',
                        // top: "-4%",
                        marginTop: "4%"
                    }}>
                        <View style={{
                            // height: this.state.height,
                            backgroundColor: "#eee",
                        }}>
                            {this.createList('chart-line', "Today's Statistic", { sensor: this.state.sensor, id: this.state.id, status: "today", color: this.state.color, ext: this.state.ext, name: this.state.name, icon:this.state.icon })}
                            {this.createList('chart-bar', "Daily Statistic", { sensor: this.state.sensor, id: this.state.id, status: "daily", color: this.state.color, ext: this.state.ext, name: this.state.name, icon:this.state.icon })}
                            {this.createList('chart-area', "Weekly Statistic", { sensor: this.state.sensor, id: this.state.id, status: "weekly", color: this.state.color, ext: this.state.ext, name: this.state.name, icon:this.state.icon })}
                            {this.createList('history', "Current Logs", { sensor: this.state.sensor, id: this.state.id, status: "logs", color: this.state.color, ext: this.state.ext, name: this.state.name, icon:this.state.icon })}

                        </View>
                    </ScrollView>
                </View>
            </View>
        );
    }
    createList(icon_, text, param) {
        return (
            <TouchableOpacity style={{
                marginHorizontal: "5%",
                marginVertical: 10,
                height: this.state.height / 10
            }}
                onPress={() => {
                    if (param.status == "logs") {
                        this.props.navigation.navigate("logs", param);
                    } else {
                        this.props.navigation.navigate("statistik", param);
                    }
                }}
            >
                <CardView style={{ height: '100%', backgroundColor: "#F5FFFA" }} >
                    <View style={{
                        height: '100%',
                        width: '100%', flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        marginLeft: "5%"
                    }}>
                        <Icon2 name={icon_} size={30} color={db.state.IconcolorActive} style={{
                            marginHorizontal: '2%',
                            marginRight: '5%',
                            borderRightWidth: 1,
                            borderColor: db.state.Iconcolor,
                            width: "16%"
                        }} />
                        <Text style={{
                            fontSize: this.state.width / 22,
                            fontWeight: '800',
                            color: db.state.IconcolorActive
                        }}>{text}</Text>
                         <Icon2 name="chevron-right" size={30} color={db.state.IconcolorActive} style={{
                            width: "16%",
                            position:'absolute',
                            right:0
                        }} />
                    </View>
                </CardView>
            </TouchableOpacity>
        );
    }
}
const s = StyleSheet.create({
    container: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#43a1c9',
    },
    buttonText: {
        fontSize: 20,
        textAlign: 'center'
    }
});

export default prototype_detail;
