export const reducer = (state, action) => {

    switch (action.type) {
        case "SETCURRENTUSER":
            return {...state, currentUser: action.payload};
          
        default:
            break;
    }

} 