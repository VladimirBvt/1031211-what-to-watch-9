import {Film} from '../../mocks/films';
import {Link} from 'react-router-dom';

export type FilmCardProps = {
    filmData: Film
}

function FilmCard(props:FilmCardProps): JSX.Element {
  //console.log(props.filmData.id);

  return (
    <article className='small-film-card catalog__films-card'>
      <div className='small-film-card__image'>
        <img src={props.filmData.image} alt={props.filmData.title} style={{width:'280', height:'175'}} />
      </div>
      <Link className='small-film-card__title' to={`/films/:${props.filmData.id}`} >
        <a className='small-film-card__link' href='#' >{props.filmData.title} </a>
      </Link>
      {/*<h3 className='small-film-card__title' onClick={() => { let idFilm = props.filmData.id; }} >
        <Link className='small-film-card__link' to={`/films/:${idFilm}`} >{props.filmData.title} </Link>
      </h3>*/}
    </article>
  );
}

export default FilmCard;
