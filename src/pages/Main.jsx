import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRestaurants } from "../redux/actions/restaurantActions";
import Container from "../components/Container";
import Loader from "../components/Loader";
import Error from "../components/Error";
import RestaurantCard from "../components/RestaurantCard";

const Main = () => {
  const { isloading, error, restaurants } = useSelector(
    (store) => store.restaurants
  );
  const dispatch = useDispatch();

  const getData = () => {
    dispatch(getRestaurants());
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <Container>
      <h1 className="text-3xl">Restoranlar</h1>

      <div className="grid gap-3  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:gridcols-4">
        {isloading ? (
          <Loader />
        ) : error ? (
          <Error error={error} retry={getData} />
        ) : (
          restaurants.length > 0 &&
          restaurants.map((item) => (
            <RestaurantCard key={item.id} data={item} />
          ))
        )}
      </div>
    </Container>
  );
};

export default Main;
