import { CiTimer } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { Link } from "react-router-dom";

const RestaurantCard = ({ data }) => {
  return (
    <Link
      to={`/restaurants/${data.id}`}
      className="bg-orange-400 bg-opacity-85 mt-7 overflow-hidden shadow-xl m-2 
    rounded-xl max-w-[400px] justify-self-center hover:bg-opacity-70 hover:cursor-pointer 
    hover:shadow-lg"
    >
      <img
        className="w-full shadow-lg object-contain "
        src={data.photo}
        alt={data.name}
      />

      <div className="p-3">
        <div className="flex justify-between py-3">
          <h2 className="text-xl">{data.name}</h2>
          <p className="flex items-center gap-2">
            <FaStar />
            {data.rating}
          </p>
        </div>

        <div className="flex items-center gap-4 text-sm my-2 text-gray-500 justify-between">
          <p className=" flex flex-col gap-1">
            {data.isDeliveryFree && (
              <span className="flex items-center gap-1 text-red-500 font-bold">
                <MdOutlineDeliveryDining size={20} /> Ücretsiz
              </span>
            )}
            <span className="flex items-center gap-1">
              <CiTimer size={18} /> {data.estimatedDelivery} dk
            </span>
          </p>
          <span className="place-self-end">Min. Tutar ${data.minPrice}</span>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
