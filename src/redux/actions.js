export const addTodo = (data) => {
  return {
    type: "todoList/addTodo",
    payload: data,
  };
};

export const toggleTodoStatus = (todoId) => {
  return {
    type: "todoList/toggleTodoStatus",
    payload: todoId,
  };
};

export const searchFilter = (text) => {
  return {
    type: "filters/searchFilter",
    payload: text,
  };
};

export const statusFilter = (status) => {
  return {
    type: "filters/statusFilter",
    payload: status,
  };
};

export const prioritiesFilter = (priorities) => {
  return {
    type: "filters/prioritiesFilter",
    payload: priorities,
  };
};
