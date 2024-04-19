import { IoMdAddCircleOutline } from "react-icons/io";
import { useSelector } from "react-redux";

const ProductCard = ({ item, handleAdd }) => {
  const { data } = useSelector((store) => store.cart);

  const found = data.find((i) => i.productId === item.id);

  return (
    <div
      className=" max-w-[500px] shadow-md border flex p-3 rounded-lg hover:bg-orange-300
    hover:cursor-pointer hover:text-white hover:scale-[1.02] transition duration-300 justify-self-center"
    >
      <div className="flex flex-col justify-between">
        <div>
          <h1 className="text-xl font-semibold ">{item.title}</h1>
          <p className="text-gray-500">{item.desc}</p>
        </div>

        <b>${item.price}</b>
      </div>
      <div className="relative">
        <div className="bg-black w-28 h-28 rounded-md overflow-hidden">
          <img className=" object-contain" src={item.photo} alt="item.id" />
        </div>
        <button
          onClick={() => handleAdd(item, found)}
          className="absolute end-2 bottom-2 w-[30px] h-[30px] font-bold text-white bg-orange-400 rounded-full"
        >
          {found ? (
            <span>{found.amount}</span>
          ) : (
            <IoMdAddCircleOutline size={30} />
          )}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
