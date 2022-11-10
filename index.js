//state- count:0
//action- increment,decrement,reset
//reducer
//store

const { createStore } = require("redux");

//constants
// const INCREMENT = "INCREMENT";
// const DECREMENT = "DECREMENT";
// const RESET = "RESET";
// const INCREMENT_COUNTER_BY_VALUE = "INCREMENT_COUNTER_BY_VALUE";
const ADD_USER = "ADD_USER";

//state
const initialState = {
    users: ['Nahid'],
    count: 1,
}

//action
const addUser = (user) => {
    return {
        type: ADD_USER,
        payload: user,
    }
}
// const incrementCounter = () => {
//     return {
//         type: INCREMENT,
//     }
// }

// const decrementCounter = () => {
//     return {
//         type: DECREMENT,
//     }
// }

// const resetCounter = () => {
//     return {
//         type: RESET,
//     }
// }

// const incrementCounterByValue = (value) => {
//     return {
//         type: INCREMENT_COUNTER_BY_VALUE,
//         payload: value
//     }
// }
//reducer for counter
// const counterReducer = (state=initialState, action) => {
//     switch(action.type){
//         case INCREMENT:
//             return {
//                 ...state,
//                 count: state.count + 1,
//             }
        
//         case DECREMENT:
//             return {
//                 ...state,
//                 count: state.count - 1,
//             }

//         case RESET:
//                 return {
//                     ...state,
//                     count: 0,
//                 }
        
//         case INCREMENT_COUNTER_BY_VALUE:
//                 return {
//                     ...state,
//                     count: state.count + action.payload,
//                 }
      
//         default:
//             state;
//     }
// }

const userReducer = (state=initialState, action) => {
    switch(action.type){
        case ADD_USER:
            return {
                users: [...state.users,action.payload],
                count: state.count + 1,
            }
        
          default:
            state;
    }
}

//create store
const store = createStore(userReducer);

store.subscribe(() => {
    console.log(store.getState());
})

//dispatch action
// store.dispatch(incrementCounter());
// store.dispatch(incrementCounter());
// store.dispatch(decrementCounter());
// store.dispatch(resetCounter());
// store.dispatch(incrementCounterByValue(5));

store.dispatch(addUser("Hossain"));
store.dispatch(addUser("Karim"));
