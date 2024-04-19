import { useParams } from "react-router-dom";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "../redux/actions/productActions";
import Loader from "../components/Loader";
import Error from "../components/Error";
import ProductCard from "../components/ProductCard";
import { GiFlamer } from "react-icons/gi";
import { getRestaurants } from "../redux/actions/restaurantActions";
import RestaurantDetail from "../components/RestaurantDetail";
import { addToBasket, updateItem } from "../redux/actions/basketActions";

const Restaurant = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const productsState = useSelector((store) => store.products);
  const { isLoading, error, restaurants } = useSelector(
    (store) => store.restaurants
  );

  useEffect(() => {
    dispatch(getRestaurants(id));
    dispatch(getProducts(id));
  }, []);

  const handleAdd = (item, found) => {
    found
      ? dispatch(updateItem(found.id, found.amount + 1))
      : dispatch(addToBasket(item, restaurants));
  };

  return (
    <div>
      <div className="shadow-md">
        <Container>
          <h1>
            {isLoading ? (
              <Loader />
            ) : (
              !error && <RestaurantDetail data={restaurants} />
            )}
          </h1>
        </Container>

        <hr />
      </div>
      <Container>
        <div className="my-3">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <GiFlamer color="orange" />
            Populer
          </h2>

          <p className="text-gray-500">
            Bu restoranda en çok tercih edilen ürünler
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
          {productsState.isLoading ? (
            <Loader />
          ) : productsState.error ? (
            <Error message={productsState.error} />
          ) : (
            productsState.products.map((i) => (
              <ProductCard item={i} key={i.id} handleAdd={handleAdd} />
            ))
          )}
        </div>
      </Container>
    </div>
  );
};

export default Restaurant;
