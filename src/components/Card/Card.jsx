import React, { useState, useEffect, useRef } from "react";
import { Button } from "antd";

function Card(props) {
  const [pressed, setPressed] = useState(false);
  const ref = useRef();

  useEffect(() => ref.current.focus());

  function handleClick(e) {
    e.preventDefault();
    setPressed(!pressed);
    props.WordsCount();
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
        onClick={handleClick}
        ref={ref}
        style={{ display: pressed && "none" }}
      >
        {pressed ? props.russian : "Check!"}
      </Button>
    </div>
  );
}

export default Card;
