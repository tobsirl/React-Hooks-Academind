import { useState } from 'react';

export const useHttp = url => {
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedData, setFetchedData] = useState(null);

  // fetch('https://swapi.co/api/people')
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch.');
      }
      return response.json();
    })
    .then(data => {
      // const selectedCharacters = charData.results.slice(0, 5);
      // setIsLoading(false);
      // setLoadedChars(
      //   selectedCharacters.map((char, index) => ({
      //     name: char.name,
      //     id: index + 1
      //   }))
      // );
      setIsLoading(false);
      setFetchedData(data);
    })
    .catch(err => {
      console.log(err);
      setIsLoading(false);
    });
  return [isLoading, fetchedData];
};
