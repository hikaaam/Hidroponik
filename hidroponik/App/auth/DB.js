import React, {Component} from "react";
import {AsyncStorage} from "react-native";




class DB extends Component{
    constructor(props){
        super(props);
        this.state = {
            profile: '...loading'
        }
    }
    CreateAccount(uid,name,phone,address,email,password){
        let account = {
            _name : name,
            _address :address,
            _email :email,
            _password :password,
            _phone :phone,
            _uid :{uid}
        }
        AsyncStorage.setItem('profile',JSON.stringify(account),(err,result) =>{
           if(err){
               return err;
           }
           else{
            
               console.log(result);
               this.GetAccount();
           }
        }
        )
    }
    GetAccount(){
        try{
            (async () =>{
            
            await AsyncStorage.getItem('profile').then((value)=>{
                this.state.profile = JSON.parse(value);
                console.log(this.state.profile._name)
                });
            })();
    }
    catch(error){
        
    }
    }
    RemoveAccount(){
        AsyncStorage.removeItem('profile'),(err,result)=>{
            if(err){
                return err;
            }
            console.log(result);
        }
    }

 
}
const db = new DB();
export default db;