import React, { Component } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from "react-native";
var s = require('../../assets/auth_style/registerstyle')
import DB from "./DB";
import db from "./DB";
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
            RePassword: ''
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
    
    ContainNumber(foo){    
        var pattern = /\d/g;
        return pattern.test(foo);
   
    }
    NumberOnly(foo){
        var pattern = /^[0-9]+$/;
        return pattern.test(foo);
    }
    ValidPhone(foo){
        return foo.substr(0,2)=="08" && foo.length == 12 || foo.length == 13;
    }
    ValidEmail(foo){
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
                    <View style={{ marginTop: '25%' }}></View>
                    <Text style={s.TextForm}>Full Name</Text>
                    <TextInput
                        onChangeText={(Name) => {
                            this.setState({ Name })
                        }
                        }
                        onFocus={this.onFocusName}
                        onBlur={this.onBlurName}
                        style={s.InputForm}
                        borderColor={this.state.borderColorName} />

                    <Text style={s.TextForm}>Phone Number</Text>
                    <TextInput
                        onChangeText={(Phone) => { this.setState({ Phone }) }}
                        onFocus={this.onFocusPhone}
                        onBlur={this.onBlurPhone}
                        style={s.InputForm}
                        borderColor={this.state.borderColorPhone}
                        textContentType='telephoneNumber' />

                    <Text style={s.TextForm}>Address</Text>
                    <TextInput
                        onChangeText={(Address) => { this.setState({ Address }) }}
                        onFocus={this.onFocusAddress}
                        onBlur={this.onBlurAddress}
                        style={s.InputForm}
                        borderColor={this.state.borderColorAddress}
                        textContentType='addressCity' />

                    <Text style={s.TextForm}>Email Address</Text>
                    <TextInput
                        onChangeText={(Email) => { this.setState({ Email }) }}
                        onFocus={this.onFocusEmail}
                        onBlur={this.onBlurEmail}
                        style={s.InputForm}
                        borderColor={this.state.borderColorEmail}
                        textContentType='emailAddress' />

                    <Text style={s.TextForm}>Password</Text>
                    <TextInput
                        onChangeText={(Password) => { this.setState({ Password }) }}
                        onFocus={this.onFocusPassword}
                        onBlur={this.onBlurPassword}
                        style={s.InputForm}
                        borderColor={this.state.borderColorPassword}
                        secureTextEntry={true} />

                    <Text style={s.TextForm}>Retype Your Password</Text>
                    <TextInput
                        onChangeText={(RePassword) => { this.setState({ RePassword }) }}
                        onFocus={this.onFocusRepassword}
                        onBlur={this.onBlurRepassword}
                        borderColor={this.state.borderColorRepassword}
                        secureTextEntry={true}
                        style={s.InputForm} />

                    <View style={s.ButtonForm}>

                        <TouchableOpacity onPress={() => {
                            this.RegisterAccount();
                        }} style={s.Button}>
                            <Text style={s.ButtonText}>
                                Register Your Account
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
        var _phone = this.state.Phone;
        var _address = this.state.Address;
        var _email = this.state.Email;
        var _password = this.state.Password;
        var _rePassword = this.state.RePassword;
        let linkLocal = 'http://' + db.state.linkLocal + '/hidroponik/api/Login';
        let link = 'http://ta2020.xyz:4000';
    
        if(this.nullCheck(_name)){
            return alert("Please Fill Your Name Correctly!!")
        }
        if(this.nullCheck(_phone)){
            return alert("Please Fill Your Phone Number Correctly!!")
        }
        if(this.nullCheck(_address)){
            return alert("Please Fill Your Address Correctly!!")
        }
        if(this.nullCheck(_password)){
            return alert("Please Fill Your Password Correctly!!")
        }


        if(this.ContainNumber(_name)){
            return alert("Invalid Name!!")
        }
        if(!this.NumberOnly(_phone)){
            return alert("Invalid Phone Number!!")
        }
        if(!this.ValidPhone(_phone)){
            return alert("Invalid!! phone number should start with 08 and have 12 or 13 character length")
        }
        if(!this.ValidEmail(_email)){
            return alert("Invalid Email Address!!");
        }
        
        

        if (_password === _rePassword) {
            return fetch(linkLocal, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    full_name: _name,
                    phone_number: _phone,
                    address: _address,
                    email: _email,
                    password: _password
                }),
            }).then((response) => response.json())
                .then((responseJson) => {
                    if (responseJson['email'] == _email) {
                        DB.CreateAccount(
                            responseJson['id'],
                            responseJson['full_name'],
                            responseJson['phone_number'],
                            responseJson['address'],
                            responseJson['email'],
                            responseJson['password']);
                        this.props.navigation.replace('login');
                    }
                    else {
                        alert(responseJson['email'])

                    }


                })
                .catch((error) => {
                    console.error(error);
                });
        }
        else {
            alert("Your Passsword Doesn't match")
        }

    }

}
