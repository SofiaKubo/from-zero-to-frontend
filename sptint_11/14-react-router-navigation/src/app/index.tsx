import { Routes, Route } from 'react-router-dom';

import { Header } from '../components/Header';
import { Home } from '../pages/Home';
import { HotelList } from '../pages/HotelList';
import { SignIn } from '../pages/SignIn';

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotel-list" element={<HotelList />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </>
  );
};
