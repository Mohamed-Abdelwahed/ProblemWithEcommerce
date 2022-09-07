
import { ScrollView, StyleSheet, Text, View ,FlatList } from 'react-native';
import Header from './src/components/Header';
import Home from './src/components/Home';
import Products from './src/components/Products';
import Product from './src/components/Product';
export default function App() {
  

  return (
    <ScrollView style={styles.container}>

      <Header/>
      <Home/>
      <Products/>

   
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  //  container:{
  //   alignItems:"center"
  //  }  
});
