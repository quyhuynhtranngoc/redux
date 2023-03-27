import Filters from "./components/Filters";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div
      style={{
        width: 500,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        padding: 20,
        boxShadow: "0 0 10px 4px #bfbfbf",
        borderRadius: 5,
        height: "90vh",
      }}
    >
      <Filters />
      <TodoList />
    </div>
  );
}

export default App;
