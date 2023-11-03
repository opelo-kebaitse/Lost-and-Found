import { Outlet, Route, Routes } from 'react-router-dom';
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated';
import Header from './Header';
import Login from './Login';
import Nav from './Nav.tsx';

function App() {
  return (
    <>
      {/* <Header /> */}
      <Nav />
      <IfNotAuthenticated>
        <Login />
      </IfNotAuthenticated>

      <IfAuthenticated>
        <Outlet />
      </IfAuthenticated>
    </>
  );
}

export default App;
