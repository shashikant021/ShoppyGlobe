function ProductItem(props) {
  return (
    <>
      <div className=" m-5 md:m-5 lg:m-2 py-4 px-3 bg-zinc-200 hover:scale-98 transition duration-200 ease-out rounded-xl">
        <div className="m-3">
          <img
            src={props.product.thumbnail}
            alt="product_image"
            className="w-full h-auto bg-white rounded p-6 mb-2"
          />
        </div>
        <h2 className="text-center ">{props.product.title}</h2>
        <div className="flex justify-between mb-2 text-sm">
          <h2 className=" ">Brand: {props.product.brand}</h2>
          <h3>Stock:{props.product.stock}</h3>
        </div>
        <div className="flex justify-between mb-2 text-sm">
          <h3>Price: ${props.product.price}</h3>
          <h3>Rating: {props.product.rating}</h3>
        </div>
        <p className="text-zinc-700 mb-2 ">
          {props.product.description.split(" ").slice(0, 11).join(" ")}...
        </p>
      </div>
    </>
  );
}

export default ProductItem;
