import FilmCard from '../film-card/film-card';
import {Films} from '../../mocks/films';
//import {useState} from 'react';

type FilmCardListProps = {
  filmsData:Films
};

/*type Film = {
  id: number,
  title: string,
  genre: string,
  dateRelease: string,
  rating: number,
  image: string,
  video: string,
}*/

function FilmCardList (props:FilmCardListProps):JSX.Element {
  /*const [film, setFilm] = useState<Film | null>(null);*/

  const films = props.filmsData;
  return (
    <>
      {films.map((item) => <FilmCard key={item.id} filmsData={item}/>)}
    </>

  );
}

export default FilmCardList;
