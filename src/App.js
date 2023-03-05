import './App.css';
import Banner from './components/banner/Banner';
import Bestprice from './components/best-price/Bestprice';
import Category from './components/category/Category';
import HeaderBottom from './components/header-bottom/HeaderBottom';
import Header from './components/header/Header';
import Newproducts from './components/new-products/Newproduct';

function App() {
  return (
    <div className="App">
      <Header/>
      <HeaderBottom/>
      <Banner/>
      <Category/>
      <Bestprice/>
      <Newproducts/>
    </div>
  );
}

export default App;
