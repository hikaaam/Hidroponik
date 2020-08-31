import React, { Component } from "react";
import { AsyncStorage } from "react-native";



class DB extends Component {

    constructor(props) {
        super(props);
        this.state = {
            profile: 'null',
            IconcolorActive: '#424874',
            Iconcolor: '#999',
            otp: 'null',
            tempEmail: '',
            linkLocal: '192.168.43.47',
            link: "",
            mode:'',
            token:''

        }

    }
    CreateAccount(uid, name, phone, address, email, password, token) {
        let account = {
            _name: name,
            _address: address,
            _email: email,
            _password: password,
            _phone: phone,
            _uid: uid,
            _token:token
        }
        AsyncStorage.setItem('profile', JSON.stringify(account), (err, result) => {
            if (err) {
                return err;
            }
            else {
                //    console.log(result);
                this.GetAccount();
            }
        }
        );

    }
    CreateMode(bool) {
        let otomatis = {
            status: bool
        }
        AsyncStorage.setItem('mode', JSON.stringify(otomatis), (err, result) => {
            if (err) {
                return err;
            }
            else {
                console.log(result);
            }
        }
        );

    }
    GetMode(){
        try {
            (async () => {

                await AsyncStorage.getItem('mode').then((value) => {
                    this.state.mode = JSON.parse(value);
                    // this.values = JSON.parse(value);
                    console.log(value);
                    return value;
                });
            })();

        }
        catch (error) {

        }
    }
    GetAccount() {

        try {
            (async () => {

                await AsyncStorage.getItem('profile').then((value) => {
                    this.state.profile = JSON.parse(value);
                    // this.values = JSON.parse(value);
                    console.log(value);
                    return value;
                });
            })();

        }
        catch (error) {

        }
    }
    Logout() {
        AsyncStorage.removeItem('profile'), (err, result) => {
            if (err) {
                return err;
            }
            console.log(result);
        }
        AsyncStorage.removeItem('otp'), (err, result) => {
            if (err) {
                return err;
            }
            console.log(result);
        }
    }
    Otp(status) {
        let account = {
            _status: status,

        }
        AsyncStorage.setItem('otp', JSON.stringify(account), (err, result) => {
            if (err) {
                return err;
            }
            else {
                //    console.log(result);
                this.GetAccount();
            }
        }
        )
    }
    tempEmail(email) {
        console.log(email);
        this.state.tempEmail = email;
    }

}
const db = new DB();
export default db;
