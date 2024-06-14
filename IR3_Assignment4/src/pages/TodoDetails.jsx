import Footer from "../components/Footer";
import Header from "../components/Header";

import { todos } from "../utility/common";
import { useParams } from "react-router-dom";

const TodoDetails = () => {
  const todoId = useParams();

  const todoData = todos.find((todo) => todo.id == todoId.todoId);

  return (
    <>
      <Header />
      <main className="container py-4">
        <div className="col-md-6">
          <div className="card p-3">
            <h2>Todo Details</h2>
            <p>ID: {todoData.id}</p>
            <p>Title: {todoData.title}</p>
            <p>Description: {todoData.description}</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default TodoDetails;
