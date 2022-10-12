import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './componets/Home/Home';
import Statistic from './componets/Statistic/Startstic';
import Blog from './componets/Blog/Blog';
import Quiz from './componets/Quiz';

function App() {
  const router= createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children:[
        {path: '/home', 
         loader: async()=>{
          return fetch ('https://openapi.programming-hero.com/api/quiz');
         },
        element:<Home></Home>},
        {
          path:'/topic/:questionId',
          loader: async({params})=>{
// console.log(params.questionId);
            return fetch (`https://openapi.programming-hero.com/api/quiz/${params.questionId}`)
           },
           element: <Quiz></Quiz>
        },

        {path: '/statistic', 
        // loader: async()=>{
        //   return fetch ('https://openapi.programming-hero.com/api/quiz');
        //  },
         element:<Statistic></Statistic>},
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
