import React, { useState, useEffect, useRef } from "react";
import { Button } from "antd";

function Card(props) {
  const [pressed, setPressed] = useState(false);
  const checkButton = useRef();

  useEffect(() => {
    checkButton.current.focus();
  });

  function handleFocus() {
    setPressed(!pressed);
  }

  function handleClick(callback) {
    setPressed(!pressed);
    callback(setTimeout(() => props.countWord(), 100));
  }

  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">{props.english}</h4>
        <p className="card-transcription">{props.transcription}</p>
      </div>
      <h3 className="card-translate" style={{ display: !pressed && "none" }}>
        {props.russian}
      </h3>
      <Button
        onMouseDown={handleClick}
        onMouseUp={handleClick}
        style={{ display: pressed && "none" }}
        ref={checkButton}
        onClick={handleFocus}
      >
        {pressed ? props.russian : "Check!"}
      </Button>
    </div>
  );
}

export default Card;
