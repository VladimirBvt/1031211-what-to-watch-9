import FilmCard from '../film-card/film-card';
import {Films} from '../../mocks/films';
//import {Film} from '../../mocks/films';
//import {useState} from 'react';

type FilmCardListProps = {
  filmsData:Films
};

function FilmCardList (props:FilmCardListProps):JSX.Element {
  /*const [film, setFilm] = useState<Film | null>(null);*/

  const films = props.filmsData;
  return (
    <>
      {films.map((item) => <FilmCard key={item.id} filmData={item}/>)}
    </>

  );
}

export default FilmCardList;
