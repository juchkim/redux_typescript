const counter = (state =0, action : {type:string})=>{
  switch (action.type) {
    case "INCREMENT":
        return state + 1;
      break;
    case "DECREMENT":
      return state - 1;
      break;
    default:
      return state;
      break;
  }
}

export default counter;