// First component

// default import
import React from 'react';

// named export and import
import {View, Text, Button, Alert} from 'react-native';

// Using Raw Redux API into React,Is Best practice? NO, 
// We should use React-Redux Library

import store from "../store";

// React Create object for Home component
// React calls render method of component
// Stateless component
export default class Home extends React.Component {

  // member function for es6 class
  onButtonPress () {
    // alert

    // Action Creator function, helper function
    // actions.js
    function incrementAction(value) {
      return {type: 'INCREMENT', 
      payload: {
        value: value
      }}
    }

    // or create action creators to create this action
    // let action = {type: 'INCREMENT', 
    //               payload: {
    //                 value: 10
    //               }}

    let action = incrementAction(10)

    // store internally calls reducer, pass action as second parameter
    // what about reducer state param? store shall pass state internally
    // return value from reducer, stored by store
    store.dispatch(action)
  }

  componentDidMount() {
    // subscribe from redux store
    // callback method, called after every dispatch
    // when susbcribe called, all your reducers are executed
    // states are stored by store
    // susbcribe is called even if no changes found
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
    // state => {counter: 0}
    let counter = store.getState().counter

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
