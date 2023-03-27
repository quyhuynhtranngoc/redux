import { Col, Radio, Row, Select, Tag, Typography } from "antd";
import Search from "antd/es/transfer/search";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  prioritiesFilter,
  searchFilter,
  statusFilter,
} from "../../redux/actions";
export default function Filters() {
  const [searchText, setSearchText] = useState("");
  const [status, setStatus] = useState("All");
  const [priorities, setPriorities] = useState([]);

  const dispatch = useDispatch();

  const handleSearchText = (e) => {
    setSearchText(e.target.value);
    dispatch(searchFilter(e.target.value));
  };
  const handleStatus = (e) => {
    setStatus(e.target.value);
    dispatch(statusFilter(e.target.value));
  };
  const handlePriority = (value) => {
    // antd se tra ve value la 1 array
    setPriorities(value);
    dispatch(prioritiesFilter(value));
  };
  return (
    <Row justify="center">
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search
          placeholder="input search text"
          value={searchText}
          onChange={handleSearchText}
        />
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group value={status} onChange={handleStatus}>
          <Radio value="All">All</Radio>
          <Radio value="Completed">Completed</Radio>
          <Radio value="Todo">To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Typography.Paragraph>
        <Select
          mode="multiple"
          allowClear
          placeholder="Please select"
          style={{ width: "100%" }}
          value={priorities}
          onChange={handlePriority}
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
      </Col>
    </Row>
  );
}
