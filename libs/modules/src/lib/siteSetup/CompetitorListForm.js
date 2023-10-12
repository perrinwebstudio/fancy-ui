import React from 'react';
import { Button, Col, Form, Input, Row } from 'antd';

const CompetitorListForm = ({ onChange, value, validated }) => {
  const [valueState, setValueState] = React.useState(value || [{name: '', url: ''}]);

  const onAddMore = () => {
    const newValueState = [...valueState, {name: '', url: ''}];
    setValueState(newValueState);
    onChange(newValueState);
  }

  const onChangeValue = (index, name, value) => {
    const newValueState = [...valueState];
    newValueState[index][name] = value;
    setValueState(newValueState);
    onChange(newValueState);
  }

  return <>
    {
      valueState.map((item, index) => {
        return <Row key={index} gutter={'10'}>
          <Col sm={24} md={24} lg={12}>
            <Form.Item style={{marginBottom: '10px'}} hasFeedback validateStatus={item['name'] && validated ? 'success' : ''}>
              <Input onChange={(e) => {
                onChangeValue(index, 'name', e.target.value);
              }} value={item['name'] || ''} placeholder='Apple' />
            </Form.Item>
          </Col>
          <Col sm={24} md={24} lg={12}>
            <Form.Item style={{marginBottom: '10px'}} hasFeedback validateStatus={item['url'] && validated ? 'success' : ''}>
              <Input onChange={(e) => {
                onChangeValue(index, 'url', e.target.value);
              }} value={item['url'] || ''} placeholder='apple.com' />
            </Form.Item>
          </Col>
        </Row>
      })
    }
    <div>
      <Button onClick={() => {
        onAddMore();
      }} type='primary' block ghost>+ Add More</Button>
    </div>
  </>
}

export default CompetitorListForm