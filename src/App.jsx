import { Route, Routes } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Main from './pages/Main';
import Login from './pages/Login';
import Profile from './pages/Profile';
import ReviewLists from './pages/ReviewLists';
import Review from './pages/Review';
import Write from './pages/Write';
import Search from './pages/Search';
import Register from './pages/Register';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="search" element={<Search />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="profile" element={<Profile />} />
          <Route path="watched" element={<ReviewLists />} />
          <Route path="review/:id" element={<Review />} />
          <Route path="write" element={<Write />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
