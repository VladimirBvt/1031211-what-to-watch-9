import {Navigate} from 'react-router-dom';
import {RouteProps} from 'react-router-dom';
import {AuthorizationStatus, AppRoute} from '../../const';


type PrivateRouteProps = RouteProps & {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}

function PrivateRoute (props: PrivateRouteProps) {
  const {authorizationStatus, children} = props;

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.SignIn}/>
  );
}

export default PrivateRoute;
