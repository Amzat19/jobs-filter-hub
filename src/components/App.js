import '../styles/index.css';
import { useState } from 'react';
import Header from './Header';
import data from '../utils/data.json';
import Jobs from './Jobs';
import FilterBar from './FilterBar';
import Footer from './Footer';

function App() {
  const [filtersArray, setFiltersArray] = useState([]);

  const addToFilter = (tag) => {
    setFiltersArray([...filtersArray, tag]);
  };

  const removeFilter = (index) => {
    const newFiltersArray = [...filtersArray];
    newFiltersArray.splice(index, 1);

    setFiltersArray(newFiltersArray);
  };

  const clearFilter = () => {
    const newFiltersArray = [];

    setFiltersArray(newFiltersArray);
  };
  return (
    <div className="App min-h-screen bg-cyanBg flex flex-col">
      <Header />
      <main>
        <FilterBar
          filtersArray={filtersArray}
          removeFilter={removeFilter}
          clearFilter={clearFilter}
        />
        <Jobs
          filtersArray={filtersArray}
          addToFilter={addToFilter}
          data={data}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
