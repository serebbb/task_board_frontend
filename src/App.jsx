import MyHeader from "./components/MyHeader";
import Button from "./components/Button/Button";
import WayItemList from "./components/WayListItem";
import { ways } from "./data";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import ToDoItem from "./components/ToDoItem/ToDoItem";

function App() {
  const [isActive, setActive] = useState(-1);
  return (
    <div>
      <MyHeader />
      <main>
        <h1>Hello React!</h1>
        <section>
          <ul>
            <ToDoItem text="Task1" />
            <ToDoItem />
          </ul>
        </section>
        {/* <section>
          <ul>
            {ways.map((way) => (
              <WayItemList key={way.title} {...way} />
            ))}
          </ul>
        </section> */}
        <Button isActive={isActive} onClick={() => setActive(-isActive)}>
          Click me
        </Button>
      </main>
    </div>
  );
}

export default App;
