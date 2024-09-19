import React, { useState } from 'react';
import './Switch.css'; // Optional for styling

const Switch = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="switch-container">
      <div className={`switch ${isOn ? 'on' : 'off'}`} onClick={toggleSwitch}>
        <div className={`circle ${isOn ? 'circle-on' : 'circle-off'}`}></div>
      </div>
    </div>
  );
};

export default Switch;
