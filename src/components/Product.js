import { View , Text , Image ,StyleSheet,ScrollView } from "react-native"


export default function Product({name,price}){
    

    return(
        <View style={styles.container}>
            <Image style={styles.imageItem} source={require('../../assets/Phone.jpeg')} />
            <View style={styles.itemDetails}>
                <Text>{name}</Text>
                <Text>{price}</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
            container:{
                // borderWidth:2,
                // borderColor:"green",
                flexDirection:"row",
                marginHorizontal:40,
                marginTop:15,
                alignItems:"center",
                height:100,
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 3,
                },
                shadowOpacity: 0.29,
                shadowRadius: 4.65,

                elevation: 3,


            },
            imageItem:{
                width:90,
                height:90,
                marginRight:30
            },
            itemDetails:{
                // borderColor:"red",
                // borderWidth:2,
                height:70,
                justifyContent:"space-around"
            }

})