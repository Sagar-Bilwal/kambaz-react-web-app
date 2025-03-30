import { Button, ListGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";
export default function TodoItem({ todo}: {
    todo: { id: string; title: string };
  }) {
    const dispatch = useDispatch();
    return (
      <ListGroup.Item key={todo.id} >
            <div className="d-flex justify-content-between align-items-center">
            {todo.title}
            <div>
            <Button onClick={() => dispatch(setTodo(todo))}
                    id="wd-set-todo-click" className="ms-2"> Edit </Button>
            <Button onClick={() => dispatch(deleteTodo(todo.id))} variant="danger"
                    id="wd-delete-todo-click" className="ms-2"> Delete </Button>
            </div>
            </div>
          </ListGroup.Item>);
  }