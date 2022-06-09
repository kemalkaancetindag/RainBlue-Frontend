import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


import {
  BrowserRouter as Router,
  Routes,
  Route,  
} from "react-router-dom";
import IndexPage from './pages/IndexPage';
import NavbarComponent from './components/NavbarComponent';
import FooterComponent from './components/FooterComponent';
import GuildProfilePage from './pages/GuildProfilePage';
import UserProvider, { UserContext } from './context/UserContext';
import Announcements from './pages/AnnouncementsPage';
import AnnouncementDetail from './pages/AnnouncementDetail';
import Callback from './pages/Callback';
import SetLogin from './pages/SetLogin';


function App() {
  return (
    <>
      <UserProvider>
        
        <Router>

          <Routes>

            <Route path="/" element={<IndexPage />} />
            <Route path="/callback" element={<Callback />} />
            <Route path="/set-user" element={<SetLogin />} />
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
