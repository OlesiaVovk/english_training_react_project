import Header from "../Header/Header";
import EditableTable from "../Table/Table";
import Footer from "../Footer/Footer";
import Game from "../Game/Game";
import PageNotFound from "../404/404";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const englishCards = require("../englishCards.json");

export default function HomePage() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<EditableTable />} />
        <Route path="/home" element={<EditableTable />} />
        <Route path="/game" element={<Game englishCards={englishCards} />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}
