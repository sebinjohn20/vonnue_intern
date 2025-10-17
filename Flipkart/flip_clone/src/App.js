import Banner from './Components/Banner/Banner';
import ListItem from './Components/ListItem/ListItem';
import Navbar from './Components/Navbar/Navbar';
import ProductDetail from './Components/ProductList/ProductDetail';
import ProductList from './Components/ProductList/ProductList';
import Searchbar from './Components/SearchBar/Searchbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    

      <Routes>
     
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Searchbar />
              <Banner />
              <ListItem />

            </>
          }
        />

       
        <Route path="/productlist" element={<ProductList />} />
        <Route path='/product/:id'element={<ProductDetail></ProductDetail>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
