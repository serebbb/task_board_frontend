import { Button } from "react-bootstrap";
import { ButtonGroup } from "react-bootstrap";

export default function ToDoItem({ text }) {
  return (
    <ul>
      {text}
      <ButtonGroup aria-label="Basic example">
        <Button variant="danger" size="sm">
          Удалить
        </Button>
      </ButtonGroup>
    </ul>
  );
}
