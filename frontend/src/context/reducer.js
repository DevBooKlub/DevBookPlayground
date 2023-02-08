export const reducer = (state, action) => {
  switch (action.type) {
    case "SETCURRENTUSER":
      return { ...state, currentUser: action.payload };
    case "UPDATEUSER":
      return { ...state, currentUser: action.payload };
    default:
      break;
  }
};
