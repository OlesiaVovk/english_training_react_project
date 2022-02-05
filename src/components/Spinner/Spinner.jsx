import React from "react";

class Spinner extends React.Component {
  render() {
    return (
      <div className="Spinner SpinnerDots">
        <div className="spinner-dot" />
        <div className="spinner-dot" />
        <div className="spinner-dot" />
      </div>
    );
  }
}

class SpinnerDotsScale extends React.Component {
  render() {
    return (
      <div className="Spinner SpinnerDotsScale">
        <div className="spinner-dot" />
        <div className="spinner-dot" />
        <div className="spinner-dot" />
      </div>
    );
  }
}

class SpinnerCircle extends React.Component {
  render() {
    return (
      <div className="Spinner SpinnerCircle">
        <div className="spinner-dot" />
        <div className="spinner-dot" />
        <div className="spinner-dot" />
      </div>
    );
  }
}
export { Spinner, SpinnerDotsScale, SpinnerCircle };
