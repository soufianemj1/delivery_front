import '../sidebar.css'
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return     <Router>
  <section>
   
<link rel="stylesheet" href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css" />

<div className="min-h-screen flex flex-row bg-gray-100">
  <div className="flex flex-col w-56 bg-white rounded-r-3xl overflow-hidden">
    <div className="flex items-center justify-center h-20 shadow-md">
      <h1 className="text-2xl uppercase text-indigo-400">Marocship</h1>
    </div>
    <ul className="flex flex-col py-4">
      <li>
        <a className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
        
          <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-home"></i></span>
          <span className="text-sm font-medium"> <Link to="/">test</Link></span>
         
        </a>
      </li>
      <li>
        <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
          <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-package"></i></span>
          <span className="text-sm font-medium">Deliveris</span>
        </a>
      </li>
      <li>
        <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
          <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-car"></i></span>
          <span className="text-sm font-medium">Drivers</span>
        </a>
      </li>
      <li>
        <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
          <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-money"></i></span>
          <span className="text-sm font-medium">Prime</span>
        </a>
      </li>
     
      <li>
        <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
          <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-log-out"></i></span>
          <span className="text-sm font-medium">Logout</span>
        </a>
      </li>
    </ul>
  </div>
</div>
  </section>
  </Router>

};

export default Sidebar;

