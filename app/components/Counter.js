import React from 'react';
import {View, Text, Button, Alert, TextInput} from 'react-native';

export default class Counter extends React.Component {
  // props are passed as constructor argument first time
  // accessible as this.props (keyword)
  // update life cycle: component receive props (later)
  constructor(props) {
    super(props); // MUST

    // State
    // state is a keyword for storing component data
    
    // Initialize state from props
    this.state = {
      counter: props.starter,
      names: ['React', 'Redux', 'Node.js'],
      name: 'enter text', // text input
      showList: true,
    }
  }

  // keyword, used only if props not passed from parent
  static defaultProps = {
    starter: 100
  }

  // // increment is called by react function
  // this is undefined in react context
  // increment() {
  //   Alert.alert("incr called");
  //   // BAD, mutating state directly, discuss later
  //   this.state.counter++;
  // }

  // ES.next
  // solve 'this' context problem
  increment = () => {
    // Alert.alert("incr called " + this.state.counter);
    // BAD, mutating state directly, discuss later
    this.state.counter++;

    // react keyword method
    // trigger react to call render method again
    // BAD, call setState instead
    this.forceUpdate();
  }

  decrement = () => {
      // setState is async
      // takes inputs and does batch update
      // trigger render to be called after updating state from batch
      // Good
      this.setState({
        counter: this.state.counter - 1
      })
  }

  incrementBy = (n) => {
      this.setState({
        counter: this.state.counter + n
      })
  }

  addName = () => {
     // this.state.name has input from TextInput
     // BAD mutable
     //this.state.names.push(this.state.name)

     //Good, immutable array/object
     // close the new array with existing items
     // shallow copy, discuss later

     // let clonedNames = [...this.state.names]
     // clonedNames.push(this.state.name)

     let clonedNames = [...this.state.names, this.state.name]

     this.setState({
       names: clonedNames,
       name: '' // clear the TextInput
     })

  }

  // React doesn't support data binding
  // Render create virtual dom, return newly created v.dom
  // Once created Virtual DOM cannot be updated
  // how to call render again to create new virtual dom?
  // forceUpdate, setState, trigger render call again

  render() {
     //Alert.alert('Counter Render  ' + this.state.counter)

     return (
       <View>
          <Text>Counter</Text>
          <TextInput value={this.state.name}
                    onChangeText={ (name) => this.setState({name: name})  }
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
           />

          <Button title="Add Name" onPress={this.addName}>
          </Button>

          <Button title="ShowHide"
            onPress={() => this.setState({showList: !this.state.showList})}>
          </Button>


          <Text>Count {this.state.counter} </Text>

          <Button title="+1" onPress={this.increment}>
          </Button>

          <Button title="-1" onPress={this.decrement}>
          </Button>

          <Button title="+5" onPress={ () => this.incrementBy(5) }>
          </Button>


          { this.state.showList &&
            this.state.names.map (name => (
              <Text key={name}>{name}</Text>
            ))
          }



       </View>
     )
  }

}
