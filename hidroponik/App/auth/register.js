import React, { Component } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";
var s = require('../../assets/auth_style/registerstyle')
export default class register extends Component {
    constructor(props) {
        super(props);
        this.state={
            borderColorEmail:'#1e272e',
            borderColorPassword:'#1e272e',
            borderColorId:'#1e272e',
            borderColorName:'#1e272e',
            borderColorPhone:'#1e272e',
            borderColorAddress:'#1e272e',
            borderColorRepassword:'#1e272e',
        }
        this.onFocusEmail=this.onFocusEmail.bind(this);
        this.onBlurEmail=this.onBlurEmail.bind(this);

        this.onFocusPassword=this.onFocusPassword.bind(this);
        this.onBlurPassword=this.onBlurPassword.bind(this);

        this.onFocusId=this.onFocusId.bind(this);
        this.onBlurId=this.onBlurId.bind(this);

        this.onFocusName=this.onFocusName.bind(this);
        this.onBlurName=this.onBlurName.bind(this);

        this.onFocusPhone=this.onFocusPhone.bind(this);
        this.onBlurPhone=this.onBlurPhone.bind(this);

        this.onFocusAddress=this.onFocusAddress.bind(this);
        this.onBlurAddress=this.onBlurAddress.bind(this);

        this.onFocusRepassword=this.onFocusRepassword.bind(this);
        this.onBlurRepassword=this.onBlurRepassword.bind(this);
    }
    render() {
        const { replace } = this.props.navigation;
        return (
            <ScrollView>

                <View style={s.Container}>

                    <View style={s.TitleView}>
                    <Text style={s.Text}>Register Your Account</Text>
                    </View>

                    <Text style={s.TextForm}>Protoype ID</Text>
                    <TextInput name='id' 
                    onFocus={this.onFocusId}
                    onBlur={this.onBlurId}
                    style={s.InputForm}
                    borderColor={this.state.borderColorId}/>

                    <Text style={s.TextForm}>Full Name</Text>
                    <TextInput name='name' 
                    onFocus={this.onFocusName}
                    onBlur={this.onBlurName}
                    style={s.InputForm}
                    borderColor={this.state.borderColorName}/>

                    <Text style={s.TextForm}>Phone Number</Text>                    
                    <TextInput name='phone' 
                    onFocus={this.onFocusPhone}
                    onBlur={this.onBlurPhone}
                    style={s.InputForm}
                    borderColor={this.state.borderColorPhone}
                    textContentType='telephoneNumber'/>

                    <Text style={s.TextForm}>Address</Text>
                    <TextInput name='address' 
                    onFocus={this.onFocusAdress}
                    onBlur={this.onBlurAdress}
                    style={s.InputForm}
                    borderColor={this.state.borderColorAdress}
                    textContentType='addressCity'/>

                    <Text style={s.TextForm}>Email Address</Text>
                    <TextInput name='email' 
                    onFocus={this.onFocusEmail}
                    onBlur={this.onBlurEmail}
                    style={s.InputForm}
                    borderColor={this.state.borderColorEmail}
                    textContentType='emailAddress'/>
                    
                    <Text style={s.TextForm}>Password</Text>
                    <TextInput name='password' 
                    onFocus={this.onFocusPassword}
                    onBlur={this.onBlurPassword}
                    style={s.InputForm}
                    borderColor={this.state.borderColorPassword}
                    secureTextEntry={true}/>

                    <Text style={s.TextForm}>Retype Your Password</Text>
                    <TextInput name='repassword'
                        onFocus={this.onFocusRepassword}
                        onBlur={this.onBlurRepassword}
                        borderColor={this.state.borderColorRepassword}
                        secureTextEntry={true}  
                        style={s.InputForm}/>

                    <View style={s.ButtonForm}>
                        
                        <TouchableOpacity style={s.Button}>
                            <Text style={s.ButtonText}>
                                Register Your Account
                            </Text>
                        </TouchableOpacity>
            
                    </View>

                    <TouchableOpacity style={s.ForgetForm}>
                    <Text style={s.TextForget}>You Don't Have A Protoype ID?</Text>
                    </TouchableOpacity>

                </View>

            </ScrollView>
        )

    }
    onFocusEmail() {
        this.setState({
            borderColorEmail: 'red'
        })}
    onBlurEmail() {
        this.setState({
            borderColorEmail: '#1e272e'
        })}

    onFocusPassword() {
        this.setState({
            borderColorPassword: 'red'
        }) }
    onBlurPassword() {
        this.setState({
            borderColorPassword: '#1e272e'
        })}    

    onFocusRepassword() {
        this.setState({
            borderColorRepassword: 'red'
        })}
    onBlurRepassword() {
        this.setState({
            borderColorRepassword: '#1e272e'
        })}

    onFocusAddress() {
        this.setState({
            borderColorAddress: 'red'
        })}
    onBlurAddress() {
        this.setState({
            borderColorAddress: '#1e272e'
        })}

    onFocusPhone() {
        this.setState({
            borderColorPhone: 'red'
        })}
    onBlurPhone() {
        this.setState({
            borderColorPhone: '#1e272e'
        })}

    onFocusName() {
        this.setState({
            borderColorName: 'red'
        })}
    onBlurName() {
        this.setState({
            borderColorName: '#1e272e'
        })}

    onFocusId() {
        this.setState({
            borderColorId: 'red'
        })}
    onBlurId() {
        this.setState({
            borderColorId: '#1e272e'
        })}
}
