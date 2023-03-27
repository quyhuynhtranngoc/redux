const initValue = {
  search: "",
  status: "All",
  priorities: [],
};

const filtersReducer = (state = initValue, action) => {
  switch (action.type) {
    case "filters/searchFilter":
      return {
        ...state,
        search: action.payload,
      };

    case "filters/statusFilter":
      return {
        ...state,
        status: action.payload,
      };

    case "filters/prioritiesFilter":
      return {
        ...state,
        priorities: action.payload,
      };
    default:
      return state;
  }
};
export default filtersReducer;
