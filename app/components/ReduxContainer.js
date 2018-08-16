// Bridge between a component and store
// react-redux bridge
// decouple presentation and business/state logics

// bridge
import {connect} from 'react-redux';

//react
import ReduxCounter from './ReduxCounter';

// where is my store??
// connect Provider, shall supply store to containers directly


// req-1 for ReduxCounter component.
// get data(counter) from store, pass it as props to ReduxCounter
// state = store.getState()
// called by container on every subscription
// returns props, that should be passed to component
function mapStateToProps(state) {
    return {
        //propName: value from state
        // state: state // BAD Approach, performance issue
        counter: state.counter
    }
}

// req-2 for ReduxCounter component
// provide implementation for increment, decrement, incrementBy
// dispatch  = store.dispatch
// called by container
// when, whenever container object created
function mapDispatchToProps(dispatch) {
    return {
        // propName: function(){}
        increment: function() {
            // create action
            let action = {
                type: 'INCREMENT',
                payload: {value: 1}
            }

            dispatch(action);
        }
    }
}

// how to create containers

//decorator
const connectFn = connect(mapStateToProps, 
                          mapDispatchToProps); // params order must

// container component, that wraps ReduxCounter component
// container also calls mapStateToProps, mapDispatchToProps
// container also subscribe, unsubscribe
// Container is PureComponent, implements shouldComponentUpdate
// it calls render methods/functional components only
// if any change in mapStateToProps, ie counter change
const ReduxCounterContainer = connectFn(ReduxCounter);

export default ReduxCounterContainer;
// <ReduxCounterContainer />