import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { products } from "../utility/common";

const Products = () => {
  const productListing = products.map((product) => (
    <div key={product.id} className="card  mt-3">
      <div className="row">
        <div className="col-md-3">
          <img
            src="https://via.placeholder.com/300x300"
            alt={product.name}
            className="img-fluid rounded-start"
          />
        </div>
        <div className="col-md-7 container py-3">
          <h4 className="card-title">{product.name}</h4>
          <p className="card-text">{product.description}</p>
          <p className="card-text">Price: {product.price}</p>
          <Link to={`/products/${product.id}`} className="btn btn-primary">
            View Product
          </Link>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <Header />
      <main className="container py-4">
        <h1 className="fs-1 fw-normal">Products</h1>
        <div>{productListing}</div>
      </main>
      <Footer />
    </>
  );
};

export default Products;
