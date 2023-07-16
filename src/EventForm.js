import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./EventForm.css";
import { addEvent } from "./redux/action";

const EventForm = () => {
  const dispatch = useDispatch();
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
  const handleSubmit = (event) => {
    event.preventDefault();

    // Basic validation checks
    if (!data.eventName.trim()) {
      alert("Event Name is required.");
      return;
    }

    if (!data.eventStartDate) {
      alert("Event Start Date is required.");
      return;
    }

    if (!data.eventEndDate) {
      alert("Event End Date is required.");
      return;
    }

    const startDate = new Date(data.eventStartDate);
    const endDate = new Date(data.eventEndDate);

    if (startDate > endDate) {
      alert("Event Start Date cannot be after Event End Date.");
      return;
    }
    dispatch(addEvent(data));
    setData(initialEvent);
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
          <button type="submit">Save Event</button>
        </div>
      </form>
      <div style={{ display: "none" }}></div>
    </div>
  );
};

export default EventForm;
