import React from "react";
import "./EventList.css";

const EventList = ({ eventsList, onEditEvent, onDeleteEvent }) => {
  console.log(eventsList, "aaaaaaaaaaaaaa");

  // Add a fallback in case 'events' is not provided or is empty
  if (!eventsList || eventsList.length === 0) {
    return (
      <div>
        <h2>No events to display</h2>
      </div>
    );
  }

  return (
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
                <button onClick={() => onEditEvent(index)}>Edit</button>
                <button onClick={() => onDeleteEvent(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EventList;
