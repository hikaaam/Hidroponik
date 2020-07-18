import React, { Component } from 'react';
import { View, Text, TextInput, TouchableHighlight, AsyncStorage, ActivityIndicator, Alert } from 'react-native';

class settingPrototype extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            devices: ''

        };
    }
    findData(array, search) {
        array.find(function (element) {
            return element == search;
        })
    }
    componentDidMount() {
        AsyncStorage.getItem('devices').then(value => {
            console.log(value);
            this.setState({ devices: JSON.parse(value) });
        })
      
    }
    //    componentDidUpdate(){
    //     console.log('update');
    //    }
    render() {
        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator size='large' animating />
                </View>
            )
        }
        else {
            return (
                <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, marginHorizontal: 20 }}>
                    <TextInput style={{
                        width: '100%',
                        borderBottomColor: '#555555aa',
                        borderBottomWidth: 1
                    }} onChangeText={(Text) => {
                        this.setState({
                            Text
                        })
                    }}
                        autoFocus
                    />
                    <TouchableHighlight
                        style={{
                            width: '100%',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: 20,
                            borderWidth: 1,
                            height: '5%',
                            backgroundColor: '#424874'
                        }}
                        activeOpacity={0.6}
                        underlayColor="#DDDDDD"
                        onPress={() => {
                            // try {

                            //     this.setState({ isLoading: true })
                            //     setTimeout(() => {
                            //         fetch('http://192.168.43.47:4000/prototype?id=' + this.state.Text).then((response) => response.json())
                            //             .then((responseJson) => {
                            //                 if (responseJson.length < 1) {
                            //                     console.log('data kosong')
                            //                     this.setState({ isLoading: false })
                            //                 }
                            //                 else {
                            //                     if (this.state.devices == null) {
                            //                         AsyncStorage.setItem('devices', this.state.Text)
                            //                     }
                            //                     else {
                            //                         if (Array.isArray(this.state.devices)) {
                            //                             if (!this.findData(this.state.devices, this.state.Text)) {
                            //                                 this.state.devices.push(this.state.Text);
                            //                                 AsyncStorage.setItem('devices', JSON.stringify(this.state.Text));
                            //                                 console.log(this.state.devices);
                            //                                 this.setState({ isLoading: false });
                            //                             }
                            //                             else {
                            //                                 console.log("fail : \n");
                            //                                 console.log(this.state.devices);
                            //                                 this.setState({ isLoading: false })
                            //                             }
                            //                         }
                            //                         else {
                            //                             let val = [this.state.devices];
                            //                             if (!this.findData(val, this.state.Text)) {
                            //                                 val.push(this.state.Text);
                            //                                 AsyncStorage.setItem('devices', JSON.stringify(val));
                            //                                 // console.log(JSON.stringify(val));
                            //                                 this.setState({ isLoading: false });
                            //                             }
                            //                             else{
                            //                                 console.log("fail : \n");
                            //                                 console.log(val)
                            //                                 this.setState({ isLoading: false });
                            //                             }

                            //                         }
                            //                     }
                            //                 }


                            //             });
                            //     }, 500);


                            // } catch (error) {
                            //     console.log(error);
                            // }
                      
                            Alert.alert('belum berfungsi',' silahkan login di hidroponik.ta2020.xyz');
                        }}>
                        <Text
                            style={{
                                color: 'white',
                                fontSize: 20
                            }}
                        > Save</Text>
                    </TouchableHighlight>
                    {/* <Text> settingPrototype </Text> */}
                </View>
            );
        }
    }
}

export default settingPrototype;
