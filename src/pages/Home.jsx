import { useLoaderData } from "react-router-dom";
import { getProduct } from "../api/apiProducts";
import Product from "../product/ProductItem";

function Home() {
  const product = useLoaderData();

  return (
    <div className="product">
      {product.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  );
}

export async function loader() {
  const menu = await getProduct();
  return menu;
}

export default Home;
