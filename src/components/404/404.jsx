import { Link } from "react-router-dom";
import img from "../assets/images/NotFoundCat.png";

export default function PageNotFound() {
  return (
    <>
      <Link to="*">
        <img src={img} alt="oops" className="oops" />
      </Link>
      <h4>
        Упс, такой страницы нет, покормите котика и возвращайтесь на главную
      </h4>
    </>
  );
}
