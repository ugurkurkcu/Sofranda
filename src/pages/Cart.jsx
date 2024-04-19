import { useDispatch, useSelector } from "react-redux";
import Container from "../components/Container";
import { getCart } from "../redux/actions/basketActions";
import Loader from "../components/Loader";
import Error from "../components/Error";
import BasketCart from "../components/BasketCart";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const { isLoading, error, data } = useSelector((store) => store.cart);
  const newPrice = data.map((i) => i.amount * i.price);
  const newAmount = data.map((i) => i.amount);

  const totalPrice = newPrice.reduce((total, i) => (total = total + i), 0);
  const totalAmount = newAmount.reduce((total, i) => (total = total + i), 0);

  return (
    <Container>
      <h1 className="text-2xl font-bold my-5">SEPET</h1>
      <div className="mb-24 flex flex-col ">
        {isLoading ? (
          <Loader />
        ) : error ? (
          <Error message={error} />
        ) : data.length === 0 ? (
          <div className="flex flex-col gap-5 pt-8">
            <p>Sepetinizde ürün bulunmamaktadır</p>
            <Link
              to={"/"}
              className="border border-orange-400 text-orange-400 py-1 px-2 rounded-lg hover:border-orange-600 hover:bg-orange-600 hover:text-white transition"
            >
              Yemek Seç
            </Link>
          </div>
        ) : (
          data.map((i) => <BasketCart key={i.id} data={i} />)
        )}
      </div>
      <div className="w-full shadow-lg px-5 py-8 rounded-lg border bg-orange-400 bg-opacity-80 font-bold 
      text-xl fixed bottom-0 left-0 flex gap-10 justify-center items-center">
        <p>Seçilen {totalAmount} ürün için</p>
        <b>Toplam <span className="text-3xl">${totalPrice.toFixed(2)}</span></b>
      </div>
    </Container>
  );
};

export default Cart;
