import React from 'react';
import CocktailList from '../components/CocktailList';
import SearchForm from '../components/SearchForm';

const Home = () => {
  return (
    <main>
      <SearchForm />
      <H1>PHEW</H1>
      <CocktailList />
    </main>
  );
};

export default Home;
