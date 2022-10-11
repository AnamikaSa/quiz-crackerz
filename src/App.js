import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './componets/Home/Home';
import Statistic from './componets/Statistic/Startstic';
import Blog from './componets/Blog/Blog';

function App() {
  const router= createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children:[
        {path: '/home', element:<Home></Home>},
        {path: '/statistic', element:<Statistic></Statistic>},
        {path: '/blog' , element: <Blog></Blog>}
      ]
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
