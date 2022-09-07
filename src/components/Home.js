
import {View , Text , Image ,StyleSheet} from 'react-native'

export default function Home(){
    return(
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.textItem}><Text style={styles.sh3arStyle}>El-Fares</Text> E-commerce  ...</Text>
                <Text style={styles.textItem}><Text style={styles.sh3arStyle}>El-Fares</Text> My Welcome ^_^</Text>
            </View>
            <Image style={styles.imghome} source={require("../../assets/HomeImage.jpg")}/>
        </View>
    )
}


const styles= StyleSheet.create({
    container:{
        // borderWidth:2,
        marginTop:15,
        position:"relative",
        
    },
    textContainer:{
        //   float:"left",
        alignItems:"center",
          zIndex:2,
          top:20,
          left:5,
        //   backgroundColor:"darkgreen",
          height:90,
          alignItems:"center",
          justifyContent:"center",
          width:200,
          position:"absolute",

        
    },
    textItem:{
          color:"#fff",
          lineHeight:30

    },
    sh3arStyle:{
          color:"lightgreen",
    },
    imghome:{
        height:150,
        width:"auto",
    }
})