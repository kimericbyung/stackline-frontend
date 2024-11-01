import React, { useEffect } from 'react';
import logo from '../assets/stackline_logo.svg'
import './App.css';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState, store } from '../store';
import { fetchData } from '../store/dataSlice';
import SalesGraph from './SalesGraph';
import ProductBar from './ProductBar';
import SalesTable from './SalesTable';

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error } = useSelector((state: RootState) => state.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  if (!data || data.length === 0) return <div>No data available.</div>;

  return (
    <div className="app">
      <header className="app-header">
        <div className="app-header-contents">
          <img src={logo} className="app-logo" alt="logo" />
        </div>
      </header>
      <div className="app-contents">
        <div className="product-page">
          <ProductBar data={data[0]}/>
          <div className="product-sales-details">
            <SalesGraph data={data[0].sales} />
            <SalesTable data={data[0].sales} />
          </div>
        </div>
      </div>
    </div>
  );
}

const WrappedApp: React.FC = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

export default WrappedApp;
