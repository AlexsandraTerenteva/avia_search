import {
  createContext, useState, useContext,
} from 'react';

const FilterContext = createContext({});

const FilterContextProvider = ({ children }) => {
  const [filters, setFilters] = useState({});

  const addFilter = (filter) => {
    setFilters((prev) => ({ ...prev, ...filter }));
  };

  return (
    <FilterContext.Provider value={{ filters, addFilter }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilterContext = () => useContext(FilterContext);

export { FilterContextProvider, useFilterContext };
