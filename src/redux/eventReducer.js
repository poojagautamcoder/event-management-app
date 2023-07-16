const initialState = {
    eventsList: [],
  };
  
  const eventReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_EVENT':
        return {
          ...state,
          eventsList: [...state.eventsList, action.payload],
        };
        case 'UPDATE_EVENT':
            const updatedEventsList = [...state.eventsList];
            updatedEventsList[action.payload.index] = action.payload.data;
            return {
              ...state,
              eventsList: updatedEventsList,
            };
      case 'DELETE_EVENT':
        return {
          ...state,
          eventsList: state.eventsList.filter((_, index) => index !== action.payload),
        };
      default:
        return state;
    }
  };
  
  export default eventReducer;
  