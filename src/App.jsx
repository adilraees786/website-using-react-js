
import Homepage from './screen/Homepage';
import Signup from './screen/signup';
import Signin from './screen/signin';
import About from './screen/About'
import  Navbar from './components/Navbar';
import  Menu  from './screen/Menu';




import { createBrowserRouter, RouterProvider } from 'react-router-dom'




export default function App(){
const router =createBrowserRouter([
  { path: "/homepage", element: <Homepage/>, },  
  { path: "/signup", element: <Signup/>, },
  { path: "/signin", element: <Signin/>, },
  { path: "/about", element: <About/>, },
  { path: "/navbar", element: <Navbar/>, },
  { path: "/menu", element: <Menu/>, },



]);

return <RouterProvider router={router} />

}
