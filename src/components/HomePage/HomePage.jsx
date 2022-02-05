import { useContext, useEffect } from "react";
import Header from "../Header/Header";
import EditableTable from "../Table/Table";
import Footer from "../Footer/Footer";
import Game from "../Game/Game";
import PageNotFound from "../404/404";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Context } from "../Context/Context";

export default function HomePage() {
  const { englishWords, loadWords } = useContext(Context);

  useEffect(() => {
    loadWords();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<EditableTable />} />
        <Route path="/home" element={<EditableTable />} />
        <Route path="/game" element={<Game value={englishWords} />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}
