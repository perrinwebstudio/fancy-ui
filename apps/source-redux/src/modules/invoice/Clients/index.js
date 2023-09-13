import AppGrid from '@crema/components/AppGrid';
import AppLoader from '@crema/components/AppLoader';
import { isEmptyObject } from '@crema/helpers';
import { ClientItem } from '@crema/modules/invoice';
import { Button } from 'antd';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledTypographyWrapper } from '../index.styled';
import { useDispatch, useSelector } from 'react-redux';
import { onGetClientList } from '../../../redux/actions';

const Clients = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const clientsList = useSelector(({ invoiceApp }) => invoiceApp.clientsList);
  const loading = useSelector(({ common }) => common.loading);

  useEffect(() => {
    dispatch(onGetClientList());
  }, [dispatch]);

  return !isEmptyObject(clientsList) ? (
    <StyledTypographyWrapper>
      <div>
        <Button
          type='primary'
          style={{ display: 'block', marginLeft: 'auto', marginBottom: 12 }}
          onClick={() => navigate('/invoice/client/add')}
        >
          Add Clients
        </Button>
      </div>
      <AppGrid
        responsive={{
          xs: 1,
          sm: 2,
          md: 3,
          lg: 3,
          xl: 4,
        }}
        loading={loading}
        data={clientsList}
        renderItem={(client) => <ClientItem client={client} />}
      />
    </StyledTypographyWrapper>
  ) : (
    <AppLoader />
  );
};

export default Clients;
