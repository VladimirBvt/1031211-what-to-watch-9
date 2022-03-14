import FilmCard from '../film-card/film-card';
import {Films} from '../../mocks/films';

type FilmCardListProps = {
  filmsData:Films
};

function FilmCardList (props:FilmCardListProps):JSX.Element {
  const films = props.filmsData;
  return (
    <>
      {films.map((item) => <FilmCard key={item.id} filmsData={item}/>)}
    </>

  );
}

export default FilmCardList;
