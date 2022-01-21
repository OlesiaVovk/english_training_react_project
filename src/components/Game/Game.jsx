import React, { useState } from "react";
import { ChevronRightIcon, ChevronLeftIcon } from "@primer/octicons-react";
import Card from "../Card/Card";

export default function Game(props) {
  const [number, setNumber] = useState(0);
  const { id, ...itemProps } = props.englishCards[number];
  const [count, setCount] = useState(0);
  const [selected, setSelected] = useState([]);

  const WordsCount = () => {
    setCount(count + 1);

    const newArr = new Set(selected);
    newArr.add(props.englishCards[number]);
    setSelected(Array.from(newArr));
  };

  return (
    <>
      <div className="trainingMode">
        <Card key={id} {...itemProps} WordsCount={WordsCount} />
        <div className="pagination">
          <button
            onClick={() => {
              if (number === 0) {
                setNumber(props.englishCards.length - 1);
              } else {
                setNumber(number - 1);
              }
            }}
          >
            <ChevronLeftIcon size={24} />
          </button>
          {number} / {props.englishCards.length}
          <button
            onClick={() => setNumber((number + 1) % props.englishCards.length)}
          >
            <ChevronRightIcon size={24} />
          </button>
        </div>
        {/* <h2>{`Всего кликов: ${count}`}</h2> */}
        <h2>{`Выучено слов: ${selected.length} / ${props.englishCards.length}`}</h2>
      </div>
    </>
  );
}
