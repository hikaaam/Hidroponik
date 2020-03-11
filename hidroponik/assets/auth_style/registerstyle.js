import React from "react";
import {StyleSheet} from "react-native";

module.exports = StyleSheet.create(
    {
        Container:{
            flex:1,
            // backgroundColor: '#1abc9c',
            flexDirection:'column',
            justifyContent:'flex-start',
            paddingHorizontal:60,
            backgroundColor: '#eee',
        },
        InputForm:{
            padding:10,
            borderBottomWidth:1.8,
            fontFamily:'roboto',
            fontSize:25,
            color:'#2c3e50',
            fontWeight:'700',
            marginBottom:20,
            // backgroundColor: '#eee',
        },
        Text:{
            fontFamily:'serif',
            fontSize:35,
            color:'#424874',
            marginBottom:30,
            fontWeight:'bold',
            paddingVertical:30,
        },
        TitleView:{     
            flexDirection: 'row',
            // justifyContent:'center'
        },
        TextForm:{
            fontFamily:'serif',
            fontSize:20,
            color:'#424874',
            // marginBottom:5,
            // marginTop:5
        },
        ButtonText:{
            fontFamily:'serif',
            fontSize:18,
            color:'#ecf0f1',
            marginBottom:10,
            marginTop:5
        },
        Button:{
            paddingHorizontal:35,
            paddingVertical:6,
            borderColor:'#1e272e',
            borderWidth:1.8,
            // width:100,
            flexDirection:'row',
            justifyContent:'center',
            marginTop:15,
            backgroundColor:'#424874',
            borderRadius:4,
        },
        ButtonForm:{
            flexDirection:"column",
           
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