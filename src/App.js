import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import MainSidebar from './Components/MainSidebar/MainSidebar';
import SecondSidebar from './Components/MainSidebar/SecondSidebar';
import Dashboard from './Pages/Dashboard/Dashboard';
import routes from './routes';
import { useRoutes } from 'react-router-dom';
import MainContext from './Context';
import { useState } from 'react';

function App() {
  const [mainMenu , setMainMenu] = useState(2)

  const router = useRoutes(routes)

  return (
    <>
      <MainContext.Provider value={{mainMenu , setMainMenu}}>
        {router}
      </MainContext.Provider>
    </>
  );
}

export default App;
