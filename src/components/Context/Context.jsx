import { createContext, useState } from "react";

const Context = createContext();

function ContextProvider(props) {
  const [englishWords, setEnglishWords] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error] = useState(null);

  function loadWords() {
    fetch("http://itgirlschool.justmakeit.ru/api/words")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong ...");
        }
      })
      .then((response) => {
        setEnglishWords(response);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error, false);
      }, []);
  }

  const deleteWord = (key) => {
    fetch(`http://itgirlschool.justmakeit.ru/api/words/${key}/delete`, {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=utf-8",
      },
    })
      .then((response) => response.json())
      .then((response) => loadWords())
      .catch((error) => console.log(error));
  };

  function addWord(record) {
    fetch("http://itgirlschool.justmakeit.ru/api/words/add", {
      method: "POST",
      body: JSON.stringify(record),
      headers: {
        "Content-type": "application/json; charset=utf-8",
      },
    })
      .then((response) => response.json())
      .then((response) => loadWords())
      .catch((error) => console.log(error));
  }

  const editWord = (record, index) => {
    const item = englishWords[index];

    fetch(`http://itgirlschool.justmakeit.ru/api/words/${item.id}/update`, {
      method: "POST",
      body: JSON.stringify(record),
      headers: {
        "Content-type": "application/json; charset=utf-8",
      },
    })
      .then((response) => response.json())
      .then((response) => loadWords())
      .catch((error) => console.log(error));
  };

  return (
    <Context.Provider
      value={{
        englishWords,
        setEnglishWords,
        loadWords,
        deleteWord,
        addWord,
        editWord,
        isLoading,
        error,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
