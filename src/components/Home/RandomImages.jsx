import React from 'react';

const RandomImages = () => {
  const width = 600; 
  const height = 330; 
  const uniqueId = Math.random()

  return (
    <div>
      <img className='rounded img-fluid d-block m-auto' src={`https://picsum.photos/${width}/${height}?id=${uniqueId}`} alt="Placeholder" />
    </div>
  );
};

export default RandomImages;
