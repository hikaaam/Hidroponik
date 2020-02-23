import {StyleSheet} from "react-native";

module.exports = StyleSheet.create(
    {
        Container:{
            flex:1,
            backgroundColor: '#1abc9c',
            flexDirection:'column',
            justifyContent:'center',
            paddingHorizontal:60
        },
        InputForm:{
            padding:20,
            borderWidth:1.8,
            marginBottom:15,
            fontFamily:'serif',
            fontSize:22,
            color:'#2c3e50',
            fontWeight:'700',
            borderRadius: 10,
            backgroundColor:'#ecf0f1'
        },
        Text:{
            fontFamily:'serif',
            fontSize:18,
            color:'#000',
            marginBottom:15,
        },
        ButtonText:{
            fontFamily:'serif',
            fontSize:18,
            color:'#ecf0f1',
            marginBottom:10,
            marginTop:5
        },
        Button:{
            borderColor:'#1e272e',
            borderWidth:1.8,
            paddingVertical:5,
            paddingHorizontal:20,
            flexDirection:'row',
            justifyContent:'center',
            marginTop:5,
            backgroundColor:'#c0392b',
            borderRadius:10
        },
        ButtonForm:{
            flexDirection:"row",
            justifyContent:'flex-start',       
        },

    }
);