import React from "react";
import { CiTimer } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import { MdOutlineDeliveryDining } from "react-icons/md";

const RestaurantDetail = ({ data }) => {
  return (
    <div className="flex gap-5">
      <img
        className="w-[100px] h-[100px] rounded-full shadow-md"
        src={data.photo}
        alt={data.name}
      />
      <div className="flex flex-col justify-around items-center">
        <p className="flex gap-8">
          <span className="flex items-center gap-1 text-red-400 text-xs">
            <MdOutlineDeliveryDining size={18} /> Ücretsiz
          </span>
          <span className="flex items-center gap-1 text-xs text-gray-400">
            <CiTimer size={18} /> {data.estimatedDelivery} dk
          </span>
        </p>
        <h1 className="text-3xl font-extrabold">{data.name}</h1>

        <p className="flex gap-7 items-center text-sm">
          <span className="flex gap-1 items-center">
            <FaStar /> {data.rating}{" "}
          </span>
          <a className="text-orange-400" href="#">
            Yorumları Gör
          </a>{" "}
        </p>
      </div>
    </div>
  );
};

export default RestaurantDetail;
