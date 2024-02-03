import logo from './logo.svg';
import './App.css';
import SideBarMenu from './sideBarMenu';
import Navbar from './navbar';
import ProductsTable from './productsTable';
import FilterDrawer from './productsTable/filterDrawer';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RerouteToHome from './reroute';

function App() {
  const [filterDrawerToggle, setFilterDrawerToggle] = useState(false)
  const [location, setLocation] = useState()
  return (
    <div className='flex h-screen'>
      <div>
        <SideBarMenu location={location} />
        <FilterDrawer filterDrawerToggle={filterDrawerToggle} setFilterDrawerToggle={setFilterDrawerToggle} />
      </div>
      <div className='flex flex-col h-full w-full p-4 ml-64 bg-gray-50 z-10'>
        <Navbar location={location} />
        <div className='h-full mt-2 w-full overflow-y-auto'>
          <BrowserRouter>
            <Routes>
              <Route exact path='/home' element={<ProductsTable setFilterDrawerToggle={setFilterDrawerToggle} setLocation={setLocation} />} />
              <Route exact path='*' element={<RerouteToHome />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;
