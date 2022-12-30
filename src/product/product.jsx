import React from 'react';
import Preloader from '../preloader/preloader';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectSettings } from '../redux/slices/categoriesSlice';
import { selectItem, fetchProduct } from '../redux/slices/productSlice';

import './product.scss';

const Product = ({ categoryId }) => {
  const { item, status } = useSelector(selectItem);
  const settings = useSelector(selectSettings);
  const dispatch = useDispatch();

  const getProduct = async () => {
    dispatch(fetchProduct(categoryId));
  };

  useEffect(() => {
    getProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryId]);

  return (
    <section className="product">
      {status === 'error' ? (
        <div className="">
          <h2>что-то пошло не так</h2>
          <span>попробуйте повторить попытку позже</span>
        </div>
      ) : (
        <div className="">
          {status === 'loading' ? (
            <Preloader />
          ) : (
            <ul className="product__list">
              {item.map((obj, id) => (
                <li key={id} className="product__item">
                  <div
                    style={{ backgroundColor: settings[obj.category]['color'] }}
                  ></div>
                  <span>{obj.productName}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </section>
  );
};
export default Product;
