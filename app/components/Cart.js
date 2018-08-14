import React from "react";

import {View, Text, Button, StyleSheet} from "react-native";

import CartList from "./CartList";
import CartSummary from "./CartSummary";

export default class Cart extends React.Component {
 
    constructor(props) {
        super(props);
        console.log("cart cons ", props);

        // ownership of data == by Cart
        // update should happen in the parent component
        this.state = {
            items: [{name: 'p1', qty: 1, price: 100, id: 10}],
            amount: 0,
            totalItems: 0,
            flag: true
        }
    }

    recalculate(items) {
        // let items = this.state.items; // old state, bug

        let amount = 0, totalItems = 0;
        for (let item of items) {
            amount += item.qty * item.price;
            totalItems += item.qty;
        }

        // setState, will it call render?
        // no, because of creation cycle, pre-render call

        // recalculate called again on update cycle
        // render on update cycle

        // setState is called 3/4 times,
        // but still render shall called only once after merging update
        this.setState({
            amount  // es6, amount: amount
        })

        this.setState({
            totalItems
        })

        this.setState({
            flag: true
        })
    }

    componentWillMount() {
        // called before render
        // computation/initialize state
        console.log("Cart will mount")
        this.recalculate(this.state.items);
    }

    componentDidMount() {
       console.log("Cart did mount")
    }

    // called on update life cycle
    addItem() {
        console.log("Adding new Item")
        let id = Math.ceil(Math.random() * 100000);

        let item = {
            id: id,
            name: 'Product ' + id,
            price: Math.ceil(20 + Math.random() * 100),
            qty: 1
        }
       
        // GOOD, immutable, 
        // clone, then append, useful for compare
        let clonedItems = [...this.state.items, item]

        // shall call render on update cycle
        // setState is async method, 
        // this.state.items is not updated immediately
        // when it updates, we can discuss later
        console.log("items before ", this.state.items.length)
        
        this.setState({
            items: clonedItems
        })

        // this.setState({
        //     items: clonedItems
        // }, () => {
        //     // callback, called after render method
        //     console.log("addItem, setState callback")
        //     // state is updated, render was called once
        //     // shall call render method again: Not Good
        //     this.recalculate();
        // })

        console.log("items after ", this.state.items.length)
        this.recalculate(clonedItems)
    }


    removeItem(id) {
        // TODO
    }

    updateItem(id, qty) {
        console.log("update ", id, qty);
        // TODO
    }

    empty() {
        this.setState({
            items: []
        })
        this.recalculate([]);
    }

    // dummy method, to explain the side effect of render methods
    refresh() {
        this.setState({
            flag: !this.state.flag
        });
    }


    // first time on creation cycle, we cannot stop
    // called on update cycle we can stop using shouldComponentupdate
    // when state is merged with next state, when render is called
     
    render() {

        console.log("-------------------------------------")
        console.log("cart render");
         
         
        return (
                <View style={styles.container}>
                    <Text>{this.props.title}</Text>

                    <Button title="Add"
                             onPress={() => this.addItem()}
                    />

                    <Button title="Refresh"
                             onPress={() => this.refresh()}
                    /> 

                    <Button title="Empty"
                             onPress={() => this.empty()}
                    /> 

                    <CartList  items={this.state.items}
                     />

                    <CartSummary amount={this.state.amount}
                                 totalItems={this.state.totalItems}
                     />

                </View>
        )
    }

}

Cart.defaultProps = {
    title  : "Cart"
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F0F0F0'
     
    },
  });