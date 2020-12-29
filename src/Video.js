import React from "react";

export const Video = (props) => {
  return (
    <div>
      <video controls autostart autoPlay muted src={props.src} />
    </div>
  );
};
