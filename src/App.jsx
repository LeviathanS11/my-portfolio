
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { HashLink } from 'react-router-hash-link'
import image from './assets/profile.jpg'
import Button from './Button/Button'
import { HiMiniArrowDownTray } from "react-icons/hi2";
import Home from './Home/Home'

function App() {

  return (
    <BrowserRouter>
      <div className="bg-gradient-to-r from-slate-200 via-white to-slate-200  flex justify-between flex-row items-center bg-white  py-1 px-10 ">
        <div className='flex items-center'>
          <img src={image} style={{ width: "40px", borderRadius: "100px", height: "40px" }} alt="" />
          <p className='text-sm pl-2 text-gray-800'>SHAKIUL ALAM</p>
        </div>
        <div className='flex items-center cursor-pointer '>
          <HashLink className="ml-3 text-sm text-gray-800 hover:text-gray-400 duration-500" to='#home' smooth>
            HOME
          </HashLink>
          <HashLink className="ml-3 text-sm text-gray-800 hover:text-gray-400 duration-500" to='#projects' smooth>
            PROJECTS
          </HashLink>
          <HashLink className="ml-3 text-sm text-gray-800 hover:text-gray-400 duration-500" to='#about' smooth>
            ABOUT
          </HashLink>
          <HashLink className="ml-3 text-sm text-gray-800 hover:text-gray-400 duration-500" to='#contact' smooth>
            CONTACT
          </HashLink>
          <Button>Resume<HiMiniArrowDownTray className="mx-auto"></HiMiniArrowDownTray></Button>
        </div>
      </div>
      <Home></Home>
    </BrowserRouter>
  )
}

export default App
