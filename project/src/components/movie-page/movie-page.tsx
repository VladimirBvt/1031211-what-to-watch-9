import {films, Films} from '../../mocks/films';
import SvgHidden from '../svg-hidden/svg-hidden';
import FilmCardList from '../filmCardList/filmCardList';
import Footer from '../footer/footer';
import UserBlock from '../user-block/user-block';
import Logo from '../logo/logo';
import {Link, useParams} from 'react-router-dom';
import {ActiveTabMoviePage, AppRoute} from '../../const';
import {SyntheticEvent, useRef, useState} from 'react';
import Tabs from '../tabs/tabs';
import {useEffect} from 'react';

type PropsMoviePages = {
  filmsData:Films
};

function MoviePage (props:PropsMoviePages) {
  const params = useParams();
  const id = params.id?.slice(1);

  const film = (films.find((item) => String(item.id) === id ));

  const [activeTab, setActiveTab] = useState(ActiveTabMoviePage.Overview);
  /* const tabs1 = document.querySelectorAll('.film-nav__item');
  tabs1.forEach((item) => {
    ((item.childNodes[0]) as HTMLSpanElement).classList.add('film-nav__link--cursor');
    //item.style.cursor = 'pointer';
    //console.log(item.childNodes[0]);
  });*/

  const tabTarget = useRef <HTMLLIElement|null> (null);

  useEffect(() => {
    const tabs = document.querySelectorAll('.film-nav__item');

    tabs.forEach((item) => {
      if (item.classList.contains('film-nav__item--active')) {
        item.classList.remove('film-nav__item--active');
      }
      switch (activeTab) {
        case 'overview': tabs[0].classList.add('film-nav__item--active');
          break;
        case 'details': tabs[1].classList.add('film-nav__item--active');
          break;
        case 'reviews': tabs[2].classList.add('film-nav__item--active');
          break;
      }
    });

    //console.log(tabs);
    //((tabTarget.current) as HTMLLIElement).classList.add('film-nav__link');
    //const tab = ((evt.target) as HTMLSpanElement).parentElement;
    //tab?.classList.toggle('film-nav__item--active');
    //const tab = tabTarget;
    //((tab.current) as HTMLLIElement).classList.add('film-nav__item--active');
    //console.log(((tab.current) as HTMLLIElement).classList.value);
    //console.log(tab.current);
  }, [activeTab]);

  const handlerOverviewClick = () => {
    setActiveTab(ActiveTabMoviePage.Overview);
  };
  const handlerDetailsClick = (evt:SyntheticEvent) => {
    //const tab = ((evt.target) as HTMLSpanElement).parentElement;
    setActiveTab(ActiveTabMoviePage.Details);
    //tab?.classList.toggle('film-nav__item--active');
  };
  const handlerReviewsClick = () => {
    setActiveTab(ActiveTabMoviePage.Reviews);
  };

  //console.log(tabTarget);

  return (
    <>
      <SvgHidden set='forMainPage' />

      <section className='film-card film-card--full'>
        <div className='film-card__hero'>
          <div className='film-card__bg'>
            <img src={film?.image} alt={film?.title}/>
          </div>

          <h1 className='visually-hidden'>WTW</h1>

          <header className='page-header film-card__head'>

            <Logo />

            <UserBlock />

          </header>

          <div className='film-card__wrap'>
            <div className='film-card__desc'>
              <h2 className='film-card__title'> {film?.title} </h2>
              <p className='film-card__meta'>
                <span className='film-card__genre'>{film?.genre}</span>
                <span className='film-card__year'>{film?.dateRelease}</span>
              </p>

              <div className='film-card__buttons'>
                <Link to={`/player/:${id}`} className='btn btn--play film-card__button' type='button'>
                  <svg viewBox='0 0 19 19' width='19' height='19'>
                    <use xlinkHref='#play-s'/>
                  </svg>
                  <span>Play</span>
                </Link>
                <Link to={AppRoute.MyList} className='btn btn--list film-card__button' type='button'>
                  <svg viewBox='0 0 19 20' width='19' height='20'>
                    <use xlinkHref='#add'/>
                  </svg>
                  <span>My list</span>
                </Link>
                <Link to={`/films/:${id}/review`} className='btn film-card__button'>Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className='film-card__wrap film-card__translate-top'>
          <div className='film-card__info'>
            <div className='film-card__poster film-card__poster--big'>
              <img src={film?.image} alt={film?.title} style={{width:'218', height:'327'}} />
            </div>

            <div className='film-card__desc'>
              <nav className='film-nav film-card__nav'>
                <ul className='film-nav__list'>
                  <li ref={tabTarget} className='film-nav__item' onClick={handlerOverviewClick}>
                    <span className='film-nav__link'>Overview</span>
                  </li>
                  <li ref={tabTarget} className='film-nav__item' onClick={handlerDetailsClick}>
                    <span className='film-nav__link'>Details</span>
                  </li>
                  <li ref={tabTarget} className='film-nav__item' onClick={handlerReviewsClick}>
                    <span className='film-nav__link'>Reviews</span>
                  </li>
                </ul>
              </nav>

              <Tabs setting={activeTab} film={film} />

              {/*<div className='film-rating'>
                <div className='film-rating__score'>{film?.numberOfRatings}</div>
                <p className='film-rating__meta'>
                  <span className='film-rating__level'>Very good</span>
                  <span className='film-rating__count'>{film?.rating} ratings</span>
                </p>
              </div>

              <div className='film-card__text'>
                <p>In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&apos;s friend and protege.</p>

                <p>Gustave prides himself on providing first-class service to the hotel&apos;s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave&apos;s lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.</p>

                <p className='film-card__director'><strong>Director: {film?.director}</strong></p>

                <p className='film-card__starring'><strong>Starring: {film?.starring}</strong></p>
              </div>*/}
            </div>
          </div>
        </div>
      </section>

      <div className='page-content'>
        <section className='catalog catalog--like-this'>
          <h2 className='catalog__title'>More like this</h2>

          <div className='catalog__films-list'>

            <FilmCardList filmsData={props.filmsData}/>

          </div>
        </section>

        <Footer />

      </div>
    </>
  );
}

export default MoviePage;
