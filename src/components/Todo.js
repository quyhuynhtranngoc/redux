import { Checkbox, Row, Tag } from "antd";
import React, { useState } from "react";

const priorityColorMapping = {
  High: "red",
  Medium: "blue",
  Low: "gray",
};

export default function Todo({ name, prioriry }) {
  const [checked, setChecked] = useState(false);
  const toggleCheckbox = () => {
    setChecked(!checked);
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
