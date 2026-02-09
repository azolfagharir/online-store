import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { OrbitProgress } from "react-loading-indicators";
import { useSearchParams } from "react-router-dom";

import { fetchProducts } from "../Features/Product/ProductSlice";
import Filter from "../components/Filter";
import Search from "../components/Search";
import Card from "../components/Card";


function Products() {

  const dispatch = useDispatch();
  const { Products, loading, error } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  const title = searchParams.get("title");

const filteredProductsByCategory =
  !category || category === "All"
    ? Products
    : Products.filter(p => p.category === category);

const filteredProducts =
  !title
    ? filteredProductsByCategory
    : filteredProductsByCategory.filter(p =>
        p.title.toLowerCase().includes(title.toLowerCase())
      );


  if (loading)
    return (
      <OrbitProgress
        variant="spokes"
        color="#ff6900"
        size="medium"
        text=""
        textColor=""
      />
    );
  if (error) return <h2>Error: {error}</h2>;

  return (
    <>
    <Search />
      <Filter />
      <div className="grid grid-cols-3 gap-4 items-center mt-20 w-240">
      {filteredProducts.map((product) => (
        <Card key={product.id} product={product} />
      ))}
      </div>
    </>
  );
}

export default Products;
