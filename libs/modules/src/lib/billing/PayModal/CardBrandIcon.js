import React from 'react';
import PropTypes from 'prop-types';
import { getCardBrand } from '@crema/helpers';
import VisaIcon from '../PaymentMethod/VisaIcon';
import { CreditCardOutlined } from '@ant-design/icons';
import MasterCardIcon from '../PaymentMethod/MasterCardIcon';

const CardBrandIcon = ({ number }) => {
  const brand = getCardBrand(number)

  if (brand === 'Visa') {
    return <div style={{width: '25px', display: 'flex'}}><VisaIcon /></div>
  }

  if (brand === 'MasterCard') {
    return <div style={{width: '25px', display: 'flex'}}><MasterCardIcon /></div>
  }
  // return brand
  return <CreditCardOutlined />
}

CardBrandIcon.defaultProps = {
  number: ''
};

CardBrandIcon.propTypes = {
  number: PropTypes.string
};

export default CardBrandIcon