import React from 'react';
import ReactDOM from 'react-dom';
//import MyList from './components/my-list/my-list';
import MainPage from './components/main-page/main-page';
//import Header from './components/header/header';
//import MyList from './components/my-list/my-list';
//import {settingsForHeaderMyList} from './components/my-list/my-list';
/*import App from './components/app/app';*/
/*import Index from './components/index';*/
/*import MainPage from './components/main-page/main-page';*/

/*type PromoFilm = {
  title: string;
  genre: string;
  dateRelease: number;
}

const promoFilm:PromoFilm = {
  title: 'The Grand Budapest Hotel',
  genre: 'Drama',
  dateRelease: 2014,
};*/

ReactDOM.render(
  <React.StrictMode>
    {/*<App promoFilmsData={promoFilm}/>*/}
    {/*<MyList />*/}
    <MainPage />
    {/*<Header set='forMyList'/>*/}
  </React.StrictMode>,
  document.getElementById('root'));
