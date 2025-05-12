import { useDispatch } from "react-redux";
import { addToCart } from "../utils/cartSlice";
import { Link } from "react-router-dom";
import { MdFileDownloadDone } from "react-icons/md";

function ProductItem(props) {
  const dispatch = useDispatch();

  // data is fetching by using props from ProductList parent page
  const handleAddToCart = () => {
    dispatch(addToCart(props.product));
  };
  return (
    <>
      {/* individual item to show in ProductList page   */}
      <div className=" m-5 md:m-5 lg:m-2 py-4 px-3 bg-zinc-200 hover:scale-98 transition duration-200 ease-out rounded-xl">
        <Link to={`/product-details/${props.product.id}`}>
          <div className="m-3 flex justify-center items-center">
            <img
              src={props.product.thumbnail}
              alt="product_image"
              className=" h-auto w-[50%] md:w-[80%]  bg-white rounded p-5 my-1"
            />
          </div>
          <div className="px-2 md:px-0">
            <h2 className="text-center ">{props.product.title}</h2>
            <div className="flex justify-between mb-2 text-sm">
              <h2 className=" ">Brand: {props.product.brand}</h2>
              <h3>Stock:{props.product.stock}</h3>
            </div>
            <div className="flex justify-between mb-2 text-sm">
              <h3>Price: ${props.product.price}</h3>
              <h3>Rating: {props.product.rating}</h3>
            </div>
            <p className="text-zinc-700 mb-2 text-sm">
              {props.product.description.split(" ").slice(0, 13).join(" ")}...
            </p>
          </div>
        </Link>
        <div className="">
          {/* button and icon for add to Cart  */}
          <button
            onClick={handleAddToCart}
            className="flex justify-center items-center gap-1 w-full rounded p-1 bg-zinc-400 hover:bg-zinc-600 font-medium"
          >
            <MdFileDownloadDone /> Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}

export default ProductItem;
