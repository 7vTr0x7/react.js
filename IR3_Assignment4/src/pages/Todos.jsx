import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { todos } from "../utility/common";

const Todos = () => {
  const todoListing = todos.map((todo) => (
    <li className="list-group-item" key={todo.id}>
      <Link to={`/todos/${todo.id}`}>{todo.title}</Link>
    </li>
  ));

  return (
    <>
      <Header />
      <main className="container py-4">
        <h1>Todo List</h1>
        <div className="col-md-6">
          <ul className="list-group">{todoListing}</ul>
        </div>
      </main>
      ;
      <Footer />
    </>
  );
};

export default Todos;
