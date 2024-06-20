import React, { useState } from "react";

const MusicGenre = () => {
  const [selectedGenres, setSelectedGenres] = useState([]);

  const handleGenreCheckbox = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setSelectedGenres((prev) => [...prev, value]);
    } else {
      setSelectedGenres((prev) => prev.filter((genre) => genre !== value));
    }
  };

  return (
    <div>
      <label for="Rock">
        <input
          id="Rock"
          type="checkbox"
          value="Rock"
          onChange={handleGenreCheckbox}
        />
        Rock
      </label>
      <label for="jazz">
        <input
          id="jazz"
          type="checkbox"
          value="jazz"
          onChange={handleGenreCheckbox}
        />
        jazz
      </label>
      <label for="Pop">
        <input
          id="Pop"
          type="checkbox"
          value="Pop"
          onChange={handleGenreCheckbox}
        />
        Pop
      </label>

      <p>Selected Genres: {selectedGenres.join(", ")}</p>
    </div>
  );
};

export default MusicGenre;
