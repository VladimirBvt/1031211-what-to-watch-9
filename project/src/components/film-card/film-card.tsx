import {Film} from '../../mocks/films';

export type FilmCardProps = {
    filmData: Film
}

function FilmCard(props:FilmCardProps): JSX.Element {
  return (
    <article className='small-film-card catalog__films-card'>
      <div className='small-film-card__image'>
        <img src={props.filmData.image /*img/fantastic-beasts-the-crimes-of-grindelwald.jpg*/} alt={props.filmData.title} style={{width:'280', height:'175'}} />
      </div>
      <h3 className='small-film-card__title'>
        <a className='small-film-card__link' href='#'>{props.filmData.title} {/*Fantastic Beasts: The Crimes of Grindelwald*/}</a>
      </h3>
    </article>
  );
}

export default FilmCard;
