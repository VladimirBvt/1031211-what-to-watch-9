import Header from '../header/header';
import SvgHidden from '../svg-hidden/svg-hidden';
import Footer from '../footer/footer';
import {Films} from '../../mocks/films';
import FilmCardList from '../filmCardList/filmCardList';

type MyListProps = {
  filmsData: Films
}

function MyList (props: MyListProps):JSX.Element {
  return (
    <>
      <SvgHidden set='forMyList'/>

      <div className='user-page'>

        <Header set='forMyList'/>

        <section className='catalog'>
          <h2 className='catalog__title visually-hidden'>Catalog</h2>

          <div className='catalog__films-list'>

            <FilmCardList filmsData={props.filmsData} />

            {/*<article className='small-film-card catalog__films-card'>
              <div className='small-film-card__image'>
                <img src='img/fantastic-beasts-the-crimes-of-grindelwald.jpg' alt='Fantastic Beasts: The Crimes of Grindelwald' style={{width:'280', height:'175'}}/>
              </div>
              <h3 className='small-film-card__title'>
                <a className='small-film-card__link' href='#'>Fantastic Beasts: The Crimes of Grindelwald</a>
              </h3>
            </article>

            <article className='small-film-card catalog__films-card'>
              <div className='small-film-card__image'>
                <img src='img/bohemian-rhapsody.jpg' alt='Bohemian Rhapsody' style={{width:'280', height:'175'}}/>
              </div>
              <h3 className='small-film-card__title'>
                <a className='small-film-card__link' href='#'>Bohemian Rhapsody</a>
              </h3>
            </article>

            <article className='small-film-card catalog__films-card'>
              <div className='small-film-card__image'>
                <img src='img/macbeth.jpg' alt='Macbeth' style={{width:'280', height:'175'}}/>
              </div>
              <h3 className='small-film-card__title'>
                <a className='small-film-card__link' href='#'>Macbeth</a>
              </h3>
            </article>

            <article className='small-film-card catalog__films-card'>
              <div className='small-film-card__image'>
                <img src='img/aviator.jpg' alt='Aviator' style={{width:'280', height:'175'}}/>
              </div>
              <h3 className='small-film-card__title'>
                <a className='small-film-card__link' href='#'>Aviator</a>
              </h3>
            </article>


            <article className='small-film-card catalog__films-card'>
              <div className='small-film-card__image'>
                <img src='img/we-need-to-talk-about-kevin.jpg' alt='We need to talk about Kevin' style={{width:'280', height:'175'}}/>
              </div>
              <h3 className='small-film-card__title'>
                <a className='small-film-card__link' href='#'>We need to talk about Kevin</a>
              </h3>
            </article>

            <article className='small-film-card catalog__films-card'>
              <div className='small-film-card__image'>
                <img src='img/what-we-do-in-the-shadows.jpg' alt='What We Do in the Shadows' style={{width:'280', height:'175'}}/>
              </div>
              <h3 className='small-film-card__title'>
                <a className='small-film-card__link' href='#'>What We Do in the Shadows</a>
              </h3>
            </article>

            <article className='small-film-card catalog__films-card'>
              <div className='small-film-card__image'>
                <img src='img/revenant.jpg' alt='Revenant' style={{width:'280', height:'175'}}/>
              </div>
              <h3 className='small-film-card__title'>
                <a className='small-film-card__link' href='#'>Revenant</a>
              </h3>
            </article>

            <article className='small-film-card catalog__films-card'>
              <div className='small-film-card__image'>
                <img src='img/johnny-english.jpg' alt='Johnny English' style={{width:'280', height:'175'}}/>
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
            </article>*/}
          </div>
        </section>

        <Footer/>

      </div>
    </>
  );
}

export default MyList;
