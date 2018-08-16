import {createStore, combineReducers} from 'redux';

// FLUX- One one Store per React application
// Many States can be there in a store

// counter example +1, -1
//reducer.js
// action = {type: 'INCREMENT', payload: {value: 10}}
// {type: 'RESET'}

function counterReducer(state = 0, action) {
    console.log('Counter Reducer ', state, action)
    switch(action.type) {
        case 'INCREMENT':
            return state + action.payload.value
        case 'DECREMENT': 
            return state - action.payload.value
        case 'RESET':
            return 0
        
        default: // must
            return state;
    }
}

// store shall call reducer, whenever we do store.dispatch
// store shall also reducer, very first time while doing createStore
// to initialize default state
// const store = createStore(counterReducer)
//  store.getState() returns value 0 (number) with single reducer

const rootReducer = combineReducers({
    // stateName: reducer function() {}
    counter: counterReducer, 
    // add as many state with reducers
})

const store = createStore(rootReducer)
// store.getState(), output?? { counter: 0 } object type

export default store;