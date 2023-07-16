// Action Creators
export const addEvent = (data) => ({
    type: 'ADD_EVENT',
    payload: data,
  });
  
  export const updateEvent = (index, data) => ({
    type: 'UPDATE_EVENT',
    payload: { index, data },
  });
  
  export const deleteEvent = (index) => ({
    type: 'DELETE_EVENT',
    payload: index,
  });
  