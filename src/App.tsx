import React, { useEffect } from 'react';
import './App.css';
import { fetchData } from './actions/fetchActions';
import { URL } from './constants';
import { useDispatch } from 'react-redux';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import SpaceOverview from './pages/SpaceOverview';


function App() {
  const dispatch: any = useDispatch();

  useEffect(() => {
    console.log("URL: ", URL);
    dispatch(fetchData(URL));
    // eslint-disable-next-line
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
