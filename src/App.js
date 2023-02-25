import './App.css';
import Banner from './components/banner/Banner';
import Category from './components/category/Category';
import HeaderBottom from './components/header-bottom/HeaderBottom';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <HeaderBottom/>
      <Banner/>
      <Category/>
    </div>
  );
}

export default App;
