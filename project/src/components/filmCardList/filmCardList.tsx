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
  //удаляет нулевой элемент массива, так как у него другой размер изображения
  //films.splice(0,1);

  return (
    <>
      {films.map((item) => <FilmCard key={item.id} filmData={item} />)}
    </>

  );
}

export default FilmCardList;
