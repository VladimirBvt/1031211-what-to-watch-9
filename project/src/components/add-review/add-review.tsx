import SvgHidden from '../svg-hidden/svg-hidden';
import UserBlock from '../user-block/user-block';
import {films} from '../../mocks/films';
import Logo from '../logo/logo';
import React, {useState} from 'react';
import {useParams} from 'react-router-dom';


function AddReview ():JSX.Element {
  //const [rating, setRating] = useState('');
  //const [review, setReview] = useState('');
  const setRating = useState('')[1];
  const setReview = useState('')[1];

  const params = useParams();
  const id = params.id?.slice(1);

  const film = (films.find((item) => String(item.id) === id ));

  return (
    <>

      <SvgHidden set='' />

      <section className='film-card film-card--full'>
        <div className='film-card__header'>
          <div className='film-card__bg'>
            <img src={film?.image} alt={film?.title} />
          </div>

          <h1 className='visually-hidden'>WTW</h1>

          <header className='page-header'>

            <Logo />

            <nav className='breadcrumbs'>
              <ul className='breadcrumbs__list'>
                <li className='breadcrumbs__item'>
                  <a href='#' className='breadcrumbs__link'>{film?.title}</a>
                </li>
                <li className='breadcrumbs__item'>
                  <a className='breadcrumbs__link'>Add review</a>
                </li>
              </ul>
            </nav>

            <UserBlock />

          </header>

          <div className='film-card__poster film-card__poster--small'>
            <img src={film?.image} alt={`${film?.title} poster`} style={{width:'218', height:'327'}} />
          </div>
        </div>

        <div className='add-review'>
          <form action='#' className='add-review__form' onSubmit={(evt) => {
            evt.preventDefault();
            const form:HTMLFormElement | null = document.querySelector('.add-review__form');
            //const form:HTMLFormElement | null = (evt.target as HTMLFormElement).querySelector('.add-review__form');
            const valueInput:string = (form?.querySelector('.rating__input:checked')as HTMLInputElement)?.value;
            const valueTextArea:string = (form?.querySelector('.add-review__textarea')as HTMLTextAreaElement)?.value;
            setReview(valueTextArea);
            setRating(valueInput);
            //console.log(valueInput);
            //console.log(valueTextArea);
          }}
          >

            <div className='rating'>
              <div className='rating__stars'>
                <input className='rating__input' id='star-10' type='radio' name='rating' value='10'/>
                <label className='rating__label' htmlFor='star-10'>Rating 10</label>

                <input className='rating__input' id='star-9' type='radio' name='rating' value='9'/>
                <label className='rating__label' htmlFor='star-9'>Rating 9</label>

                <input className='rating__input' id='star-8' type='radio' name='rating' value='8'/>
                <label className='rating__label' htmlFor='star-8'>Rating 8</label>

                <input className='rating__input' id='star-7' type='radio' name='rating' value='7'/>
                <label className='rating__label' htmlFor='star-7'>Rating 7</label>

                <input className='rating__input' id='star-6' type='radio' name='rating' value='6'/>
                <label className='rating__label' htmlFor='star-6'>Rating 6</label>

                <input className='rating__input' id='star-5' type='radio' name='rating' value='5'/>
                <label className='rating__label' htmlFor='star-5'>Rating 5</label>

                <input className='rating__input' id='star-4' type='radio' name='rating' value='4'/>
                <label className='rating__label' htmlFor='star-4'>Rating 4</label>

                <input className='rating__input' id='star-3' type='radio' name='rating' value='3'/>
                <label className='rating__label' htmlFor='star-3'>Rating 3</label>

                <input className='rating__input' id='star-2' type='radio' name='rating' value='2'/>
                <label className='rating__label' htmlFor='star-2'>Rating 2</label>

                <input className='rating__input' id='star-1' type='radio' name='rating' value='1'/>
                <label className='rating__label' htmlFor='star-1'>Rating 1</label>
              </div>
            </div>

            <div className='add-review__text'>
              <textarea className='add-review__textarea' name='review-text' id='review-text' placeholder='Review text' />
              <div className='add-review__submit'>
                <button className='add-review__btn' type='submit'>Post</button>
              </div>

            </div>
          </form>
        </div>

      </section>
    </>
  );
}

export default AddReview;
