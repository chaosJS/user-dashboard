import React from 'react';
import { connect } from 'dva';
import ProductList from '../components/ProductList';
import MainLayout from '../components/MainLayout/MainLayout';

const Products = (props) => {
  let { dispatch, products, location } = props;
  function handleDelete(id) {
    dispatch({
      type: 'products111/delete',
      payload: id,
    });
  }
  return (
    <MainLayout location={location}>
      <h2>List of Products</h2>
      <ProductList onDelete={handleDelete} products={products} />
    </MainLayout>
  );
};

// export default Products;
export default connect(
  (state) => {
    let { products111 } = state
    return {
      products: products111
    }
  }
)(Products);