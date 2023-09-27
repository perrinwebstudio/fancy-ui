import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import AppContextProvider from '@crema/context/AppContextProvider';
import AppThemeProvider from '@crema/context/AppThemeProvider';
import AppLocaleProvider from '@crema/context/AppLocaleProvider';
import AppAuthProvider from './core/AppAuthProvider';
import AuthRoutes from '@crema/components/AuthRoutes';
import AppLayout from './core/AppLayout';
import '@crema/mockapi';
import { GlobalStyles } from './core/theme/GlobalStyle';
import { Normalize } from 'styled-normalize';
import { persistor, store } from './core/redux/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import AppSuspense from '@crema/components/AppSuspense';  
import VerifyAuthTokenWrapper from './modules/auth/VerifyAuthTokenWrapper';

const App = () => (    
    <AppContextProvider>
      <Provider store={store}>
        <AppSuspense>
          <PersistGate loading={null} persistor={persistor}>
            <VerifyAuthTokenWrapper>
              <AppThemeProvider>
                <AppLocaleProvider>
                  <BrowserRouter>
                    <AppAuthProvider>
                      <AuthRoutes>
                        <GlobalStyles />
                        <Normalize />
                        <AppLayout />
                      </AuthRoutes>
                    </AppAuthProvider>
                  </BrowserRouter>
                </AppLocaleProvider>
              </AppThemeProvider>
            </VerifyAuthTokenWrapper>
          </PersistGate>
        </AppSuspense>
      </Provider>
    </AppContextProvider>
);

export default App;
