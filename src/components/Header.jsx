import { FaShoppingBasket } from "react-icons/fa";
import Container from "./Container";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="shadow-md">
      <Container design={"flex items-center justify-between"}>
        <Link to={"/"} className="text-orange-400 font-bold text-2xl font-mono">
          Sofranda
        </Link>

        <div className="flex gap-4 items-center">
          <button className="border border-orange-400 text-orange-400 py-1 px-2 rounded-lg hover:border-orange-600 hover:bg-orange-600 hover:text-white transition">
            Giriş Yap
          </button>
          <button className="border border-orange-400 hover:border-orange-600 hover:bg-orange-600 py-1 px-2 rounded-lg bg-orange-400 text-white transition">
            Kayıt Ol
          </button>
          <Link to={"/cart"} className="mx-3">
            <FaShoppingBasket className="text-orange-400 text-2xl hover:text-orange-600 transition" />
          </Link>
        </div>
      </Container>
    </header>
  );
};

export default Header;
