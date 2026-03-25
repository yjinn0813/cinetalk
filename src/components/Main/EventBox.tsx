// event box

import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import '../../styles/Main/EventBox.scss';

type EventProps = {
  EventPhoto: string;
  EventName: string;
  EventScript: string;
}

const EventBox = ({ EventPhoto, EventName, EventScript }: EventProps) => {
  return (
    <Card
      className='event-box'
      sx={{
        borderRadius: 3,
        boxShadow: 5,
        transition: '0.3s',
        overflow: 'hidden',
        '&:hover': {
          transform: 'translateY(-6px)',
          boxShadow: 6,
        },
      }}
    >
      {/* 이미지 */}
      <CardMedia
        className="event-photo"
        component="img"
        image={`/images/Main/${EventPhoto}`}
        alt={EventPhoto}
      />

      {/* 텍스트 영역 */}
      <CardContent>
        <Typography variant="h6" gutterBottom 
          className="event-name"
        >
          {EventName}
        </Typography>

        <Typography variant="body2" color="text.secondary" className="event-script">
          {EventScript}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default EventBox;