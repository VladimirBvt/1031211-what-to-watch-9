import {Film} from '../../mocks/films';
import {Link} from 'react-router-dom';

export type FilmCardProps = {
    filmData: Film
}

function FilmCard(props:FilmCardProps): JSX.Element {
  return (
    <article className='small-film-card catalog__films-card'>
      <div className='small-film-card__image'>
        <img src={props.filmData.image} alt={props.filmData.title} style={{width:'280', height:'175'}} />
      </div>
      <h3 className='small-film-card__title'>
        <Link className='small-film-card__link' to='/films/:id'>{props.filmData.title} </Link>
      </h3>
    </article>
  );
}

export default FilmCard;
