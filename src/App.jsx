import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Namkeen from './components/pages/namkeen/Namkeen';
import Sweet from './components/pages/sweets/Sweet';
import Manwaar from './components/pages/manwaar/Manwaar';
import Home from './components/pages/home/Home';
import Contact from './components/pages/contact us/Contact';
import About from './components/pages/aboutUs/About';
import Login from './components/pages/login/Login';
import Products from './components/pages/description/Products';


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        
        <Routes>
          <Route index element={<Home/>}></Route>
          <Route path='product_cat/sweets' element={<Sweet/>}></Route>
          <Route path='product_cat/namkeen' element={<Namkeen/>}></Route>
          <Route path='product_cat/manwaar' element={<Manwaar/>}></Route>
          <Route path='page_id/aboutus' element={<About/>}></Route>
          <Route path='page_id/contact' element={<Contact/>}></Route>
          <Route path='/*' element={<h1>error page</h1>}></Route>
          <Route path='/login_page' element={<Login/>}></Route>
          <Route path='/product_cat/product_description/:productid' element={<Products/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;




