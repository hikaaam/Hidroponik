import React from "react";
import {StyleSheet} from "react-native";

module.exports = StyleSheet.create(
    {
        Container:{
            flex:1,
            backgroundColor: '#eee',
            flexDirection:'column',
            justifyContent:'space-evenly',
            paddingHorizontal:60
        },
        InputForm:{
            padding:15,
            borderBottomWidth:2.5,
            marginBottom:15,
            fontFamily:'serif',
            fontSize:22,
            color:'black',
            fontWeight:'700',
            borderRadius: 4,
            // backgroundColor:'#A9A9A9',
            // opacity:0.5
        },
        Text:{
            fontFamily:'serif',
            fontSize:35,
            color:'#424874',
            marginBottom:30,
            fontWeight:'bold'
        },
        ButtonText:{
            fontFamily:'serif',
            fontSize:20,
            color:'#ecf0f1',
            marginBottom:10,
            marginTop:5
        },
        Button:{
            paddingHorizontal:35,
            paddingVertical:6,
            borderColor:'#1e272e',
            borderWidth:1.8,
            flexDirection:'row',
            justifyContent:'center',
            marginTop:15,
            backgroundColor:'#424874',
            borderRadius:4,
           
        },
        ButtonForm:{
            flexDirection:"column",
            justifyContent:'space-evenly',   
             
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
            marginTop:10         
        },
        CenteringObj:{
            flexDirection:'row',
            // justifyContent:'center'
        }
        

    }
);