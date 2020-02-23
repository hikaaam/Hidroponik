import React from "react";
import {StyleSheet} from "react-native";

module.exports = StyleSheet.create(
    {
        Container:{
            flex:1,
            backgroundColor: '#1abc9c',
            flexDirection:'column',
            justifyContent:'flex-start',
            paddingHorizontal:60
        },
        InputForm:{
            padding:8,
            borderWidth:1.8,
      
            fontFamily:'roboto',
            fontSize:15,
            color:'#2c3e50',
            fontWeight:'700',
            borderRadius: 10,
            backgroundColor:'#ecf0f1'
        },
        Text:{
            fontFamily:'roboto',
            fontSize:20,
            color:'#000',
            // marginBottom:10,
            marginTop:20,
            fontWeight:'800',
            paddingBottom:5,
            paddingHorizontal:10,
            borderBottomColor:'#eee',
            borderBottomWidth:1,
            
        },
        TitleView:{     
            flexDirection: 'row',
            justifyContent:'center'
        },
        TextForm:{
            fontFamily:'serif',
            fontSize:17,
            color:'#000',
            marginBottom:15,
            marginTop:10
        },
        ButtonText:{
            fontFamily:'serif',
            fontSize:18,
            color:'#ecf0f1',
            marginBottom:10,
            marginTop:5
        },
        Button:{
            paddingHorizontal:60,
            borderColor:'#1e272e',
            borderWidth:1.8,
            flexDirection:'row',
            justifyContent:'center',
            marginTop:5,
            backgroundColor:'#c0392b',
            borderRadius:10
        },
        ButtonForm:{
            flexDirection:"row",
            justifyContent:'center',   
            marginTop:15    
        },
        TextForget:{
            fontSize:16,
            // backgroundColor:'#c0392b',
            padding:2,
            paddingHorizontal:6,
            // borderRadius:5,
            // borderColor:'#1e272e',
            // borderWidth:1.8, 
            // color:'#ecf0f1',
            color:'black',
            fontFamily:'serif'  
        },
        ForgetForm:{
            flexDirection:"row",
            justifyContent:'flex-start',
            padding:2,
            marginTop:10 ,
            marginBottom:142       
        }

    }
);