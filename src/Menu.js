import React from "react";

export const Menu = (props) => {
  const handleClick = (e) => {
    const text = e.target.value;
    props.chooseVideo(text);
  };

  return (
    <form onClick={handleClick}>
      <input type="radio" name="src" value="fast" /> fast
      <input type="radio" name="src" value="slow" /> slow
      <input type="radio" name="src" value="cute" /> cute
      <input type="radio" name="src" value="eek" /> eek
    </form>
  );
};
