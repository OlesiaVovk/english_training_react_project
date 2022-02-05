import { createContext, useState } from "react";
import { SpinnerDotsScale } from "../Spinner/Spinner";

const Context = createContext();

function ContextProvider(props) {
  const [englishWords, setEnglishWords] = useState([]);
  const [loading, isLoading] = useState(false);

  function loadWords() {
    isLoading(!loading);
    fetch("http://itgirlschool.justmakeit.ru/api/words")
      .then((response) => response.json())
      .then((response) => {
        setEnglishWords(response);
        isLoading(loading);
      })
      .catch((error) => {
        console.log(error);
      }, []);
  }

  function deleteWord() {}

  function addWord() {}

  function changeWord() {}

  /*    isLoading(!loading) ? (
    <SpinnerDotsScale />
  ) : */
  return (
    <Context.Provider
      value={{
        englishWords,
        setEnglishWords,
        loadWords,
        deleteWord,
        addWord,
        changeWord,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
