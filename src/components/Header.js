import {View , Text , Image,StyleSheet} from 'react-native'

export default function Header(){
    return (
        <View style={styles.container}>
            <Text style={styles.logTxt}>El-Fares</Text>
            <Image style={styles.logoimg} source={require('../../assets/Logo.jpg')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
            height:50,
            flexDirection:"row",
            alignItems:'center',
            justifyContent:"center",
            backgroundColor:"rde",
            marginTop:40


    },
    logTxt:{
           marginRight:10,
           fontSize:22,
           color:"darkgreen"

    },
    logoimg:{
          height:50,
          width:50,
        //   borderColor:"red",
        //   borderWidth:2
    }
})