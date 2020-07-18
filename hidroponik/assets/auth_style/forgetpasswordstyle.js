import {StyleSheet} from "react-native";
import DB from '../../App/auth/DB';
module.exports = StyleSheet.create(
    {
        Container:{
            flex:1,
            backgroundColor: '#eee',
            flexDirection:'column',
            justifyContent:'center',
            paddingHorizontal:60
        },
        InputForm:{
            padding:20,
            borderWidth:1.8,
            marginBottom:15,
            fontSize:18,
            color:'#2c3e50',
            fontWeight:'700',
            borderRadius: 10,
            backgroundColor:'#ecf0f1'
        },
        Text:{
            fontSize:20,
            color:DB.state.IconcolorActive,
            marginBottom:15,
            fontWeight:'bold'
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
            flexDirection:'row',
            justifyContent:'center',
            marginTop:15,
            backgroundColor:'#424874',
            borderRadius:4,
           
        },
        ButtonForm:{
            flexDirection:"row",
            justifyContent:'flex-start',       
        },

    }
);