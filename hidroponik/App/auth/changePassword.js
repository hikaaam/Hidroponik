import React, { Component } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
var s = require('../../assets/auth_style/changepassword')
export default class ChangePassword extends Component {
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
            borderColorEmail: 'red'
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
                    <Text style={s.Text}>Enter Your New Password</Text>
                    <TextInput name='email' 
                    onFocus={this.onFocusEmail}
                    onBlur={this.onBlurEmail}
                    style={s.InputForm}
                    borderColor={this.state.borderColorEmail}
                    textContentType='password'
                    secureTextEntry={true}
                    />
                    <Text style={s.Text}>Retype Your New Password</Text>
                    <TextInput name='password'
                        onFocus={this.onFocusPassword}
                        onBlur={this.onBlurPassword}
                        borderColor={this.state.borderColorPassword}
                        secureTextEntry={true}  
                        style={s.InputForm} />

                    <View style={s.ButtonForm}>
                        
                        <TouchableOpacity onPress={()=>{}}
                         style={s.Button}>
                            <Text style={s.ButtonText}>
                                Change Password
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