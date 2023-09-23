import React from 'react';
import PropTypes from 'prop-types';
import { Table, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import { formatCurrency } from '@crema/helpers';

const statusName = {
  'authorized': 'Authorized',
  'completed': 'Completed',
  'declined': 'Declined',
};
const getPaymentStatusColor = (status) => {
  switch (status) {
    case 'authorized': {
      return '#2997ff';
    }
    case 'completed': {
      return '#43C888';
    }
    case 'declined': {
      return '#F84E4E';
    }
  }
};

const getColumns = (navigate, onChangeStatus) => [
  {
    title: 'Transaction number',
    dataIndex: 'id',
    key: 'id',
    render: (id, record) => (
      <Typography.Link
        onClick={() => navigate(`/invoice/pdf/${id}`)}
        style={{
          cursor: 'pointer',
        }}
      >
        {id}
      </Typography.Link>
    ),
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (status) => (
      <div
        style={{
          color: getPaymentStatusColor(status),
          backgroundColor: getPaymentStatusColor(status) + '44',
          padding: '3px 5px',
          borderRadius: 4,
          fontSize: 14,
          display: 'inline-block',
        }}
      >
        {statusName[status]}
      </div>
    ),
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
    render: (amount) => <span>{formatCurrency(amount, {
      language: 'en-US',
      currency: 'USD',
    }, 2)}</span>,
  },
];
const BillingTable = ({ transactionsData, loading, onChangeStatus }) => {
  const navigate = useNavigate();

  return (
    <Table
      loading={loading}
      dataSource={transactionsData}
      columns={getColumns(navigate, onChangeStatus)}
      pagination={false}
    />
  );
};

export default BillingTable;

BillingTable.defaultProps = {
  transactionData: [],
};

BillingTable.propTypes = {
  transactionData: PropTypes.array,
  loading: PropTypes.bool,
};
