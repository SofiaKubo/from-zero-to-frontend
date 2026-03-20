import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { HotelList } from '../pages/HotelList';
import { SignIn } from '../pages/SignIn';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotel-list" element={<HotelList />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </>
  );
};
