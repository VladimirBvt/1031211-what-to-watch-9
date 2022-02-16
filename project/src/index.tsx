import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

type PromoFilm = {
  title: string;
  genre: string;
  dateRelease: number;
}

const promoFilm:PromoFilm = {
  title: 'The Grand Budapest Hotel',
  genre: 'Drama',
  dateRelease: 2014,
};

ReactDOM.render(
  <React.StrictMode>
    <App promoFilmsData={promoFilm}/>
  </React.StrictMode>,
  document.getElementById('root'));
