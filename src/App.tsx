import { useEffect, useState } from 'react';

import { fetchBreeds } from './api';
import DogTable from './components/DogTable';

function App() {
  const [dogBreeds, setDogBreeds] = useState<string[]>([]);
   useEffect(() => {
    fetchBreeds().then(breeds => setDogBreeds(breeds));
  }, []);

  return <DogTable dogBreeds={dogBreeds}/>;
}

export default App;
