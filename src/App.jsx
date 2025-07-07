import Root from './pages/Root';
import Home from './pages/Home';
import Facts from './pages/Facts';
import NotFound from './pages/NotFound';
import Create from './pages/Create';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom"



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="facts" element={<Facts />} />
      <Route path="create" element={<Create />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);




export default function Myapp() {

  return (
    <>
      <RouterProvider router={router} />

    </>
  )
}