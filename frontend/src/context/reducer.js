export const reducer = (state, action) => {
  switch (action.type) {
    case "SETCURRENTUSER":
      return { ...state, currentUser: action.payload };
    case "UPDATEUSER":
      return { ...state, currentUser: action.payload };
    case "LOADPOSTS":
      return { ...state, posts: action.payload };

    case "ADDNEWPOST":
      return { ...state, posts: [action.payload, ...state.posts] };

    default:
      break;
  }
};
