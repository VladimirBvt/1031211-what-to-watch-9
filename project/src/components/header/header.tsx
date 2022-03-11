import UserBlock from '../user-block/user-block';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

export type SetProps = {
  set: string
}

function Header (props: SetProps):JSX.Element {
  return (
    <header className={`page-header ${props.set === 'forMainPage' ? 'film-card__head' : 'user-page__head'}`}>
      <div className='logo'>
        <Link className='logo__link' to={AppRoute.Main}>
          <span className='logo__letter logo__letter--1'>W</span>
          <span className='logo__letter logo__letter--2'>T</span>
          <span className='logo__letter logo__letter--3'>W</span>
        </Link>
      </div>

      {props.set === 'forSignIn' ? '' : <UserBlock/>}

      {/*<ul className='user-block'>
        <li className='user-block__item'>
          <div className='user-block__avatar'>
            <img src='img/avatar.jpg' alt='User avatar' style={{width: 63, height: 63}} />
          </div>
        </li>
        <li className='user-block__item'>
          <a className='user-block__link' href='#'>Sign out</a>
        </li>
      </ul>*/}

      {props.set === 'forSignIn' ? <h1 className="page-title user-page__title">Sign in</h1> : ''}

    </header>);
}

export default Header;
