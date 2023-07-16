import React, { useState } from "react";
import "./EventForm.css";
import EventList from "./EventList";
const EventForm = () => {
  const initialEvent = {
    eventName: "",
    eventType: "sports",
    eventStartDate: "",
    eventEndDate: "",
    eventDescription: "",
    eventHandledBy: "",
    eventOrganization: "",
    totalSubEvents: ""
  };

  const [data, setData] = useState(initialEvent);
  const [eventsList, setEventsList] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  console.log(eventsList, editMode, "aaa");
  

  const handleSubmit = (event) => {


    event.preventDefault();
    if (editMode && editIndex !== null) {
      // If in edit mode, update the event in 'eventsList'
      const updatedEventsList = [...eventsList];
      updatedEventsList[editIndex] = data;
      setEventsList(updatedEventsList);
    } else {
      // If not in edit mode, add the current 'data' to 'eventsList'
      setEventsList([...eventsList, data]);
    }
    setData(initialEvent); // Reset the form data
    setEditMode(false); // Reset edit mode after saving or updating
    setEditIndex(null); // Reset the editIndex after saving or updating
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };
  const handleDeleteEvent = (index) => {
    const updatedEventsList = [...eventsList];
    updatedEventsList.splice(index, 1);
    setEventsList(updatedEventsList);
  };

  const handleEditEvent = (index) => {
    const eventToEdit = eventsList[index];
    setData(eventToEdit);
    setEditIndex(index); // Save the index of the edited event
    setEditMode(true);
  };

  return (
    <div>
      <form onKeyDown={handleKeyDown} onSubmit={handleSubmit}>
        <div>
          <label>Event Name:</label>
          <input
            type="text"
            name="eventName"
            value={data.eventName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Event Type:</label>
          <select
            name="eventType"
            value={data.eventType}
            onChange={handleInputChange}
          >
            <option value="sports">Sports</option>
            <option value="music">Music</option>
            <option value="general">General</option>
            <option value="children">Children</option>
            <option value="school">School</option>
          </select>
        </div>
        <div>
          <label>Event Start Date:</label>
          <input
            type="date"
            name="eventStartDate"
            value={data.eventStartDate}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Event End Date:</label>
          <input
            type="date"
            name="eventEndDate"
            value={data.eventEndDate}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Event Description:</label>
          <textarea
            name="eventDescription"
            value={data.eventDescription}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Event Handled By:</label>
          <input
            type="text"
            name="eventHandledBy"
            value={data.eventHandledBy}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Event Organisation:</label>
          <input
            type="text"
            name="eventOrganization"
            value={data.eventOrganization}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Total Number of Sub-events:</label>
          <input
            type="number"
            name="totalSubEvents"
            value={data.totalSubEvents}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <button type="submit">
            {editMode ? "Update Event" : "Save Event"}
          </button>
        </div>
      </form>
      <EventList
        eventsList={eventsList}
        onDeleteEvent={handleDeleteEvent}
        onEditEvent={handleEditEvent}
      />
    </div>
  );
};

export default EventForm;
