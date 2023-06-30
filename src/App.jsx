
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { HashLink } from 'react-router-hash-link'
import Button from './Button/Button'
import { HiMiniArrowDownTray } from "react-icons/hi2";
import Home from './Home/Home'
import Projects from './Projects/Projects'
import About from './About/About'
import Contact from './Contact/Contact'
import Skils from './Skills/Skils'
import Sample from './sample/Sample';


function App() {

  return (
    <BrowserRouter>
      <div className="bg-gradient-to-r from-slate-200 via-white to-slate-200  flex justify-between flex-row items-center bg-white  py-1 px-10 ">
        <div className='flex items-center'>
          <p className='text-sm pl-2 text-gray-800 font-semibold'>SHAKIUL ALAM</p>
        </div>
        <div className='flex items-center cursor-pointer '>
          <HashLink className="ml-3 text-sm text-gray-800 hover:text-gray-400 duration-500" to='#home' smooth>
            HOME
          </HashLink>

          <HashLink className="ml-3 text-sm text-gray-800 hover:text-gray-400 duration-500" to='#about' smooth>
            ABOUT
          </HashLink>

          <HashLink className="ml-3 text-sm text-gray-800 hover:text-gray-400 duration-500" to='#skill' smooth>
            SKILLS
          </HashLink>

          <HashLink className="ml-3 text-sm text-gray-800 hover:text-gray-400 duration-500" to='#projects' smooth>
            PROJECTS
          </HashLink>

          <HashLink className="ml-3 text-sm text-gray-800 hover:text-gray-400 duration-500" to='#contact' smooth>
            CONTACT
          </HashLink>
          
          <Button>Resume<HiMiniArrowDownTray className="mx-auto"></HiMiniArrowDownTray></Button>
        </div>
      </div>
      <Home></Home>
      <About></About>
      <Skils></Skils>
      <Projects></Projects>
      <Contact></Contact>
      <Sample></Sample>
    </BrowserRouter>
  )
}

export default App
