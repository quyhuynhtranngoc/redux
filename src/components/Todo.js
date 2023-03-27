import { Checkbox, Row, Tag } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTodoStatus } from "../redux/actions";

const priorityColorMapping = {
  High: "red",
  Medium: "blue",
  Low: "gray",
};

export default function Todo({ id, name, prioriry, completed }) {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(completed);
  const toggleCheckbox = () => {
    setChecked(!checked);
    dispatch(toggleTodoStatus(id));
  };
  return (
    <Row
      justify="space-between"
      style={checked ? { opacity: 0.5, textDecoration: "line-through" } : {}}
    >
      <Checkbox onChange={toggleCheckbox}>{name}</Checkbox>
      <Tag color={priorityColorMapping[prioriry]}>{prioriry}</Tag>
    </Row>
  );
}
