export default function(state={}, action) {
    
    switch (action.type) {
        /*
            If the action type being returned
            is 'SEARCH_CARS', return the payload (data)
            *Note: this id defined in index(action).js
         */
        case "SEARCH_CARS":
            return {...state, list: action.payload};
        case "CAR_DETAIL":
            return {...state, detail: action.payload};
        case "CLEAR_DETAIL":
            return {...state, detail: action.payload}
        default:
            return state;
    }
}