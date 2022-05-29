import './index.css';
import Header from './Header';
import data from './data.json';
import { useState } from 'react';
import Jobs from './Jobs';
import FilterBar from './FilterBar';
import Footer from './Footer';


function App() {
  const [filtersArray, setFiltersArray] = useState([]);
 
  const removeFilter = (index) => {
    const newFiltersArray = [...filtersArray];
    newFiltersArray.splice(index, 1);
    setFiltersArray(newFiltersArray);
  };

  const clearFilter = () => {
    const newFiltersArray = []; 
    setFiltersArray(newFiltersArray);
  }
  return (
    <div className='App min-h-screen bg-cyanBg'>
      <Header/>
      <FilterBar filtersArray={filtersArray} removeFilter={removeFilter} clearFilter={clearFilter}/>
      <Jobs filtersArray={filtersArray} setFiltersArray={setFiltersArray} data={data}/>
      <Footer/>
    </div>
  );
}

export default App;
