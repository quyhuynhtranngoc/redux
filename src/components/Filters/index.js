import { Col, Radio, Row, Select, Tag } from "antd";
import Search from "antd/es/transfer/search";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchFilter } from "../../redux/actions";
export default function Filters() {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();

  const handleSearchText = (e) => {
    setSearchText(e.target.value);
    dispatch(searchFilter(e.target.value));
  };

  return (
    <Row justify="center">
      <Col span={24}>
        <Search
          placeholder="input search text"
          value={searchText}
          onChange={handleSearchText}
        />
      </Col>
      <Col sm={24}>
        <Radio.Group>
          <Radio value="All">All</Radio>
          <Radio value="Completed">Completed</Radio>
          <Radio value="Todo">To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Select
          mode="multiple"
          allowClear
          placeholder="Please select"
          style={{ width: "100%" }}
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
