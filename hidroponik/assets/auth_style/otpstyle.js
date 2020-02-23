import {StyleSheet} from "react-native";

module.exports = StyleSheet.create(
    {
        Container:{
            flex:1,
            backgroundColor: '#1abc9c',
            flexDirection:'column',
            justifyContent:'center',
            paddingHorizontal:50
        },
        InputContainer:{
            flexDirection:'row',
            justifyContent:'space-evenly',
        },
        InputForm:{
            paddingVertical:15,
            paddingRight:10,
            paddingLeft:20,
            borderWidth:1.8,
            marginBottom:15,
            fontFamily:'serif',
            fontSize:28,
            color:'#2c3e50',
            fontWeight:'700',
            borderRadius: 10,
            backgroundColor:'#ecf0f1',
            width:60,
            height:60,
     
        },
        Text:{
            fontFamily:'serif',
            fontSize:18,
            color:'#000',
            marginBottom:15,
            marginLeft:10
        },
        ButtonText:{
            fontFamily:'serif',
            fontSize:18,
            color:'#ecf0f1',
            marginBottom:10,
            marginTop:5
        },
        Button:{
            width:160,
            borderColor:'#1e272e',
            borderWidth:1.8,
            flexDirection:'row',
            justifyContent:'center',
            marginTop:5,
            backgroundColor:'#c0392b',
            borderRadius:10,
            marginLeft:10
        },
        ButtonForm:{
            flexDirection:"row",
            justifyContent:'flex-start',       
        },
       
    }
);