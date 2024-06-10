
// import './App.css';
import Login from './Login/Login';
import Signup from './Signup/SignUp';
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import ThankYou from './Thankyou/Thankyou';

function App() {
  const route = createBrowserRouter([
    {
      path : "/",
      element: <Signup/>,
    },
    {
      path : "/login",
      element: <Login/>,
    },
   { path: "/thank-you" ,
    element: <ThankYou/>
  }

  ])
  return (
    <div className='app'>
      <RouterProvider router={route}></RouterProvider>
      
      
    </div>
  );
}

export default App;
