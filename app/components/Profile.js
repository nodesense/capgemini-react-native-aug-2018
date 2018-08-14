import React from 'react';
import {View, 
        Text, 
        Button, 
        Alert, 
        Picker,
        Switch,
        Slider,
        StyleSheet
    } from 'react-native';

export default class Profile extends React.Component {
    constructor() {
        super();
        this.state = {
            language: 'js',
            proficiency: 70,
            employed: true
        }
    }

    render() {
        return (
            <View style= { styles.container }>
                <Text>Language</Text>
                <Picker
                    selectedValue={this.state.language}
                    style={{ height: 200, width: 100 }}
                    onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                    <Picker.Item label="Scala" value="scala" />
                    </Picker>
                    <Text>Experience</Text>
                     <Slider
                        step={1}
                        maximumValue={100}
                        onValueChange={( value ) => this.setState({proficiency: value})}
                        value={this.state.proficiency}
                    />
                     <Text>Employed?</Text>
                    <Switch
                            onValueChange={( status ) => this.setState({employed: status})}
                            value={this.state.employed}
                        />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      marginTop: 20,
      flexDirection: 'column',
       
      
    },
  });
  