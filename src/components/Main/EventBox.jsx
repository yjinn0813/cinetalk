// event box

import React from 'react';
import '../../styles/Main/EventBox.scss';

export default function EventBox({ EventPhoto, EventName, EventScript }) {
  return (
    <div className="event-box">
      <img
        className="event-photo"
        src={`/images/Main/${EventPhoto}`}
        alt={EventPhoto}
      />
      <div className="event-name">{EventName}</div>
      <div className="event-script">{EventScript}</div>
    </div>
  );
}
