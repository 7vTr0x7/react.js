import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

import { products } from "../utility/common";

const ProductDetails = () => {
  const prodId = useParams();

  const prodData = products.find((prod) => prod.id == prodId.prodId);

  return (
    <>
      <Header />
      <main className="container py-4">
        <div>
          <h1 className="fs-1 fw-normal">{prodData.name}</h1>
          <img
            src={prodData.productImageUrl}
            alt={prodData.name}
            className="img-fluid py-3"
          />
          <p>Price: {prodData.price}</p>
          <p>Description: {prodData.description}</p>
          <p>Available Colors: {prodData.availableColors.join(", ")}</p>
          <p>
            Return Policy:{" "}
            {prodData.isReturnApplicable
              ? "Return applicable Within 7 days"
              : "No Return Policy"}
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProductDetails;
