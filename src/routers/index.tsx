import { ROUTES } from 'constants/routers';
import HomePage from 'pages/Home';
import NotFoundPage from 'pages/NotFound';
import Noitifications from 'pages/Noitifications';
import Messages from 'pages/Messages';
import Bookmarks from 'pages/Bookmarks';
import Lists from 'pages/Lists';
import ProfilePage from 'pages/Profile';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './privateRoute';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path={ROUTES.LOGIN} element={<LoginPage />} /> */}
      <Route element={<PrivateRoute/>}>
        <Route path={ROUTES.NOITIFICATIONS} element={<Noitifications/>}/>
        <Route path={ROUTES.MESSAGES} element={<Messages/>}/>
        <Route path={ROUTES.BOOKMARKS} element={<Bookmarks/>}/>
        <Route path={ROUTES.LISTS} element={<Lists/>}/>
        <Route path={ROUTES.PROFILE} element={<ProfilePage/>}/>
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Router;
