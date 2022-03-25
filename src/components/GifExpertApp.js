import React, { useState } from 'react';
import AddCategory from './AddCategory';
import GifGrid from './GifGrid';

const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    '',
  ]);

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr></hr>

      <ol>
        {categories.map((category) => {
          return (
            <GifGrid key={category} category={category} />
          );
        })}
      </ol>
    </>
  );
};

export default GifExpertApp;
