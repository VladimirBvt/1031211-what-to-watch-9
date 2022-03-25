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

          </div>
        </section>

        <Footer/>

      </div>
    </>
  );
}

export default MyList;
