import './App.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  NavLink
} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import NavBar from './components/NavBar'
import HelpLayout from './components/HelpLayout'
import Faq from './pages/help/faq'
import Contact, { contactAction } from './pages/help/contact'
import NotFound from './pages/NotFound'
import CareersLayout from './components/CareersLayout'
import Careers, { careersLoader } from './pages/Careers'
import CareerDetails, { careerDetailLoader } from './pages/CareerDetails'
import CareerError from './pages/CareerError'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<NavBar />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='help' element={<HelpLayout />}>
        <Route path='faq' element={<Faq />} />
        <Route path='contact' element={<Contact />} action={contactAction}/>
      </Route>

      <Route path='careers' element={<CareersLayout />}>
        <Route
          index
          element={<Careers />}
          loader={careersLoader}
          errorElement={<CareerError />}
         />
        <Route
          path=':id'
          element={<CareerDetails />}
          loader={careerDetailLoader}
          errorElement={<CareerError />}
        />
      </Route>

      <Route path='*' element={<NotFound />} />
    </Route>
  )
)
function App () {
  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
