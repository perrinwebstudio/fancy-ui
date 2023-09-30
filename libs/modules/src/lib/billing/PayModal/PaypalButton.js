import React from 'react';
import PropTypes from 'prop-types';
import { Button, Space } from 'antd';
import styled from 'styled-components';
import { FaCcPaypal, FaPaypal } from 'react-icons/fa';
import { BsPaypal } from 'react-icons/bs';
import { CgPaypal } from 'react-icons/cg';
import { ImPaypal } from 'react-icons/im';
import { BiLogoPaypal } from 'react-icons/bi';
import { RiPaypalLine } from 'react-icons/ri';

const StyledPaypalButton = styled(Button)`
  color: #27346A !important;
  background-color: #FFC43A !important;
  font-weight: 600 !important;
`

const PaypalButton = ({ prop1 }) => {
  return <StyledPaypalButton block className='paypal'>
    <Space align='center'>
      <BsPaypal /> Paypal
    </Space>
  </StyledPaypalButton>
}

PaypalButton.defaultProps = {
  prop1: ''
};

PaypalButton.propTypes = {
  prop1: PropTypes.string
};

export default PaypalButton