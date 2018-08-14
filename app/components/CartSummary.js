import React from "react";

import {View, Text} from "react-native";

// import PropTypes from "prop-types";

export default class CartSummary extends React.Component {
    // creation cycle, once once
    constructor(props) {
        super(props);

        this.state = {
            discount: 0
        }
    }

    // update cycle
    // this.props ==> current props
    // nextProps means upcoming properties, updated from parent
    // called when? called on update cycle only
    // when? whenever parent render called on update cycle
    // called even if there is no data change
    // react does't compare/track your data/model

    // if state has impact on parent props change
    // reinitialize the state
    componentWillReceiveProps(nextProps) {
        console.log("Cart Summary Current props", this.props);
        console.log("Cart Summary nextProps ", nextProps);

        if (nextProps.totalItems >= 5) {
            this.setState({
                discount: 10
            })
        } else {
            this.setState({
                discount: 0
            })
        }
    }

    // Stop summary render being called
    // when? called on parent render, on update cycle only
    // when? called on this.setState, on update cycle
    shouldComponentUpdate(nextProps, nextState) {
        console.log("Summary shouldComponent Update")
        return nextProps.amount != this.props.amount ||
               nextProps.totalItems != this.props.totalItems ||
               nextState.discount != this.state.discount;

        // return true; // render shall be called
        // false, render is not called
    }

    render() {
            console.log("cart summary render");

            // props are read only
            // error / we can't overwrite
            // we should not overwrite
            //this.props.amount = 1000;
            
            return (
                <View>
                    <Text> Amount {this.props.amount} </Text>
                    <Text> Total Items {this.props.totalItems} </Text>
                    <Text> Discount {this.state.discount} % </Text>
                
                </View>
            )
    }
}