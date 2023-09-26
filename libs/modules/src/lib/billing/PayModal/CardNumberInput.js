import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';
import { getCardBrand } from '@crema/helpers';
import CardBrandIcon from './CardBrandIcon';

const CardNumberInput = ({ value, onChange, ...props }) => {
  const [valueState, setValueState] = React.useState(value)

  return <Input {...props} onChange={(e) => {
    const value = e.target.value
    const valueState = value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim()
    setValueState(valueState)
    onChange && onChange(valueState)
  }} suffix={<CardBrandIcon number={valueState} />} />
}

export default CardNumberInput