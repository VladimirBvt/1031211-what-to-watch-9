import {Film} from '../../mocks/films';

type OverviewTabProps = {
  film?:Film;
};

function OverviewTab (props:OverviewTabProps) {
  return (
    <>
      <div className='film-rating'>
        <div className='film-rating__score'>{props.film?.numberOfRatings}</div>
        <p className='film-rating__meta'>
          <span className='film-rating__level'>Very good</span>
          <span className='film-rating__count'>{props.film?.rating} ratings</span>
        </p>
      </div>

      <div className='film-card__text'>

        {props.film?.description}

        {/*<p>In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&apos;s friend and protege.</p>

        <p>Gustave prides himself on providing first-class service to the hotel&apos;s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave&apos;s lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.</p>

        <p className='film-card__director'><strong>Director: {props.film?.director}</strong></p>

        <p className='film-card__starring'><strong>Starring: {props.film?.starring}</strong></p>*/}
      </div>
    </>
  );
}

export default OverviewTab;
