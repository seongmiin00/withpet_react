import React, { createContext, useState } from 'react';

const petContext = createContext();

const PetProvider = ({ children }) => {
  const [petCategory, setPetCategory] = useState(0);
  const [searchWord, setSearchWord] = useState(''); 
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <petContext.Provider value={{ petCategory, setPetCategory, searchWord, setSearchWord, currentPage, setCurrentPage }}>
      {children}
    </petContext.Provider>
  );
};

export { petContext, PetProvider };