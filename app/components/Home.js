// First component

// default import
import React from 'react';

// named export and import
import {View, Text, Button, Alert} from 'react-native';

// React Create object for Home component
// React calls render method of component

export default class Home extends React.Component {

  // member function for es6 class
  onButtonPress () {
    // alert
    Alert.alert("Button Pressed");
  }

  // render, react keyword
  // create and return a virtual DOM
  // who shall call render? called by react-native
  render() {
    // JSX View
     /* return (
       <View>
          <Text>Home</Text>
          <Button title="Touch" onPress={this.onButtonPress} ></Button>
       </View>
     )*/

     // Babel convert JSX to Raw JS View
     // Difficult to write this
     return React.createElement(
      View,
      null,
      React.createElement(
              Text,
              null,
              "Home"
      ),
      React.createElement(Button, { title: "Touch", onPress: this.onButtonPress })
    )
  }

}
