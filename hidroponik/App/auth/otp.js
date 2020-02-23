import React, { Component } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
var s = require('../../assets/auth_style/otpstyle')
export default class OTP extends Component {
    constructor(props) {
        super(props);
        this.state={
            borderColorOtp1:'#1e272e',
            borderColorOtp2:'#1e272e',
            borderColorOtp3:'#1e272e',
            borderColorOtp4:'#1e272e',
            borderColorOtp5:'#1e272e',
            // borderColorOtp6:'#1e272e',
     }

        this.onFocusOtp1=this.onFocusOtp1.bind(this);
        this.onBlurOtp1=this.onBlurOtp1.bind(this);

        this.onFocusOtp2=this.onFocusOtp2.bind(this);
        this.onBlurOtp2=this.onBlurOtp2.bind(this);

        this.onFocusOtp3=this.onFocusOtp3.bind(this);
        this.onBlurOtp3=this.onBlurOtp3.bind(this);

        this.onFocusOtp4=this.onFocusOtp4.bind(this);
        this.onBlurOtp4=this.onBlurOtp4.bind(this);

        this.onFocusOtp5=this.onFocusOtp5.bind(this);
        this.onBlurOtp5=this.onBlurOtp5.bind(this);

        // this.onFocusOtp6=this.onFocusOtp6.bind(this);
        // this.onBlurOtp6=this.onBlurOtp6.bind(this);

    }
        
    render() {
        const { replace } = this.props.navigation;
        return (
            <View style={s.Container}  >
             <Text style={s.Text}>Insert your OTP code</Text>

                <View style={s.InputContainer}>

                    <TextInput name='otp1' 
                    onFocus={this.onFocusOtp1}
                    onBlur={this.onBlurOtp1}
                    style={s.InputForm}
                    borderColor={this.state.borderOtp1} 
                    keyboardType='decimal-pad' 
                    onChange={()=>{}}/>

                    
                    <TextInput name='Otp2' 
                    onFocus={this.onFocusOtp2}
                    onBlur={this.onBlurOtp2}
                    style={s.InputForm}
                    borderColor={this.state.borderOtp2}
                    keyboardType='decimal-pad' 
                    onChange={()=>{}}/>


                    <TextInput name='Otp3'  
                    onFocus={this.onFocusOtp3}
                    onBlur={this.onBlurOtp3}
                    style={s.InputForm}
                    borderColor={this.state.borderOtp3} 
                    keyboardType='decimal-pad' 
                    onChange={()=>{}}/>

                    
                    <TextInput name='Otp4' 
                    onFocus={this.onFocusOtp4}
                    onBlur={this.onBlurOtp4}
                    style={s.InputForm}
                    borderColor={this.state.borderOtp4} 
                    keyboardType='decimal-pad' 
                    onChange={()=>{}}/>


                    <TextInput name='Otp5' 
                    onFocus={this.onFocusOtp5}
                    onBlur={this.onBlurOtp5}
                    style={s.InputForm}
                    borderColor={this.state.borderOtp5} 
                    keyboardType='decimal-pad' 
                    onChange={()=>{replace('home')}}/>

          

                                        
               </View>           


                    <View style={s.ButtonForm}>
                        
                        <TouchableOpacity onPress={()=>{}}
                         style={s.Button}>
                            <Text style={s.ButtonText}>
                                Resend Code
                            </Text>
                        </TouchableOpacity>
                    </View>

            </View>
        )

    }

    onFocusOtp1() {
        this.setState({
            borderColorOtp1: 'red'
        }) }
    onBlurOtp1() {
        this.setState({
            borderColorOtp1: '#1e272e'
        }) }
                   
        onFocusOtp2() {
            this.setState({
                borderColorOtp2: 'red'
            }) }
        onBlurOtp2() {
            this.setState({
                borderColorOtp2: '#1e272e'
            }) }
                       
        onFocusOtp3() {
            this.setState({
                borderColorOtp3: 'red'
            }) }
        onBlurOtp3() {
            this.setState({
                borderColorOtp3: '#1e272e'
            }) }
                           
        onFocusOtp4() {
            this.setState({
                borderColorOtp4: 'red'
            }) }
        onBlurOtp4() {
            this.setState({
                borderColorOtp4: '#1e272e'
            }) }
                               
        onFocusOtp5() {
            this.setState({
                borderColorOtp5: 'red'
            }) }
        onBlurOtp5() {
            this.setState({
                borderColorOtp5: '#1e272e'
            }) }
                                   
        // onFocusOtp6() {
        //     this.setState({
        //         borderColorOtp6: 'red'
        //     }) }
        // onBlurOtp6() {
        //     this.setState({
        //         borderColorOtp6: '#1e272e'
        //     }) }
                        
                                                            
}