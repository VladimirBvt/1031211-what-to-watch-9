export type FilmCardProps = {
  filmsData:{
    id: number,
    title: string,
    genre: string,
    dateRelease: string,
    rating: number,
    image: string,
    video: string,
  }
}

function FilmCard(props:FilmCardProps): JSX.Element {
  return (
    <article className='small-film-card catalog__films-card'>
      <div className='small-film-card__image'>
        <img src={props.filmsData.image /*img/fantastic-beasts-the-crimes-of-grindelwald.jpg*/} alt={props.filmsData.title} style={{width:'280', height:'175'}} />
      </div>
      <h3 className='small-film-card__title'>
        <a className='small-film-card__link' href='#'>{props.filmsData.title} {/*Fantastic Beasts: The Crimes of Grindelwald*/}</a>
      </h3>
    </article>
  );
}

export default FilmCard;
