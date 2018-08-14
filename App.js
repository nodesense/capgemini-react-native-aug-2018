import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// import default

import Home from './app/components/Home';
import Counter from "./app/components/Counter";
import Cart from "./app/components/Cart";


// React Navigation
import {createBottomTabNavigator} from 'react-navigation';

//TabNavigation is a component
let TabNavigation = createBottomTabNavigator({
  Home: Home,
  'Counter': Counter,
  Cart: Cart
})

// App is parent component
// Home is a child component
 

// Sharing data from parent to child
// Props => properties/attributes

// child to parent communication
// JavaScript function callback

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to React Native</Text>

        <TabNavigation />
        
        {/* 
        <Home />
        <Counter starter={100}  />  
        <Cart />
        */}
       

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 20,
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
