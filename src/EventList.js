import React, { useState } from "react";
import "./EventList.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteEvent, updateEvent } from "./redux/action";

const EventList = () => {
    const dispatch = useDispatch();
    const eventsList = useSelector((state) => state.events.eventsList);
    const [editMode, setEditMode] = useState(false);
    const [editedEvent, setEditedEvent] = useState(null);
    const [editIndex, setEditIndex] = useState(null);

  const handleDeleteEvent = (index) => {
    dispatch(deleteEvent(index));
  };

  const handleEditEvent = (index) => {
    setEditedEvent({ ...eventsList[index] });
    setEditMode(true);
    setEditIndex(index)
  };

  const handleUpdateEvent = () => {
    if (!editedEvent.eventName.trim()) {
      alert("Event Name is required.");
      return;
    }
  
    if (!editedEvent.eventStartDate) {
      alert("Event Start Date is required.");
      return;
    }
  
    if (!editedEvent.eventEndDate) {
      alert("Event End Date is required.");
      return;
    }
  
    const startDate = new Date(editedEvent.eventStartDate);
    const endDate = new Date(editedEvent.eventEndDate);
  
    if (startDate > endDate) {
      alert("Event Start Date cannot be after Event End Date.");
      return;
    }
  
    // Dispatch the update event action here
    editMode && editIndex !== null && dispatch(updateEvent(editIndex, editedEvent)); 
    // Reset the state and exit edit mode
    setEditedEvent(null);
    setEditMode(false);
    setEditIndex(null);
  };
  

  if (!eventsList || eventsList.length === 0) {
    return (
      <div>
        <h2>No events to display....</h2>
      </div>
    );
  }

  return (
    <div>
      {editMode ? (
        <div>
          <h2>Edit Event:</h2>
          <form>
            <div>
              <label>Event Name:</label>
              <input
                type="text"
                name="eventName"
                value={editedEvent.eventName}
                onChange={(e) =>
                  setEditedEvent({
                    ...editedEvent,
                    eventName: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <label>Event Type:</label>
              <input
                type="text"
                name="eventType"
                value={editedEvent.eventType}
                onChange={(e) =>
                  setEditedEvent({
                    ...editedEvent,
                    eventType: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <label>Event Start Date:</label>
              <input
                type="date"
                name="eventStartDate"
                value={editedEvent.eventStartDate}
                onChange={(e) =>
                  setEditedEvent({
                    ...editedEvent,
                    eventStartDate: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <label>Event End Date:</label>
              <input
                type="date"
                name="eventEndDate"
                value={editedEvent.eventEndDate}
                onChange={(e) =>
                  setEditedEvent({
                    ...editedEvent,
                    eventEndDate: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <label>Event Description:</label>
              <textarea
                name="eventDescription"
                value={editedEvent.eventDescription}
                onChange={(e) =>
                  setEditedEvent({
                    ...editedEvent,
                    eventDescription: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <label>Event Handled By:</label>
              <input
                type="text"
                name="eventHandledBy"
                value={editedEvent.eventHandledBy}
                onChange={(e) =>
                  setEditedEvent({
                    ...editedEvent,
                    eventHandledBy: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <label>Event Organisation:</label>
              <input
                type="text"
                name="eventOrganization"
                value={editedEvent.eventOrganization}
                onChange={(e) =>
                  setEditedEvent({
                    ...editedEvent,
                    eventOrganization: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <label>Total Number of Sub-events:</label>
              <input
                type="number"
                name="totalSubEvents"
                value={editedEvent.totalSubEvents}
                onChange={(e) =>
                  setEditedEvent({
                    ...editedEvent,
                    totalSubEvents: e.target.value,
                  })
                }
              />
            </div>
            <div>
            <button onClick={handleUpdateEvent}>Update Event</button>
          <button onClick={() => setEditMode(false)}>Cancel</button>
            </div>
          </form>
        </div>
      ) : (
        <div>
          <h2>Events List:</h2>
          <table>
            <thead>
              <tr>
                <th>Event Name</th>
                <th>Event Type</th>
                <th>Event Start Date</th>
                <th>Event End Date</th>
                <th>Event Description</th>
                <th>Event Handled By</th>
                <th>Event Organisation</th>
                <th>Total Number of Sub-events</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {eventsList.map((event, index) => (
                <tr key={index}>
                  <td>{event.eventName}</td>
                  <td>{event.eventType}</td>
                  <td>{event.eventStartDate}</td>
                  <td>{event.eventEndDate}</td>
                  <td>{event.eventDescription}</td>
                  <td>{event.eventHandledBy}</td>
                  <td>{event.eventOrganization}</td>
                  <td>{event.totalSubEvents}</td>
                  <td>
                    <button onClick={() => handleEditEvent(index)}>Edit</button>
                    <button onClick={() => handleDeleteEvent(index)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default EventList;
