import React, { useEffect } from 'react';
import './App.css';
import { fetchData } from './actions/fetchActions';
import { URL } from './constants';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from './store';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import SpaceOverview from './pages/SpaceOverview';


function App() {
  const dispatch: any = useDispatch();
  const { data, loading } = useSelector((state: RootState) => state.fetchReducer);
  console.log("loading: ", loading);
  console.log("data: ", data);

  useEffect(() => {
    console.log("URL: ", URL);
    dispatch(fetchData(URL));
  }, []);

  return (
    <>
      <Header />
      <SpaceOverview />
      <Footer />
    </>
  );
}

export default App;
