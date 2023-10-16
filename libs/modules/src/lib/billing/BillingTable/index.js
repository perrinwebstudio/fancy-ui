import React from 'react';
import PropTypes from 'prop-types';
import { Table, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import { formatCurrency } from '@crema/helpers';
import dayjs from 'dayjs';

const statusName = {
  'Authorized': 'Authorized',
  'Completed': 'Completed',
  'Declined': 'Declined',
  'Pending': 'Pending',
};
const getPaymentStatusColor = (status) => {
  switch (status) {
    case 'Authorized': {
      return '#2997ff';
    }
    case 'Completed': {
      return '#43C888';
    }
    case 'Declined': {
      return '#F84E4E';
    }
    case 'Pending': {
      return '#2997ff';
    }
  }
};

const getColumns = (navigate, onChangeStatus) => [
  {
    title: 'Transaction number',
    dataIndex: '_id',
    key: 'id',
    render: (id, record) => (
      <Typography.Text
        style={{
          cursor: 'pointer',
        }}
      >
        {id}
      </Typography.Text>
    ),
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
    render: (id, { plan, count }) => (
      <Typography.Text
        style={{
          cursor: 'pointer',
        }}
      >
        {count} sites SEO {plan}
      </Typography.Text>
    ),
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
        {statusName[status] || status}
      </div>
    ),
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
    render: (_, record) => {
      return dayjs(record.createdAt).format('DD MMM YYYY')
    }
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
    render: (_, record) => <span>{formatCurrency(record.toalAmount || record.totalAmount, {
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
