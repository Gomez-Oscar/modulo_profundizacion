import React, { createContext, useReducer } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MiComponente from '../../pages/miComponente/MiComponente';
import MiContador from '../../pages/miContador/MiContador';
import MisProductos from '../../pages/misProductos/MisProductos';
import Layout from '../../components/layout/Layout';
import ProductDetails from '../../pages/productDetails/ProductDetails';
import MiContadorConUseReducer from '../../pages/miContadorConUseReducer/MiContadorConUseReducer';
import PublicRoutes from './PublicRoutes';
import PrivateRoutes from './PrivateRoutes';
import userLoggedReducer, {
  userLoggedInitial,
} from '../../reducers/userLoggedReducer';
import Login from '../../pages/login/Login';
import MiToDoList from '../../pages/MiToDoList/MiToDoList';
import { ChakraProvider } from '@chakra-ui/react';

export const AppContext = createContext({});

const Router = () => {
  const [userLogged, userLoggedDispatch] = useReducer(
    userLoggedReducer,
    userLoggedInitial
  );

  const globalState = {
    userLogged: {
      userLogged,
      userLoggedDispatch,
    },
  };

  return (
    <AppContext.Provider value={globalState}>
      <ChakraProvider>
        <BrowserRouter basename='/modulo_profundizacion'>
          <Routes>
            <Route element={<Layout />}>
              <Route
                element={
                  <PublicRoutes isAuthenticate={userLogged.isAuthenticated} />
                }
              >
                <Route index path='/' element={<MiComponente />} />
                <Route path='/login' element={<Login />} />
                <Route path='/micomponente' element={<MiComponente />} />
                <Route path='/micontador' element={<MiContador />} />
                <Route
                  path='/micontadorconusereducer'
                  element={<MiContadorConUseReducer />}
                />
                <Route path='/misproductos' element={<MisProductos />} />
                <Route path='/misproductos/:id' element={<ProductDetails />} />
              </Route>
              <Route
                element={
                  <PrivateRoutes isAuthenticate={userLogged.isAuthenticated} />
                }
              >
                <Route path='mitodolist' element={<MiToDoList />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </AppContext.Provider>
  );
};

export default Router;
