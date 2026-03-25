// event box

import React from 'react';
import '../../styles/Main/EventBox.scss';

type EventProps = {
  EventPhoto: string;
  EventName: string;
  EventScript: string;
}

const EventBox = ({ EventPhoto, EventName, EventScript }: EventProps) => {
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

export default EventBox;