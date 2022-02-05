import React, { useState, useContext } from "react";
import { Context } from "../Context/Context";
import { ChevronRightIcon, ChevronLeftIcon } from "@primer/octicons-react";
import Card from "../Card/Card";

export default function Game() {
  const { englishWords } = useContext(Context);
  const [number, setNumber] = useState(0);

  const { id, ...itemProps } = englishWords.length
    ? englishWords[number]
    : { id: null };
  const [selected, setSelected] = useState([]);

  const WordsCount = () => {
    const newArr = new Set(selected);
    newArr.add(englishWords[number]);
    setSelected(Array.from(newArr));
  };

  return id === null ? null : (
    <>
      <div className="trainingMode">
        <Card key={id} {...itemProps} WordsCount={WordsCount} />
        <div className="pagination">
          <button
            onClick={() => {
              if (number === 0) {
                setNumber(englishWords.length - 1);
              } else {
                setNumber(number - 1);
              }
            }}
          >
            <ChevronLeftIcon size={24} />
          </button>
          {number} / {englishWords.length}
          <button onClick={() => setNumber((number + 1) % englishWords.length)}>
            <ChevronRightIcon size={24} />
          </button>
        </div>
        <h2 className="learned">{`Выученных слов: ${selected.length} / ${englishWords.length}`}</h2>
      </div>
    </>
  );
}
