'use strict';

var React = require('react-native');
const { default: db } = require('../App/auth/DB');

var {
    StyleSheet,
} = React;

module.exports = StyleSheet.create({

    Test:{
        flex:1,
        backgroundColor:'#eee',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },

    container: {
        flex: 1,
        
        // backgroundColor: '#1abc9c',
        flexDirection: 'column',
        // justifyContent:'space-between'
       
      
    },
    textHeader: {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 30,
        color: '#ecf0f1',
        marginLeft:10,
        flex: 1,
    },
    // header: {
    //     backgroundColor: '#16a085',
    //     height: 60,
    //     borderBottomColor: '#ecf0f1',
    //     borderBottomWidth: 1,
    //     flexDirection: "row",
    //     justifyContent: "flex-start",
    //     alignItems: 'center' 
    // },
    bottom: {
        backgroundColor: '#eee',
        flexDirection: 'row',
        height:70,
        justifyContent:'space-evenly',
        alignItems: 'center',
        borderTopColor: '#999',
        borderWidth:1.2
    },
    body:{
      flex: 1 ,
      backgroundColor: '#eee',

    },
    bottom_icons:{
        padding:10,
        alignContent: 'center',
        flexDirection:'row',
        justifyContent: 'center',
        borderColor: '#ecf0f1',
        borderWidth:1,
        borderRadius: 10,
        width:90,
        height:60
    },
    bottom_icon:{
        color: '#ecf0f1',
        marginBottom:5
    },
    bottom_text_active:{
        color: '#424874',
        fontFamily:'Roboto',
        fontWeight: 'bold',
        fontSize:14,
    },
    bottom_text:{
        color: '#999',
        fontFamily:'Roboto',
        fontWeight: 'bold',
        fontSize:14,
    },
    monitorbtm:{
        flexDirection: 'column',
        justifyContent:'center',
        padding:5,
        marginTop:8
      
    },
    notif:{
        flexDirection: 'column',
        justifyContent: 'center',
        // marginTop:10,
        marginHorizontal:8,
        padding:10,
        // backgroundColor: '#424874',
        borderColor: '#2c3e50',
        borderRadius: 2,
        // borderTopWidth:1,
        borderBottomWidth:1.2,
        height:110
},
    notifbox:{
        marginLeft:40,
    },
    notifTitle:{
        // color: '#ecf0f1',
        fontFamily:'Roboto',
        fontWeight: '700',
        fontSize:20,
        bottom:5
    },
    notifIcon:{
        position:'absolute',
        top:16,
        left:8
    },
    notifText:{
        // fontFamily:'Roboto',
        // fontWeight: '900',
        fontSize:16,
        color:'#333',
        marginTop:10,
        fontWeight:"bold",
        color:db.state.IconcolorActive
    },
   notifDate:{
    position:'absolute',
    top:12,
    right:8
    },
    notifDateText:{
        fontSize:14,
        fontWeight:'700'
    },
    scrollnotif:{
     flex:1
    },
    tengah:{
        flexDirection:'row',
        justifyContent:'center',
    },
    IconContainer:{
        height:'100%',
        width:'22%',
        flexDirection:'column',
        justifyContent:'center'
    },
});