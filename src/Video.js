import React from 'react';
import './styles.css';

export const Video = (props) => {
  return (
    <div>
      <video controls autoPlay muted src={props.src} />
    </div>
  );
};
