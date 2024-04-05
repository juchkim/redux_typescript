enum ActionType {
  ADD_TODO = "ADD_TODO",
  DELETE_TODO = "DELETE_TODO",
}

interface Action {
  type: ActionType;
  text: string;
}

// todos 생성시 초기값을 매개변수에 넣어주는 것이 초기 reducers임
const todos = (state=[], action:Action)=>{
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.text]; // 불변성 유지
      break;
  
    default:
      return state;
      break;
  }

}

export default todos;