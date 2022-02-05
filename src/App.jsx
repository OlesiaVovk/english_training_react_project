import "./components/Styles/AllOfStyles.scss";
import { ContextProvider } from "./components/Context/Context";
import HomePage from "./components/HomePage/HomePage";

function App() {
  return (
    <ContextProvider>
      <HomePage />
    </ContextProvider>
  );
}

export default App;
