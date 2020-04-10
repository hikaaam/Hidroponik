import {StyleSheet} from 'react-native';

module.exports = StyleSheet.create(
    {
        bodyContainer:{
            flex:1,
             backgroundColor: '#eee',
            flexDirection: 'column',
        },
        bodyItem:{
            // padding:10,
            height:170,
            marginHorizontal:12,
            marginTop:12
           
        },
        imageItem:{
            resizeMode:'stretch',
            width:"100%",
            height:'100%'
        },
        TextItem:{
            color:'#eee',
            fontSize:85,
            position:'absolute',
            left:10,
            top:26,
            fontFamily:'serif',
            fontWeight:"100"      
        },
        TextItemtds:{
            color:'#eee',
            fontSize:55,
            position:'absolute',
            left:10,
            top:26,
            fontFamily:'serif',
            fontWeight:"100"  
        },
        TextMode:{
            color:'#eee',
            position:'absolute',
            fontWeight:'bold',
            left:10,
            bottom:10
        }
    }
);