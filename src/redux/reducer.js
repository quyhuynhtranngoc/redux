const initValue = {
  filters: {
    search: "",
    status: "All",
    priority: [],
  },
  todoList: [
    { id: 1, name: "learn reactjs", completed: false, priority: "Medium" },
    { id: 2, name: "learn redux", completed: true, priority: "High" },
    { id: 3, name: "learn javascript", completed: false, priority: "Low" },
  ],
};

const rootReducer = (state = initValue, action) => {
  switch (action.type) {
    case "todoList/addTodo":
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };

    case "filters/searchFilter":
      return {
        ...state,
        filters: { ...state.filters, search: action.payload },
      };
    default:
      return state;
  }
};
export default rootReducer;
