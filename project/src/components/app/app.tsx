import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import MainPage from '../main-page/main-page';
import SignIn from '../sign-in/sign-in';
import MyList from '../my-list/my-list';
import PrivateRoute from '../private-route/private-route';
import MoviePage from '../movie-page/movie-page';
import AddReview from '../add-review/add-review';
import Player from '../player/player';
import NotFound from '../not-found/not-found';
import {Films, films} from '../../mocks/films';

/*type PromoFilmProp = {
  promoFilmsData: {
    title: string;
    genre: string;
    dateRelease: number
  }
}*/

/*type PromoFilmProp = {
  promoFilmsData: PromoFilm
  }*/

type AppProps = {
  filmsData:Films
};

function App(props:AppProps): JSX.Element {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainPage filmsData={films}/>}
          />
          <Route
            path={AppRoute.SignIn}
            element={<SignIn/>}
          />
          <Route
            path={AppRoute.MyList}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                <MyList filmsData={films}/>
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Film}
            element={<MoviePage filmsData={props.filmsData} />}
          />
          <Route
            path={AppRoute.AddReview}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                <AddReview />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Player}
            element={<Player filmData={films[0]} />}
          />
          <Route
            path='*'
            element={<NotFound/>}
          />
        </Routes>
      </BrowserRouter>

      {/*<SvgHidden set='forMainPage' />

      <section className='film-card'>
        <div className='film-card__bg'>
          <img src='img/bg-the-grand-budapest-hotel.jpg' alt='The Grand Budapest Hotel' />
        </div>

        <h1 className='visually-hidden'>WTW</h1>

        <Header set='forMainPage'/>

        <div className='film-card__wrap'>
          <div className='film-card__info'>
            <div className='film-card__poster'>
              <img src='img/the-grand-budapest-hotel-poster.jpg' alt='The Grand Budapest Hotel poster' style={{width:'218', height:'327'}} />
            </div>

            <div className='film-card__desc'>
              <h2 className='film-card__title'>{props.promoFilmsData.title}</h2>
              <p className='film-card__meta'>
                <span className='film-card__genre'>{props.promoFilmsData.genre}</span>
                <span className='film-card__year'>{props.promoFilmsData.dateRelease}</span>
              </p>

              <div className='film-card__buttons'>
                <button className='btn btn--play film-card__button' type='button'>
                  <svg viewBox='0 0 19 19' style={{width:'19', height:'19'}}>
                    <use xlinkHref='#play-s'/>
                  </svg>
                  <span>Play</span>
                </button>
                <button className='btn btn--list film-card__button' type='button'>
                  <svg viewBox='0 0 19 20' style={{width:'19', height:'20'}}>
                    <use xlinkHref='#add'/>
                  </svg>
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className='page-content'>
        <section className='catalog'>
          <h2 className='catalog__title visually-hidden'>Catalog</h2>

          <ul className='catalog__genres-list'>
            <li className='catalog__genres-item catalog__genres-item--active'>
              <a href='#' className='catalog__genres-link'>All genres</a>
            </li>
            <li className='catalog__genres-item'>
              <a href='#' className='catalog__genres-link'>Comedies</a>
            </li>
            <li className='catalog__genres-item'>
              <a href='#' className='catalog__genres-link'>Crime</a>
            </li>
            <li className='catalog__genres-item'>
              <a href='#' className='catalog__genres-link'>Documentary</a>
            </li>
            <li className='catalog__genres-item'>
              <a href='#' className='catalog__genres-link'>Dramas</a>
            </li>
            <li className='catalog__genres-item'>
              <a href='#' className='catalog__genres-link'>Horror</a>
            </li>
            <li className='catalog__genres-item'>
              <a href='#' className='catalog__genres-link'>Kids & Family</a>
            </li>
            <li className='catalog__genres-item'>
              <a href='#' className='catalog__genres-link'>Romance</a>
            </li>
            <li className='catalog__genres-item'>
              <a href='#' className='catalog__genres-link'>Sci-Fi</a>
            </li>
            <li className='catalog__genres-item'>
              <a href='#' className='catalog__genres-link'>Thrillers</a>
            </li>
          </ul>

          <div className='catalog__films-list'>

              ?????????????????? ?????? ???????????????? ??????????????

            <FilmCard/>
            <FilmCard/>
            <FilmCard/>
            <FilmCard/>
            <FilmCard/>
            <FilmCard/>
            <FilmCard/>
            <FilmCard/>
            <FilmCard/>
            <FilmCard/>
            <FilmCard/>
            <FilmCard/>
            <FilmCard/>
            <FilmCard/>
            <FilmCard/>
            <FilmCard/>
            <FilmCard/>
            <FilmCard/>
            <FilmCard/>
            <FilmCard/>

          </div>

          <div className='catalog__more'>
            <button className='catalog__button' type='button'>Show more</button>
          </div>
        </section>

        <Footer/>

      </div>*/}
    </>
  );
}

export default App;
