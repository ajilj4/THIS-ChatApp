
import Contactus from './message';
import Login from './login-reg/login';
import Register from './login-reg/register';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import store from './store'
import { Provider } from 'react-redux'

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/",
    element: <Contactus/>,
  },
  {
    path: "/reg",
    element: <Register/>,
  }
]);

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <RouterProvider router={router} />
     
    </div>
    </Provider>
  );
}

export default App;
