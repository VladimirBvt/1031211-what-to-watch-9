import {Film} from '../../mocks/films';
import {Link} from 'react-router-dom';
import VideoPlayer from '../video-player/video-player';

export type FilmCardProps = {
    filmData: Film
}

function FilmCard(props:FilmCardProps): JSX.Element {

  return (
    <article className='small-film-card catalog__films-card'>
      <VideoPlayer src={props.filmData.video} image={props.filmData.image} />
      {/*<div className='small-film-card__image'>
        <img src={props.filmData.image} alt={props.filmData.title} style={{width:'280', height:'175'}} />
      </div>*/}
      <Link className='small-film-card__title' to={`/films/:${props.filmData.id}`} >
        <span className='small-film-card__link' >{props.filmData.title} </span>
      </Link>
      {/*<h3 className='small-film-card__title' onClick={() => { let idFilm = props.filmData.id; }} >
        <Link className='small-film-card__link' to={`/films/:${idFilm}`} >{props.filmData.title} </Link>
      </h3>*/}
    </article>
  );
}

export default FilmCard;
