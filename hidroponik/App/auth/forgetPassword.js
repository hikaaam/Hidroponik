import React, { Component } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import db from "./DB";
var s = require('../../assets/auth_style/forgetpasswordstyle')
export default class ForgetPassword extends Component {
    constructor(props) {
        super(props);
        this.state={borderColorEmail:'#1e272e',
        borderColorPassword:'#1e272e'}
        this.onFocusEmail=this.onFocusEmail.bind(this);
        this.onBlurEmail=this.onBlurEmail.bind(this);
        this.onFocusPassword=this.onFocusPassword.bind(this);
        this.onBlurPassword=this.onBlurPassword.bind(this);
    }

    onFocusEmail() {
        this.setState({
            borderColorEmail: 'green'
        })
        }
    onBlurEmail() {
        this.setState({
            borderColorEmail: '#1e272e'
        })
        }
    onFocusPassword() {
        this.setState({
            borderColorPassword: 'red'
        })
        }
    onBlurPassword() {
        this.setState({
            borderColorPassword: '#1e272e'
        })
        }
    render() {
        const { navigate} = this.props.navigation;
        return (
            <View style={s.Container}  >

                <View>
                    <Text style={s.Text}>Enter your Email Address</Text>
                    <TextInput name='email' 
                    onFocus={this.onFocusEmail}
                    onBlur={this.onBlurEmail}
                    onChangeText={(value)=>{this.setState({Email:value})}}
                    style={s.InputForm}
                    borderColor={this.state.borderColorEmail}
                    textContentType='emailAddress'
                    keyboardType='email-address'
                  />

                    <View style={s.ButtonForm}>
                        
                        <TouchableOpacity onPress={()=>{navigate('changepasswordOtp', {Email:this.state.Email} )}}
                         style={s.Button}>
                            <Text style={s.ButtonText}>
                                Send Email
                            </Text>
                        </TouchableOpacity>

                        {/* <TouchableOpacity  onPress={()=>{navigate('register')}}
                            style={s.Button}>
                            <Text style={s.ButtonText}>
                                Register
                            </Text>
                        </TouchableOpacity> */}
            
                    </View>

                    {/* <TouchableOpacity style={s.ForgetForm}>
                    <Text style={s.TextForget}>Forget Your Password?</Text>
                    </TouchableOpacity> */}

                </View>

            </View>
        )

    }

}