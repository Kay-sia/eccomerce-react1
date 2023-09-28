import Home from './components/Home';
import {Routes,Route} from 'react-router-dom';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Products from './components/Products';
import Mynav from './components/Mynav';
import MyFooter from './components/MyFooter';

function App() {
  return (
    <div>


      <Mynav/>


       <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/aboutus" element={<AboutUs/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/contactus" element={<ContactUs/>} />
       </Routes>


      <MyFooter/>
    </div>
  );
}


export default App;