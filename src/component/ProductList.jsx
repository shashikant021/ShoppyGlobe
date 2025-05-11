import { useState } from "react";
import useFetchProducts from "../utils/UseFetchProducts";
import ProductItem from "./ProductItem";
import { Link } from "react-router-dom";

function ProductList() {
  const { products, loading, error } = useFetchProducts();
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );
  // console.log(filteredProducts);

  return (
    <>
      <div className="px-1 py-10">
        <h1 className="text-center font-bold text-4xl mb-2">Products</h1>
        <div className="text-center">
          <input
            type="text"
            placeholder="search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border py-1 px-4 w-3/4 mx-5 md:w-1/2 rounded "
          />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 my-10 mx-15 lg:mx-0">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Link to={`/product-details/${product.id}`}>
                <ProductItem key={product.id} product={product} />
              </Link>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-600">
              No Products Found !
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default ProductList;
