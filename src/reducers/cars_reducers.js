export default function(state=[], action) {
    
    switch (action.type) {
        /*
            If the action type being returned
            is 'SEARCH_CARS', return the payload (data)
            *Note: this id defined in index(action).js
         */
        case "SEARCH_CARS":
            return action.payload;
        default:
            return state;
    }
}