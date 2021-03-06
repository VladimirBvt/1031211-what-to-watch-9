import Header from '../header/header';
import SvgHidden from '../svg-hidden/svg-hidden';
import Footer from '../footer/footer';
import FilmCardList from '../filmCardList/filmCardList';
import {Films} from '../../mocks/films';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

type MainPageProps = {
  filmsData:Films
}

function MainPage(props:MainPageProps): JSX.Element {
  return (
    <>
      <SvgHidden set='forMainPage'/>

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
              <h2 className='film-card__title'>The Grand Budapest Hotel</h2>
              <p className='film-card__meta'>
                <span className='film-card__genre'>Drama</span>
                <span className='film-card__year'>2014</span>
              </p>

              <div className='film-card__buttons'>
                <Link to={'/player/:id'} className='btn btn--play film-card__button' type='button'>
                  <svg viewBox='0 0 19 19' style={{width:'19', height:'19'}}>
                    <use xlinkHref='#play-s'/>
                  </svg>
                  <span>Play</span>
                </Link>
                <Link to={AppRoute.MyList} className='btn btn--list film-card__button' type='button'>
                  <svg viewBox='0 0 19 20' style={{width:'19', height:'20'}}>
                    <use xlinkHref='#add'/>
                  </svg>
                  <span>My list</span>
                </Link>
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

            <FilmCardList filmsData={props.filmsData} />

          </div>

          <div className='catalog__more'>
            <button className='catalog__button' type='button'>Show more</button>
          </div>
        </section>

        <Footer/>

      </div>
    </>
  );
}

export default MainPage;
