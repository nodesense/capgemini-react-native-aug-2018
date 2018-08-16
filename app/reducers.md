# Store Reduecers

1 reducer
2 reducers
200 reducers....
    authReducer (AUTH.LOGIN/AUTH.LOGOUT)
    counter (COUNTER.INCREMENT, AUTH.LOGOUT, reset the count)
    cartReducer (ADD ITEM, 
                 REMOVE ITEM, 
                 EMPTY CART, 
                 CART.INCREMENT qty,
                 AUTH.LOGOUT (empty the cart)
                 )

store.dispatch({type: 'INCREMENT'})
    => it calls all 200 reducers
    => reducer can perform INCREMENT if it is relevant
    => if not relevant, switch with default, return state as it is

Problems:
    1. If My action is INCREMENT, 10 reducers have implementation
        Action Type should be unique
    2. if have 200 reducers, all of them called
        if it performance issue? becaue functions is called
            -- JavaScript VM optimize your functions very well
            

