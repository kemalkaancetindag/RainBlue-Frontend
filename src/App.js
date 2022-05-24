import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import IndexPage from './pages/IndexPage';
import NavbarComponent from './components/NavbarComponent';
import FooterComponent from './components/FooterComponent';
import GuildProfilePage from './pages/GuildProfilePage';


function App() {
  return (
    <>
      <NavbarComponent />
      <Router>

        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/guild-profile" element={<GuildProfilePage />} />
        </Routes>

      </Router>
      <FooterComponent />
    </>

  );
}

export default App;
