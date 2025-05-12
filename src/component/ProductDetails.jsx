import { useEffect, useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams(); // it is dynamic parameter for a particular/current URL.
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // fetching particular data by using "id" from the external API by using useEffect.
  useEffect(() => {
    // console.log("Fetching product with ID:", id);
    const fetchProduct = async () => {
      try {
        if (!id) throw new Error("Invalid Product ID");
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        if (!response.ok) throw new Error("Failed to fetch product details");
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <p className="text-center mt-20">Loading...</p>;
  if (error) return <p className="text-center mt-20 text-red-500">{error}</p>;

  return (
    <>
      {/* Heading of ProductDetails  */}
      <h1 className="text-center mt-20 m-3 p-1 text-2xl underline ">
        <em>{`Book Details with id: ${id}`}</em>
      </h1>
      {/* ProductDetails Detail  */}
      <div className="my-10 mx-10 md:mx-25 lg:m-10 bg-zinc-200 text-black rounded-xl shadow-xl py-5 px-2 md:p-6 flex flex-col lg:flex-row">
        <div className=" lg:w-[30%] flex justify-center items-center mb-2">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="bg-white p-5 lg:p-0 w-auto h-72  lg:h-80 object-cover rounded "
          />
        </div>
        <div className="lg:p-10 lg:w-[70%]">
          <h2 className=" md:text-2xl lg:text-3xl font-bold mb-4 text-center">
            {product.title}
          </h2>
          <div className="mb-2 flex flex-col md:flex-row md:justify-between">
            <h2 className="">
              <strong>Brand:</strong> {product.brand}
            </h2>
            <h3>
              <strong>Warranty:</strong> {product.warrantyInformation}
            </h3>
          </div>
          <div className="mb-2 flex flex-col md:flex-row md:justify-between">
            <h2 className="">
              <strong>Shipping:</strong> {product.shippingInformation}
            </h2>
            <h3>
              <strong>ReturnPolicy:</strong> {product.returnPolicy}
            </h3>
          </div>
          <div className="mb-2 flex justify-between">
            <h2 className="">
              <strong>Price:</strong> ${product.price}
            </h2>
            <h3>
              <strong>In Stock:</strong> {product.stock}
            </h3>
          </div>

          <h3 className="mb-2">
            <strong>Rating:</strong> {product.rating}
          </h3>

          <p className="mb-2">
            <strong>Description:</strong> {product.description}
          </p>

          <div className="mt-10 flex justify-center">
            {/* Link to go back to ProductList  */}
            <Link to="/">
              <button className="bg-zinc-600 hover:bg-zinc-800 text-white px-6 py-2 rounded-md flex items-center gap-1">
                {/* React Icon is used to show the icon on UI  */}
                <IoArrowBack /> Back to Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
