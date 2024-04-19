import { BsTrash3 } from "react-icons/bs";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteItem, updateItem } from "../redux/actions/basketActions";

const BasketCart = ({ data }) => {
  const dispatch = useDispatch();

  const handleInc = () => {
    dispatch(updateItem(data.id, data.amount + 1));
  };

  const handleDec = () => {
    data.amount > 1
      ? dispatch(updateItem(data.id, data.amount - 1))
      : dispatch(deleteItem(data.id));
  };
  return (
    <div
      className=" min-w-[450px] max-w-full shadow-md border flex p-3 rounded-lg hover:bg-orange-200
    hover:cursor-pointer  hover:scale-[1.02] transition duration-200 justify-self-center gap-3"
    >
      <img className="w-[115px] rounded-xl" src={data.photo} />
      <div className="flex flex-col justify-between w-full">
        <h3 className="text-xl font-bold text-orange-600">{data.title}</h3>
        <p className="text-gray-500">{data.restaurantName}</p>
        <div className="flex justify-between mr-3 items-center">
          <p className="font-semibold">$ {(data.price*data.amount).toFixed(2)}</p>
          <div className="flex rounded-2xl  shadow-md border overflow-hidden">
            <button
              onClick={handleDec}
              className="py-1 px-3  hover:bg-orange-400 transition"
            >
              {data.amount > 1 ? <FaMinus /> : <BsTrash3 />}
            </button>
            <span className="py-1 px-3">{data.amount}</span>
            <button
              onClick={handleInc}
              className="py-1 px-3 hover:bg-orange-400 transition duration-200"
            >
              <FaPlus />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketCart;
