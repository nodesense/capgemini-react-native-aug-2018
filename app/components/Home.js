// First component

// default import
import React from 'react';

// named export and import
import {View, Text, Button, Alert} from 'react-native';

import store from "../store";

// React Create object for Home component
// React calls render method of component
// Stateless component
export default class Home extends React.Component {

  // member function for es6 class
  onButtonPress () {
    // alert
    Alert.alert("Button Pressed");

    // or create action creators to create this action
    let action = {type: 'INCREMENT', 
                  payload: {
                    value: 10
                  }}

    // store internally calls reducer, pass action as second parameter
    // what about reducer state param? store shall pass state internally
    // return value from reducer, stored by store
    store.dispatch(action)
  }

  componentDidMount() {
    // subscribe from redux store
    // callback method, called after every dispatch
    store.subscribe ( ()=> {
      console.log("Home Subs called");
      this.forceUpdate(); // render method
    })
  }

  // render, react keyword
  // create and return a virtual DOM
  // who shall call render? called by react-native
  render() {
    // Get value from store
    console.log('Home Render')
    let counter = store.getState()

    // JSX View
     return (
       <View>
          <Text>Home</Text>
          <Text>Counter From Redux {counter}</Text>
          <Button title="Touch" onPress={this.onButtonPress} ></Button>
       </View>
     ) 

    //  // Babel convert JSX to Raw JS View
    //  // Difficult to write this
    //  return React.createElement(
    //   View,
    //   null,
    //   React.createElement(
    //           Text,
    //           null,
    //           "Home"
    //   ),
    //   React.createElement(Button, { title: "Touch", onPress: this.onButtonPress })
    // )
  }

}
