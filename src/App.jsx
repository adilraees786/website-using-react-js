import Signup from './screen/signup';
import Signin from './screen/signup';



import { createBrowserRouter, RouterProvider } from 'react-router-dom'


export default function App(){
const router =createBrowserRouter([
  { path: "/signup", element: <Signup/>, },
  { path: "/signin", element: <Signin/>, },



]);

return <RouterProvider router={router} />

}
