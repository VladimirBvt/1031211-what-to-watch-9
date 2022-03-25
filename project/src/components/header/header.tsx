import UserBlock from '../user-block/user-block';
import Logo from '../logo/logo';

export type SetProps = {
  set: string
}

function Header (props: SetProps):JSX.Element {
  return (
    <header className={`page-header ${props.set === 'forMainPage' ? 'film-card__head' : 'user-page__head'}`}>

      <Logo />

      {props.set === 'forSignIn' ? '' : <UserBlock/>}

      {props.set === 'forSignIn' ? <h1 className="page-title user-page__title">Sign in</h1> : ''}

    </header>);
}

export default Header;
