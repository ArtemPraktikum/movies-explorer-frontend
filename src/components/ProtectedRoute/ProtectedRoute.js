import { Route, Redirect } from "react-router-dom";

// функция защищённого роута
const ProtectedRoute = ({ component: Component, ...props }) => (
  <Route>
    {() =>
      // если логин стейт тру показать нужную страницу
      props.loggedIn === true ? (
        <Component {...props} />
      ) : // если в локал сторе есть токен тру показать нужную страницу
      localStorage.getItem("token") ? (
        <Component {...props} />
      ) : (
        // в остальных случаях перебрасывать юзера на глав страницу
        <Redirect to="/" />
      )
    }
  </Route>
);

export default ProtectedRoute;
