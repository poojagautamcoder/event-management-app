// Action Creators
export const addEvent = (data) => ({
    type: 'ADD_EVENT',
    payload: data,
  });
  
  export const updateEvent = (index, eventData) => {
    return {
      type: 'UPDATE_EVENT',
      payload: {
        index,
        data: eventData,
      },
    };
  };
  
  export const deleteEvent = (index) => ({
    type: 'DELETE_EVENT',
    payload: index,
  });
  