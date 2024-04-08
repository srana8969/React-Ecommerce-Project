import { memo } from 'react';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import useFetchData from '../hooks/useFetchData';

const Header = lazy(()=> import('../components/header/Header'));
const NotFound = lazy(()=> import('../pages/notFound/NotFound'));
const Loader = lazy(()=> import('../components/loader/Loader'));
const ProductList = lazy(()=> import('../pages/productList/ProductList'));
const CartItems = lazy(()=> import('../pages/cartItems'));


const AppRoutes = () => {

  const { 
    isLoading, 
    error, 
    data: categories 
  } = useFetchData("https://fakestoreapi.com/products/categories", []);
     
    return (
        <>
          <Router>
          <Suspense fallback={<Loader />}>
            <Header categories={categories} isLoading={isLoading}/> 
            {
              isLoading ? (
                <Loader />
              ): (
                <Routes>
                  {/* <Route path="/products/" element={<Home />}></Route>
                  <Route path="/about" element={<About />}></Route>
                  <Route path="/contact" element={<Contact />}></Route> */}
                  <Route path='products/:categoryName' element={<ProductList />} />
                  <Route path='/cart' element={<CartItems />} />
                  <Route path='*' element={<NotFound />} />
                </Routes>
              )
            }
            {/* <Footer /> */}
            </Suspense>
          </Router>
        </>
    )

}

export default memo(AppRoutes);