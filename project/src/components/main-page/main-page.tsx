import Header from '../header/header';
import SvgHidden from '../svg-hidden/svg-hidden';
import Footer from '../footer/footer';

function MainPage(): JSX.Element {
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
            <article className='small-film-card catalog__films-card'>
              <div className='small-film-card__image'>
                <img src='img/fantastic-beasts-the-crimes-of-grindelwald.jpg' alt='Fantastic Beasts: The Crimes of Grindelwald' style={{width:'280', height:'175'}} />
              </div>
              <h3 className='small-film-card__title'>
                <a className='small-film-card__link' href='#'>Fantastic Beasts: The Crimes of Grindelwald</a>
              </h3>
            </article>

            <article className='small-film-card catalog__films-card'>
              <div className='small-film-card__image'>
                <img src='img/bohemian-rhapsody.jpg' alt='Bohemian Rhapsody' style={{width:'280', height:'175'}} />
              </div>
              <h3 className='small-film-card__title'>
                <a className='small-film-card__link' href='#'>Bohemian Rhapsody</a>
              </h3>
            </article>

            <article className='small-film-card catalog__films-card'>
              <div className='small-film-card__image'>
                <img src='img/macbeth.jpg' alt='Macbeth' style={{width:'280', height:'175'}} />
              </div>
              <h3 className='small-film-card__title'>
                <a className='small-film-card__link' href='#'>Macbeth</a>
              </h3>
            </article>

            <article className='small-film-card catalog__films-card'>
              <div className='small-film-card__image'>
                <img src='img/aviator.jpg' alt='Aviator' style={{width:'280', height:'175'}} />
              </div>
              <h3 className='small-film-card__title'>
                <a className='small-film-card__link' href='#'>Aviator</a>
              </h3>
            </article>


            <article className='small-film-card catalog__films-card'>
              <div className='small-film-card__image'>
                <img src='img/we-need-to-talk-about-kevin.jpg' alt='We need to talk about Kevin' style={{width:'280', height:'175'}} />
              </div>
              <h3 className='small-film-card__title'>
                <a className='small-film-card__link' href='#'>We need to talk about Kevin</a>
              </h3>
            </article>

            <article className='small-film-card catalog__films-card'>
              <div className='small-film-card__image'>
                <img src='img/what-we-do-in-the-shadows.jpg' alt='What We Do in the Shadows' style={{width:'280', height:'175'}} />
              </div>
              <h3 className='small-film-card__title'>
                <a className='small-film-card__link' href='#'>What We Do in the Shadows</a>
              </h3>
            </article>

            <article className='small-film-card catalog__films-card'>
              <div className='small-film-card__image'>
                <img src='img/revenant.jpg' alt='Revenant' style={{width:'280', height:'175'}} />
              </div>
              <h3 className='small-film-card__title'>
                <a className='small-film-card__link' href='#'>Revenant</a>
              </h3>
            </article>

            <article className='small-film-card catalog__films-card'>
              <div className='small-film-card__image'>
                <img src='img/johnny-english.jpg' alt='Johnny English' style={{width:'280', height:'175'}} />
              </div>
              <h3 className='small-film-card__title'>
                <a className='small-film-card__link' href='#'>Johnny English</a>
              </h3>
            </article>


            <article className='small-film-card catalog__films-card'>
              <div className='small-film-card__image'>
                <img src='img/shutter-island.jpg' alt='Shutter Island' style={{width:'280', height:'175'}} />
              </div>
              <h3 className='small-film-card__title'>
                <a className='small-film-card__link' href='#'>Shutter Island</a>
              </h3>
            </article>

            <article className='small-film-card catalog__films-card'>
              <div className='small-film-card__image'>
                <img src='img/pulp-fiction.jpg' alt='Pulp Fiction' style={{width:'280', height:'175'}} />
              </div>
              <h3 className='small-film-card__title'>
                <a className='small-film-card__link' href='#'>Pulp Fiction</a>
              </h3>
            </article>

            <article className='small-film-card catalog__films-card'>
              <div className='small-film-card__image'>
                <img src='img/no-country-for-old-men.jpg' alt='No Country for Old Men' style={{width:'280', height:'175'}} />
              </div>
              <h3 className='small-film-card__title'>
                <a className='small-film-card__link' href='#'>No Country for Old Men</a>
              </h3>
            </article>

            <article className='small-film-card catalog__films-card'>
              <div className='small-film-card__image'>
                <img src='img/snatch.jpg' alt='Snatch' style={{width:'280', height:'175'}} />
              </div>
              <h3 className='small-film-card__title'>
                <a className='small-film-card__link' href='#'>Snatch</a>
              </h3>
            </article>


            <article className='small-film-card catalog__films-card'>
              <div className='small-film-card__image'>
                <img src='img/moonrise-kingdom.jpg' alt='Moonrise Kingdom' style={{width:'280', height:'175'}} />

              </div>
              <h3 className='small-film-card__title'>
                <a className='small-film-card__link' href='#'>Moonrise Kingdom</a>
              </h3>
            </article>

            <article className='small-film-card catalog__films-card'>
              <div className='small-film-card__image'>
                <img src='img/seven-years-in-tibet.jpg' alt='Seven Years in Tibet' style={{width:'280', height:'175'}} />
              </div>
              <h3 className='small-film-card__title'>
                <a className='small-film-card__link' href='#'>Seven Years in Tibet</a>
              </h3>
            </article>

            <article className='small-film-card catalog__films-card'>
              <div className='small-film-card__image'>
                <img src='img/midnight-special.jpg' alt='Midnight Special' style={{width:'280', height:'175'}} />
              </div>
              <h3 className='small-film-card__title'>
                <a className='small-film-card__link' href='#'>Midnight Special</a>
              </h3>
            </article>

            <article className='small-film-card catalog__films-card'>
              <div className='small-film-card__image'>
                <img src='img/war-of-the-worlds.jpg' alt='War of the Worlds' style={{width:'280', height:'175'}} />
              </div>
              <h3 className='small-film-card__title'>
                <a className='small-film-card__link' href='#'>War of the Worlds</a>
              </h3>
            </article>


            <article className='small-film-card catalog__films-card'>
              <div className='small-film-card__image'>
                <img src='img/dardjeeling-limited.jpg' alt='Dardjeeling Limited' style={{width:'280', height:'175'}} />
              </div>
              <h3 className='small-film-card__title'>
                <a className='small-film-card__link' href='#'>Dardjeeling Limited</a>
              </h3>
            </article>

            <article className='small-film-card catalog__films-card'>
              <div className='small-film-card__image'>
                <img src='img/orlando.jpg' alt='Orlando' style={{width:'280', height:'175'}} />
              </div>
              <h3 className='small-film-card__title'>
                <a className='small-film-card__link' href='#'>Orlando</a>
              </h3>
            </article>

            <article className='small-film-card catalog__films-card'>
              <div className='small-film-card__image'>
                <img src='img/mindhunter.jpg' alt='Mindhunter' style={{width:'280', height:'175'}} />
              </div>
              <h3 className='small-film-card__title'>
                <a className='small-film-card__link' href='#'>Mindhunter</a>
              </h3>
            </article>

            <article className='small-film-card catalog__films-card'>
              <div className='small-film-card__image'>
                <img src='img/midnight-special.jpg' alt='Midnight Special' style={{width:'280', height:'175'}} />
              </div>
              <h3 className='small-film-card__title'>
                <a className='small-film-card__link' href='#'>Midnight Special</a>
              </h3>
            </article>
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
