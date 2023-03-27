import { Button, Col, Input, Row, Select, Space, Tag } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addTodo } from "../../redux/actions";
import { todosRemainingSelector } from "../../redux/selectors";
import Todo from "../Todo";

export default function TodoList() {
  const [todoName, setTodoName] = useState("");
  const [priority, setPriority] = useState("Medium");

  
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setTodoName(e.target.value);
  };
  const handlePriorityChange = (value) => {
    // antd tra ve value luon thay vi event.target.value
    setPriority(value);
  };
  const handleAddButtonClick = () => {
    dispatch(
      addTodo({
        id: uuidv4(),
        name: todoName,
        priority: priority,
        completed: false,
      })
    );

    // clear data
    setTodoName("");
    setPriority("Medium");
  };
  // const todoList = useSelector((state) => state.todoList);
  // const todoList = useSelector(todoListSelector);
  const todoList = useSelector(todosRemainingSelector);
  return (
    <Row>
      <Col>
        {todoList.map((todo) => (
          <Todo
            key={todo.id}
            name={todo.name}
            prioriry={todo.priority}
            completed={todo.completed}
          />
        ))}
      </Col>
      <Col span={24}>
        <Space.Compact style={{ display: "flex" }}>
          <Input value={todoName} onChange={handleInputChange} />
          <Select
            defaultValue="Medium"
            value={priority}
            onChange={handlePriorityChange}
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handleAddButtonClick}>
            Add
          </Button>
        </Space.Compact>
      </Col>
    </Row>
  );
}
