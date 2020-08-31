import React, { Component } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from "react-native";
var s = require('../../assets/auth_style/registerstyle')
import DB from "../auth/DB";
import db from "../auth/DB";
import Icon from 'react-native-vector-icons/FontAwesome5';
export default class register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            borderColorEmail: '#A9A9A9',
            borderColorPassword: '#A9A9A9',
            borderColorId: '#A9A9A9',
            borderColorName: '#A9A9A9',
            borderColorPhone: '#A9A9A9',
            borderColorAddress: '#A9A9A9',
            borderColorRepassword: '#A9A9A9',
            Id: '',
            Email: '',
            Password: '',
            Name: '',
            Phone: '',
            Address: '',
            RePassword: '',
            Jenis: ''
        }
        this.onFocusEmail = this.onFocusEmail.bind(this);
        this.onBlurEmail = this.onBlurEmail.bind(this);

        this.onFocusPassword = this.onFocusPassword.bind(this);
        this.onBlurPassword = this.onBlurPassword.bind(this);

        this.onFocusId = this.onFocusId.bind(this);
        this.onBlurId = this.onBlurId.bind(this);

        this.onFocusName = this.onFocusName.bind(this);
        this.onBlurName = this.onBlurName.bind(this);

        this.onFocusPhone = this.onFocusPhone.bind(this);
        this.onBlurPhone = this.onBlurPhone.bind(this);

        this.onFocusAddress = this.onFocusAddress.bind(this);
        this.onBlurAddress = this.onBlurAddress.bind(this);

        this.onFocusRepassword = this.onFocusRepassword.bind(this);
        this.onBlurRepassword = this.onBlurRepassword.bind(this);
    }
    nullCheck(foo) {
        if (foo.length < 1) {
            return true;
        }
        return false;
    }

    ContainNumber(foo) {
        var pattern = /\d/g;
        return pattern.test(foo);

    }
    NumberOnly(foo) {
        var pattern = /^[0-9]+$/;
        return pattern.test(foo);
    }
    ValidPhone(foo) {
        return foo.substr(0, 2) == "08" && foo.length == 12 || foo.length == 13;
    }
    ValidEmail(foo) {
        var pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(foo);
    }

    render() {
        const { replace } = this.props.navigation;
        return (
            <ScrollView>

                <View style={s.Container}>

                    {/* <View style={s.TitleView}>
                        <Text style={s.Text}>Register Account</Text>
                    </View> */}

                    {/* <Text style={s.TextForm}>Protoype ID</Text> */}
                    {/* <TextInput
                        onChangeText={(Id) => { this.setState({ Id }) }}
                        onFocus={this.onFocusId}
                        onBlur={this.onBlurId}
                        style={s.InputForm}
                        borderColor={this.state.borderColorId} /> */}
                    <TouchableOpacity onPress={
                        () => {
                            this.props.navigation.replace("home");
                        }
                    } style={{ marginTop: '20%', flexDirection: 'row', height: 150, alignItems: 'center' }}>
                        <Icon name="arrow-left" size={40} color={db.state.IconcolorActive} />
                        <Text style={{ color: db.state.IconcolorActive, fontSize: 22, fontWeight: 'bold' }}> Back</Text>
                    </TouchableOpacity>
                    <Text style={s.TextForm}>Nama Prototype</Text>
                    <TextInput
                        onChangeText={(Name) => {
                            this.setState({ Name: Name })
                        }
                        }
                        onFocus={this.onFocusName}
                        onBlur={this.onBlurName}
                        style={s.InputForm}
                        borderColor={this.state.borderColorName} marginBottom={20} />

                    <Text style={s.TextForm}>Jenis Tanaman</Text>
                    <TextInput
                        onChangeText={(Name) => {
                            this.setState({ Jenis: Name })
                        }
                        }
                        onFocus={this.onFocusName}
                        onBlur={this.onBlurName}
                        style={s.InputForm}
                        borderColor={this.state.borderColorName} marginBottom={20} />

                    <Text style={s.TextForm}>Nomor Prototype</Text>
                    <TextInput
                        onChangeText={(Name) => {
                            this.setState({ Id: Name })
                        }
                        }
                        onFocus={this.onFocusName}
                        onBlur={this.onBlurName}
                        style={s.InputForm}
                        borderColor={this.state.borderColorName} />




                    <View style={s.ButtonForm}>

                        <TouchableOpacity onPress={() => {
                            this.RegisterAccount();
                        }} style={s.Button}>
                            <Text style={s.ButtonText}>
                                Add Prototype
                            </Text>
                        </TouchableOpacity>

                    </View>

                    <TouchableOpacity style={s.ForgetForm}>
                        {/* <Text style={s.TextForget}>You Don't Have A Protoype ID?</Text> */}
                    </TouchableOpacity>

                </View>

            </ScrollView>
        )

    }
    onFocusEmail() {
        this.setState({
            borderColorEmail: 'green'
        })
    }
    onBlurEmail() {
        this.setState({
            borderColorEmail: '#A9A9A9'
        })
    }

    onFocusPassword() {
        this.setState({
            borderColorPassword: 'green'
        })
    }
    onBlurPassword() {
        this.setState({
            borderColorPassword: '#A9A9A9'
        })
    }

    onFocusRepassword() {
        this.setState({
            borderColorRepassword: 'green'
        })
    }
    onBlurRepassword() {
        this.setState({
            borderColorRepassword: '#A9A9A9'
        })
    }

    onFocusAddress() {
        this.setState({
            borderColorAddress: 'green'
        })
    }
    onBlurAddress() {
        this.setState({
            borderColorAddress: '#A9A9A9'
        })
    }

    onFocusPhone() {
        this.setState({
            borderColorPhone: 'green'
        })
    }
    onBlurPhone() {
        this.setState({
            borderColorPhone: '#A9A9A9'
        })
    }

    onFocusName() {
        this.setState({
            borderColorName: 'green'
        })
    }
    onBlurName() {
        this.setState({
            borderColorName: '#A9A9A9'
        })
    }

    onFocusId() {
        this.setState({
            borderColorId: 'green'
        })
    }
    onBlurId() {
        this.setState({
            borderColorId: '#A9A9A9'
        })
    }

    RegisterAccount() {
        // var _id = this.state.Id;
        var _name = this.state.Name;
        // let linkLocal = 'http://' + db.state.linkLocal + '/hidroponik/api/Login';
        let linkLocal = 'http://' + db.state.linkLocal + '/hidroponik/api/Prototype';
        let link = '';
        let id = db.state.profile._uid;
        console.log('/nid nya adalah : ' + id);
        // let link = 'http://ta2020.xyz:4000';

        if (this.nullCheck(_name)) {
            return alert("Please Fill Your Id Correctly!!")
        }
        return fetch(linkLocal, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: id,
                pid: this.state.Id,
                nama:this.state.Name,
                jenis:this.state.Jenis
            })
        }).then((data) => {
            this.props.navigation.replace("home");
        });
    }



}
