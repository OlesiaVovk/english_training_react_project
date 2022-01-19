import React, { useState } from "react";
import { ChevronRightIcon, ChevronLeftIcon } from "@primer/octicons-react";
import Card from "../Card/Card";

export default function Game(props) {
  const [number, setNumber] = useState(0);
  const { id, ...itemProps } = props.englishCards[number];
  const [count, setCount] = useState(0);

  /*   const handleCheck = () => {
    console.log("Фигушка");
    setCount(count + 1);
  }; */

  const countWord = () => {
    setCount(count + 1);
    console.log(count);
  };

  return (
    <>
      <div className="trainingMode">
        <Card key={id} {...itemProps} countWord={countWord} />
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
        <p>Вы выучили слов: {count}</p>
      </div>
    </>
  );
}

/* class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };

    this.handlePrev = this.handlePrev.bind(this);
    this.handleNext = this.handleNext.bind(this);
  }

  handlePrev = () => {
    this.setState((prevState) => {
      return {
        count: (prevState.count + 1) % this.props.englishCards.length,
      };
    });
  };

  handleNext = () => {
    this.setState((prevState) => {
      return {
        count: (prevState.count - 1) % this.props.englishCards.length,
      };
    });
  };

  render() {
    const { id, ...itemProps } = this.props.englishCards[this.state.count];
    return (
      <div className="trainingMode">
        <Card key={id} {...itemProps} />
        <div className="pagination">
          <button onClick={this.handlePrev}>Prev</button>
          {this.state.count}/{this.props.englishCards.length}
          <button onClick={this.handleNext}>Next</button>
        </div>
      </div>
    );
  }
}

export default Gallery; */
