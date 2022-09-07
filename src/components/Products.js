import { View , Text , Image, ScrollView, FlatList, StyleSheet ,VirtualizedList } from "react-native"
import Product from "./Product"


export default function Products(){
     
    const products = [
        {
            name:"phone",
            price:10000,
            imgUrl:require('../../assets/Phone.jpeg')
        },
        {
            name:"phone",
            price:10000,
            imgUrl:require('../../assets/Phone.jpeg')
        },
        {
            name:"phone",
            price:10000,
            imgUrl:require("../../assets/Phone.jpeg")
        },
    ]

   

    return(
        <View>


           
                <FlatList style={styles.container} data={products} renderItem={({item})=>{
                    console.log(item.name , item.price  , item.imgUrl);
                    <Product name={item.name} price={item.price} imgUrl={item.imgUrl}/>
                    console.log("after product");
                }}/>

                {/* <Product name="{item.name}" price="{item.price} "/>
                <Product name="{item.name}" price="{item.price} "/>
                <Product name="{item.name}" price="{item.price} "/>
                <Product name="{item.name}" price="{item.price} "/>
                <Product name="{item.name}" price="{item.price} "/>
                <Product name="{item.name}" price="{item.price} "/>
                <Product name="{item.name}" price="{item.price} "/>
                <Product name="{item.name}" price="{item.price} "/>
                <Product name="{item.name}" price="{item.price} "/>
                <Product name="{item.name}" price="{item.price} "/>
                <Product name="{item.name}" price="{item.price} "/>
                <Product name="{item.name}" price="{item.price} "/>
                <Product name="{item.name}" price="{item.price} "/>
                <Product name="{item.name}" price="{item.price} "/>
                <Product name="{item.name}" price="{item.price} "/> */}

            
                
                
        </View>

        
            
           

           
        
    )
}


const styles = StyleSheet.create({
  
})