import React, { useState, useEffect } from 'react';

import './CharPicker.css';

const CharPicker = props => {
  // !Replaces state - not need for classes, setState
  const [loadedChars, setLoadedChars] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  // !Replaces componentDidMount, componentDidUpdate and componentWillUnmount
  useEffect(() => {
    
    setIsLoading(true);
    
  }, []);
  // ! Second argument changes behaviour to componentDidMount

  let content = <p>Loading characters...</p>;

  if (!isLoading && loadedChars && loadedChars.length > 0) {
    content = (
      <select
        onChange={props.onCharSelect}
        value={props.selectedChar}
        className={props.side}
      >
        {loadedChars.map(char => (
          <option key={char.id} value={char.id}>
            {char.name}
          </option>
        ))}
      </select>
    );
  } else if (!isLoading && (!loadedChars || loadedChars.length === 0)) {
    content = <p>Could not fetch any data.</p>;
  }
  return content;
};

export default CharPicker;
