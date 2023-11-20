import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MiComponente from '../../pages/miComponente/MiComponente';
import MiContador from '../../pages/miContador/MiContador';
import MisProductos from '../../pages/misProductos/MisProductos';
import Layout from '../../components/layout/Layout';
import ProductDetails from '../../pages/productDetails/ProductDetails';

const Router = () => {
  return (
    <BrowserRouter basename='/modulo_profundizacion'>
      <Routes>
        <Route element={<Layout />}>
          <Route index path='/' element={<MiComponente />} />
          <Route path='/micomponente' element={<MiComponente />} />
          <Route path='/micontador' element={<MiContador />} />
          <Route path='/misproductos' element={<MisProductos />} />
          <Route path='/misproductos/:id' element={<ProductDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
