import Footer from "../components/Footer";
import Header from "../components/Header";

const Cart = () => {
  const cart = [
    { id: 1, name: "Product 1", price: 99.99, quantity: 2 },
    { id: 2, name: "Product 2", price: 129.99, quantity: 1 },
    { id: 3, name: "Product 3", price: 79.99, quantity: 3 },
  ];

  const cartItems = cart.map((item) => (
    <li key={item.id} className="list-group-item ">
      <div>
        <p className="float-end">
          Total: ${(item.price * item.quantity).toFixed(2)}
        </p>
        <h4>{item.name}</h4>
        <p>Price: ${item.price}</p>
        <p>Quantity: {item.quantity}</p>
      </div>
    </li>
  ));

  const totalCost = cart.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );

  return (
    <>
      <Header />
      <main className="container py-4">
        <h1 className="fs-1 fw-normal">Shopping Cart</h1>
        <div>
          <ul className="list-group">{cartItems}</ul>
          <h2 className="fs-4 fw-normal py-3">Total Cost: ${totalCost}</h2>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Cart;
