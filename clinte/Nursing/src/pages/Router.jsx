import { Route, Routes } from 'react-router-dom';
import Homepage from './hoem';
import AboutPage from './About';
import Login from './Login';
import CoursePage from './Course';

function RouterPage() {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/course' element={<CoursePage/>}/>
    </Routes>
  );
}
export default RouterPage;
