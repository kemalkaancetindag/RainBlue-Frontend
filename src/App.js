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
import UserProvider, { UserContext } from './context/UserContext';
import Announcements from './pages/AnnouncementsPage';
import AnnouncementDetail from './pages/AnnouncementDetail';


function App() {
  return (
    <>
      <UserProvider>
        <NavbarComponent  />
        <Router>

          <Routes>

            <Route path="/" element={<IndexPage />} />

            <Route path="/guild" element={<GuildProfilePage />} />
            <Route path="/announcements" element={<Announcements />} />
            <Route path="/announcement-detail" element={<AnnouncementDetail />} />
          </Routes>

        </Router>
      </UserProvider>

    </>

  );
}

export default App;
