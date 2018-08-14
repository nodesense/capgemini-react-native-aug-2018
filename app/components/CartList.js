import React, {Component} from "react";

import {View, Text, FlatList, ScrollView} from "react-native";

import CartItem from "./CartItem";

// Pure vs Component
export default class CartList extends Component {
    constructor(props) {
        super(props);
         
    }

    // stop cart list being rendered unnessasry
    shouldComponentUpdate(nextProps, nextState) {
        console.log("CartList should component update");
        return nextProps.items != this.props.items;
    }
 
    render() {
        // items should be passed from parent to child
        let items = this.props.items || [];
        console.log("cartlist render", items.length);
        
        return (
            <View>
                <Text>Cart List - {items.length}</Text>
 
           

                <ScrollView>

                    {
                        items.map ( item => (
                            <CartItem item={item} key={item.id} >
                            </CartItem>
                        ))
                    }

                </ScrollView>


            </View>
        )
    }
}