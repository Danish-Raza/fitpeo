
import { Route, Routes,Navigate } from "react-router-dom";
import Dashboard from './pages/dashboard';
import SideBar from './pages/comman/sideBar';
import Header from './pages/comman/header';
import './App.scss';
import { useState } from "react";
import Icons from "./components/Icons";

function App() {
  const [collapsed, setCollapsed] = useState(null)

  return (
    <div className='App'>
      <Header setCollapsed={setCollapsed} collapsed={collapsed}/>
      <div className='widget-section'>
        <SideBar setCollapsed={setCollapsed} collapsed={collapsed}/>
        <div className='page'>
          <Routes>
            <Route path="/" element={<Navigate to='/dashboard' />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
      <div className="app-setting">
          <Icons icon="setting" className="setting-icon"/>
          <Icons icon="drop" className="drop-icon"/>
      </div>
    </div>
  );
}

export default App;
