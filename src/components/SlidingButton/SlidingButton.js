import { useState } from "react";

import "./SlidingButton.css";

const SlidingButton = () => {
    const [isOn, setIsOn] = useState(false)

    const handleToggle = () => {
        setIsOn(!isOn)
    }
  return (
    <div className={`onoff-switch ${isOn ? 'on' : ''}`} onClick={handleToggle}>
      <div className="slider"></div>
    </div>
  )
}

export default SlidingButton