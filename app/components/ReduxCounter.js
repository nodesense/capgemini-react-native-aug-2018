import React from 'react';
import {View, Text, Button, Alert, TextInput} from 'react-native';

// functional component
// No life cycle method, no state
// Presentation component

// counter, increment,decrement,incrementby all passed by
// container component, which is a parent component
export default function ReduxCounter(props) {
    return (
        <View>
           <Text>Redux Counter</Text>
           <Text>Count {props.counter} </Text>
 
           <Button title="+1" onPress={props.increment}>
           </Button>
 
           <Button title="-1" onPress={props.decrement}>
           </Button>
 
           <Button title="+5" onPress={ () => props.incrementBy(5) }>
           </Button>
 
        </View>
      )
}
