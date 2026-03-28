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
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

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
        image={`/images/Main/event/${EventPhoto}`}
        alt={EventPhoto}
      />

      {/* 텍스트 영역 */}
      <CardContent>
        <Typography variant="h6" gutterBottom 
          sx={{
            fontSize: '20px',
            fontWeight: 500,
            margin: '6px 0',
          }}
        >
          {EventName}
        </Typography>

        <Typography variant="body2"
          color="text.secondary"
          sx={{
            fontSize: '14px',
          }}
        >
          {EventScript}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default EventBox;