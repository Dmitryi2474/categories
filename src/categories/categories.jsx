import React from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategoryId } from '../redux/slices/categoriesSlice';
import { selectItem } from '../redux/slices/productSlice';

import './categories.scss';

const Categories = () => {
  const { item } = useSelector(selectItem);
  const { categories, categoryId } = useSelector((state) => state.category);
  const dispatch = useDispatch();
  const isMounted = useRef(false);

  const onCnangeCategoryId = (id) => {
    dispatch(setCategoryId(id));
  };

  useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(item);
      localStorage.setItem('cart', json);
    }
    isMounted.current = true;
  }, [item]);

  return (
    <section className="categories">
      <ul className="categories__list">
        {categories.map((categoryName, id) => (
          <li
            key={id}
            className={categoryId === id ? 'active' : ''}
            onClick={() => onCnangeCategoryId(id)}
          >
            {categoryName}
          </li>
        ))}
      </ul>
    </section>
  );
};
export default Categories;
