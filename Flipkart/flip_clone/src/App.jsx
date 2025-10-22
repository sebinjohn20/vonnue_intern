import Banner from './Components/Banner/Banner';
import Filter from './Components/Filter/Filter';
import ListItem from './Components/ListItem/ListItem';
import Navbar from './Components/Navbar/Navbar';
import ProductDetail from './Components/ProductList/ProductDetail';
import ProductList from './Components/ProductList/ProductList';
import Searchbar from './Components/SearchBar/Searchbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FilterProvider } from './Components/Context/FilterContext';

function App() {
  return (
    <FilterProvider>
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
         <Route path="/filter" element={<Filter></Filter>} />
      </Routes>
    </BrowserRouter>
    </FilterProvider>
  );
}

export default App;
