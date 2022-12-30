import './App.scss';
import Categories from './categories/categories';
import Product from './product/product';
import { useSelector } from 'react-redux';
import { selectCategoryId } from './redux/slices/categoriesSlice';

const App = () => {
  const categoryId = useSelector(selectCategoryId);

  return (
    <div className="App">
      <Categories />
      <Product categoryId={categoryId} />
    </div>
  );
};

export default App;
