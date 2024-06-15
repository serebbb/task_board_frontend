import MyHeader from "./components/MyHeader";
import Button from "./components/Button/Button";
import WayItemList from "./components/WayListItem";
import { ways } from "./data";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import ToDoItem from "./components/ToDoItem/ToDoItem";
import ToDoAddItem from "./components/ToDoAddItem/ToDoAddItem";

function App() {
  const [isActive, setActive] = useState(-1);
  return (
    <div>
      <MyHeader completedTask={0} allTask={3} />
      <main>
        <div>
          <ToDoAddItem />
        </div>
        <section>
          <ul>
            <ToDoItem text="Task1" />
          </ul>
        </section>
        <Button isActive={isActive} onClick={() => setActive(-isActive)}>
          Click me
        </Button>
      </main>
    </div>
  );
}

export default App;
